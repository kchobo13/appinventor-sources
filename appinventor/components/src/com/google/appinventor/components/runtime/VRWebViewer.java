// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

package com.google.appinventor.components.runtime;

import java.io.File;
import java.io.IOException;

import android.content.Context;
import android.webkit.JavascriptInterface;
import com.google.appinventor.components.annotations.DesignerComponent;
import com.google.appinventor.components.annotations.DesignerProperty;
import com.google.appinventor.components.annotations.PropertyCategory;
import com.google.appinventor.components.annotations.SimpleFunction;
import com.google.appinventor.components.annotations.SimpleObject;
import com.google.appinventor.components.annotations.SimpleProperty;
import com.google.appinventor.components.annotations.UsesAssets;
import com.google.appinventor.components.annotations.UsesPermissions;
import com.google.appinventor.components.common.ComponentCategory;
import com.google.appinventor.components.common.PropertyTypeConstants;
import com.google.appinventor.components.common.YaVersion;

import com.google.appinventor.components.runtime.util.EclairUtil;
import com.google.appinventor.components.runtime.util.FroyoUtil;
import com.google.appinventor.components.runtime.util.SdkLevel;
import com.google.appinventor.components.runtime.util.VRHTTPD;

import com.google.appinventor.components.runtime.Form;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;

import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.widget.FrameLayout;
import android.content.pm.ActivityInfo;
import android.util.Log;
import android.content.res.AssetManager;

/**
 * Component for displaying web pages
 * This is a very limited form of browser.  You can view web pages and
 * click on links. It also handles  Javascript. There are lots of things that could be added,
 * but this component is mostly for viewing individual pages.  It's not intended to take
 * the place of the browser.
 *
 * @author halabelson@google.com (Hal Abelson)
 */

@DesignerComponent(version = YaVersion.WEBVIEWER_COMPONENT_VERSION,
    category = ComponentCategory.USERINTERFACE,
    description = "Component for viewing Web pages.  The Home URL can be " +
        "specified in the Designer or in the Blocks Editor.  The view can be set " +
        "to follow links when they are tapped, and users can fill in Web forms. " +
        "Warning: This is not a full browser.  For example, pressing the phone's " +
        "hardware Back key will exit the app, rather than move back in the " +
        "browser history." +
        "<p />You can use the WebViewer.WebViewString property to communicate " +
        "between your app and Javascript code running in the Webviewer page. " +
        "In the app, you get and set WebViewString.  " +
        "In the WebViewer, you include Javascript that references the window.AppInventor " +
        "object, using the methoods </em getWebViewString()</em> and <em>setWebViewString(text)</em>.  " +
        "<p />For example, if the WebViewer opens to a page that contains the Javascript command " +
        "<br /> <em>document.write(\"The answer is\" + window.AppInventor.getWebViewString());</em> " +
        "<br />and if you set WebView.WebVewString to \"hello\", then the web page will show " +
        "</br ><em>The answer is hello</em>.  " +
        "<br />And if the Web page contains Javascript that executes the command " +
        "<br /><em>window.AppInventor.setWebViewString(\"hello from Javascript\")</em>, " +
        "<br />then the value of the WebViewString property will be " +
        "<br /><em>hello from Javascript</em>. ")

// TODO(halabelson): Integrate control of the Back key, when we provide it

@SimpleObject
@UsesAssets(fileNames = "ya.png")
@UsesPermissions(permissionNames = "android.permission.INTERNET")
public final class VRWebViewer extends AndroidViewComponent {

  private final WebView webview;

  // URL for the WebViewer to load initially
  private String homeUrl;

  private String vrJSON;
  private String vrJS;

  // whether or not to follow links when they are tapped
  private boolean followLinks = true;

  // Whether or not to prompt for permission in the WebViewer
  private boolean prompt = true;

  // ignore SSL Errors (mostly certificate errors. When set
  // self signed certificates should work.

  private boolean ignoreSslErrors = false;

  private static VRHTTPD httpdServer = null;
  //private static final String VR_ASSET_DIR = "/data/user/0/edu.mit.appinventor.aicompanion3/";
  private static final String VR_ASSET_DIR = "/sdcard/AppInventor/assets/";

