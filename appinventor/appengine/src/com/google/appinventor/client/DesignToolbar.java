// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2017 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

package com.google.appinventor.client;

import com.google.appinventor.client.editor.FileEditor;
import com.google.appinventor.client.editor.ProjectEditor;
import com.google.appinventor.client.editor.blocks.BlocklyPanel;

import com.google.appinventor.client.explorer.commands.AddFormCommand;
import com.google.appinventor.client.explorer.commands.AddVRScreenCommand;
import com.google.appinventor.client.explorer.commands.ChainableCommand;
import com.google.appinventor.client.explorer.commands.DeleteFileCommand;

import com.google.appinventor.client.output.OdeLog;

import com.google.appinventor.client.tracking.Tracking;

import com.google.appinventor.client.widgets.DropDownButton.DropDownItem;

import com.google.appinventor.client.widgets.Toolbar;

import com.google.appinventor.common.version.AppInventorFeatures;

import com.google.appinventor.shared.rpc.project.ProjectRootNode;
import com.google.appinventor.shared.rpc.project.vr.VRSourceNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidSourceNode;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

import com.google.gwt.core.client.Scheduler;

import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import static com.google.appinventor.client.Ode.MESSAGES;

/**
 * The design toolbar houses command buttons in the Young Android Design
 * tab (for the UI designer (a.k.a, Form Editor) and Blocks Editor).
 *
 */
public class DesignToolbar extends Toolbar {

  private boolean isReadOnly;   // If the UI is in read only mode

  /*
   * A EditorPair groups together the designer and blocks editor for an
   * application screen. Name is the name of the screen (form) displayed
   * in the screens pull-down.
   */
  public static class EditorPair {
    public final String screenName;
    public final FileEditor designerEditor;
    public final FileEditor blocksEditor;

    public EditorPair(String name, FileEditor designerEditor, FileEditor blocksEditor) {
      this.screenName = name;
      this.designerEditor = designerEditor;
      this.blocksEditor = blocksEditor;
    }
  }

  public static class Screen extends EditorPair {
    public Screen(String name, FileEditor formEditor, FileEditor blocksEditor) {
      super(name, formEditor, blocksEditor);
    }
  }

  public static class VRScreen extends EditorPair {
    public VRScreen(String name, FileEditor vrEditor, FileEditor blocksEditor) {
      super(name, vrEditor, blocksEditor);
    }
  }

  /*
   * A project as represented in the DesignToolbar. Each project has a name
   * (as displayed in the DesignToolbar on the left), a set of named screens,
   * and an indication of which screen is currently being edited.
   */
  public static class DesignProject {
    public final String name;
    public final Map<String, Screen> screens; // screen name -> Screen
    public final Map<String, VRScreen> vrScreens; // vr name -> VR
    public String currentScreen; // name of currently displayed screen

    public DesignProject(String name, long projectId) {
      this.name = name;
      screens = Maps.newHashMap();
      vrScreens = Maps.newHashMap();
      // Screen1 is initial screen by default
      currentScreen = YoungAndroidSourceNode.SCREEN1_FORM_NAME;
      // Let BlocklyPanel know which screen to send Yail for
      BlocklyPanel.setCurrentForm(projectId + "_" + currentScreen);
    }

    // Returns true if we added the screen (it didn't previously exist), false otherwise.
    public boolean addScreen(String name, FileEditor formEditor, FileEditor blocksEditor) {
      if (!screens.containsKey(name)) {
        screens.put(name, new Screen(name, formEditor, blocksEditor));
        return true;
      } else {
        return false;
      }
    }

    public void removeScreen(String name) {
      screens.remove(name);
    }

    public void setCurrentScreen(String name) {
      currentScreen = name;
    }
    
    public boolean addVRScreen(String name, FileEditor vrEditor, FileEditor blocksEditor) {
      OdeLog.log("DesignToolbar: addVRScreen start");
      name = VRSourceNode.getPrefixedVRScreenName(name);
      OdeLog.log("addVRScreen: name is " + name);
      if (!vrScreens.containsKey(name)) {
        vrScreens.put(name, new VRScreen(name, vrEditor, blocksEditor));
        OdeLog.log("addVRScreen: returning true");
        return true;
      } else {
        return false;
      }
    }

    public void removeVRScreen(String name) {
      vrScreens.remove(name);
    }
  }

