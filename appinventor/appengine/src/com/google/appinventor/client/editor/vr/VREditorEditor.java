// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.client.editor.vr;

import com.google.appinventor.client.Ode;
import com.google.appinventor.client.boxes.AssetListBox;
import com.google.appinventor.client.boxes.PaletteBox;
import com.google.appinventor.client.boxes.PropertiesBox;
import com.google.appinventor.client.boxes.ViewerBox;
import com.google.appinventor.client.editor.vr.js.JSBox;
import com.google.appinventor.client.editor.ProjectEditor;
import com.google.appinventor.client.editor.blocks.BlocksEditor;
import com.google.appinventor.client.editor.designer.DesignerEditor;
import com.google.appinventor.client.editor.vr.palette.VRPalettePanel;
//import com.google.appinventor.client.editor.vr.js.JSPanel;
import com.google.appinventor.client.editor.simple.SimpleNonVisibleComponentsPanel;
import com.google.appinventor.client.editor.simple.components.MockComponent;
import com.google.appinventor.client.editor.simple.components.MockVREditor;
// import com.google.appinventor.client.editor.simple.components.MockMicrocontroller;
import com.google.appinventor.client.editor.simple.SimpleComponentDatabase;
import com.google.appinventor.client.editor.simple.palette.DropTargetProvider;
import com.google.appinventor.client.properties.json.ClientJsonParser;
import com.google.appinventor.client.widgets.dnd.DropTarget;
import com.google.appinventor.client.widgets.properties.EditableProperties;
import com.google.appinventor.shared.properties.json.JSONObject;
import com.google.appinventor.shared.rpc.project.FolderNode;
import com.google.appinventor.shared.rpc.project.ProjectNode;
import com.google.appinventor.shared.rpc.project.vr.VREditorNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidProjectNode;
import com.google.appinventor.client.output.OdeLog;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONException;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.ui.HTMLPanel;

import java.util.List;

/**
 * Design editor for VR.
 */
public class VREditorEditor extends DesignerEditor<VREditorNode, MockVREditor, VRPalettePanel, VREditorDatabase> {

  private String preUpgradeJson = null;
  private String content = null;
  private String projectIdString;

  public VREditorEditor(ProjectEditor projectEditor, VREditorNode sourceNode) {
    super(projectEditor, sourceNode, VREditorDatabase.getInstance(sourceNode.getProjectId()),
        new VRVisibleComponentsPanel(new SimpleNonVisibleComponentsPanel<MockVREditor>()));

    palettePanel = new VRPalettePanel(this);
    palettePanel.loadComponents(new DropTargetProvider() {
      @Override
      public DropTarget[] getDropTargets() {
        List<DropTarget> dropTargets = root.getDropTargetsWithin();
        dropTargets.add(getVisibleComponentsPanel());
        dropTargets.add(getNonVisibleComponentsPanel());
        return dropTargets.toArray(new DropTarget[dropTargets.size()]);
      }
    });
    palettePanel.setSize("100%", "100%");
    componentDatabaseChangeListeners.add(palettePanel);
    exportMethodToJavaScript();
    projectIdString = String.valueOf(sourceNode.getProjectId());
  }

  @Override
  public void onHide() {
    if (Ode.getInstance().getCurrentFileEditor() == this) {
      super.onHide();
      unloadDesigner();
    }
  }

  @Override
  public String getRawFileContent() {
    OdeLog.log("VREditorEditor: getRawFileContent called");
    String jsonString = encodeVREditorAsJsonString();
    OdeLog.log(jsonString);
    return jsonString;
  }

  @Override
  public String getJson() {
    return preUpgradeJson;
  }

  @Override
  public MockVREditor newRootObject() {
    return new MockVREditor(this);
  }

  @Override
  protected void upgradeFile(FileContentHolder fileContentHolder, Command afterUpgradeCompleted) {
    preUpgradeJson = fileContentHolder.getFileContent();
    if (afterUpgradeCompleted != null) {
      afterUpgradeCompleted.execute();
    }
  }

