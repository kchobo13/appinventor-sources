// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// This work is licensed under a Creative Commons Attribution 3.0 Unported License.

package com.google.appinventor.components.runtime.util;
import java.util.Properties;
import java.lang.StringBuffer;
import java.io.InputStream;
import java.io.File;
import java.io.IOException;
import java.net.Socket;
import java.net.URL;

import android.content.res.AssetManager;
import android.util.Log;

public class VRHTTPD extends NanoHTTPD {

  private File rootDir;

  public VRHTTPD(int port, File wwwroot) throws IOException {
    super(port, wwwroot);
    this.rootDir = wwwroot;
  }

  public Response serve(String uri, String method, Properties header, Properties params, Properties files, Socket mySocket) {
    if (uri.equals("/vr")) {
      try {
        URL url = new URL("https://raw.githubusercontent.com/kevin-vr/vr/master/vr-combined.html");
        InputStream is = url.openStream();
        int ptr = 0;
        StringBuffer buffer = new StringBuffer();
        while ((ptr = is.read()) != -1) {
          buffer.append((char)ptr);
        }
        is.close();
      /*
      try {
        BufferedReader reader = null;
        try {
          reader = new BufferedReader(new InputStreamReader(assetManager.open(filesDir + "/vr-combined.html")));
        } catch (IOException ioe) {
          Log.v("VRHTTPD", ioe.toString());
        }
        String line = "";
        while ((line = reader.readLine()) != null) {
          html += line;
        }
        reader.close();
      } catch (IOException ioe) {
        Log.v("VRHTTPD", ioe.toString());
      }
      */
        Response res = new Response(HTTP_OK, MIME_HTML, buffer.toString());
        return res;
      } catch (IOException ioe) {
        Log.v("VRHTTPD", ioe.toString());
      }
    }
    return serveFile(uri, header, rootDir, true);
  }
}