  private static final String WIDGET_NAME_ADDFORM = "AddForm";
  private static final String WIDGET_NAME_REMOVEFORM = "RemoveForm";
  private static final String WIDGET_NAME_ADDVRSCREEN = "AddVRScreen";
  private static final String WIDGET_NAME_REMOVEVRSCREEN = "RemoveVRScreen";
  private static final String WIDGET_NAME_SCREENS_DROPDOWN = "ScreensDropdown";
  private static final String WIDGET_NAME_SWITCH_TO_BLOCKS_EDITOR = "SwitchToBlocksEditor";
  private static final String WIDGET_NAME_SWITCH_TO_FORM_EDITOR = "SwitchToFormEditor";

  // Enum for type of view showing in the design tab
  public enum View {
    DESIGNER,   // Designer editor view
    BLOCKS  // Blocks editor view
  }
  public View currentView = View.DESIGNER;

  public Label projectNameLabel;

  // Project currently displayed in designer
  private DesignProject currentProject;

  // Map of project id to project info for all projects we've ever shown
  // in the Designer in this session.
  public Map<Long, DesignProject> projectMap = Maps.newHashMap();

  // Stack of screens switched to from the Companion
  // We implement screen switching in the Companion by having it tell us
  // to switch screens. We then load into the companion the new Screen
  // We save where we were because the companion can have us return from
  // a screen. If we switch projects in the browser UI, we clear this
  // list of screens as we are effectively running a different application
  // on the device.
  public static LinkedList<String> pushedScreens = Lists.newLinkedList();

  /**
   * Initializes and assembles all commands into buttons in the toolbar.
   */
  public DesignToolbar() {
    super();

    isReadOnly = Ode.getInstance().isReadOnly();

    projectNameLabel = new Label();
    projectNameLabel.setStyleName("ya-ProjectName");
    HorizontalPanel toolbar = (HorizontalPanel) getWidget();
    toolbar.insert(projectNameLabel, 0);

    // width of palette minus cellspacing/border of buttons
    toolbar.setCellWidth(projectNameLabel, "222px");

    List<DropDownItem> screenItems = Lists.newArrayList();
    addDropDownButton(WIDGET_NAME_SCREENS_DROPDOWN, MESSAGES.screensButton(), screenItems);

    if (AppInventorFeatures.allowMultiScreenApplications() && !isReadOnly) {
      addButton(new ToolbarItem(WIDGET_NAME_ADDFORM, MESSAGES.addFormButton(),
          new AddFormAction()));
      if (AppInventorFeatures.enableVREditor() && !isReadOnly) {
        addButton(new ToolbarItem(WIDGET_NAME_ADDVRSCREEN, MESSAGES.addVRScreenButton(),
            new AddVRScreenAction()));
      }
      addButton(new ToolbarItem(WIDGET_NAME_REMOVEFORM, MESSAGES.removeFormButton(),
          new RemoveFormAction()));
    }

    addButton(new ToolbarItem(WIDGET_NAME_SWITCH_TO_FORM_EDITOR,
        MESSAGES.switchToFormEditorButton(), new SwitchToFormEditorAction()), true);
    addButton(new ToolbarItem(WIDGET_NAME_SWITCH_TO_BLOCKS_EDITOR,
        MESSAGES.switchToBlocksEditorButton(), new SwitchToBlocksEditorAction()), true);

    // Gray out the Designer button and enable the blocks button
    toggleEditor(false);
    Ode.getInstance().getTopToolbar().updateFileMenuButtons(0);
  }

  private class AddAction implements Command {
    private final String tracking;
    private final ChainableCommand command;

    AddAction(String tracking, ChainableCommand command) {
      this.tracking = tracking;
      this.command = command;
    }

    @Override
    public void execute() {
      Ode ode = Ode.getInstance();
      if (ode.screensLocked()) {
        return;                 // Don't permit this if we are locked out (saving files)
      }
      final ProjectRootNode projectRootNode = ode.getCurrentYoungAndroidProjectRootNode();
      if (projectRootNode != null) {
        Runnable doSwitch = new Runnable() {
            @Override
            public void run() {
              command.startExecuteChain(tracking, projectRootNode);
            }
          };
        // take a screenshot of the current blocks if we are in the blocks editor
        if (currentView == View.BLOCKS) {
          Ode.getInstance().screenShotMaybe(doSwitch, false);
        } else {
          doSwitch.run();
        }
      }
    }
  }

  private class AddFormAction extends AddAction {
    AddFormAction() {
      super(Tracking.PROJECT_ACTION_ADDFORM_YA, new AddFormCommand());
    }
  }