  @Override
  protected void onFileLoaded(String content) {
    try {
      OdeLog.log("onFileLoaded: start");
      OdeLog.log("onFileLoaded: content is " + content);
      String mockString = "{\"Properties\":{\"$Name\":\"VREditor\",\"$Type\":\"VREditor\",\"$Version\":\"1\"}}\n";
      JSONObject properties = new ClientJsonParser().parse(mockString).asObject();
      root = (MockVREditor) createMockComponent(properties.getProperties().get("Properties").asObject(),
          null, MockVREditor.TYPE);
      root.select();
      this.content = content;
      loadScene(content);
    } catch(JSONException e) {
      throw new IllegalStateException("Invalid JSON for VREditor", e);
    } finally {
      super.onFileLoaded(content);
    }
    /*
    try {
      JSONObject properties = new ClientJsonParser().parse(content).asObject();
      root = (MockVREditor) createMockComponent(properties.getProperties().get("Properties").asObject(),
          null, MockVREditor.TYPE);

      nonVisibleComponentsPanel.setRoot(root);
      visibleComponentsPanel.setRoot(root);

      root.select();
    } catch(JSONException e) {
      throw new IllegalStateException("Invalid JSON for Sketch", e);
    } finally {
      super.onFileLoaded(content);
    }
    */
  }

  @Override
  protected void loadDesigner() {
    OdeLog.log("VREditorEditor: loadDesigner start");
    //root.refresh();
    //selectedComponent = root.getSelectedComponent();
    
    ViewerBox viewerBox = ViewerBox.getViewerBox();
    viewerBox.setVisible(false);

    JSBox jsBox = JSBox.getJSBox();
    //jsBox.setSize("100%", "100%");
    jsBox.setVisible(true);

    PaletteBox paletteBox = PaletteBox.getPaletteBox();
    paletteBox.setVisible(false);

    AssetListBox assetListBox = AssetListBox.getAssetListBox();
    assetListBox.setVisible(false);

    /*
    PropertiesBox propertiesBox = PropertiesBox.getPropertiesBox();
    propertiesBox.setVisible(false);
    root.addDesignerChangeListener(this);
    root.addDesignerChangeListener((BlocksEditor<?, ?>) projectEditor.getFileEditor(sourceNode.getEntityName(), BlocksEditor.EDITOR_TYPE));
    super.loadDesigner();
    */
  }

  @Override
  protected void unloadDesigner() {
    OdeLog.log("VREditorEditor: unloadDesigner start");
    ViewerBox viewerBox = ViewerBox.getViewerBox();
    viewerBox.setVisible(true);

    JSBox jsBox = JSBox.getJSBox();
    jsBox.setVisible(false);

    super.unloadDesigner();
  }

  protected String encodeWebViewerAsJsonString(String blocksCode) {
    //return "{\"authURL\":[\"localhost\"],\"YaVersion\":\"159\",\"Source\":\"Form\",\"Properties\":{\"$Name\":\"VRScreen1\",\"$Type\":\"Form\",\"$Version\":\"1\",\"Uuid\":\"0\",\"$Components\":[{\"$Name\":\"WebViewer1\",\"$Type\":\"WebViewer\",\"$Version\":\"6\",\"Height\":\"-2\",\"Width\":\"-2\",\"HomeUrl\":\"https://kevin-vr.github.io/vr/\",\"VRJSON\":\"" + encodeVREditorAsURIJsonString() + "\", \"Uuid\":\"1757245564\"}]}}";
    OdeLog.log("VREditorEditor: encodeWebViewerAsJsonString");
    //String jsonString = "{\"authURL\":[\"localhost\"],\"YaVersion\":\"159\",\"Source\":\"Form\",\"Properties\":{\"$Name\":\"VRScreen1\",\"$Type\":\"Form\",\"$Version\":\"1\",\"Uuid\":\"0\",\"$Components\":[{\"$Name\":\"VRWebViewer\",\"$Type\":\"VRWebViewer\",\"$Version\":\"6\",\"HomeUrl\":\"https://kevin-vr.github.io/vr/\",\"VRJSON\":\"" + encodeVREditorAsURIJsonString() + "\",\"VRJS\":\"" + blocksCode + "\", \"Uuid\":\"1757245564\"}]}}";
    String jsonString = "{\"authURL\":[\"localhost\"],\"YaVersion\":\"159\",\"Source\":\"Form\",\"Properties\":{\"$Name\":\"VRScreen1\",\"$Type\":\"Form\",\"$Version\":\"1\",\"Uuid\":\"0\",\"$Components\":[{\"$Name\":\"VRWebViewer\",\"$Type\":\"VRWebViewer\",\"$Version\":\"6\",\"HomeUrl\":\"http://localhost:8015/vr\",\"VRJSON\":\"" + encodeVREditorAsURIJsonString() + "\",\"VRJS\":\"" + blocksCode + "\", \"Uuid\":\"1757245564\"}]}}";
    OdeLog.log("jsonString: " + jsonString);
    return jsonString;
    //return "{\"authURL\":[\"localhost\"],\"YaVersion\":\"159\",\"Source\":\"Form\",\"Properties\":{\"$Name\":\"VRScreen1\",\"$Type\":\"Form\",\"$Version\":\"1\",\"Uuid\":\"0\",\"$Components\":[{\"$Name\":\"WebViewer1\",\"$Type\":\"WebViewer\",\"$Version\":\"6\",\"Height\":\"-2\",\"Width\":\"-2\",\"HomeUrl\":\"https://webvr.info/samples/03-vr-presentation.html?polyfill=1\",\"VRJSON\":\"" + encodeVREditorAsURIJsonString() + "\", \"Uuid\":\"1757245564\"}]}}";
  }

