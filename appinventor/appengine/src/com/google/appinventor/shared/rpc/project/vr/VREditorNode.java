// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.shared.rpc.project.vr;

import com.google.appinventor.shared.storage.StorageUtil;
import com.google.appinventor.shared.youngandroid.YoungAndroidSourceAnalyzer;

/**
 * VREditorNode is an abstract representation for a VR editor (designer).
 */
public class VREditorNode extends VRSourceNode {

  VREditorNode() {
  }

  public VREditorNode(String fileId) {
    super(StorageUtil.basename(fileId), fileId);
  }

  public static String getVREditorFileId(String qualifiedName) {
    return VR_SRC_PREFIX + qualifiedName.replace('.', '/')
        + YoungAndroidSourceAnalyzer.VREDITOR_PROPERTIES_EXTENSION;
  }
}