  // allows passing strings to javascript
  WebViewInterface wvInterface;

  private ComponentContainer webContainer;

  /**
   * Creates a new WebViewer component.
   *
   * @param container  container the component will be placed in
   */
  public VRWebViewer(ComponentContainer container) {
    super(container);

    webContainer = container;
    webview = new WebView(container.$context());
    resetWebViewClient();       // Set up the web view client
    WebSettings webSettings = webview.getSettings();
    webSettings.setJavaScriptEnabled(true);
    webSettings.setDomStorageEnabled(true);
    webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
    // webview.setFocusable(true);
    // adds a way to send strings to the javascript
    wvInterface = new WebViewInterface(webview.getContext());
    webview.addJavascriptInterface(wvInterface, "AppInventor");
    // enable pinch zooming and zoom controls
    // webSettings.setBuiltInZoomControls(true);
    // webSettings.setDisplayZoomControls(false);

    // if (SdkLevel.getLevel() >= SdkLevel.LEVEL_ECLAIR)
    //   EclairUtil.setupWebViewGeoLoc(this, webview, container.$context());

    container.$add(this);

    /*
    webview.setOnTouchListener(new View.OnTouchListener() {
      @Override
      public boolean onTouch(View v, MotionEvent event) {
        switch (event.getAction()) {
          case MotionEvent.ACTION_DOWN:
          case MotionEvent.ACTION_UP:
            if (!v.hasFocus()) {
              v.requestFocus();
            }
            break;
        }
        return false;
      }
    });
    */

    // set the initial default properties.  Height and Width
    // will be fill-parent, which will be the default for the web viewer.

    //HomeUrl("");
    Width(LENGTH_FILL_PARENT);
    Height(LENGTH_FILL_PARENT);

    startHTTPD();
  }

  public void startHTTPD() {
    try {
      if (httpdServer == null) {
        checkAssetDir();
        httpdServer = new VRHTTPD(8015, new File(VR_ASSET_DIR));
        Log.v("VRWebViewer", "startHTTPD");
      }
    } catch (IOException ex) {
      Log.v("VRWebViewer", "not working: " + ex.toString());
    }
  }

  private void checkAssetDir() {
    File f = new File(VR_ASSET_DIR);
    if (!f.exists()) {
      f.mkdirs();
    }
  }

  /**
   * Gets the web view string
   *
   * @return string
   */
  @SimpleProperty(description = "Gets the WebView's String, which is viewable through " +
      "Javascript in the WebView as the window.AppInventor object",
      category = PropertyCategory.BEHAVIOR)
  public String WebViewString() {
    return wvInterface.getWebViewString();
  }

  /**
   * Sets the web view string
   */
  @SimpleProperty(category = PropertyCategory.BEHAVIOR)
  public void WebViewString(String newString) {
    wvInterface.setWebViewString(newString);
  }

  /**
   * Gets the private web view string
   *
   * @return string
   */
  @SimpleProperty(description = "", category = PropertyCategory.BEHAVIOR)
  public String PrivateWebViewString() {
    return wvInterface.getPrivateWebViewString();
  }

  /**
   * Sets the private web view string
   */
  @SimpleProperty(category = PropertyCategory.BEHAVIOR)
  public void PrivateWebViewString(String newString) {
    wvInterface.setPrivateWebViewString(newString);
  }

  @Override
  public View getView() {
    return webview;
  }

