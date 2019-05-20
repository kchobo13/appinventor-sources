// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.shared.rpc.project.vr;

import com.google.appinventor.shared.rpc.project.SourceNode;
import com.google.appinventor.shared.youngandroid.YoungAndroidSourceAnalyzer;

/**
 * Base class for all VR related source objects.
 */
public class VRSourceNode extends SourceNode {
  private static final String NAMESPACE = "vr:";

  protected static final String VR_SRC_PREFIX = YoungAndroidSourceAnalyzer.VR_SRC_FOLDER + '/';

  VRSourceNode() {
  }

  VRSourceNode(String name, String fileId) {
    super(name, fileId);
  }

  public static String getPrefixedVRScreenName(String name) {
    if (name.startsWith(NAMESPACE)) {
      return name;
    } else {
      return NAMESPACE + name;
    }
  }

  public static String getVRScreenDisplayName(String name) {
    if (name.startsWith(NAMESPACE)) {
      return name.substring(NAMESPACE.length());
    } else {
      return name;
    }
  }

  public static boolean isVRScreen(String id) {
    return id.startsWith(NAMESPACE);
  }
}
