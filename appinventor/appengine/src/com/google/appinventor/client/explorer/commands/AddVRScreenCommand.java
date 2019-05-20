// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

package com.google.appinventor.client.explorer.commands;

import com.google.appinventor.client.DesignToolbar;
import com.google.appinventor.client.DesignToolbar.View;
import com.google.appinventor.client.Ode;
import com.google.appinventor.client.OdeAsyncCallback;
import com.google.appinventor.client.editor.FileEditor;
import com.google.appinventor.client.editor.ProjectEditor;
import com.google.appinventor.client.explorer.project.Project;
import com.google.appinventor.client.widgets.LabeledTextBox;
import com.google.appinventor.client.youngandroid.TextValidators;
import com.google.appinventor.shared.rpc.project.ProjectNode;
import com.google.appinventor.shared.rpc.project.vr.VRBlocksNode;
import com.google.appinventor.shared.rpc.project.vr.VREditorNode;
import com.google.appinventor.shared.rpc.project.vr.VRSourceFolderNode;
import com.google.appinventor.shared.rpc.project.vr.VRSourceNode;
import com.google.appinventor.shared.rpc.project.youngandroid.YoungAndroidProjectNode;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.appinventor.client.output.OdeLog;

import java.util.HashSet;
import java.util.Set;

import static com.google.appinventor.client.Ode.MESSAGES;

public class AddVRScreenCommand extends ChainableCommand {
  public AddVRScreenCommand() {
  }

  @Override
  protected boolean willCallExecuteNextCommand() {
    return true;
  }

  @Override
  protected void execute(ProjectNode node) {
    if (node instanceof YoungAndroidProjectNode) {
      new NewVRScreenDialog((YoungAndroidProjectNode) node).center();
    } else {
      executionFailedOrCanceled();
      throw new IllegalArgumentException("node must be a YoungAndroidProjectNode");
    }
  }

  private class NewVRScreenDialog extends DialogBox {
    private final LabeledTextBox newNameTextBox;

    private final Set<String> otherVRScreenNames;

    NewVRScreenDialog(final YoungAndroidProjectNode projectRootNode) {
      super(false, true);

      setStylePrimaryName("ode-DialogBox");
      setText(MESSAGES.newVRScreenTitle());
      VerticalPanel contentPanel = new VerticalPanel();

      final String prefix = "VRScreen";
      final int prefixLength = prefix.length();
      int highIndex = 0;
      otherVRScreenNames = new HashSet<>();

      for (ProjectNode source : projectRootNode.getAllSourceNodes()) {
        if (source instanceof VREditorNode) {
          String vrScreenName = ((VREditorNode) source).getEntityName();
          otherVRScreenNames.add(vrScreenName);

          if (vrScreenName.startsWith(prefix)) {
            try {
              highIndex = Math.max(highIndex, Integer.parseInt(vrScreenName.substring(prefixLength)));
            } catch (NumberFormatException e) {
              continue;
            }
          }
        }
      }

      String defaultVRScreenName = prefix + (highIndex + 1);

      newNameTextBox = new LabeledTextBox(MESSAGES.vrScreenNameLabel());
      newNameTextBox.setText(defaultVRScreenName);
      newNameTextBox.getTextBox().addKeyUpHandler(new KeyUpHandler() {
        @Override
        public void onKeyUp(KeyUpEvent event) {
          int keyCode = event.getNativeKeyCode();
          if (keyCode == KeyCodes.KEY_ENTER) {
            handleOkClick(projectRootNode);
          } else if (keyCode == KeyCodes.KEY_ESCAPE) {
            hide();
            executionFailedOrCanceled();
          }
        }
      });
      contentPanel.add(newNameTextBox);

      String cancelText = MESSAGES.cancelButton();
      String okText = MESSAGES.okButton();

      Button cancelButton = new Button(cancelText);
      cancelButton.addClickHandler(new ClickHandler() {
        @Override
        public void onClick(ClickEvent event) {
          hide();
          executionFailedOrCanceled();
        }
      });
      Button okButton = new Button(okText);
      okButton.addClickHandler(new ClickHandler() {
        @Override
        public void onClick(ClickEvent event) {
          handleOkClick(projectRootNode);
        }
      });
      HorizontalPanel buttonPanel = new HorizontalPanel();
      buttonPanel.add(cancelButton);
      buttonPanel.add(okButton);
      buttonPanel.setSize("100%", "24px");
      contentPanel.add(buttonPanel);
      contentPanel.setSize("320px", "100%");

      add(contentPanel);
    }

    private void handleOkClick(YoungAndroidProjectNode projectRootNode) {
      String newVRScreenName = newNameTextBox.getText();
      if (validate(newVRScreenName)) {
        hide();
        addVRScreenAction(projectRootNode, newVRScreenName);
      } else {
        newNameTextBox.setFocus(true);
      }
    }

    private boolean validate(String newVRScreenName) {
      if (!TextValidators.isValidIdentifier(newVRScreenName)) {
        Window.alert(MESSAGES.malformedFormNameError());
        return false;
      }

      if (otherVRScreenNames.contains(newVRScreenName)) {
        Window.alert(MESSAGES.duplicateFormNameError());
        return false;
      }

      return true;
    }

    protected void addVRScreenAction(final YoungAndroidProjectNode projectRootNode,
                                   final String vrScreenName) {
      OdeLog.log("AddVRScreenCommand: addVRScreenAction start");
      final Ode ode = Ode.getInstance();
      final VRSourceFolderNode packageNode = projectRootNode.getVRPackageNode();
      final String vrScreenFileId = VREditorNode.getVREditorFileId(vrScreenName);
      final String blocksFileId = VRBlocksNode.getBlocksFileId(vrScreenName);
      final String vrScreenId = VRSourceNode.getPrefixedVRScreenName(vrScreenName);

      OdeAsyncCallback<Long> callback = new OdeAsyncCallback<Long>(MESSAGES.addVRScreenError()) {
        @Override
        public void onSuccess(Long modDate) {
          ode.updateModificationDate(projectRootNode.getProjectId(), modDate);

          final Project project = ode.getProjectManager().getProject(projectRootNode);
          project.addNode(packageNode, new VREditorNode(vrScreenFileId));
          project.addNode(packageNode, new VRBlocksNode(blocksFileId));

          Scheduler.get().scheduleDeferred(new ScheduledCommand() {
            @Override
            public void execute() {
              ProjectEditor projectEditor =
                  ode.getEditorManager().getOpenProjectEditor(project.getProjectId());
              FileEditor designer = projectEditor.getFileEditor(vrScreenFileId);
              FileEditor blocks = projectEditor.getFileEditor(blocksFileId);
              if (designer != null && blocks != null && !ode.screensLocked()) {
                DesignToolbar designToolbar = ode.getDesignToolbar();
                long projectId = designer.getProjectId();
                designToolbar.addVRScreen(projectId, vrScreenId, designer, blocks);
                designToolbar.switchToVRScreen(projectId, vrScreenId, View.DESIGNER);
                executeNextCommand(projectRootNode);
              } else {
                Scheduler.get().scheduleDeferred(this);
              }
            }
          });
        }

        @Override
        public void onFailure(Throwable caught) {
          super.onFailure(caught);
          executionFailedOrCanceled();
        }
      };

      OdeLog.log("adding file");
      ode.getProjectService().addFile(projectRootNode.getProjectId(), vrScreenFileId, callback);
    }
  }
}
