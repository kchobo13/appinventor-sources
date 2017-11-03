// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reseved.

package com.google.appinventor.shared.rpc.project.vr;

import com.google.appinventor.shared.rpc.project.PackageNode;

/**
 * VR screens directory in project tree.
 */
public class VRPackageNode extends PackageNode {

  VRPackageNode() {
  }

  public VRPackageNode(String name, String packageId) {
    super(name, packageId);
  }

  public String getPackageName() {
    return getName();
  }
}