  protected String getAppName() {
    return root.getProperties().encodeAsPairs(true);
  }

  protected native String encodeVREditorAsJsonString() /*-{
    var vr_editor_iframe = $wnd.document.getElementById("vr-editor-iframe");
    return vr_editor_iframe.contentWindow.generateSceneJSONString();
  }-*/;

  protected native String encodeVREditorAsURIJsonString() /*-{
    var vr_editor_iframe = $wnd.document.getElementById("vr-editor-iframe");
    return encodeURIComponent(vr_editor_iframe.contentWindow.generateSceneJSONString());
  }-*/;

  public void loadScene() {
    OdeLog.log("VREditorEditor: loadScene");
    loadScene(this.content);
  }

  protected native void loadScene(String content) /*-{
    if (content !== "[]") {
      var vr_editor_iframe = $wnd.document.getElementById("vr-editor-iframe");
      if (typeof vr_editor_iframe.contentWindow.clearScene === "function") {
        vr_editor_iframe.contentWindow.clearScene();
        vr_editor_iframe.contentWindow.importScene(content);
      } else {
        console.log("clearScene not a function");
      }
    }
  }-*/;

  public void saveScene() {
    OdeLog.log("VREditorEditor: saveScene");
    Ode.getInstance().getEditorManager().scheduleAutoSave(this);
  }

  private native void exportMethodToJavaScript() /*-{
    $wnd.loadScene = $entry(this.@com.google.appinventor.client.editor.vr.VREditorEditor::loadScene()).bind(this);
    $wnd.saveScene = $entry(this.@com.google.appinventor.client.editor.vr.VREditorEditor::saveScene()).bind(this);
    $wnd.getProjectAssets = $entry(this.@com.google.appinventor.client.editor.vr.VREditorEditor::getProjectAssets()).bind(this);
    $wnd.getProjectIdString = $entry(this.@com.google.appinventor.client.editor.vr.VREditorEditor::getProjectIdString()).bind(this);
  }-*/;

  private String getProjectAssets() {
    String assetString = "";
    final YoungAndroidProjectNode projectRootNode = (YoungAndroidProjectNode) Ode.getInstance().getCurrentYoungAndroidProjectRootNode();
    FolderNode assetsFolder = projectRootNode.getAssetsFolder();
    for (ProjectNode node : assetsFolder.getChildren()) {
      OdeLog.log(node.getName() + " " + node.getFileId());
      assetString = assetString + "," + node.getName();
    } 
    return assetString.substring(1);
  }

  private String getProjectIdString() {
    return projectIdString;
  }

  /*`
  private com.google.gwt.json.client.JSONObject encodeComponentProperties(MockComponent component) {
    com.google.gwt.json.client.JSONObject result = new com.google.gwt.json.client.JSONObject();
    EditableProperties properties = component.getProperties();
    final String type = component.getType();
    result.put("$Name", new JSONString(properties.getPropertyValue("Name")));
    result.put("$Type", new JSONString(type));
    result.put("$Version", new JSONString(Integer.toString(componentDatabase.getComponentVersion(type))));

    com.google.gwt.json.client.JSONObject jsonProperties = properties.encodeAsJson(false, false);
    if (jsonProperties.size() > 0) {
      for (String key : jsonProperties.keySet()) {
        result.put(key, jsonProperties.get(key));
      }
    }

    List<MockComponent> children = component.getChildren();
    if (!children.isEmpty()) {
      JSONArray childrenJson = new JSONArray();
      int i = 0;
      for (MockComponent child : children) {
        childrenJson.set(i++, encodeComponentProperties(child));
      }
      result.put("$Components", childrenJson);
    }
    return result;
  }
  */
}
