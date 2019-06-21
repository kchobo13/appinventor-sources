// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.client.editor.youngandroid;

import com.google.appinventor.client.editor.ProjectEditor;
import com.google.appinventor.client.editor.simple.SimpleNonVisibleComponentsPanel;
import com.google.appinventor.client.editor.simple.SimpleVisibleComponentsPanel;
import com.google.appinventor.client.editor.simple.components.MockForm;
import com.google.appinventor.shared.settings.SettingsConstants;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

import static com.google.appinventor.client.Ode.MESSAGES;

/**
 * An implementation of SimpleVisibleComponentsPanel for the MockForm designer.
 *
 * @author ewpatton@mit.edu (Evan W. Patton)
 */
public class YaVisibleComponentsPanel extends SimpleVisibleComponentsPanel<MockForm> {
  // UI elements
  private final VerticalPanel phoneScreen;
  private final CheckBox checkboxShowHiddenComponents;
  private final ListBox listboxPhoneTablet; // A ListBox for Phone/Tablet/Monitor preview sizes
  private final int[][] drop_lst = { {320, 505}, {480, 675}, {768, 1024} };
  private final ProjectEditor projectEditor;

  /**
   * Creates new component design panel for visible components.
   *
   * @param projectEditor
   * @param nonVisibleComponentsPanel corresponding panel for non-visible
   */
  public YaVisibleComponentsPanel(final ProjectEditor projectEditor,
                                  SimpleNonVisibleComponentsPanel<MockForm> nonVisibleComponentsPanel) {
    super(nonVisibleComponentsPanel);
    this.projectEditor = projectEditor;

    // Initialize UI
    phoneScreen = new VerticalPanel();
    phoneScreen.setStylePrimaryName("ode-SimpleFormDesigner");

    checkboxShowHiddenComponents = new CheckBox(MESSAGES.showHiddenComponentsCheckbox()) {
      @Override
      protected void onLoad() {
        // onLoad is called immediately after a widget becomes attached to the browser's document.
        boolean showHiddenComponents = Boolean.parseBoolean(
            projectEditor.getProjectSettingsProperty(
                SettingsConstants.PROJECT_YOUNG_ANDROID_SETTINGS,
                SettingsConstants.YOUNG_ANDROID_SETTINGS_SHOW_HIDDEN_COMPONENTS));
        checkboxShowHiddenComponents.setValue(showHiddenComponents);
      }
    };
    checkboxShowHiddenComponents.addValueChangeHandler(new ValueChangeHandler<Boolean>() {
      @Override
      public void onValueChange(ValueChangeEvent<Boolean> event) {
        boolean isChecked = event.getValue(); // auto-unbox from Boolean to boolean
        projectEditor.changeProjectSettingsProperty(
            SettingsConstants.PROJECT_YOUNG_ANDROID_SETTINGS,
            SettingsConstants.YOUNG_ANDROID_SETTINGS_SHOW_HIDDEN_COMPONENTS,
            isChecked ? "True" : "False");
        if (root != null) {
          root.refresh();
        }
      }
    });
    phoneScreen.add(checkboxShowHiddenComponents);

    listboxPhoneTablet = new ListBox() {
      @Override
      protected void onLoad() {
        // onLoad is called immediately after a widget becomes attached to the browser's document.
        String sizing = projectEditor.getProjectSettingsProperty(SettingsConstants.PROJECT_YOUNG_ANDROID_SETTINGS,
            SettingsConstants.YOUNG_ANDROID_SETTINGS_SIZING);
        boolean fixed = (sizing.equals("Fixed"));
        listboxPhoneTablet.setVisible(!fixed);
        if (fixed) {
          changeFormPreviewSize(0, 320, 505);
        } else {
          getUserSettingChangeSize();
        }
      }
    };
    listboxPhoneTablet.addItem("Phone size");
    listboxPhoneTablet.addItem("Tablet size");
    listboxPhoneTablet.addItem("Monitor size");
    listboxPhoneTablet.addChangeHandler(new ChangeHandler() {
      @Override
      public void onChange(ChangeEvent event) {
        int idx = listboxPhoneTablet.getSelectedIndex();
        int width = drop_lst[idx][0];
        int height = drop_lst[idx][1];
        String val = Integer.toString(idx) + "," + Integer.toString(width) + "," + Integer.toString(height);
        // here, we can change settings by putting val into it
        projectEditor.changeProjectSettingsProperty(SettingsConstants.PROJECT_YOUNG_ANDROID_SETTINGS,
            SettingsConstants.YOUNG_ANDROID_SETTINGS_PHONE_TABLET, val);
        changeFormPreviewSize(idx, width, height);
      }
    });

    phoneScreen.add(listboxPhoneTablet);

    initWidget(phoneScreen);
  }

  /**
   * Associates a Simple root component with this panel.
   *
   * @param form  backing mocked root component
   */
  @Override
  public void setRoot(MockForm form) {
    this.root = form;
    phoneScreen.add(form);
  }

  // get width and height stored in user settings, and change the preview size.
  private void getUserSettingChangeSize() {
    String val = projectEditor.getProjectSettingsProperty(SettingsConstants.PROJECT_YOUNG_ANDROID_SETTINGS,
        SettingsConstants.YOUNG_ANDROID_SETTINGS_PHONE_TABLET);
    int idx = 0;
    int width = 320;
    int height = 505;

    if (val.equals("True")) {
      idx = 1;
      width = drop_lst[idx][0];
      height = drop_lst[idx][1];
    }

    String[] parts = val.split(",");
    if (parts.length == 3) {
      idx = Integer.parseInt(parts[0]);
      width = Integer.parseInt(parts[1]);
      height = Integer.parseInt(parts[2]);
    }
    listboxPhoneTablet.setItemSelected(idx, true);
    changeFormPreviewSize(idx, width, height);
  }

  private void changeFormPreviewSize(int idx, int width, int height) {
    if (root != null) {
      root.changePreviewSize(width, height);
      String info = " (" + height + "," + width + ")";
      if (idx == 0) {
        listboxPhoneTablet.setItemText(idx, MESSAGES.previewPhoneSize() + info);
        listboxPhoneTablet.setItemText(1, MESSAGES.previewTabletSize());
        listboxPhoneTablet.setItemText(2, MESSAGES.previewMonitorSize());
      } else if (idx == 1) {
        listboxPhoneTablet.setItemText(idx, MESSAGES.previewTabletSize() + info);
        listboxPhoneTablet.setItemText(0, MESSAGES.previewPhoneSize());
        listboxPhoneTablet.setItemText(2, MESSAGES.previewMonitorSize());

      } else {
        listboxPhoneTablet.setItemText(idx, MESSAGES.previewMonitorSize() + info);
        listboxPhoneTablet.setItemText(0, MESSAGES.previewPhoneSize());
        listboxPhoneTablet.setItemText(1, MESSAGES.previewTabletSize());
      }
      // change settings
    }
  }

  public void enableTabletPreviewCheckBox(boolean enable){
    if (root != null){
      if (!enable){
        changeFormPreviewSize(0, 320, 505);
        listboxPhoneTablet.setVisible(enable);
      } else {
        getUserSettingChangeSize();
        listboxPhoneTablet.setVisible(enable);
      }
    }
    listboxPhoneTablet.setEnabled(enable);
  }
}
