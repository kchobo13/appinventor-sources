// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.shared.rpc.project.vr;

import com.google.appinventor.shared.rpc.project.SourceFolderNode;

/**
 * VR source folder node in project tree.
 */
public class VRSourceFolderNode extends SourceFolderNode {
  private static final long serialVersionUID = 1L;

  /**
   * Serialization constructor.
   */
  VRSourceFolderNode() {
    super(null, null);
  }

  /**
   * Creates a new source folder node.
   */
  public VRSourceFolderNode(String fileId) {
    super("VRScreens", fileId);
  }
}