  // Create a class so we can override the default link following behavior.
  // The handler doesn't do anything on its own.  But returning true means that
  // this do nothing will override the default WebVew behavior.  Returning
  // false means to let the WebView handle the Url.  In other words, returning
  // true will not follow the link, and returning false will follow the link.
  private class WebViewerClient extends WebViewClient {
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
      return !followLinks;
    }
  }

  // Components don't normally override Width and Height, but we do it here so that
  // the automatic width and height will be fill parent.
  @Override
  @SimpleProperty()
  public void Width(int width) {
    if (width == LENGTH_PREFERRED) {
      width = LENGTH_FILL_PARENT;
    }
    super.Width(width);
  }

  @Override
  @SimpleProperty()
  public void Height(int height) {
    if (height == LENGTH_PREFERRED) {
      height = LENGTH_FILL_PARENT;
    }
    super.Height(height);
  }


  /**
   * Returns the URL of the page the WebVewier should load
   *
   * @return URL of the page the WebVewier should load
   */
  @SimpleProperty(
      description = "URL of the page the WebViewer should initially open to.  " +
          "Setting this will load the page.",
      category = PropertyCategory.BEHAVIOR)
  public String HomeUrl() {
    return homeUrl;
  }

  /**
   * Specifies the URL of the page the WebVewier should load
   *
   * @param url URL of the page the WebVewier should load
   */
  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_STRING,
      defaultValue = "")
  @SimpleProperty()
  public void HomeUrl(String url) {
    homeUrl = url;
    // clear the history, since changing Home is a kind of reset
    webview.clearHistory();
    webview.loadUrl(homeUrl);
  }

  @SimpleProperty(description = "", category = PropertyCategory.BEHAVIOR)
  public String VRJSON() {
    return vrJSON;
  }

  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_STRING,
      defaultValue = "")
  @SimpleProperty()
  public void VRJSON(String json) {
    Log.v("WEBWEB", "VRJSON called");
    vrJSON = json;
    PrivateWebViewString(json);
    // initialJS = "javascript:start(\"" + json + "\");";
    // webview.loadUrl("javascript:alert('hi!')");
  }

  @SimpleProperty(description = "", category = PropertyCategory.BEHAVIOR)
  public String VRJS() {
    return vrJS;
  }

  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_STRING,
      defaultValue = "")
  @SimpleProperty()
  public void VRJS(String js) {
    Log.v("WEBWEB", "VRJS called");
    vrJS = js;
    String jsUrl = "eval(decodeURIComponent(\"" + js + "\"))";
    Log.v("WEBWEB", "js: " + jsUrl);
    webview.evaluateJavascript(jsUrl, null);
  }

  /**
   * Returns the URL currently being viewed
   *
   * @return URL of the page being viewed
   */
  @SimpleProperty(
      description = "URL of the page currently viewed.   This could be different from the " +
          "Home URL if new pages were visited by following links.",
      category = PropertyCategory.BEHAVIOR)
  public String CurrentUrl() {
    return (webview.getUrl() == null) ? "" : webview.getUrl();
  }

  /**
   * Returns the title of the page currently being viewed
   *
   * @return title of the page being viewed
   */
  @SimpleProperty(
      description = "Title of the page currently viewed",
      category = PropertyCategory.BEHAVIOR)
  public String CurrentPageTitle() {
    return (webview.getTitle() == null) ? "" : webview.getTitle();
  }


  /** Indicates whether to follow links when they are tapped in the WebViewer
   * @return true or false
   */
  @SimpleProperty(
      description = "Determines whether to follow links when they are tapped in the WebViewer.  " +
          "If you follow links, you can use GoBack and GoForward to navigate the browser history. ",
      category = PropertyCategory.BEHAVIOR)
  public boolean FollowLinks() {
    return followLinks;
  }


  /** Determines whether to follow links when they are tapped
   *
   * @param follow
   */
  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_BOOLEAN,
      defaultValue = "True")
  @SimpleProperty()
  public void FollowLinks(boolean follow) {
    followLinks = follow;
    resetWebViewClient();
  }

  /**
   * Determines whether SSL Errors are ignored. Set to true to use self signed certificates
   *
   * @return true or false
   *
   */
  @SimpleProperty(
      description = "Determine whether or not to ignore SSL errors. Set to true to ignore " +
          "errors. Use this to accept self signed certificates from websites.",
      category = PropertyCategory.BEHAVIOR)
  public boolean IgnoreSslErrors() {
    return ignoreSslErrors;
  }

  /**
   * Determines whether or not to ignore SSL Errors
   *
   * @param ignoreErrors set to true to ignore SSL errors
   */
  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_BOOLEAN,
      defaultValue = "False")
  @SimpleProperty()
  public void IgnoreSslErrors(boolean ignoreSslErrors) {
    this.ignoreSslErrors = ignoreSslErrors;
    resetWebViewClient();
  }

  /**
   * Loads the  page from the home URL.  This happens automatically when
   * home URL is changed.
   */
  @SimpleFunction(
      description = "Loads the home URL page.  This happens automatically when " +
          "the home URL is changed.")
  public void GoHome() {
    webview.loadUrl(homeUrl);
  }

  /**
   *  Go back to the previously viewed page.
   */
  @SimpleFunction(
      description = "Go back to the previous page in the history list.  " +
          "Does nothing if there is no previous page.")
  public void GoBack() {
    if (webview.canGoBack()) {
      webview.goBack();
    }
  }

  /**
   *  Go forward in the history list
   */
  @SimpleFunction(
      description = "Go forward to the next page in the history list.   " +
          "Does nothing if there is no next page.")
  public void GoForward() {
    if (webview.canGoForward()) {
      webview.goForward();
    }
  }

  /**
   *  @return true if the WebViewer can go forward in the history list
   */
  @SimpleFunction(
      description = "Returns true if the WebViewer can go forward in the history list.")
  public boolean CanGoForward() {
    return webview.canGoForward();
  }


  /**
   *  @return true if the WebViewer can go back in the history list
   */
  @SimpleFunction(
      description = "Returns true if the WebViewer can go back in the history list.")
  public boolean CanGoBack() {
    return webview.canGoBack();
  }


  /**
   *  Load the given URL
   */
  @SimpleFunction(
      description = "Load the page at the given URL.")
  public void GoToUrl(String url) {
    webview.loadUrl(url);
  }

  /**
   * Specifies whether or not this WebViewer can access the JavaScript
   * Location API.
   *
   * @param uses -- Whether or not the API is available
   */
  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_BOOLEAN,
      defaultValue = "False")
  @SimpleProperty(userVisible = false,
      description = "Whether or not to give the application permission to use the Javascript geolocation API. " +
          "This property is available only in the designer.")
  public void UsesLocation(boolean uses) {
    // We don't actually do anything here (the work is in the MockWebViewer)
  }

  /**
   * Determine if the user should be prompted for permission to use the geolocation API while in
   * the webviewer.
   *
   * @return true if prompting is  required.  False assumes permission is granted.
   */

  @SimpleProperty(description = "If True, then prompt the user of the WebView to give permission to access the geolocation API. " +
      "If False, then assume permission is granted.")
  public boolean PromptforPermission() {
    return prompt;
  }

  /**
   * Determine if the user should be prompted for permission to use the geolocation API while in
   * the webviewer.
   *
   * @param prompt set to true to require prompting. False assumes permission is granted.
   */

  @DesignerProperty(editorType = PropertyTypeConstants.PROPERTY_TYPE_BOOLEAN,
      defaultValue = "True")
  @SimpleProperty(userVisible = true)
  public void PromptforPermission(boolean prompt) {
    this.prompt = prompt;
  }

  /**
   * Clear Stored Location permissions. When the geolocation API is used in
   * the WebViewer, the end user is prompted on a per URL basis for whether
   * or not permission should be granted to access their location. This
   * function clears this information for all locations.
   *
   * As the permissions interface is not available on phones older then
   * Eclair, this function is a no-op on older phones.
   */

  @SimpleFunction(description = "Clear stored location permissions.")
  public void ClearLocations() {
    if (SdkLevel.getLevel() >= SdkLevel.LEVEL_ECLAIR)
      EclairUtil.clearWebViewGeoLoc();
  }

  private void resetWebViewClient() {
    // if (SdkLevel.getLevel() >= SdkLevel.LEVEL_FROYO) {
    //   webview.setWebViewClient(FroyoUtil.getWebViewClient(ignoreSslErrors, followLinks, container.$form(), this));
    // } else {
    //   webview.setWebViewClient(new WebViewerClient());
    // }
    Log.v("WEBWEB", "level is " + SdkLevel.getLevel());
    webview.setWebChromeClient(new MyWebChromeClient());
    webview.setWebViewClient(new MyWebViewClient());
  }

  private class MyWebViewClient extends WebViewClient {

    public MyWebViewClient() {
      super();
      Log.v("WEBWEB", "in webview constructor");
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
      return !followLinks;
    }

    @Override
    public void onPageFinished(WebView view, String url) {
      Log.v("WEBWEB", "onPageFinished called");
      Log.v("WEBWEB", "url is " + url);
      Log.v("WEBWEB", "PrivateWebViewString is " + PrivateWebViewString());
    }
  }

  private class MyWebChromeClient extends WebChromeClient {

    private View myCustomView;
    private int myOriginalSystemUiVisibility;
    private int myOriginalOrientation;
    private WebChromeClient.CustomViewCallback myCustomViewCallback;

    public MyWebChromeClient() {
      super();
      Log.v("WEBWEB", "in webchrome constructor");
    }

    @Override
    public void onShowCustomView(View view, int requestedOrientation, WebChromeClient.CustomViewCallback callback) {
      this.onShowCustomView(view, callback);
    }

    @Override
    public void onShowCustomView(View view, WebChromeClient.CustomViewCallback callback) {
      Log.v("WEBWEB", "onShowCustomView called");
      if (myCustomView != null) {
        onHideCustomView();
        return;
      }

      myCustomView = view;
      myOriginalSystemUiVisibility = webContainer.$form().getWindow().getDecorView().getSystemUiVisibility();
      myOriginalOrientation = webContainer.$form().getRequestedOrientation();
      myCustomViewCallback = callback;
      FrameLayout decor = (FrameLayout) webContainer.$form().getWindow().getDecorView();
      decor.addView(myCustomView, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT));
      webContainer.$form().getWindow().getDecorView().setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
          View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
          View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_FULLSCREEN |
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      webContainer.$form().getWindow().getDecorView().requestFocus();
      webContainer.$form().setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
    }

    @Override
    public void onHideCustomView() {
      Log.v("WEBWEB", "onHideCustomView called");
      FrameLayout decor = (FrameLayout) webContainer.$form().getWindow().getDecorView();
      decor.removeView(myCustomView);
      myCustomView = null;
      webContainer.$form().getWindow().getDecorView().setSystemUiVisibility(myOriginalSystemUiVisibility);
      webContainer.$form().setRequestedOrientation(myOriginalOrientation);
      myCustomViewCallback.onCustomViewHidden();
      myCustomViewCallback = null;
    }
  }


  /**
   * Clear the webview cache, both ram and disk. This is useful
   * when using the webviewer to poll a page that may not be sending
   * appropriate cache control headers. This is particularly useful
   * when using the webviwer to look at a Fusion Table.
   */

  @SimpleFunction(description = "Clear WebView caches.")
  public void ClearCaches() {
    webview.clearCache(true);
  }

  /**
   * Allows the setting of properties to be monitored from the javascript
   * in the WebView
   */
  public class WebViewInterface {
    Context mContext;
    String webViewString;
    String privateWebViewString;

    /** Instantiate the interface and set the context */
    WebViewInterface(Context c) {
      mContext = c;
      webViewString = " ";
      privateWebViewString = "";
    }

    /**
     * Gets the web view string
     *
     * @return string
     */
    @JavascriptInterface
    public String getWebViewString() {
      return webViewString;
    }

    /**
     * Sets the web view string
     */
    public void setWebViewString(String newString) {
      webViewString = newString;
    }

    /**
     * Gets the private web view string
     *
     * @return string
     */
    @JavascriptInterface
    public String getPrivateWebViewString() {
      return privateWebViewString;
    }

    /**
     * Sets the private web view string
     */
    public void setPrivateWebViewString(String newString) {
      privateWebViewString = newString;
    }

    /**
     * Switches the screen
     */
    @JavascriptInterface
    public void switchScreen(String screen) {
      Form.switchForm(screen);
    }

    /**
     * Switches the screen with a value
     */
    @JavascriptInterface
    public void switchScreenWithValue(String screen, String value) {
      Log.v("WebViewInterface", value.toString());
      Form.switchFormWithStartValue(screen, value);
    }
  }
}

