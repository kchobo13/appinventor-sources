// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved
package com.google.appinventor.client.editor.vr;

import com.google.appinventor.client.editor.blocks.BlocklyPanel;
import com.google.appinventor.client.editor.blocks.BlocksCategory;
import com.google.appinventor.client.editor.blocks.BlocksCodeGenerationException;
import com.google.appinventor.client.editor.blocks.BlocksCodeGenerationTarget;
import com.google.appinventor.client.editor.blocks.BlocksEditor;
import com.google.appinventor.client.editor.blocks.BlocksLanguage;
import com.google.appinventor.client.editor.youngandroid.YaProjectEditor;
import com.google.appinventor.shared.rpc.project.vr.VRBlocksNode;
import com.google.appinventor.shared.youngandroid.YoungAndroidSourceAnalyzer;
import com.google.appinventor.shared.rpc.project.FileDescriptorWithContent;
import com.google.appinventor.client.output.OdeLog;
import com.google.gwt.core.client.JavaScriptObject;

/**
 * Editor for the VR Blocks files.
 */
public final class VRBlocksEditor extends BlocksEditor<VRBlocksNode, VREditorEditor> {

  private static final BlocksLanguage JAVASCRIPT =
      new BlocksLanguage("JavaScript",
          new BlocksCategory("VR_Commands", IMAGES.control()),
          new BlocksCategory("VR_Controls", IMAGES.control()),
          new BlocksCategory("VR_Events", IMAGES.procedures()),
          new BlocksCategory("VR_Logic", IMAGES.logic()),
          new BlocksCategory("VR_Math", IMAGES.math()),
          new BlocksCategory("VR_Objects", IMAGES.control()),
          new BlocksCategory("VR_Text", IMAGES.text()),
          new BlocksCategory("VR_Variables", IMAGES.variables()));
          //new BlocksCategory("Control", IMAGES.control()),
          //new BlocksCategory("Logic", IMAGES.logic()),
          //new BlocksCategory("Math", IMAGES.math()),
          //new BlocksCategory("Text", IMAGES.text()),
          //new BlocksCategory("Lists", IMAGES.lists()),
          //new BlocksCategory("Colors", IMAGES.colors()),
          //new BlocksCategory("Variables", IMAGES.variables()),
          //new BlocksCategory("Procedures", IMAGES.procedures()));

  public VRBlocksEditor(YaProjectEditor projectEditor, VRBlocksNode blocksNode) {
    super(projectEditor, blocksNode, JAVASCRIPT, BlocksCodeGenerationTarget.JAVASCRIPT,
        VREditorDatabase.getInstance(blocksNode.getProjectId()));
  }

  @Override
  public void onShow() {
    super.onShow();
    sendComponentData();
  }

  @Override
  public void onWorkspaceChange(BlocklyPanel panel, JavaScriptObject event) {
    super.onWorkspaceChange(panel, event);
    sendComponentData();
  }

  public synchronized void sendComponentData() {
    OdeLog.log("VRBlocksEditor: sendComponentData");
    try {
      blocksArea.sendComponentData(designer.encodeWebViewerAsJsonString(blocksArea.getBlocksCode()),
          packageNameFromPath(getFileId()));
    } catch (BlocksCodeGenerationException e) {
      e.printStackTrace();
    }
  }

  @Override
  public void prepareForUnload() {

  }

  public FileDescriptorWithContent getYail() throws BlocksCodeGenerationException {
    OdeLog.log("VRBlocksEditor: getYail start");
    OdeLog.log("project id: " + getProjectId());
    String screenName = getFileId().substring(3, getFileId().length() - 4);
    OdeLog.log("yail filename: " + yailFileName());
    OdeLog.log("designer appname: " + designer.getAppName());
    String code = "#|\n$Source $Yail\n|#\n\n(define-form appinventor.ai_test.qqq." + screenName + " " + screenName + ")\n(require <com.google.youngandroid.runtime>)\n\n;;; " + screenName + "\n\n(do-after-form-creation (set-and-coerce-property! '" + screenName + " 'AppName \"test\" 'text)\n (set-and-coerce-property! '" + screenName + " 'Title \"" + screenName + "\" 'text)\n)\n\n;;; WebViewer1\n\n(add-component " + screenName + " com.google.appinventor.components.runtime.WebViewer WebViewer1 \n(set-and-coerce-property! 'WebViewer1 'HomeUrl \"google.com\" 'text)\n\n)\n\n(init-runtime)";
    OdeLog.log("code: " + code);
    //return new FileDescriptorWithContent(getProjectId(), yailFileName(), code);
    //    blocksArea.getCode(designer.encodeWebViewerAsJsonString(),
    //        packageNameFromPath(getFileId())));
    return new FileDescriptorWithContent(getProjectId(), yailFileName(),
        blocksArea.getCode(designer.encodeWebViewerAsJsonString(blocksArea.getBlocksCode()),
            packageNameFromPath(getFileId())));
  }

  /**
   * Converts a source file path (e.g.,
   * src/com/gmail/username/project1/Form.extension) into a package
   * name (e.g., com.gmail.username.project1.Form)
   * @param path the path to convert.
   * @return a dot separated package name.
   */
  private static String packageNameFromPath(String path) {
    path = path.replaceFirst("src/", "");
    int extensionIndex = path.lastIndexOf(".");
    if (extensionIndex != -1) {
      path = path.substring(0, extensionIndex);
    }
    return path.replaceAll("/", ".");
  }

  private String yailFileName() {
    String fileId = getFileId();
    OdeLog.log("fileId is " + fileId);
    OdeLog.log("from " + YoungAndroidSourceAnalyzer.JAVASCRIPT_BLOCKS_EXTENSION + " to " + YoungAndroidSourceAnalyzer.YAIL_FILE_EXTENSION);
    return fileId.replace(YoungAndroidSourceAnalyzer.JAVASCRIPT_BLOCKS_EXTENSION,
        YoungAndroidSourceAnalyzer.YAIL_FILE_EXTENSION);
  }

  @Override
  public void startRepl(boolean alreadyRunning, boolean forEmulator, boolean forUsb) {
    blocksArea.startRepl(alreadyRunning, forEmulator, forUsb);
  }

  public void hardReset() {
    blocksArea.hardReset();
  }

  @Override
  public void updateCompanion() {
    blocksArea.updateCompanion();
  }

}
