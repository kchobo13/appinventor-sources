// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.
package com.google.appinventor.shared.rpc.project.vr;

import com.google.appinventor.shared.storage.StorageUtil;
import com.google.appinventor.shared.youngandroid.YoungAndroidSourceAnalyzer;

public final class VRBlocksNode extends VRSourceNode {

  public VRBlocksNode() {
  }

  /**
   * Creates a new Young Android source file project node.
   *
   * @param fileId file id
   */
  public VRBlocksNode(String fileId) {
    super(StorageUtil.basename(fileId), fileId);
  }

  public static String getBlocksFileId(String qualifiedSketchName) {
    return VR_SRC_PREFIX + qualifiedSketchName.replace('.', '/')
        + YoungAndroidSourceAnalyzer.VRVM_BLOCKS_EXTENSION;
  }
}
