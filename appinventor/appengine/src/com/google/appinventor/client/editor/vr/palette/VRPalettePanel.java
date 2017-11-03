// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.client.editor.vr.palette;

import com.google.appinventor.client.editor.simple.SimpleComponentDatabase;
import com.google.appinventor.client.editor.vr.VREditorEditor;
import com.google.appinventor.client.editor.simple.palette.SimplePalettePanel;
import com.google.appinventor.client.editor.simple.palette.AbstractPalettePanel;
import com.google.appinventor.components.common.ComponentCategory;

/**
 * Blank panel.
 */
public class VRPalettePanel extends AbstractPalettePanel<SimpleComponentDatabase, VREditorEditor> {

  public VRPalettePanel(VREditorEditor editor) {
    super(editor, new VRComponentFactory(editor));
  }

  // AbstractPalettePanel implementation
  @Override
  public SimplePalettePanel copy() {
    VRPalettePanel copy = new VRPalettePanel(editor);
    copy.setSize("100%", "100%");
    return copy;
  }
}
