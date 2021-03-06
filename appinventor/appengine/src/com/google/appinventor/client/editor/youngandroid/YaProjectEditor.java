// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2017 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

package com.google.appinventor.client.editor.youngandroid;

import com.google.appinventor.client.DesignToolbar;
import com.google.appinventor.client.ErrorReporter;
import com.google.appinventor.client.Ode;
import com.google.appinventor.client.OdeAsyncCallback;
import com.google.appinventor.client.boxes.AssetListBox;
import com.google.appinventor.client.editor.FileEditor;
import com.google.appinventor.client.editor.ProjectEditor;
import com.google.appinventor.client.editor.ProjectEditorFactory;
import com.google.appinventor.client.editor.blocks.BlocksEditor;
import com.google.appinventor.client.editor.designer.DesignerEditor;
import com.google.appinventor.client.editor.vr.VRBlocksEditor;
import com.google.appinventor.client.editor.vr.VREditorEditor;
import com.google.appinventor.client.editor.simple.SimpleComponentDatabase;
import com.google.appinventor.client.explorer.project.Project;
import com.google.appinventor.client.explorer.project.ProjectChangeListener;
import com.google.appinventor.client.output.OdeLog;
import com.google.appinventor.client.properties.json.ClientJsonParser;
import com.google.appinventor.common.utils.StringUtils;
import com.google.appinventor.shared.properties.json.JSONObject;
import com.google.appinventor.shared.rpc.project.ChecksumedFileException;
import com.google.appinventor.shared.rpc.project.ChecksumedLoadFile;
import com.google.appinventor.shared.rpc.project.ProjectNode;
import com.google.appinventor.shared.rpc.project.ProjectRootNode;
import com.google.appinventor.shared.rpc.project.vr.VRBlocksNode;
import com.google.appinventor.shared.rpc.project.vr.VREditorNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidBlocksNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidComponentsFolder;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidFormNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidProjectNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidSourceNode;
import com.google.appinventor.shared.simple.ComponentDatabaseChangeListener;
import com.google.appinventor.shared.storage.StorageUtil;
import com.google.appinventor.shared.youngandroid.YoungAndroidSourceAnalyzer;
import com.google.common.collect.Maps;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.rpc.AsyncCallback;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.google.appinventor.client.Ode.MESSAGES;

/**
 * Project editor for Young Android projects. Each instance corresponds to
 * one project that has been opened in this App Inventor session. 
 * Also responsible for managing screens list for this project in 
 * the DesignToolbar.
 *
 * @author lizlooney@google.com (Liz Looney)
 * @author sharon@google.com (Sharon Perl) - added logic for screens in  
 *   DesignToolbar
 */
public final class YaProjectEditor extends ProjectEditor implements ProjectChangeListener, ComponentDatabaseChangeListener{
  
  // FileEditors in a YA project come in sets. Every form in the project has 
  // a YaFormEditor for editing the UI, and a YaBlocksEditor for editing the 
  // blocks representation of the program logic. Some day it may also have an 
  // editor for the textual representation of the program logic.
  private class EditorSet {
    DesignerEditor<?, ?, ?, ?> formEditor = null;
    BlocksEditor<?, ?> blocksEditor = null;
  }

  // Maps form name -> editors for this form
  private final HashMap<String, EditorSet> editorMap = Maps.newHashMap();
  
  // List of External Components
  private final List<String> externalComponents = new ArrayList<String>();

  // List of ComponentDatabaseChangeListeners
  private final List<ComponentDatabaseChangeListener> componentDatabaseChangeListeners = new ArrayList<ComponentDatabaseChangeListener>();

  //State variables to help determine whether we are ready to load Project
  private boolean externalComponentsLoaded = false;

  // Database of component type descriptions
  private final SimpleComponentDatabase COMPONENT_DATABASE;

