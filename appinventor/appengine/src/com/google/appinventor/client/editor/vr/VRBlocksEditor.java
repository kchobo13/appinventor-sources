// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved
package com.google.appinventor.client.editor.vr;

import com.google.appinventor.client.editor.blocks.BlocksCategory;
import com.google.appinventor.client.editor.blocks.BlocksCodeGenerationTarget;
import com.google.appinventor.client.editor.blocks.BlocksEditor;
import com.google.appinventor.client.editor.blocks.BlocksLanguage;
import com.google.appinventor.client.editor.youngandroid.YaProjectEditor;
import com.google.appinventor.shared.rpc.project.vr.VRBlocksNode;
import com.google.appinventor.client.editor.simple.SimpleComponentDatabase;

/**
 * Editor for the VR Blocks files.
 */
public final class VRBlocksEditor extends BlocksEditor<VRBlocksNode, VREditorEditor> {

  /*
  private static final BlocksLanguage VR =
      new BlocksLanguage("VR");

  public VRBlocksEditor(YaProjectEditor projectEditor, VRBlocksNode blocksNode) {
    super(projectEditor, blocksNode, VR, BlocksCodeGenerationTarget.VRVM,
        SimpleComponentDatabase.getInstance(blocksNode.getProjectId()));
  }
  */

  private static final BlocksLanguage YAIL =
      new BlocksLanguage("Yail");

  public VRBlocksEditor(YaProjectEditor projectEditor, VRBlocksNode blocksNode) {
    super(projectEditor, blocksNode, YAIL, BlocksCodeGenerationTarget.YAIL,
        SimpleComponentDatabase.getInstance(blocksNode.getProjectId()));
  }

  @Override
  public void prepareForUnload() {

  }

}