  private class AddVRScreenAction extends AddAction {
    AddVRScreenAction() {
      super(Tracking.PROJECT_ACTION_ADDVRSCREEN_VR, new AddVRScreenCommand());
    }
  }

  private class RemoveFormAction implements Command {
    @Override
    public void execute() {
      Ode ode = Ode.getInstance();
      if (ode.screensLocked()) {
        return;                 // Don't permit this if we are locked out (saving files)
      }
      YoungAndroidSourceNode sourceNode = ode.getCurrentYoungAndroidSourceNode();
      if (sourceNode != null && !sourceNode.isScreen1()) {
        // DeleteFileCommand handles the whole operation, including displaying the confirmation
        // message dialog, closing the form editor and the blocks editor,
        // deleting the files in the server's storage, and deleting the
        // corresponding client-side nodes (which will ultimately trigger the
        // screen deletion in the DesignToolbar).
        final String deleteConfirmationMessage = MESSAGES.reallyDeleteForm(
            sourceNode.getFormName());
        ChainableCommand cmd = new DeleteFileCommand() {
          @Override
          protected boolean deleteConfirmation() {
            return Window.confirm(deleteConfirmationMessage);
          }
        };
        cmd.startExecuteChain(Tracking.PROJECT_ACTION_REMOVEFORM_YA, sourceNode);
      }
    }
  }

  private class SwitchScreenAction implements Command {
    private final long projectId;
    private final String name;  // screen name

    public SwitchScreenAction(long projectId, String screenName) {
      this.projectId = projectId;
      this.name = screenName;
    }

    @Override
    public void execute() {
      // If we are in the blocks view, we should take a screenshot
      // of the blocks as we swtich to a different screen
      if (currentView == View.BLOCKS) {
        Ode.getInstance().screenShotMaybe(new Runnable() {
            @Override
            public void run() {
              doSwitchScreen(projectId, name, currentView);
            }
          }, false);
      } else {
        doSwitchScreen(projectId, name, currentView);
      }
    }
  }

  private void doSwitchScreen(final long projectId, final String screenName, final View view) {
    Scheduler.get().scheduleDeferred(new Scheduler.ScheduledCommand() {
        @Override
        public void execute() {
          if (Ode.getInstance().screensLocked()) { // Wait until I/O complete
            Scheduler.get().scheduleDeferred(this);
          } else {
            doSwitchScreen1(projectId, screenName, view);
          }
        }
      });
  }

