// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 MIT, All rights reserved.

package com.google.appinventor.client.editor.vr;

import com.google.appinventor.client.Ode;
import com.google.appinventor.client.editor.simple.ComponentDatabase;
import com.google.appinventor.client.properties.json.ClientJsonParser;
import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

import java.util.HashMap;
import java.util.Map;

public final class VREditorDatabase extends ComponentDatabase {

  private static final Map<Long, VREditorDatabase> instances =
    new HashMap<Long, VREditorDatabase>();

  public static VREditorDatabase getInstance(long projectId) {
    if (instances.containsKey(projectId)) {
      return instances.get(projectId);
    }
    VREditorDatabase db = new VREditorDatabase();
    instances.put(projectId, db);
    return db;
  }

  public static VREditorDatabase getInstance() {
    return getInstance(Ode.getInstance().getCurrentYoungAndroidProjectId());
  }

  public interface VREditorScreen extends ClientBundle {
    //@Source("com/google/appinventor/vreditor.json")
    @Source("com/google/appinventor/simple_components.json")
    TextResource getVREditorScreen();
  }

  private static final VREditorScreen vrEditorScreen = GWT.create(VREditorScreen.class);

  private VREditorDatabase() {
    super(new ClientJsonParser().parse(vrEditorScreen.getVREditorScreen().getText()).asArray());
  }

}