  // State variables to help determine whether we are ready to show Screen1  
  // Automatically select the Screen1 form editor when we have finished loading
  // both the form and blocks editors for Screen1 and we have added the
  // screen to the DesignToolbar. Since the loading happens asynchronously,
  // there are multiple points when we may be ready to show the screen, and
  // we shouldn't try to show it before everything is ready.
  private boolean screen1FormLoaded = false;
  private boolean screen1BlocksLoaded = false;
  private boolean screen1Added = false;
  
  /**
   * Returns a project editor factory for {@code YaProjectEditor}s.
   *
   * @return a project editor factory for {@code YaProjectEditor}s.
   */
  public static ProjectEditorFactory getFactory() {
    return new ProjectEditorFactory() {
      @Override
      public ProjectEditor createProjectEditor(ProjectRootNode projectRootNode) {
        return new YaProjectEditor(projectRootNode);
      }
    };
  }

  public YaProjectEditor(ProjectRootNode projectRootNode) {
    super(projectRootNode);
    project.addProjectChangeListener(this);
    COMPONENT_DATABASE = SimpleComponentDatabase.getInstance(projectId);
  }

  private void loadBlocksEditor(String formNamePassedIn) {
    OdeLog.log("loadBlocksEditor: start");

    final String formName = formNamePassedIn;
    final BlocksEditor<?, DesignerEditor<?, ?, ?, ?>> newBlocksEditor = (BlocksEditor) editorMap.get(formName).blocksEditor;
    newBlocksEditor.setDesigner(editorMap.get(formName).formEditor);
    newBlocksEditor.loadFile(new Command() {
        @Override
        public void execute() {
          OdeLog.log("loadBlocksEditor: execute");
          int pos = Collections.binarySearch(fileIds, newBlocksEditor.getFileId(),
              getFileIdComparator());
          if (pos < 0) {
            pos = -pos - 1;
          }
          OdeLog.log("loadBlocksEditor: calling insertFileEditor with pos " + pos);
          insertFileEditor(newBlocksEditor, pos);
          if (isScreen1(formName)) {
            screen1BlocksLoaded = true;
            if (readyToShowScreen1()) {
              OdeLog.log("YaProjectEditor.addBlocksEditor.loadFile.execute: switching to screen "
                  + formName + " for project " + newBlocksEditor.getProjectId());
              Ode.getInstance().getDesignToolbar().switchToScreen(newBlocksEditor.getProjectId(),
                  formName, DesignToolbar.View.DESIGNER);
            }
          }
        }
      });

  }

  /**
   * Project process is completed before loadProject is started!
   * Currently Project process loads all External Components into Component Database
   */
  @Override
  public void processProject() {
    resetExternalComponents();
    loadExternalComponents();
    callLoadProject();
  }

  // Note: When we add the blocks editors in the loop below we do not actually
  // have them load the blocks file. Instead we trigger the load of a blocks file
  // in the callback for the loading of its associated forms file. This is important
  // because we have to ensure that the component type data is available when the
  // blocks are loaded!