  private void doSwitchScreen1(long projectId, String screenName, View view) {
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar: no project with id " + projectId
          + ". Ignoring SwitchScreenAction.execute().");
      return;
    }
    DesignProject project = projectMap.get(projectId);
    if (currentProject != project) {
      // need to switch projects first. this will not switch screens.
      if (!switchToProject(projectId, project.name)) {
        return;
      }
    }
    String newScreenName = screenName;
    if (!currentProject.screens.containsKey(newScreenName)) {
      // Can't find the requested screen in this project. This shouldn't happen, but if it does
      // for some reason, try switching to Screen1 instead.
      OdeLog.wlog("Trying to switch to non-existent screen " + newScreenName +
          " in project " + currentProject.name + ". Trying Screen1 instead.");
      if (currentProject.screens.containsKey(YoungAndroidSourceNode.SCREEN1_FORM_NAME)) {
        newScreenName = YoungAndroidSourceNode.SCREEN1_FORM_NAME;
      } else {
        // something went seriously wrong!
        ErrorReporter.reportError("Something is wrong. Can't find Screen1 for project "
            + currentProject.name);
        return;
      }
    }
    currentView = view;
    Screen screen = currentProject.screens.get(newScreenName);
    ProjectEditor projectEditor = screen.designerEditor.getProjectEditor();
    currentProject.setCurrentScreen(newScreenName);
    setDropDownButtonCaption(WIDGET_NAME_SCREENS_DROPDOWN, newScreenName);
    OdeLog.log("Setting currentScreen to " + newScreenName);
    if (currentView == View.DESIGNER) {
      projectEditor.selectFileEditor(screen.designerEditor);
      toggleEditor(false);
      Ode.getInstance().getTopToolbar().updateFileMenuButtons(1);
    } else {  // must be View.BLOCKS
      projectEditor.selectFileEditor(screen.blocksEditor);
      toggleEditor(true);
      Ode.getInstance().getTopToolbar().updateFileMenuButtons(1);
    }
    // Inform the Blockly Panel which project/screen (aka form) we are working on
    BlocklyPanel.setCurrentForm(projectId + "_" + newScreenName);
    screen.blocksEditor.makeActiveWorkspace();
  }

  private class SwitchVRScreenAction implements Command {
    private final long projectId;
    private final String vrScreenId;

    public SwitchVRScreenAction(long projectId, String vrScreenName) {
      this.projectId = projectId;
      this.vrScreenId = VRSourceNode.getPrefixedVRScreenName(vrScreenName);
    }

    @Override
    public void execute() {
      if (currentView == View.BLOCKS) {
        Ode.getInstance().screenShotMaybe(new Runnable() {
          @Override
          public void run() {
            doSwitchVRScreen(projectId, vrScreenId, currentView);
          }
        }, false);
      } else {
        doSwitchVRScreen(projectId, vrScreenId, currentView);
      }
    }
  }

  private void doSwitchVRScreen(final long projectId, final String vrScreenId, final View view) {
    Scheduler.get().scheduleDeferred(new ScheduledCommand() {
      @Override
      public void execute() {
        if (Ode.getInstance().screensLocked()) {
          Scheduler.get().scheduleDeferred(this);
        } else {
          doSwitchVRScreen1(projectId, vrScreenId, view);
        }
      }
    });
  }

  private void doSwitchVRScreen1(long projectId, String vrScreenId, View view) {
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar: no project with id " + projectId
          + ". Ignoring SwitchVRScreenAction.execute().");
      return;
    }
    DesignProject project = projectMap.get(projectId);
    if (currentProject != project) {
      // need to switch projects first. this will not switch screens.
      if (!switchToProject(projectId, project.name)) {
        return;
      }
    }
    if (!currentProject.vrScreens.containsKey(vrScreenId)) {
      // Can't find the requested vrScreen in this project. This shouldn't happen, but if it does
      // for some reason, try switching to Screen1 instead.
      OdeLog.wlog("Trying to switch to non-existent vrScreen " +
          VRSourceNode.getVRScreenDisplayName(vrScreenId) + " in project " + currentProject.name +
          ". Trying Screen1 instead.");
      if (currentProject.screens.containsKey(YoungAndroidSourceNode.SCREEN1_FORM_NAME)) {
        switchToScreen(projectId, YoungAndroidSourceNode.SCREEN1_FORM_NAME, view);
      } else {
        // something went seriously wrong!
        ErrorReporter.reportError("Something is wrong. Can't find Screen1 for project "
            + currentProject.name);
      }
      return;
    }
    currentView = view;
    VRScreen vrScreen = currentProject.vrScreens.get(vrScreenId);
    ProjectEditor projectEditor = vrScreen.designerEditor.getProjectEditor();
    currentProject.setCurrentScreen(vrScreenId);
    setDropDownButtonCaption(WIDGET_NAME_SCREENS_DROPDOWN,
        VRSourceNode.getVRScreenDisplayName(vrScreenId));
    if (currentView == View.DESIGNER) {
      projectEditor.selectFileEditor(vrScreen.designerEditor);
      toggleEditor(false);
    } else {
      projectEditor.selectFileEditor(vrScreen.blocksEditor);
      toggleEditor(true);
    }
    Ode.getInstance().getTopToolbar().updateFileMenuButtons(1);
    BlocklyPanel.setCurrentForm(projectId + "_" + vrScreenId);
    vrScreen.blocksEditor.makeActiveWorkspace();
  }

  private class SwitchToBlocksEditorAction implements Command {
    @Override
    public void execute() {
      if (currentProject == null) {
        OdeLog.wlog("DesignToolbar.currentProject is null. "
            + "Ignoring SwitchToBlocksEditorAction.execute().");
        return;
      }
      if (currentView != View.BLOCKS) {
        long projectId = Ode.getInstance().getCurrentYoungAndroidProjectRootNode().getProjectId();
        if (currentProject.currentScreen.startsWith("vr:")) {
          switchToVRScreen(projectId, currentProject.currentScreen, View.BLOCKS);
        } else {
          switchToScreen(projectId, currentProject.currentScreen, View.BLOCKS);
        }
        toggleEditor(true);       // Gray out the blocks button and enable the designer button
        Ode.getInstance().getTopToolbar().updateFileMenuButtons(1);
      }
    }
  }

  private class SwitchToFormEditorAction implements Command {
    @Override
    public void execute() {
      if (currentProject == null) {
        OdeLog.wlog("DesignToolbar.currentProject is null. "
            + "Ignoring SwitchToFormEditorAction.execute().");
        return;
      }
      if (currentView != View.DESIGNER) {
        // We are leaving a blocks editor, so take a screenshot
        Ode.getInstance().screenShotMaybe(new Runnable() {
            @Override
            public void run() {
              long projectId = Ode.getInstance().getCurrentYoungAndroidProjectRootNode().getProjectId();
              if (currentProject.currentScreen.startsWith("vr:")) {
                switchToVRScreen(projectId, currentProject.currentScreen, View.DESIGNER);
              } else {
                switchToScreen(projectId, currentProject.currentScreen, View.DESIGNER);
              }
              toggleEditor(false);      // Gray out the Designer button and enable the blocks button
              Ode.getInstance().getTopToolbar().updateFileMenuButtons(1);
            }
          }, false);
      }
    }
  }

  public void addProject(long projectId, String projectName) {
    if (!projectMap.containsKey(projectId)) {
      projectMap.put(projectId, new DesignProject(projectName, projectId));
      OdeLog.log("DesignToolbar added project " + projectName + " with id " + projectId);
    } else {
      OdeLog.wlog("DesignToolbar ignoring addProject for existing project " + projectName
          + " with id " + projectId);
    }
  }

  // Switch to an existing project. Note that this does not switch screens.
  // TODO(sharon): it might be better to throw an exception if the
  // project doesn't exist.
  private boolean switchToProject(long projectId, String projectName) {
    if (projectMap.containsKey(projectId)) {
      DesignProject project = projectMap.get(projectId);
      if (project == currentProject) {
        OdeLog.wlog("DesignToolbar: ignoring call to switchToProject for current project");
        return true;
      }
      pushedScreens.clear();    // Effectively switching applications clear stack of screens
      clearDropDownMenu(WIDGET_NAME_SCREENS_DROPDOWN);
      OdeLog.log("DesignToolbar: switching to existing project " + projectName + " with id "
          + projectId);
      currentProject = projectMap.get(projectId);
      // TODO(sharon): add screens to drop-down menu in the right order
      for (Screen screen : currentProject.screens.values()) {
        addDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN, new DropDownItem(screen.screenName,
            screen.screenName, new SwitchScreenAction(projectId, screen.screenName)));
      }
      if (currentProject.vrScreens.size() > 0) {
        addDropDownButtonSeparator(WIDGET_NAME_SCREENS_DROPDOWN);
        for (VRScreen vrScreen : currentProject.vrScreens.values()) {
          addDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN,
              new DropDownItem(vrScreen.screenName, vrScreen.screenName.substring(3),  // strip vr: prefix
                  new SwitchVRScreenAction(projectId, vrScreen.screenName)));
        }
      }
      projectNameLabel.setText(projectName);
    } else {
      ErrorReporter.reportError("Design toolbar doesn't know about project " + projectName +
          " with id " + projectId);
      OdeLog.wlog("Design toolbar doesn't know about project " + projectName + " with id "
          + projectId);
      return false;
    }
    return true;
  }

  /*
   * Add a screen name to the drop-down for the project with id projectId.
   * name is the form name, designerEditor is the file editor for the form UI,
   * and blocksEditor is the file editor for the form's blocks.
   */
  public void addScreen(long projectId, String name, FileEditor formEditor,
      FileEditor blocksEditor) {
    OdeLog.log("addScreen: start");
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar can't find project " + name + " with id " + projectId
          + ". Ignoring addScreen().");
      return;
    }
    DesignProject project = projectMap.get(projectId);
    if (project.addScreen(name, formEditor, blocksEditor)) {
      if (currentProject == project) {
        addDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN, new DropDownItem(name,
            name, new SwitchScreenAction(projectId, name)));
      }
    }
  }

