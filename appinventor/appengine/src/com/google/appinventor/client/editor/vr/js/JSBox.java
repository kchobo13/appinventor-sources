// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

package com.google.appinventor.client.editor.vr.js;

import static com.google.appinventor.client.Ode.MESSAGES;
import com.google.appinventor.client.widgets.boxes.Box;

/**
 * Box implementation for source structure explorer.
 *
 */
public final class JSBox extends Box {
  private static final JSBox INSTANCE = new JSBox();

  private final JSPanel jsPanel;

  public static JSBox getJSBox() {
    return INSTANCE;
  }

  private JSBox() {
    super("VR Editor", 300, false, false);
    jsPanel = new JSPanel();
    setContent(jsPanel);
  }

  public JSPanel getJSPanel() {
    return jsPanel;
  }
}