  private void loadProject() {
    // add form editors first, then blocks editors because the blocks editors
    // need access to their corresponding form editors to set up properly
    for (ProjectNode source : projectRootNode.getAllSourceNodes()) {
      if (source instanceof YoungAndroidFormNode) {
        OdeLog.log("loadProject: calling addDesigner");
        addDesigner(((YoungAndroidFormNode) source).getFormName(),
            new YaFormEditor(this, (YoungAndroidFormNode) source));
      } else if (source instanceof VREditorNode) {
        OdeLog.log("loadProject: calling vr addDesigner");
        addDesigner("vr:" + ((VREditorNode) source).getEntityName(),
            new VREditorEditor(this, (VREditorNode) source));
      }
    }
    for (ProjectNode source : projectRootNode.getAllSourceNodes()) {
      if (source instanceof YoungAndroidBlocksNode) {
        OdeLog.log("loadProject: calling addBlocksEditor");
        addBlocksEditor(((YoungAndroidBlocksNode) source).getFormName(),
            new YaBlocksEditor(this, (YoungAndroidBlocksNode) source));
      } else if (source instanceof VRBlocksNode) {
        OdeLog.log("loadProject: calling vr addBlocksEditor");
        addBlocksEditor("vr:" + ((VRBlocksNode) source).getEntityName(),
            new VRBlocksEditor(this, (VRBlocksNode) source));
      }
    }
    // Add the screens to the design toolbar, along with their associated editors
    DesignToolbar designToolbar = Ode.getInstance().getDesignToolbar();
    for (String formName : editorMap.keySet()) {
      EditorSet editors = editorMap.get(formName);
      if (editors.formEditor != null && editors.blocksEditor != null) {
        if (formName.startsWith("vr:")) {
          designToolbar.addVRScreen(projectRootNode.getProjectId(), formName, editors.formEditor,
              editors.blocksEditor);
        } else {
          designToolbar.addScreen(projectRootNode.getProjectId(), formName, editors.formEditor, 
              editors.blocksEditor);
        }
        if (isScreen1(formName)) {
          screen1Added = true;
          if (readyToShowScreen1()) {  // probably not yet but who knows?
            OdeLog.log("YaProjectEditor.loadProject: switching to screen " + formName 
                + " for project " + projectRootNode.getProjectId());
            Ode.getInstance().getDesignToolbar().switchToScreen(projectRootNode.getProjectId(), 
                formName, DesignToolbar.View.DESIGNER);
          }
        }
      } else if (editors.formEditor == null) {
        OdeLog.wlog("Missing form editor for " + formName);
      } else {
        OdeLog.wlog("Missing blocks editor for " + formName);
      }
    }
  }
  
  @Override
  protected void onShow() {
    OdeLog.log("YaProjectEditor got onShow() for project " + projectId);
    
    AssetListBox.getAssetListBox().getAssetList().refreshAssetList(projectId);
    
    DesignToolbar designToolbar = Ode.getInstance().getDesignToolbar();
    FileEditor selectedFileEditor = getSelectedFileEditor();
    if (selectedFileEditor != null) {
      if (selectedFileEditor instanceof YaFormEditor) {
        YaFormEditor formEditor = (YaFormEditor) selectedFileEditor;
        designToolbar.switchToScreen(projectId, formEditor.getForm().getName(), 
            DesignToolbar.View.DESIGNER);
      } else if (selectedFileEditor instanceof YaBlocksEditor) {
        YaBlocksEditor blocksEditor = (YaBlocksEditor) selectedFileEditor;
        designToolbar.switchToScreen(projectId, blocksEditor.getForm().getName(), 
            DesignToolbar.View.BLOCKS);
      } else {
        // shouldn't happen!
        OdeLog.elog("YaProjectEditor got onShow when selectedFileEditor" 
            + " is not a form editor or a blocks editor!");
        ErrorReporter.reportError("Internal error: can't switch file editors.");
      }
    }
  }

  @Override
  protected void onHide() {
    OdeLog.log("YaProjectEditor: got onHide");
    AssetListBox.getAssetListBox().getAssetList().refreshAssetList(0);

    FileEditor selectedFileEditor = getSelectedFileEditor();
    if (selectedFileEditor != null) {
      selectedFileEditor.onHide();
    }
  }
  
  @Override
  protected void onUnload() {
    OdeLog.log("YaProjectEditor: got onUnload");
    super.onUnload();
    for (EditorSet editors : editorMap.values()) {
      if (editors.blocksEditor != null) {
        editors.blocksEditor.prepareForUnload();
      }
    }
  }

  // ProjectChangeListener methods

  @Override
  public void onProjectLoaded(Project project) {
  }

