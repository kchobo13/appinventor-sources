// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.client.editor.vr.palette;

import com.google.appinventor.client.editor.designer.DesignerEditor;
import com.google.appinventor.client.editor.simple.palette.BaseComponentFactory;
import com.google.common.collect.Maps;
import com.google.gwt.resources.client.ImageResource;

import java.util.Map;

/**
 * ComponentFactory implementation for VR.
 */
class VRComponentFactory extends BaseComponentFactory {

  private static Map<String, ImageResource> bundledImages;

  static {
    bundledImages = Maps.newHashMap();
  }

  VRComponentFactory(DesignerEditor<?, ?, ?, ?> editor) {
    super(editor, bundledImages);
  }
}