/*
 * PushScreen -- Static method called by Blockly when the Companion requests
 * That we switch to a new screen. We keep track of the Screen we were on
 * and push that onto a stack of Screens which we pop when requested by the
 * Companion.
 */
  public static boolean pushScreen(String screenName) {
    DesignToolbar designToolbar = Ode.getInstance().getDesignToolbar();
    long projectId = Ode.getInstance().getCurrentYoungAndroidProjectId();
    String currentScreen = designToolbar.currentProject.currentScreen;
    if (!designToolbar.currentProject.screens.containsKey(screenName)) // No such screen -- can happen
      return false;                                                    // because screen is user entered here.
    pushedScreens.addFirst(currentScreen);
    designToolbar.doSwitchScreen(projectId, screenName, View.BLOCKS);
    return true;
  }

  public static void popScreen() {
    DesignToolbar designToolbar = Ode.getInstance().getDesignToolbar();
    long projectId = Ode.getInstance().getCurrentYoungAndroidProjectId();
    String newScreen;
    if (pushedScreens.isEmpty()) {
      return;                   // Nothing to do really
    }
    newScreen = pushedScreens.removeFirst();
    designToolbar.doSwitchScreen(projectId, newScreen, View.BLOCKS);
  }

  // Called from Javascript when Companion is disconnected
  public static void clearScreens() {
    pushedScreens.clear();
  }

  /*
   * Switch to screen name in project projectId. Also switches projects if
   * necessary.
   */
  public void switchToScreen(long projectId, String screenName, View view) {
    doSwitchScreen(projectId, screenName, view);
  }

  /*
   * Remove screen name (if it exists) from project projectId
   */
  public void removeScreen(long projectId, String name) {
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar can't find project " + name + " with id " + projectId
          + " Ignoring removeScreen().");
      return;
    }
    OdeLog.log("DesignToolbar: got removeScreen for project " + projectId
        + ", screen " + name);
    DesignProject project = projectMap.get(projectId);
    if (!project.screens.containsKey(name)) {
      // already removed this screen
      return;
    }
    if (currentProject == project) {
      // if removing current screen, choose a new screen to show
      if (currentProject.currentScreen.equals(name)) {
        // TODO(sharon): maybe make a better choice than screen1, but for now
        // switch to screen1 because we know it is always there
        switchToScreen(projectId, YoungAndroidSourceNode.SCREEN1_FORM_NAME, View.DESIGNER);
      }
      removeDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN, name);
    }
    project.removeScreen(name);
  }

  public void addVRScreen(long projectId, String name, FileEditor designer, FileEditor blocks) {
    OdeLog.log("addVRScreen: start");
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar can't find project " + name + " with id " + projectId
          + ". Ignoring addVRScreen().");
      return;
    }
    DesignProject project = projectMap.get(projectId);
    if (project.addVRScreen(name, designer, blocks)) {
      if (currentProject == project) {
        OdeLog.log("addVRScreen: project.vrScreens.size() is " + project.vrScreens.size());
        if (project.vrScreens.size() == 1) {
          addDropDownButtonSeparator(WIDGET_NAME_SCREENS_DROPDOWN);
        }
        addDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN, new DropDownItem("vr:" + name,
            name, new SwitchVRScreenAction(projectId, name)));
      }
    }
  }

  public void switchToVRScreen(long projectId, String vrScreenName, View view) {
    doSwitchVRScreen(projectId, VRSourceNode.getPrefixedVRScreenName(vrScreenName), view);
  }

  public void removeVRScreen(long projectId, String name) {
    if (!projectMap.containsKey(projectId)) {
      OdeLog.wlog("DesignToolbar can't find project " + name + " with id " + projectId
          + ". Ignoring removeVRScreen().");
      return;
    }
    DesignProject project = projectMap.get(projectId);
    if (!project.vrScreens.containsKey(name)) {
      // already removed this sketch
      return;
    }
    if (currentProject == project) {
      switchToScreen(projectId, YoungAndroidSourceNode.SCREEN1_FORM_NAME, View.DESIGNER);
      removeDropDownButtonItem(WIDGET_NAME_SCREENS_DROPDOWN, "vr:" + name);
    }
    project.removeVRScreen(name);
    if (project.vrScreens.size() == 0) {
      removeDropDownButtonSeparator(WIDGET_NAME_SCREENS_DROPDOWN);
    }
  }

  private void toggleEditor(boolean blocks) {
    setButtonEnabled(WIDGET_NAME_SWITCH_TO_BLOCKS_EDITOR, !blocks);
    setButtonEnabled(WIDGET_NAME_SWITCH_TO_FORM_EDITOR, blocks);

    if (AppInventorFeatures.allowMultiScreenApplications() && !isReadOnly) {
      if (getCurrentProject() == null || "Screen1".equals(getCurrentProject().currentScreen)) {
        setButtonEnabled(WIDGET_NAME_REMOVEFORM, false);
      } else {
        setButtonEnabled(WIDGET_NAME_REMOVEFORM, true);
      }
    }
  }

  public DesignProject getCurrentProject() {
    return currentProject;
  }

  public View getCurrentView() {
    return currentView;
  }

}