  @Override
  public void onProjectNodeAdded(Project project, ProjectNode node) {
    String formName = null;
    if (node instanceof YoungAndroidFormNode) {
      if (getFileEditor(node.getFileId()) == null) {
        OdeLog.log("onProjectNodeAdded: calling addDesigner");
        addDesigner(((YoungAndroidFormNode) node).getEntityName(),
            new YaFormEditor(this, (YoungAndroidFormNode) node));
        formName = ((YoungAndroidFormNode) node).getFormName();
      }
    } else if (node instanceof YoungAndroidBlocksNode) {
      if (getFileEditor(node.getFileId()) == null) {
        OdeLog.log("onProjectNodeAdded: calling addBlocksEditor");
        addBlocksEditor(((YoungAndroidBlocksNode) node).getEntityName(),
            new YaBlocksEditor(this, (YoungAndroidBlocksNode) node));
        formName = ((YoungAndroidBlocksNode) node).getFormName();
      }
    } else if (node instanceof VREditorNode) {
      if (getFileEditor(node.getFileId()) == null) {
        OdeLog.log("onProjectNodeAdded: calling vr addDesigner");
        formName = "vr:" + ((VREditorNode) node).getEntityName();
        addDesigner(formName, new VREditorEditor(this, (VREditorNode) node));
      }
    } else if (node instanceof VRBlocksNode) {
      if (getFileEditor(node.getFileId()) == null) {
        OdeLog.log("onProjectNodeAdded: calling vr addBlocksEditor");
        formName = "vr:" + ((VRBlocksNode) node).getEntityName();
        addBlocksEditor(formName, new VRBlocksEditor(this, (VRBlocksNode) node));
      }
    }
    if (formName != null) {
      // see if we have both editors yet
      EditorSet editors = editorMap.get(formName);
      if (editors.formEditor != null && editors.blocksEditor != null) {
        if (formName.startsWith("vr:")) {
          Ode.getInstance().getDesignToolbar().addVRScreen(node.getProjectId(), formName.substring(3), 
              editors.formEditor, editors.blocksEditor);
        } else {
          Ode.getInstance().getDesignToolbar().addScreen(node.getProjectId(), formName, 
              editors.formEditor, editors.blocksEditor);
        }
      }
    }
  }


  @Override
  public void onProjectNodeRemoved(Project project, ProjectNode node) {
    // remove blocks and/or form editor if applicable. Remove screen from
    // DesignToolbar. If the partner node to this one (blocks or form) was already
    // removed, calling DesignToolbar.removeScreen a second time will be a no-op.
    OdeLog.log("YaProjectEditor: got onProjectNodeRemoved for project "
            + project.getProjectId() + ", node " + node.getFileId());
    String formName = null;
    if (node instanceof YoungAndroidFormNode) {
      formName = ((YoungAndroidFormNode) node).getFormName();
      removeFormEditor(formName);
    } else if (node instanceof YoungAndroidBlocksNode) {
      formName = ((YoungAndroidBlocksNode) node).getFormName();
      removeBlocksEditor(formName);
    }
  }
  
  /*
   * Returns the YaBlocksEditor for the given form name in this project
   */
  public YaBlocksEditor getBlocksFileEditor(String formName) {
    if (editorMap.containsKey(formName)) {
      BlocksEditor<?, ?> editor = editorMap.get(formName).blocksEditor;
      if (editor instanceof YaBlocksEditor) {
        return (YaBlocksEditor) editor;
      }
    }
    return null;
  }

  /* 
   * Returns the YaFormEditor for the given form name in this project
   */
  public YaFormEditor getFormFileEditor(String formName) {
    if (editorMap.containsKey(formName)) {
      DesignerEditor<?, ?, ?, ?> editor = editorMap.get(formName).formEditor;
      if (editor instanceof YaFormEditor) {
        return (YaFormEditor) editor;
      }
    }
    return null;
  }

  /**
   * @return a list of component instance names
   */
  public List<String> getComponentInstances(String formName) {
    List<String> components = new ArrayList<String>();
    EditorSet editorSet = editorMap.get(formName);
    if (editorSet == null) {
      return components;
    }
    components.addAll(editorSet.formEditor.getComponents().keySet());
    return  components;
  }

  public List<String> getComponentInstances() {
    List<String> components = new ArrayList<String>();
    for (String formName : editorMap.keySet()) {
      components.addAll(getComponentInstances(formName));
    }
    return components;
  }

