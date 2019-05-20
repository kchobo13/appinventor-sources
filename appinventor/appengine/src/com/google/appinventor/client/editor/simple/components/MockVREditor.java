package com.google.appinventor.client.editor.simple.components;

import com.google.appinventor.client.Ode;
import com.google.appinventor.client.editor.simple.SimpleEditor;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.appinventor.client.widgets.boxes.Box;
import com.google.appinventor.client.editor.vr.js.JSBox;
import com.google.appinventor.components.common.ComponentConstants;


public class MockVREditor extends MockDesignerRoot {
  public static final String TYPE = "VREditor";

  public MockVREditor(SimpleEditor editor) {
    super(editor, TYPE, Ode.getImageBundle().bluetooth(), new MockHVLayout(ComponentConstants.LAYOUT_ORIENTATION_VERTICAL));

    VerticalPanel verticalPanel = new VerticalPanel();
    /*
    Box jsBox = JSBox.getJSBox();
    verticalPanel.add(jsBox);
    */
    verticalPanel.add(getRootPanel());
    initComponent(verticalPanel);
  }

  @Override
  public void refresh() {
  }
}