  // Private methods

  private static Comparator<String> getFileIdComparator() {
    // File editors (YaFormEditors and YaBlocksEditors) are sorted so that Screen1 always comes
    // first and others are in alphabetical order. Within each pair, the YaFormEditor is
    // immediately before the YaBlocksEditor.
    return new Comparator<String>() {
      @Override
      public int compare(String fileId1, String fileId2) {
        boolean isForm1 = fileId1.endsWith(YoungAndroidSourceAnalyzer.FORM_PROPERTIES_EXTENSION);
        boolean isForm2 = fileId2.endsWith(YoungAndroidSourceAnalyzer.FORM_PROPERTIES_EXTENSION);

        // Give priority to screen1.
        if (YoungAndroidSourceNode.isScreen1(fileId1)) {
          if (YoungAndroidSourceNode.isScreen1(fileId2)) {
            // They are both named screen1. The form editor should come before the blocks editor.
            if (isForm1) {
              return isForm2 ? 0 : -1;
            } else {
              return isForm2 ? 1 : 0;
            }
          } else {
            // Only fileId1 is named screen1.
            return -1;
          }
        } else if (YoungAndroidSourceNode.isScreen1(fileId2)) {
          // Only fileId2 is named screen1.
          return 1;
        }

        String fileId1WithoutExtension = StorageUtil.trimOffExtension(fileId1);
        String fileId2WithoutExtension = StorageUtil.trimOffExtension(fileId2);
        int compare = fileId1WithoutExtension.compareTo(fileId2WithoutExtension);
        if (compare != 0) {
          return compare;
        }
        // They are both the same name without extension. The form editor should come before the
        // blocks editor.
        if (isForm1) {
          return isForm2 ? 0 : -1;
        } else {
          return isForm2 ? 1 : 0;
        }
      }
    };
  }
  
  private void addDesigner(final String entityName, final DesignerEditor<?, ?, ?, ?> newDesigner) {
    OdeLog.log("addDesigner: calling addFileEditor");
    if (editorMap.containsKey(entityName)) {
      // This happens if the blocks editor was already added.
      editorMap.get(entityName).formEditor = newDesigner;
    } else {
      EditorSet editors = new EditorSet();
      editors.formEditor = newDesigner;
      editorMap.put(entityName, editors);
    }
    newDesigner.loadFile(new Command() {
      @Override
      public void execute() {
        int pos = Collections.binarySearch(fileIds, newDesigner.getFileId(),
            getFileIdComparator());
        if (pos < 0) {
          pos = -pos - 1;
        }
        OdeLog.log("addDesigner: calling insertFileEditor with pos " + pos);
        insertFileEditor(newDesigner, pos);
        if (isScreen1(entityName)) {
          screen1FormLoaded = true;
          if (readyToShowScreen1()) {
            OdeLog.log("YaProjectEditor.addDesigner.loadFile.execute: switching to screen "
                + entityName + " for project " + newDesigner.getProjectId());
            Ode.getInstance().getDesignToolbar().switchToScreen(newDesigner.getProjectId(),
                entityName, DesignToolbar.View.DESIGNER);
          }
        }
        OdeLog.log("addDesigner: calling loadBlocksEditor");
        loadBlocksEditor(entityName);
      }
    });
  }
    
  private boolean readyToShowScreen1() {
    return screen1FormLoaded && screen1BlocksLoaded && screen1Added;
  }

  private boolean readyToLoadProject() {
    return externalComponentsLoaded;
  }

  private void addBlocksEditor(String entityName, final BlocksEditor<?, ?> newBlocksEditor) {
    OdeLog.log("addBlocksEditor: calling addFileEditor");
    if (editorMap.containsKey(entityName)) {
      // This happens if the form editor was already added.
      editorMap.get(entityName).blocksEditor = newBlocksEditor;
    } else {
      EditorSet editors = new EditorSet();
      editors.blocksEditor = newBlocksEditor;
      editorMap.put(entityName, editors);
    }
  }
  
  private void removeFormEditor(String formName) {
    if (editorMap.containsKey(formName)) {
      EditorSet editors = editorMap.get(formName);
      if (editors.blocksEditor == null) {
        editorMap.remove(formName);
      } else {
        editors.formEditor = null;
      }
    }
  }
  
  private void removeBlocksEditor(String formName) {
    if (editorMap.containsKey(formName)) {
      EditorSet editors = editorMap.get(formName);
      if (editors.formEditor == null) {
        editorMap.remove(formName);
      } else {
        editors.blocksEditor = null;
      }
    }    
  }
  
  public void addComponent(final ProjectNode node, final Command afterComponentAdded) {
    OdeLog.log("addComponent: start");
    final ProjectNode compNode = node;
    final String fileId = compNode.getFileId();
    AsyncCallback<ChecksumedLoadFile> callback = new OdeAsyncCallback<ChecksumedLoadFile>(MESSAGES.loadError()) {
      @Override
      public void onSuccess(ChecksumedLoadFile result) {
        OdeLog.log("addComponent: onSuccess");
        String jsonFileContent;
        try {
          jsonFileContent = result.getContent();
        } catch (ChecksumedFileException e) {
          this.onFailure(e);
          return;
        }
        JSONObject componentJSONObject = new ClientJsonParser().parse(jsonFileContent).asObject();
        COMPONENT_DATABASE.addComponentDatabaseListener(YaProjectEditor.this);
        COMPONENT_DATABASE.addComponent(componentJSONObject);
        if (!externalComponents.contains(componentJSONObject.get("name").toString())) { // In case of upgrade, we do not need to add entry
          externalComponents.add(componentJSONObject.get("name").toString());
        }
        if (afterComponentAdded != null) {
          afterComponentAdded.execute();
        }
      }
      @Override
      public void onFailure(Throwable caught) {
        if (caught instanceof ChecksumedFileException) {
          Ode.getInstance().recordCorruptProject(projectId, fileId, caught.getMessage());
        }
        super.onFailure(caught);
      }
    };
    Ode.getInstance().getProjectService().load2(projectId, fileId, callback);
  }

  /**
   * To remove Component Files from the Project!
   * @param componentTypes
   */
  public  void removeComponent(Map<String, String> componentTypes) {
    final Ode ode = Ode.getInstance();
    final YoungAndroidComponentsFolder componentsFolder = ((YoungAndroidProjectNode) project.getRootNode()).getComponentsFolder();
    for (String componentType : componentTypes.keySet()) {
      final String directory = componentsFolder.getFileId() + "/" + componentTypes.get(componentType) + "/";
      ode.getProjectService().deleteFolder(ode.getSessionId(), this.projectId, directory,
          new AsyncCallback<Long>() {
            @Override
            public void onFailure(Throwable throwable) {

            }
            @Override
            public void onSuccess(Long date) {
              Iterable<ProjectNode> nodes = componentsFolder.getChildren();
              for (ProjectNode node : nodes) {
                if (node.getFileId().startsWith(directory)) {
                  ode.getProjectManager().getProject(node).deleteNode(node);
                  ode.updateModificationDate(node.getProjectId(), date);
                }
              }
            }
          });
    }
  }

  private void callLoadProject() {
    Scheduler.get().scheduleDeferred(new Scheduler.ScheduledCommand() {
      @Override
      public void execute() {
        if (!readyToLoadProject()) { // wait till project is processed
          Scheduler.get().scheduleDeferred(this);
        } else {
          loadProject();
        }
      }
    });
  }

  private void loadExternalComponents() {
    OdeLog.log("loadExternalComponents: start");
    //Get the list of all ComponentNodes to be Added
    List<ProjectNode> componentNodes = new ArrayList<ProjectNode>();
    YoungAndroidComponentsFolder componentsFolder = ((YoungAndroidProjectNode) project.getRootNode()).getComponentsFolder();
    if (componentsFolder != null) {
      for (ProjectNode node : componentsFolder.getChildren()) {
        // Find all components that are json files.
        final String nodeName = node.getName();
        if (nodeName.endsWith(".json") && StringUtils.countMatches(node.getFileId(), "/") == 3 ) {
          componentNodes.add(node);
        }
      }
    }
    final int componentCount = componentNodes.size();
    for (ProjectNode componentNode : componentNodes) {
      addComponent(componentNode, new Command() {
        @Override
        public void execute() {
          if (componentCount == externalComponents.size()) { // This will be true for the last component added
            externalComponentsLoaded = true;
          }
        }
      });
    }
    if (componentCount == 0) {
      externalComponentsLoaded = true; // to hint that we are ready to load
    }
  }

  private void resetExternalComponents() {
    COMPONENT_DATABASE.addComponentDatabaseListener(this);
    COMPONENT_DATABASE.resetDatabase();
    externalComponents.clear();
  }

  private static boolean isScreen1(String formName) {
    return formName.equals(YoungAndroidSourceNode.SCREEN1_FORM_NAME);
  }

  public void addComponentDatbaseListener(ComponentDatabaseChangeListener cdbChangeListener) {
    componentDatabaseChangeListeners.add(cdbChangeListener);
  }

  public void removeComponentDatbaseListener(ComponentDatabaseChangeListener cdbChangeListener) {
    componentDatabaseChangeListeners.remove(cdbChangeListener);
  }

  public void clearComponentDatabaseListeners() {
    componentDatabaseChangeListeners.clear();
  }

  @Override
  public void onComponentTypeAdded(List<String> componentTypes) {
    COMPONENT_DATABASE.removeComponentDatabaseListener(this);
    for (ComponentDatabaseChangeListener cdbChangeListener : componentDatabaseChangeListeners) {
      cdbChangeListener.onComponentTypeAdded(componentTypes);
    }
    for (String formName : editorMap.keySet()) {
      EditorSet editors = editorMap.get(formName);
      editors.formEditor.onComponentTypeAdded(componentTypes);
      editors.blocksEditor.onComponentTypeAdded(componentTypes);
    }
  }

  @Override
  public boolean beforeComponentTypeRemoved(List<String> componentTypes) {
    boolean result = true;
    for (ComponentDatabaseChangeListener cdbChangeListener : componentDatabaseChangeListeners) {
      result = result & cdbChangeListener.beforeComponentTypeRemoved(componentTypes);
    }
    for (String formName : editorMap.keySet()) {
      EditorSet editors = editorMap.get(formName);
      result = result & editors.formEditor.beforeComponentTypeRemoved(componentTypes);
      result = result & editors.blocksEditor.beforeComponentTypeRemoved(componentTypes);
    }
    return result;
  }

  @Override
  public void onComponentTypeRemoved(Map<String, String> componentTypes) {
    COMPONENT_DATABASE.removeComponentDatabaseListener(this);
    for (ComponentDatabaseChangeListener cdbChangeListener : componentDatabaseChangeListeners) {
      cdbChangeListener.onComponentTypeRemoved(componentTypes);
    }
    for (String formName : editorMap.keySet()) {
      EditorSet editors = editorMap.get(formName);
      editors.formEditor.onComponentTypeRemoved(componentTypes);
      editors.blocksEditor.onComponentTypeRemoved(componentTypes);
    }
    removeComponent(componentTypes);
  }

  @Override
  public void onResetDatabase() {
    COMPONENT_DATABASE.removeComponentDatabaseListener(this);
    for (ComponentDatabaseChangeListener cdbChangeListener : componentDatabaseChangeListeners) {
      cdbChangeListener.onResetDatabase();
    }
    for (String formName : editorMap.keySet()) {
      EditorSet editors = editorMap.get(formName);
      editors.formEditor.onResetDatabase();
      editors.blocksEditor.onResetDatabase();
    }
  }
}
