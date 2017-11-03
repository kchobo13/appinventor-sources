package com.google.appinventor.client;
import java.util.HashMap;
import java.util.Map;
import static com.google.appinventor.client.Ode.MESSAGES;
public class ComponentsTranslation {
  public static Map<String, String> myMap = map();

  private static String getName(String key) {
    String value = myMap.get(key);
    if (key == null) {
      return "**Missing key in ComponentsTranslations**";
    } else {
      return value;
    }
  }

  public static String getPropertyName(String key) {
    String value = getName("PROPERTY-" + key);
    if(value == null) return key;
    return value;
  }

  public static String getMethodName(String key) {
    String value = getName("METHOD-" + key);
    if(value == null) return key;
    return value;
  }

  public static String getEventName(String key) {
    String value = getName("EVENT-" + key);
    if(value == null) return key;
    return value;
  }

  public static String getComponentName(String key) {
    String value = getName("COMPONENT-" + key);
    if(value == null) return key;
    return value;
  }

  public static String getCategoryName(String key) {
    String value = getName("CATEGORY-" + key);
    if(value == null) return key;
    return value;
  }

  public static String getComponentHelpString(String key) {
    String value = getName(key + "-helpString");
    if(value == null) return key;
    return value;
  }
  public static HashMap<String, String> map() {
    HashMap<String, String> map = new HashMap<String, String>();


/* Component: AccelerometerSensor */

    map.put("COMPONENT-AccelerometerSensor", MESSAGES.accelerometerSensorComponentPallette());

    map.put("AccelerometerSensor-helpString", MESSAGES.AccelerometerSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-MinimumInterval", MESSAGES.MinimumIntervalProperties());
    map.put("PROPERTY-Sensitivity", MESSAGES.SensitivityProperties());
    map.put("PROPERTY-XAccel", MESSAGES.XAccelProperties());
    map.put("PROPERTY-YAccel", MESSAGES.YAccelProperties());
    map.put("PROPERTY-ZAccel", MESSAGES.ZAccelProperties());


/* Events */

    map.put("EVENT-AccelerationChanged", MESSAGES.AccelerationChangedEvents());
    map.put("EVENT-Shaking", MESSAGES.ShakingEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-xAccel", MESSAGES.xAccelParams());
    map.put("PARAM-yAccel", MESSAGES.yAccelParams());
    map.put("PARAM-zAccel", MESSAGES.zAccelParams());


/* Component: ActivityStarter */

    map.put("COMPONENT-ActivityStarter", MESSAGES.activityStarterComponentPallette());

    map.put("ActivityStarter-helpString", MESSAGES.ActivityStarterHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Action", MESSAGES.ActionProperties());
    map.put("PROPERTY-ActivityClass", MESSAGES.ActivityClassProperties());
    map.put("PROPERTY-ActivityPackage", MESSAGES.ActivityPackageProperties());
    map.put("PROPERTY-DataType", MESSAGES.DataTypeProperties());
    map.put("PROPERTY-DataUri", MESSAGES.DataUriProperties());
    map.put("PROPERTY-ExtraKey", MESSAGES.ExtraKeyProperties());
    map.put("PROPERTY-ExtraValue", MESSAGES.ExtraValueProperties());
    map.put("PROPERTY-Extras", MESSAGES.ExtrasProperties());
    map.put("PROPERTY-Result", MESSAGES.ResultProperties());
    map.put("PROPERTY-ResultName", MESSAGES.ResultNameProperties());
    map.put("PROPERTY-ResultType", MESSAGES.ResultTypeProperties());
    map.put("PROPERTY-ResultUri", MESSAGES.ResultUriProperties());


/* Events */

    map.put("EVENT-ActivityCanceled", MESSAGES.ActivityCanceledEvents());
    map.put("EVENT-AfterActivity", MESSAGES.AfterActivityEvents());


/* Methods */

    map.put("METHOD-ResolveActivity", MESSAGES.ResolveActivityMethods());
    map.put("METHOD-StartActivity", MESSAGES.StartActivityMethods());


/* Parameters */

    map.put("PARAM-result", MESSAGES.resultParams());


/* Component: Ball */

    map.put("COMPONENT-Ball", MESSAGES.ballComponentPallette());

    map.put("Ball-helpString", MESSAGES.BallHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-Heading", MESSAGES.HeadingProperties());
    map.put("PROPERTY-Interval", MESSAGES.IntervalProperties());
    map.put("PROPERTY-PaintColor", MESSAGES.PaintColorProperties());
    map.put("PROPERTY-Radius", MESSAGES.RadiusProperties());
    map.put("PROPERTY-Speed", MESSAGES.SpeedProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-X", MESSAGES.XProperties());
    map.put("PROPERTY-Y", MESSAGES.YProperties());
    map.put("PROPERTY-Z", MESSAGES.ZProperties());


/* Events */

    map.put("EVENT-CollidedWith", MESSAGES.CollidedWithEvents());
    map.put("EVENT-Dragged", MESSAGES.DraggedEvents());
    map.put("EVENT-EdgeReached", MESSAGES.EdgeReachedEvents());
    map.put("EVENT-Flung", MESSAGES.FlungEvents());
    map.put("EVENT-NoLongerCollidingWith", MESSAGES.NoLongerCollidingWithEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());
    map.put("EVENT-Touched", MESSAGES.TouchedEvents());


/* Methods */

    map.put("METHOD-Bounce", MESSAGES.BounceMethods());
    map.put("METHOD-CollidingWith", MESSAGES.CollidingWithMethods());
    map.put("METHOD-MoveIntoBounds", MESSAGES.MoveIntoBoundsMethods());
    map.put("METHOD-MoveTo", MESSAGES.MoveToMethods());
    map.put("METHOD-PointInDirection", MESSAGES.PointInDirectionMethods());
    map.put("METHOD-PointTowards", MESSAGES.PointTowardsMethods());


/* Parameters */

    map.put("PARAM-other", MESSAGES.otherParams());
    map.put("PARAM-startX", MESSAGES.startXParams());
    map.put("PARAM-startY", MESSAGES.startYParams());
    map.put("PARAM-prevX", MESSAGES.prevXParams());
    map.put("PARAM-prevY", MESSAGES.prevYParams());
    map.put("PARAM-currentX", MESSAGES.currentXParams());
    map.put("PARAM-currentY", MESSAGES.currentYParams());
    map.put("PARAM-edge", MESSAGES.edgeParams());
    map.put("PARAM-x", MESSAGES.xParams());
    map.put("PARAM-y", MESSAGES.yParams());
    map.put("PARAM-speed", MESSAGES.speedParams());
    map.put("PARAM-heading", MESSAGES.headingParams());
    map.put("PARAM-xvel", MESSAGES.xvelParams());
    map.put("PARAM-yvel", MESSAGES.yvelParams());
    map.put("PARAM-target", MESSAGES.targetParams());


/* Component: BarcodeScanner */

    map.put("COMPONENT-BarcodeScanner", MESSAGES.barcodeScannerComponentPallette());

    map.put("BarcodeScanner-helpString", MESSAGES.BarcodeScannerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Result", MESSAGES.ResultProperties());
    map.put("PROPERTY-UseExternalScanner", MESSAGES.UseExternalScannerProperties());


/* Events */

    map.put("EVENT-AfterScan", MESSAGES.AfterScanEvents());


/* Methods */

    map.put("METHOD-DoScan", MESSAGES.DoScanMethods());


/* Parameters */

    map.put("PARAM-result", MESSAGES.resultParams());


/* Component: BluetoothClient */

    map.put("COMPONENT-BluetoothClient", MESSAGES.bluetoothClientComponentPallette());

    map.put("BluetoothClient-helpString", MESSAGES.BluetoothClientHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AddressesAndNames", MESSAGES.AddressesAndNamesProperties());
    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-CharacterEncoding", MESSAGES.CharacterEncodingProperties());
    map.put("PROPERTY-DelimiterByte", MESSAGES.DelimiterByteProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-HighByteFirst", MESSAGES.HighByteFirstProperties());
    map.put("PROPERTY-IsConnected", MESSAGES.IsConnectedProperties());
    map.put("PROPERTY-Secure", MESSAGES.SecureProperties());


/* Events */



/* Methods */

    map.put("METHOD-BytesAvailableToReceive", MESSAGES.BytesAvailableToReceiveMethods());
    map.put("METHOD-Connect", MESSAGES.ConnectMethods());
    map.put("METHOD-ConnectWithUUID", MESSAGES.ConnectWithUUIDMethods());
    map.put("METHOD-Disconnect", MESSAGES.DisconnectMethods());
    map.put("METHOD-IsDevicePaired", MESSAGES.IsDevicePairedMethods());
    map.put("METHOD-ReceiveSigned1ByteNumber", MESSAGES.ReceiveSigned1ByteNumberMethods());
    map.put("METHOD-ReceiveSigned2ByteNumber", MESSAGES.ReceiveSigned2ByteNumberMethods());
    map.put("METHOD-ReceiveSigned4ByteNumber", MESSAGES.ReceiveSigned4ByteNumberMethods());
    map.put("METHOD-ReceiveSignedBytes", MESSAGES.ReceiveSignedBytesMethods());
    map.put("METHOD-ReceiveText", MESSAGES.ReceiveTextMethods());
    map.put("METHOD-ReceiveUnsigned1ByteNumber", MESSAGES.ReceiveUnsigned1ByteNumberMethods());
    map.put("METHOD-ReceiveUnsigned2ByteNumber", MESSAGES.ReceiveUnsigned2ByteNumberMethods());
    map.put("METHOD-ReceiveUnsigned4ByteNumber", MESSAGES.ReceiveUnsigned4ByteNumberMethods());
    map.put("METHOD-ReceiveUnsignedBytes", MESSAGES.ReceiveUnsignedBytesMethods());
    map.put("METHOD-Send1ByteNumber", MESSAGES.Send1ByteNumberMethods());
    map.put("METHOD-Send2ByteNumber", MESSAGES.Send2ByteNumberMethods());
    map.put("METHOD-Send4ByteNumber", MESSAGES.Send4ByteNumberMethods());
    map.put("METHOD-SendBytes", MESSAGES.SendBytesMethods());
    map.put("METHOD-SendText", MESSAGES.SendTextMethods());


/* Parameters */

    map.put("PARAM-address", MESSAGES.addressParams());
    map.put("PARAM-uuid", MESSAGES.uuidParams());
    map.put("PARAM-numberOfBytes", MESSAGES.numberOfBytesParams());
    map.put("PARAM-number", MESSAGES.numberParams());
    map.put("PARAM-list", MESSAGES.listParams());
    map.put("PARAM-text", MESSAGES.textParams());


/* Component: BluetoothServer */

    map.put("COMPONENT-BluetoothServer", MESSAGES.bluetoothServerComponentPallette());

    map.put("BluetoothServer-helpString", MESSAGES.BluetoothServerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-CharacterEncoding", MESSAGES.CharacterEncodingProperties());
    map.put("PROPERTY-DelimiterByte", MESSAGES.DelimiterByteProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-HighByteFirst", MESSAGES.HighByteFirstProperties());
    map.put("PROPERTY-IsAccepting", MESSAGES.IsAcceptingProperties());
    map.put("PROPERTY-IsConnected", MESSAGES.IsConnectedProperties());
    map.put("PROPERTY-Secure", MESSAGES.SecureProperties());


/* Events */

    map.put("EVENT-ConnectionAccepted", MESSAGES.ConnectionAcceptedEvents());


/* Methods */

    map.put("METHOD-AcceptConnection", MESSAGES.AcceptConnectionMethods());
    map.put("METHOD-AcceptConnectionWithUUID", MESSAGES.AcceptConnectionWithUUIDMethods());
    map.put("METHOD-BytesAvailableToReceive", MESSAGES.BytesAvailableToReceiveMethods());
    map.put("METHOD-Disconnect", MESSAGES.DisconnectMethods());
    map.put("METHOD-ReceiveSigned1ByteNumber", MESSAGES.ReceiveSigned1ByteNumberMethods());
    map.put("METHOD-ReceiveSigned2ByteNumber", MESSAGES.ReceiveSigned2ByteNumberMethods());
    map.put("METHOD-ReceiveSigned4ByteNumber", MESSAGES.ReceiveSigned4ByteNumberMethods());
    map.put("METHOD-ReceiveSignedBytes", MESSAGES.ReceiveSignedBytesMethods());
    map.put("METHOD-ReceiveText", MESSAGES.ReceiveTextMethods());
    map.put("METHOD-ReceiveUnsigned1ByteNumber", MESSAGES.ReceiveUnsigned1ByteNumberMethods());
    map.put("METHOD-ReceiveUnsigned2ByteNumber", MESSAGES.ReceiveUnsigned2ByteNumberMethods());
    map.put("METHOD-ReceiveUnsigned4ByteNumber", MESSAGES.ReceiveUnsigned4ByteNumberMethods());
    map.put("METHOD-ReceiveUnsignedBytes", MESSAGES.ReceiveUnsignedBytesMethods());
    map.put("METHOD-Send1ByteNumber", MESSAGES.Send1ByteNumberMethods());
    map.put("METHOD-Send2ByteNumber", MESSAGES.Send2ByteNumberMethods());
    map.put("METHOD-Send4ByteNumber", MESSAGES.Send4ByteNumberMethods());
    map.put("METHOD-SendBytes", MESSAGES.SendBytesMethods());
    map.put("METHOD-SendText", MESSAGES.SendTextMethods());
    map.put("METHOD-StopAccepting", MESSAGES.StopAcceptingMethods());


/* Parameters */

    map.put("PARAM-serviceName", MESSAGES.serviceNameParams());
    map.put("PARAM-uuid", MESSAGES.uuidParams());
    map.put("PARAM-numberOfBytes", MESSAGES.numberOfBytesParams());
    map.put("PARAM-number", MESSAGES.numberParams());
    map.put("PARAM-list", MESSAGES.listParams());
    map.put("PARAM-text", MESSAGES.textParams());


/* Component: Button */

    map.put("COMPONENT-Button", MESSAGES.buttonComponentPallette());

    map.put("Button-helpString", MESSAGES.ButtonHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-Click", MESSAGES.ClickEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LongClick", MESSAGES.LongClickEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */



/* Parameters */



/* Component: Camcorder */

    map.put("COMPONENT-Camcorder", MESSAGES.camcorderComponentPallette());

    map.put("Camcorder-helpString", MESSAGES.CamcorderHelpStringComponentPallette());



/* Properties */



/* Events */

    map.put("EVENT-AfterRecording", MESSAGES.AfterRecordingEvents());


/* Methods */

    map.put("METHOD-RecordVideo", MESSAGES.RecordVideoMethods());


/* Parameters */

    map.put("PARAM-clip", MESSAGES.clipParams());


/* Component: Camera */

    map.put("COMPONENT-Camera", MESSAGES.cameraComponentPallette());

    map.put("Camera-helpString", MESSAGES.CameraHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-UseFront", MESSAGES.UseFrontProperties());


/* Events */

    map.put("EVENT-AfterPicture", MESSAGES.AfterPictureEvents());


/* Methods */

    map.put("METHOD-TakePicture", MESSAGES.TakePictureMethods());


/* Parameters */

    map.put("PARAM-image", MESSAGES.imageParams());


/* Component: Canvas */

    map.put("COMPONENT-Canvas", MESSAGES.canvasComponentPallette());

    map.put("Canvas-helpString", MESSAGES.CanvasHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-BackgroundImage", MESSAGES.BackgroundImageProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-LineWidth", MESSAGES.LineWidthProperties());
    map.put("PROPERTY-PaintColor", MESSAGES.PaintColorProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-Dragged", MESSAGES.DraggedEvents());
    map.put("EVENT-Flung", MESSAGES.FlungEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());
    map.put("EVENT-Touched", MESSAGES.TouchedEvents());


/* Methods */

    map.put("METHOD-Clear", MESSAGES.ClearMethods());
    map.put("METHOD-DrawCircle", MESSAGES.DrawCircleMethods());
    map.put("METHOD-DrawLine", MESSAGES.DrawLineMethods());
    map.put("METHOD-DrawPoint", MESSAGES.DrawPointMethods());
    map.put("METHOD-DrawText", MESSAGES.DrawTextMethods());
    map.put("METHOD-DrawTextAtAngle", MESSAGES.DrawTextAtAngleMethods());
    map.put("METHOD-GetBackgroundPixelColor", MESSAGES.GetBackgroundPixelColorMethods());
    map.put("METHOD-GetPixelColor", MESSAGES.GetPixelColorMethods());
    map.put("METHOD-Save", MESSAGES.SaveMethods());
    map.put("METHOD-SaveAs", MESSAGES.SaveAsMethods());
    map.put("METHOD-SetBackgroundPixelColor", MESSAGES.SetBackgroundPixelColorMethods());


/* Parameters */

    map.put("PARAM-startX", MESSAGES.startXParams());
    map.put("PARAM-startY", MESSAGES.startYParams());
    map.put("PARAM-prevX", MESSAGES.prevXParams());
    map.put("PARAM-prevY", MESSAGES.prevYParams());
    map.put("PARAM-currentX", MESSAGES.currentXParams());
    map.put("PARAM-currentY", MESSAGES.currentYParams());
    map.put("PARAM-draggedAnySprite", MESSAGES.draggedAnySpriteParams());
    map.put("PARAM-x", MESSAGES.xParams());
    map.put("PARAM-y", MESSAGES.yParams());
    map.put("PARAM-speed", MESSAGES.speedParams());
    map.put("PARAM-heading", MESSAGES.headingParams());
    map.put("PARAM-xvel", MESSAGES.xvelParams());
    map.put("PARAM-yvel", MESSAGES.yvelParams());
    map.put("PARAM-flungSprite", MESSAGES.flungSpriteParams());
    map.put("PARAM-touchedAnySprite", MESSAGES.touchedAnySpriteParams());
    map.put("PARAM-centerX", MESSAGES.centerXParams());
    map.put("PARAM-centerY", MESSAGES.centerYParams());
    map.put("PARAM-radius", MESSAGES.radiusParams());
    map.put("PARAM-fill", MESSAGES.fillParams());
    map.put("PARAM-x1", MESSAGES.x1Params());
    map.put("PARAM-y1", MESSAGES.y1Params());
    map.put("PARAM-x2", MESSAGES.x2Params());
    map.put("PARAM-y2", MESSAGES.y2Params());
    map.put("PARAM-text", MESSAGES.textParams());
    map.put("PARAM-angle", MESSAGES.angleParams());
    map.put("PARAM-fileName", MESSAGES.fileNameParams());
    map.put("PARAM-color", MESSAGES.colorParams());


/* Component: CheckBox */

    map.put("COMPONENT-CheckBox", MESSAGES.checkBoxComponentPallette());

    map.put("CheckBox-helpString", MESSAGES.CheckBoxHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Checked", MESSAGES.CheckedProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-Changed", MESSAGES.ChangedEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());


/* Methods */



/* Parameters */



/* Component: Clock */

    map.put("COMPONENT-Clock", MESSAGES.clockComponentPallette());

    map.put("Clock-helpString", MESSAGES.ClockHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-TimerAlwaysFires", MESSAGES.TimerAlwaysFiresProperties());
    map.put("PROPERTY-TimerEnabled", MESSAGES.TimerEnabledProperties());
    map.put("PROPERTY-TimerInterval", MESSAGES.TimerIntervalProperties());


/* Events */

    map.put("EVENT-Timer", MESSAGES.TimerEvents());


/* Methods */

    map.put("METHOD-AddDays", MESSAGES.AddDaysMethods());
    map.put("METHOD-AddDuration", MESSAGES.AddDurationMethods());
    map.put("METHOD-AddHours", MESSAGES.AddHoursMethods());
    map.put("METHOD-AddMinutes", MESSAGES.AddMinutesMethods());
    map.put("METHOD-AddMonths", MESSAGES.AddMonthsMethods());
    map.put("METHOD-AddSeconds", MESSAGES.AddSecondsMethods());
    map.put("METHOD-AddWeeks", MESSAGES.AddWeeksMethods());
    map.put("METHOD-AddYears", MESSAGES.AddYearsMethods());
    map.put("METHOD-DayOfMonth", MESSAGES.DayOfMonthMethods());
    map.put("METHOD-Duration", MESSAGES.DurationMethods());
    map.put("METHOD-DurationToDays", MESSAGES.DurationToDaysMethods());
    map.put("METHOD-DurationToHours", MESSAGES.DurationToHoursMethods());
    map.put("METHOD-DurationToMinutes", MESSAGES.DurationToMinutesMethods());
    map.put("METHOD-DurationToSeconds", MESSAGES.DurationToSecondsMethods());
    map.put("METHOD-DurationToWeeks", MESSAGES.DurationToWeeksMethods());
    map.put("METHOD-FormatDate", MESSAGES.FormatDateMethods());
    map.put("METHOD-FormatDateTime", MESSAGES.FormatDateTimeMethods());
    map.put("METHOD-FormatTime", MESSAGES.FormatTimeMethods());
    map.put("METHOD-GetMillis", MESSAGES.GetMillisMethods());
    map.put("METHOD-Hour", MESSAGES.HourMethods());
    map.put("METHOD-MakeInstant", MESSAGES.MakeInstantMethods());
    map.put("METHOD-MakeInstantFromMillis", MESSAGES.MakeInstantFromMillisMethods());
    map.put("METHOD-Minute", MESSAGES.MinuteMethods());
    map.put("METHOD-Month", MESSAGES.MonthMethods());
    map.put("METHOD-MonthName", MESSAGES.MonthNameMethods());
    map.put("METHOD-Now", MESSAGES.NowMethods());
    map.put("METHOD-Second", MESSAGES.SecondMethods());
    map.put("METHOD-SystemTime", MESSAGES.SystemTimeMethods());
    map.put("METHOD-Weekday", MESSAGES.WeekdayMethods());
    map.put("METHOD-WeekdayName", MESSAGES.WeekdayNameMethods());
    map.put("METHOD-Year", MESSAGES.YearMethods());


/* Parameters */

    map.put("PARAM-instant", MESSAGES.instantParams());
    map.put("PARAM-quantity", MESSAGES.quantityParams());
    map.put("PARAM-start", MESSAGES.startParams());
    map.put("PARAM-end", MESSAGES.endParams());
    map.put("PARAM-duration", MESSAGES.durationParams());
    map.put("PARAM-pattern", MESSAGES.patternParams());
    map.put("PARAM-from", MESSAGES.fromParams());
    map.put("PARAM-millis", MESSAGES.millisParams());


/* Component: ContactPicker */

    map.put("COMPONENT-ContactPicker", MESSAGES.contactPickerComponentPallette());

    map.put("ContactPicker-helpString", MESSAGES.ContactPickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-ContactName", MESSAGES.ContactNameProperties());
    map.put("PROPERTY-ContactUri", MESSAGES.ContactUriProperties());
    map.put("PROPERTY-EmailAddress", MESSAGES.EmailAddressProperties());
    map.put("PROPERTY-EmailAddressList", MESSAGES.EmailAddressListProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-PhoneNumber", MESSAGES.PhoneNumberProperties());
    map.put("PROPERTY-PhoneNumberList", MESSAGES.PhoneNumberListProperties());
    map.put("PROPERTY-Picture", MESSAGES.PictureProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterPicking", MESSAGES.AfterPickingEvents());
    map.put("EVENT-BeforePicking", MESSAGES.BeforePickingEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-Open", MESSAGES.OpenMethods());
    map.put("METHOD-ViewContact", MESSAGES.ViewContactMethods());


/* Parameters */

    map.put("PARAM-uri", MESSAGES.uriParams());


/* Component: DatePicker */

    map.put("COMPONENT-DatePicker", MESSAGES.datePickerComponentPallette());

    map.put("DatePicker-helpString", MESSAGES.DatePickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Day", MESSAGES.DayProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Instant", MESSAGES.InstantProperties());
    map.put("PROPERTY-Month", MESSAGES.MonthProperties());
    map.put("PROPERTY-MonthInText", MESSAGES.MonthInTextProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());
    map.put("PROPERTY-Year", MESSAGES.YearProperties());


/* Events */

    map.put("EVENT-AfterDateSet", MESSAGES.AfterDateSetEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-LaunchPicker", MESSAGES.LaunchPickerMethods());
    map.put("METHOD-SetDateToDisplay", MESSAGES.SetDateToDisplayMethods());
    map.put("METHOD-SetDateToDisplayFromInstant", MESSAGES.SetDateToDisplayFromInstantMethods());


/* Parameters */

    map.put("PARAM-year", MESSAGES.yearParams());
    map.put("PARAM-month", MESSAGES.monthParams());
    map.put("PARAM-day", MESSAGES.dayParams());
    map.put("PARAM-instant", MESSAGES.instantParams());


/* Component: EmailPicker */

    map.put("COMPONENT-EmailPicker", MESSAGES.emailPickerComponentPallette());

    map.put("EmailPicker-helpString", MESSAGES.EmailPickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Hint", MESSAGES.HintProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());


/* Methods */

    map.put("METHOD-RequestFocus", MESSAGES.RequestFocusMethods());


/* Parameters */



/* Component: Ev3ColorSensor */

    map.put("COMPONENT-Ev3ColorSensor", MESSAGES.ev3ColorSensorComponentPallette());

    map.put("Ev3ColorSensor-helpString", MESSAGES.Ev3ColorSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-ColorChangedEventEnabled", MESSAGES.ColorChangedEventEnabledProperties());
    map.put("PROPERTY-Mode", MESSAGES.ModeProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-ColorChanged", MESSAGES.ColorChangedEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetColorCode", MESSAGES.GetColorCodeMethods());
    map.put("METHOD-GetColorName", MESSAGES.GetColorNameMethods());
    map.put("METHOD-GetLightLevel", MESSAGES.GetLightLevelMethods());
    map.put("METHOD-SetAmbientMode", MESSAGES.SetAmbientModeMethods());
    map.put("METHOD-SetColorMode", MESSAGES.SetColorModeMethods());
    map.put("METHOD-SetReflectedMode", MESSAGES.SetReflectedModeMethods());


/* Parameters */

    map.put("PARAM-colorCode", MESSAGES.colorCodeParams());
    map.put("PARAM-colorName", MESSAGES.colorNameParams());


/* Component: Ev3Commands */

    map.put("COMPONENT-Ev3Commands", MESSAGES.ev3CommandsComponentPallette());

    map.put("Ev3Commands-helpString", MESSAGES.Ev3CommandsHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());


/* Events */



/* Methods */

    map.put("METHOD-GetBatteryCurrent", MESSAGES.GetBatteryCurrentMethods());
    map.put("METHOD-GetBatteryVoltage", MESSAGES.GetBatteryVoltageMethods());
    map.put("METHOD-GetFirmwareBuild", MESSAGES.GetFirmwareBuildMethods());
    map.put("METHOD-GetFirmwareVersion", MESSAGES.GetFirmwareVersionMethods());
    map.put("METHOD-GetHardwareVersion", MESSAGES.GetHardwareVersionMethods());
    map.put("METHOD-GetOSBuild", MESSAGES.GetOSBuildMethods());
    map.put("METHOD-GetOSVersion", MESSAGES.GetOSVersionMethods());
    map.put("METHOD-KeepAlive", MESSAGES.KeepAliveMethods());


/* Parameters */

    map.put("PARAM-minutes", MESSAGES.minutesParams());


/* Component: Ev3GyroSensor */

    map.put("COMPONENT-Ev3GyroSensor", MESSAGES.ev3GyroSensorComponentPallette());

    map.put("Ev3GyroSensor-helpString", MESSAGES.Ev3GyroSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-Mode", MESSAGES.ModeProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-SensorValueChangedEventEnabled", MESSAGES.SensorValueChangedEventEnabledProperties());


/* Events */

    map.put("EVENT-SensorValueChanged", MESSAGES.SensorValueChangedEvents());


/* Methods */

    map.put("METHOD-GetSensorValue", MESSAGES.GetSensorValueMethods());
    map.put("METHOD-SetAngleMode", MESSAGES.SetAngleModeMethods());
    map.put("METHOD-SetRateMode", MESSAGES.SetRateModeMethods());


/* Parameters */

    map.put("PARAM-sensorValue", MESSAGES.sensorValueParams());


/* Component: Ev3Motors */

    map.put("COMPONENT-Ev3Motors", MESSAGES.ev3MotorsComponentPallette());

    map.put("Ev3Motors-helpString", MESSAGES.Ev3MotorsHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-EnableSpeedRegulation", MESSAGES.EnableSpeedRegulationProperties());
    map.put("PROPERTY-MotorPorts", MESSAGES.MotorPortsProperties());
    map.put("PROPERTY-ReverseDirection", MESSAGES.ReverseDirectionProperties());
    map.put("PROPERTY-StopBeforeDisconnect", MESSAGES.StopBeforeDisconnectProperties());
    map.put("PROPERTY-TachoCountChangedEventEnabled", MESSAGES.TachoCountChangedEventEnabledProperties());
    map.put("PROPERTY-WheelDiameter", MESSAGES.WheelDiameterProperties());


/* Events */

    map.put("EVENT-TachoCountChanged", MESSAGES.TachoCountChangedEvents());


/* Methods */

    map.put("METHOD-GetTachoCount", MESSAGES.GetTachoCountMethods());
    map.put("METHOD-ResetTachoCount", MESSAGES.ResetTachoCountMethods());
    map.put("METHOD-RotateInDistance", MESSAGES.RotateInDistanceMethods());
    map.put("METHOD-RotateInDuration", MESSAGES.RotateInDurationMethods());
    map.put("METHOD-RotateInTachoCounts", MESSAGES.RotateInTachoCountsMethods());
    map.put("METHOD-RotateIndefinitely", MESSAGES.RotateIndefinitelyMethods());
    map.put("METHOD-RotateSyncInDistance", MESSAGES.RotateSyncInDistanceMethods());
    map.put("METHOD-RotateSyncInDuration", MESSAGES.RotateSyncInDurationMethods());
    map.put("METHOD-RotateSyncInTachoCounts", MESSAGES.RotateSyncInTachoCountsMethods());
    map.put("METHOD-RotateSyncIndefinitely", MESSAGES.RotateSyncIndefinitelyMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());
    map.put("METHOD-ToggleDirection", MESSAGES.ToggleDirectionMethods());


/* Parameters */

    map.put("PARAM-tachoCount", MESSAGES.tachoCountParams());
    map.put("PARAM-power", MESSAGES.powerParams());
    map.put("PARAM-distance", MESSAGES.distanceParams());
    map.put("PARAM-useBrake", MESSAGES.useBrakeParams());
    map.put("PARAM-milliseconds", MESSAGES.millisecondsParams());
    map.put("PARAM-tachoCounts", MESSAGES.tachoCountsParams());
    map.put("PARAM-turnRatio", MESSAGES.turnRatioParams());


/* Component: Ev3Sound */

    map.put("COMPONENT-Ev3Sound", MESSAGES.ev3SoundComponentPallette());

    map.put("Ev3Sound-helpString", MESSAGES.Ev3SoundHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());


/* Events */



/* Methods */

    map.put("METHOD-PlayTone", MESSAGES.PlayToneMethods());
    map.put("METHOD-StopSound", MESSAGES.StopSoundMethods());


/* Parameters */

    map.put("PARAM-volume", MESSAGES.volumeParams());
    map.put("PARAM-frequency", MESSAGES.frequencyParams());
    map.put("PARAM-milliseconds", MESSAGES.millisecondsParams());


/* Component: Ev3TouchSensor */

    map.put("COMPONENT-Ev3TouchSensor", MESSAGES.ev3TouchSensorComponentPallette());

    map.put("Ev3TouchSensor-helpString", MESSAGES.Ev3TouchSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-PressedEventEnabled", MESSAGES.PressedEventEnabledProperties());
    map.put("PROPERTY-ReleasedEventEnabled", MESSAGES.ReleasedEventEnabledProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());


/* Events */

    map.put("EVENT-Pressed", MESSAGES.PressedEvents());
    map.put("EVENT-Released", MESSAGES.ReleasedEvents());


/* Methods */

    map.put("METHOD-IsPressed", MESSAGES.IsPressedMethods());


/* Parameters */



/* Component: Ev3UI */

    map.put("COMPONENT-Ev3UI", MESSAGES.ev3UIComponentPallette());

    map.put("Ev3UI-helpString", MESSAGES.Ev3UIHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());


/* Events */



/* Methods */

    map.put("METHOD-DrawCircle", MESSAGES.DrawCircleMethods());
    map.put("METHOD-DrawIcon", MESSAGES.DrawIconMethods());
    map.put("METHOD-DrawLine", MESSAGES.DrawLineMethods());
    map.put("METHOD-DrawPoint", MESSAGES.DrawPointMethods());
    map.put("METHOD-DrawRect", MESSAGES.DrawRectMethods());
    map.put("METHOD-FillScreen", MESSAGES.FillScreenMethods());


/* Parameters */

    map.put("PARAM-color", MESSAGES.colorParams());
    map.put("PARAM-x", MESSAGES.xParams());
    map.put("PARAM-y", MESSAGES.yParams());
    map.put("PARAM-radius", MESSAGES.radiusParams());
    map.put("PARAM-fill", MESSAGES.fillParams());
    map.put("PARAM-type", MESSAGES.typeParams());
    map.put("PARAM-no", MESSAGES.noParams());
    map.put("PARAM-x1", MESSAGES.x1Params());
    map.put("PARAM-y1", MESSAGES.y1Params());
    map.put("PARAM-x2", MESSAGES.x2Params());
    map.put("PARAM-y2", MESSAGES.y2Params());
    map.put("PARAM-width", MESSAGES.widthParams());
    map.put("PARAM-height", MESSAGES.heightParams());


/* Component: Ev3UltrasonicSensor */

    map.put("COMPONENT-Ev3UltrasonicSensor", MESSAGES.ev3UltrasonicSensorComponentPallette());

    map.put("Ev3UltrasonicSensor-helpString", MESSAGES.Ev3UltrasonicSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-Unit", MESSAGES.UnitProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetDistance", MESSAGES.GetDistanceMethods());
    map.put("METHOD-SetCmUnit", MESSAGES.SetCmUnitMethods());
    map.put("METHOD-SetInchUnit", MESSAGES.SetInchUnitMethods());


/* Parameters */



/* Component: File */

    map.put("COMPONENT-File", MESSAGES.fileComponentPallette());

    map.put("File-helpString", MESSAGES.FileHelpStringComponentPallette());



/* Properties */



/* Events */

    map.put("EVENT-AfterFileSaved", MESSAGES.AfterFileSavedEvents());
    map.put("EVENT-GotText", MESSAGES.GotTextEvents());


/* Methods */

    map.put("METHOD-AppendToFile", MESSAGES.AppendToFileMethods());
    map.put("METHOD-Delete", MESSAGES.DeleteMethods());
    map.put("METHOD-ReadFrom", MESSAGES.ReadFromMethods());
    map.put("METHOD-SaveFile", MESSAGES.SaveFileMethods());


/* Parameters */

    map.put("PARAM-fileName", MESSAGES.fileNameParams());
    map.put("PARAM-text", MESSAGES.textParams());


/* Component: FirebaseDB */

    map.put("COMPONENT-FirebaseDB", MESSAGES.firebaseDBComponentPallette());

    map.put("FirebaseDB-helpString", MESSAGES.FirebaseDBHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-DefaultURL", MESSAGES.DefaultURLProperties());
    map.put("PROPERTY-DeveloperBucket", MESSAGES.DeveloperBucketProperties());
    map.put("PROPERTY-FirebaseToken", MESSAGES.FirebaseTokenProperties());
    map.put("PROPERTY-FirebaseURL", MESSAGES.FirebaseURLProperties());
    map.put("PROPERTY-Persist", MESSAGES.PersistProperties());
    map.put("PROPERTY-ProjectBucket", MESSAGES.ProjectBucketProperties());


/* Events */

    map.put("EVENT-DataChanged", MESSAGES.DataChangedEvents());
    map.put("EVENT-FirebaseError", MESSAGES.FirebaseErrorEvents());
    map.put("EVENT-FirstRemoved", MESSAGES.FirstRemovedEvents());
    map.put("EVENT-GotValue", MESSAGES.GotValueEvents());
    map.put("EVENT-TagList", MESSAGES.TagListEvents());


/* Methods */

    map.put("METHOD-AppendValue", MESSAGES.AppendValueMethods());
    map.put("METHOD-ClearTag", MESSAGES.ClearTagMethods());
    map.put("METHOD-GetTagList", MESSAGES.GetTagListMethods());
    map.put("METHOD-GetValue", MESSAGES.GetValueMethods());
    map.put("METHOD-RemoveFirst", MESSAGES.RemoveFirstMethods());
    map.put("METHOD-StoreValue", MESSAGES.StoreValueMethods());
    map.put("METHOD-Unauthenticate", MESSAGES.UnauthenticateMethods());


/* Parameters */

    map.put("PARAM-tag", MESSAGES.tagParams());
    map.put("PARAM-value", MESSAGES.valueParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-valueToAdd", MESSAGES.valueToAddParams());
    map.put("PARAM-valueIfTagNotThere", MESSAGES.valueIfTagNotThereParams());
    map.put("PARAM-valueToStore", MESSAGES.valueToStoreParams());


/* Component: Form */

    map.put("COMPONENT-Form", MESSAGES.formComponentPallette());

    map.put("Form-helpString", MESSAGES.FormHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboutScreen", MESSAGES.AboutScreenProperties());
    map.put("PROPERTY-AlignHorizontal", MESSAGES.AlignHorizontalProperties());
    map.put("PROPERTY-AlignVertical", MESSAGES.AlignVerticalProperties());
    map.put("PROPERTY-AppName", MESSAGES.AppNameProperties());
    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-BackgroundImage", MESSAGES.BackgroundImageProperties());
    map.put("PROPERTY-CloseScreenAnimation", MESSAGES.CloseScreenAnimationProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-Icon", MESSAGES.IconProperties());
    map.put("PROPERTY-OpenScreenAnimation", MESSAGES.OpenScreenAnimationProperties());
    map.put("PROPERTY-ScreenOrientation", MESSAGES.ScreenOrientationProperties());
    map.put("PROPERTY-Scrollable", MESSAGES.ScrollableProperties());
    map.put("PROPERTY-ShowListsAsJson", MESSAGES.ShowListsAsJsonProperties());
    map.put("PROPERTY-ShowStatusBar", MESSAGES.ShowStatusBarProperties());
    map.put("PROPERTY-Sizing", MESSAGES.SizingProperties());
    map.put("PROPERTY-Title", MESSAGES.TitleProperties());
    map.put("PROPERTY-TitleVisible", MESSAGES.TitleVisibleProperties());
    map.put("PROPERTY-VersionCode", MESSAGES.VersionCodeProperties());
    map.put("PROPERTY-VersionName", MESSAGES.VersionNameProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());


/* Events */

    map.put("EVENT-BackPressed", MESSAGES.BackPressedEvents());
    map.put("EVENT-ErrorOccurred", MESSAGES.ErrorOccurredEvents());
    map.put("EVENT-Initialize", MESSAGES.InitializeEvents());
    map.put("EVENT-OtherScreenClosed", MESSAGES.OtherScreenClosedEvents());
    map.put("EVENT-ScreenOrientationChanged", MESSAGES.ScreenOrientationChangedEvents());


/* Methods */

    map.put("METHOD-HideKeyboard", MESSAGES.HideKeyboardMethods());


/* Parameters */

    map.put("PARAM-component", MESSAGES.componentParams());
    map.put("PARAM-functionName", MESSAGES.functionNameParams());
    map.put("PARAM-errorNumber", MESSAGES.errorNumberParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-otherScreenName", MESSAGES.otherScreenNameParams());
    map.put("PARAM-result", MESSAGES.resultParams());


/* Component: FusiontablesControl */

    map.put("COMPONENT-FusiontablesControl", MESSAGES.fusiontablesControlComponentPallette());

    map.put("FusiontablesControl-helpString", MESSAGES.FusiontablesControlHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-ApiKey", MESSAGES.ApiKeyProperties());
    map.put("PROPERTY-KeyFile", MESSAGES.KeyFileProperties());
    map.put("PROPERTY-Query", MESSAGES.QueryProperties());
    map.put("PROPERTY-ServiceAccountEmail", MESSAGES.ServiceAccountEmailProperties());
    map.put("PROPERTY-UseServiceAuthentication", MESSAGES.UseServiceAuthenticationProperties());


/* Events */

    map.put("EVENT-GotResult", MESSAGES.GotResultEvents());


/* Methods */

    map.put("METHOD-DoQuery", MESSAGES.DoQueryMethods());
    map.put("METHOD-ForgetLogin", MESSAGES.ForgetLoginMethods());
    map.put("METHOD-GetRows", MESSAGES.GetRowsMethods());
    map.put("METHOD-GetRowsWithConditions", MESSAGES.GetRowsWithConditionsMethods());
    map.put("METHOD-InsertRow", MESSAGES.InsertRowMethods());
    map.put("METHOD-SendQuery", MESSAGES.SendQueryMethods());


/* Parameters */

    map.put("PARAM-result", MESSAGES.resultParams());
    map.put("PARAM-tableId", MESSAGES.tableIdParams());
    map.put("PARAM-columns", MESSAGES.columnsParams());
    map.put("PARAM-conditions", MESSAGES.conditionsParams());
    map.put("PARAM-values", MESSAGES.valuesParams());


/* Component: GameClient */

    map.put("COMPONENT-GameClient", MESSAGES.gameClientComponentPallette());

    map.put("GameClient-helpString", MESSAGES.GameClientHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-GameId", MESSAGES.GameIdProperties());
    map.put("PROPERTY-InstanceId", MESSAGES.InstanceIdProperties());
    map.put("PROPERTY-InvitedInstances", MESSAGES.InvitedInstancesProperties());
    map.put("PROPERTY-JoinedInstances", MESSAGES.JoinedInstancesProperties());
    map.put("PROPERTY-Leader", MESSAGES.LeaderProperties());
    map.put("PROPERTY-Players", MESSAGES.PlayersProperties());
    map.put("PROPERTY-PublicInstances", MESSAGES.PublicInstancesProperties());
    map.put("PROPERTY-ServiceUrl", MESSAGES.ServiceUrlProperties());
    map.put("PROPERTY-UserEmailAddress", MESSAGES.UserEmailAddressProperties());


/* Events */

    map.put("EVENT-FunctionCompleted", MESSAGES.FunctionCompletedEvents());
    map.put("EVENT-GotMessage", MESSAGES.GotMessageEvents());
    map.put("EVENT-Info", MESSAGES.InfoEvents());
    map.put("EVENT-InstanceIdChanged", MESSAGES.InstanceIdChangedEvents());
    map.put("EVENT-Invited", MESSAGES.InvitedEvents());
    map.put("EVENT-NewInstanceMade", MESSAGES.NewInstanceMadeEvents());
    map.put("EVENT-NewLeader", MESSAGES.NewLeaderEvents());
    map.put("EVENT-PlayerJoined", MESSAGES.PlayerJoinedEvents());
    map.put("EVENT-PlayerLeft", MESSAGES.PlayerLeftEvents());
    map.put("EVENT-ServerCommandFailure", MESSAGES.ServerCommandFailureEvents());
    map.put("EVENT-ServerCommandSuccess", MESSAGES.ServerCommandSuccessEvents());
    map.put("EVENT-UserEmailAddressSet", MESSAGES.UserEmailAddressSetEvents());
    map.put("EVENT-WebServiceError", MESSAGES.WebServiceErrorEvents());


/* Methods */

    map.put("METHOD-GetInstanceLists", MESSAGES.GetInstanceListsMethods());
    map.put("METHOD-GetMessages", MESSAGES.GetMessagesMethods());
    map.put("METHOD-Invite", MESSAGES.InviteMethods());
    map.put("METHOD-LeaveInstance", MESSAGES.LeaveInstanceMethods());
    map.put("METHOD-MakeNewInstance", MESSAGES.MakeNewInstanceMethods());
    map.put("METHOD-SendMessage", MESSAGES.SendMessageMethods());
    map.put("METHOD-ServerCommand", MESSAGES.ServerCommandMethods());
    map.put("METHOD-SetInstance", MESSAGES.SetInstanceMethods());
    map.put("METHOD-SetLeader", MESSAGES.SetLeaderMethods());


/* Parameters */

    map.put("PARAM-functionName", MESSAGES.functionNameParams());
    map.put("PARAM-type", MESSAGES.typeParams());
    map.put("PARAM-sender", MESSAGES.senderParams());
    map.put("PARAM-contents", MESSAGES.contentsParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-instanceId", MESSAGES.instanceIdParams());
    map.put("PARAM-playerId", MESSAGES.playerIdParams());
    map.put("PARAM-command", MESSAGES.commandParams());
    map.put("PARAM-arguments", MESSAGES.argumentsParams());
    map.put("PARAM-response", MESSAGES.responseParams());
    map.put("PARAM-emailAddress", MESSAGES.emailAddressParams());
    map.put("PARAM-count", MESSAGES.countParams());
    map.put("PARAM-playerEmail", MESSAGES.playerEmailParams());
    map.put("PARAM-makePublic", MESSAGES.makePublicParams());
    map.put("PARAM-recipients", MESSAGES.recipientsParams());


/* Component: GyroscopeSensor */

    map.put("COMPONENT-GyroscopeSensor", MESSAGES.gyroscopeSensorComponentPallette());

    map.put("GyroscopeSensor-helpString", MESSAGES.GyroscopeSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-XAngularVelocity", MESSAGES.XAngularVelocityProperties());
    map.put("PROPERTY-YAngularVelocity", MESSAGES.YAngularVelocityProperties());
    map.put("PROPERTY-ZAngularVelocity", MESSAGES.ZAngularVelocityProperties());


/* Events */

    map.put("EVENT-GyroscopeChanged", MESSAGES.GyroscopeChangedEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-xAngularVelocity", MESSAGES.xAngularVelocityParams());
    map.put("PARAM-yAngularVelocity", MESSAGES.yAngularVelocityParams());
    map.put("PARAM-zAngularVelocity", MESSAGES.zAngularVelocityParams());
    map.put("PARAM-timestamp", MESSAGES.timestampParams());


/* Component: HorizontalArrangement */

    map.put("COMPONENT-HorizontalArrangement", MESSAGES.horizontalArrangementComponentPallette());

    map.put("HorizontalArrangement-helpString", MESSAGES.HorizontalArrangementHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AlignHorizontal", MESSAGES.AlignHorizontalProperties());
    map.put("PROPERTY-AlignVertical", MESSAGES.AlignVerticalProperties());
    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: HorizontalScrollArrangement */

    map.put("COMPONENT-HorizontalScrollArrangement", MESSAGES.horizontalScrollArrangementComponentPallette());

    map.put("HorizontalScrollArrangement-helpString", MESSAGES.HorizontalScrollArrangementHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AlignHorizontal", MESSAGES.AlignHorizontalProperties());
    map.put("PROPERTY-AlignVertical", MESSAGES.AlignVerticalProperties());
    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: Image */

    map.put("COMPONENT-Image", MESSAGES.imageComponentPallette());

    map.put("Image-helpString", MESSAGES.ImageHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Animation", MESSAGES.AnimationProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Picture", MESSAGES.PictureProperties());
    map.put("PROPERTY-RotationAngle", MESSAGES.RotationAngleProperties());
    map.put("PROPERTY-ScalePictureToFit", MESSAGES.ScalePictureToFitProperties());
    map.put("PROPERTY-Scaling", MESSAGES.ScalingProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: ImagePicker */

    map.put("COMPONENT-ImagePicker", MESSAGES.imagePickerComponentPallette());

    map.put("ImagePicker-helpString", MESSAGES.ImagePickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Selection", MESSAGES.SelectionProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterPicking", MESSAGES.AfterPickingEvents());
    map.put("EVENT-BeforePicking", MESSAGES.BeforePickingEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-Open", MESSAGES.OpenMethods());


/* Parameters */



/* Component: ImageSprite */

    map.put("COMPONENT-ImageSprite", MESSAGES.imageSpriteComponentPallette());

    map.put("ImageSprite-helpString", MESSAGES.ImageSpriteHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-Heading", MESSAGES.HeadingProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-Interval", MESSAGES.IntervalProperties());
    map.put("PROPERTY-Picture", MESSAGES.PictureProperties());
    map.put("PROPERTY-Rotates", MESSAGES.RotatesProperties());
    map.put("PROPERTY-Speed", MESSAGES.SpeedProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-X", MESSAGES.XProperties());
    map.put("PROPERTY-Y", MESSAGES.YProperties());
    map.put("PROPERTY-Z", MESSAGES.ZProperties());


/* Events */

    map.put("EVENT-CollidedWith", MESSAGES.CollidedWithEvents());
    map.put("EVENT-Dragged", MESSAGES.DraggedEvents());
    map.put("EVENT-EdgeReached", MESSAGES.EdgeReachedEvents());
    map.put("EVENT-Flung", MESSAGES.FlungEvents());
    map.put("EVENT-NoLongerCollidingWith", MESSAGES.NoLongerCollidingWithEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());
    map.put("EVENT-Touched", MESSAGES.TouchedEvents());


/* Methods */

    map.put("METHOD-Bounce", MESSAGES.BounceMethods());
    map.put("METHOD-CollidingWith", MESSAGES.CollidingWithMethods());
    map.put("METHOD-MoveIntoBounds", MESSAGES.MoveIntoBoundsMethods());
    map.put("METHOD-MoveTo", MESSAGES.MoveToMethods());
    map.put("METHOD-PointInDirection", MESSAGES.PointInDirectionMethods());
    map.put("METHOD-PointTowards", MESSAGES.PointTowardsMethods());


/* Parameters */

    map.put("PARAM-other", MESSAGES.otherParams());
    map.put("PARAM-startX", MESSAGES.startXParams());
    map.put("PARAM-startY", MESSAGES.startYParams());
    map.put("PARAM-prevX", MESSAGES.prevXParams());
    map.put("PARAM-prevY", MESSAGES.prevYParams());
    map.put("PARAM-currentX", MESSAGES.currentXParams());
    map.put("PARAM-currentY", MESSAGES.currentYParams());
    map.put("PARAM-edge", MESSAGES.edgeParams());
    map.put("PARAM-x", MESSAGES.xParams());
    map.put("PARAM-y", MESSAGES.yParams());
    map.put("PARAM-speed", MESSAGES.speedParams());
    map.put("PARAM-heading", MESSAGES.headingParams());
    map.put("PARAM-xvel", MESSAGES.xvelParams());
    map.put("PARAM-yvel", MESSAGES.yvelParams());
    map.put("PARAM-target", MESSAGES.targetParams());


/* Component: Label */

    map.put("COMPONENT-Label", MESSAGES.labelComponentPallette());

    map.put("Label-helpString", MESSAGES.LabelHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-HTMLFormat", MESSAGES.HTMLFormatProperties());
    map.put("PROPERTY-HasMargins", MESSAGES.HasMarginsProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: ListPicker */

    map.put("COMPONENT-ListPicker", MESSAGES.listPickerComponentPallette());

    map.put("ListPicker-helpString", MESSAGES.ListPickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Elements", MESSAGES.ElementsProperties());
    map.put("PROPERTY-ElementsFromString", MESSAGES.ElementsFromStringProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-ItemBackgroundColor", MESSAGES.ItemBackgroundColorProperties());
    map.put("PROPERTY-ItemTextColor", MESSAGES.ItemTextColorProperties());
    map.put("PROPERTY-Selection", MESSAGES.SelectionProperties());
    map.put("PROPERTY-SelectionIndex", MESSAGES.SelectionIndexProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-ShowFilterBar", MESSAGES.ShowFilterBarProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Title", MESSAGES.TitleProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterPicking", MESSAGES.AfterPickingEvents());
    map.put("EVENT-BeforePicking", MESSAGES.BeforePickingEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-Open", MESSAGES.OpenMethods());


/* Parameters */



/* Component: ListView */

    map.put("COMPONENT-ListView", MESSAGES.listViewComponentPallette());

    map.put("ListView-helpString", MESSAGES.ListViewHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Elements", MESSAGES.ElementsProperties());
    map.put("PROPERTY-ElementsFromString", MESSAGES.ElementsFromStringProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Selection", MESSAGES.SelectionProperties());
    map.put("PROPERTY-SelectionColor", MESSAGES.SelectionColorProperties());
    map.put("PROPERTY-SelectionIndex", MESSAGES.SelectionIndexProperties());
    map.put("PROPERTY-ShowFilterBar", MESSAGES.ShowFilterBarProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-TextSize", MESSAGES.TextSizeProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterPicking", MESSAGES.AfterPickingEvents());


/* Methods */



/* Parameters */



/* Component: LocationSensor */

    map.put("COMPONENT-LocationSensor", MESSAGES.locationSensorComponentPallette());

    map.put("LocationSensor-helpString", MESSAGES.LocationSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Accuracy", MESSAGES.AccuracyProperties());
    map.put("PROPERTY-Altitude", MESSAGES.AltitudeProperties());
    map.put("PROPERTY-AvailableProviders", MESSAGES.AvailableProvidersProperties());
    map.put("PROPERTY-CurrentAddress", MESSAGES.CurrentAddressProperties());
    map.put("PROPERTY-DistanceInterval", MESSAGES.DistanceIntervalProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-HasAccuracy", MESSAGES.HasAccuracyProperties());
    map.put("PROPERTY-HasAltitude", MESSAGES.HasAltitudeProperties());
    map.put("PROPERTY-HasLongitudeLatitude", MESSAGES.HasLongitudeLatitudeProperties());
    map.put("PROPERTY-Latitude", MESSAGES.LatitudeProperties());
    map.put("PROPERTY-Longitude", MESSAGES.LongitudeProperties());
    map.put("PROPERTY-ProviderLocked", MESSAGES.ProviderLockedProperties());
    map.put("PROPERTY-ProviderName", MESSAGES.ProviderNameProperties());
    map.put("PROPERTY-TimeInterval", MESSAGES.TimeIntervalProperties());


/* Events */

    map.put("EVENT-LocationChanged", MESSAGES.LocationChangedEvents());
    map.put("EVENT-StatusChanged", MESSAGES.StatusChangedEvents());


/* Methods */

    map.put("METHOD-LatitudeFromAddress", MESSAGES.LatitudeFromAddressMethods());
    map.put("METHOD-LongitudeFromAddress", MESSAGES.LongitudeFromAddressMethods());


/* Parameters */

    map.put("PARAM-latitude", MESSAGES.latitudeParams());
    map.put("PARAM-longitude", MESSAGES.longitudeParams());
    map.put("PARAM-altitude", MESSAGES.altitudeParams());
    map.put("PARAM-speed", MESSAGES.speedParams());
    map.put("PARAM-provider", MESSAGES.providerParams());
    map.put("PARAM-status", MESSAGES.statusParams());
    map.put("PARAM-locationName", MESSAGES.locationNameParams());


/* Component: MediaStore */

    map.put("COMPONENT-MediaStore", MESSAGES.mediaStoreComponentPallette());

    map.put("MediaStore-helpString", MESSAGES.MediaStoreHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-ServiceURL", MESSAGES.ServiceURLProperties());


/* Events */

    map.put("EVENT-MediaStored", MESSAGES.MediaStoredEvents());
    map.put("EVENT-WebServiceError", MESSAGES.WebServiceErrorEvents());


/* Methods */

    map.put("METHOD-PostMedia", MESSAGES.PostMediaMethods());


/* Parameters */

    map.put("PARAM-url", MESSAGES.urlParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-mediafile", MESSAGES.mediafileParams());


/* Component: NearField */

    map.put("COMPONENT-NearField", MESSAGES.nearFieldComponentPallette());

    map.put("NearField-helpString", MESSAGES.NearFieldHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-LastMessage", MESSAGES.LastMessageProperties());
    map.put("PROPERTY-ReadMode", MESSAGES.ReadModeProperties());
    map.put("PROPERTY-TextToWrite", MESSAGES.TextToWriteProperties());
    map.put("PROPERTY-WriteType", MESSAGES.WriteTypeProperties());


/* Events */

    map.put("EVENT-TagRead", MESSAGES.TagReadEvents());
    map.put("EVENT-TagWritten", MESSAGES.TagWrittenEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-message", MESSAGES.messageParams());


/* Component: Notifier */

    map.put("COMPONENT-Notifier", MESSAGES.notifierComponentPallette());

    map.put("Notifier-helpString", MESSAGES.NotifierHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-NotifierLength", MESSAGES.NotifierLengthProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());


/* Events */

    map.put("EVENT-AfterChoosing", MESSAGES.AfterChoosingEvents());
    map.put("EVENT-AfterTextInput", MESSAGES.AfterTextInputEvents());


/* Methods */

    map.put("METHOD-DismissProgressDialog", MESSAGES.DismissProgressDialogMethods());
    map.put("METHOD-LogError", MESSAGES.LogErrorMethods());
    map.put("METHOD-LogInfo", MESSAGES.LogInfoMethods());
    map.put("METHOD-LogWarning", MESSAGES.LogWarningMethods());
    map.put("METHOD-ShowAlert", MESSAGES.ShowAlertMethods());
    map.put("METHOD-ShowChooseDialog", MESSAGES.ShowChooseDialogMethods());
    map.put("METHOD-ShowMessageDialog", MESSAGES.ShowMessageDialogMethods());
    map.put("METHOD-ShowProgressDialog", MESSAGES.ShowProgressDialogMethods());
    map.put("METHOD-ShowTextDialog", MESSAGES.ShowTextDialogMethods());


/* Parameters */

    map.put("PARAM-choice", MESSAGES.choiceParams());
    map.put("PARAM-response", MESSAGES.responseParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-notice", MESSAGES.noticeParams());
    map.put("PARAM-title", MESSAGES.titleParams());
    map.put("PARAM-button1Text", MESSAGES.button1TextParams());
    map.put("PARAM-button2Text", MESSAGES.button2TextParams());
    map.put("PARAM-cancelable", MESSAGES.cancelableParams());
    map.put("PARAM-buttonText", MESSAGES.buttonTextParams());


/* Component: NxtColorSensor */

    map.put("COMPONENT-NxtColorSensor", MESSAGES.nxtColorSensorComponentPallette());

    map.put("NxtColorSensor-helpString", MESSAGES.NxtColorSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-ColorChangedEventEnabled", MESSAGES.ColorChangedEventEnabledProperties());
    map.put("PROPERTY-DetectColor", MESSAGES.DetectColorProperties());
    map.put("PROPERTY-GenerateColor", MESSAGES.GenerateColorProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-ColorChanged", MESSAGES.ColorChangedEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetColor", MESSAGES.GetColorMethods());
    map.put("METHOD-GetLightLevel", MESSAGES.GetLightLevelMethods());


/* Parameters */

    map.put("PARAM-color", MESSAGES.colorParams());


/* Component: NxtDirectCommands */

    map.put("COMPONENT-NxtDirectCommands", MESSAGES.nxtDirectCommandsComponentPallette());

    map.put("NxtDirectCommands-helpString", MESSAGES.NxtDirectCommandsHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());


/* Events */



/* Methods */

    map.put("METHOD-DeleteFile", MESSAGES.DeleteFileMethods());
    map.put("METHOD-DownloadFile", MESSAGES.DownloadFileMethods());
    map.put("METHOD-GetBatteryLevel", MESSAGES.GetBatteryLevelMethods());
    map.put("METHOD-GetBrickName", MESSAGES.GetBrickNameMethods());
    map.put("METHOD-GetCurrentProgramName", MESSAGES.GetCurrentProgramNameMethods());
    map.put("METHOD-GetFirmwareVersion", MESSAGES.GetFirmwareVersionMethods());
    map.put("METHOD-GetInputValues", MESSAGES.GetInputValuesMethods());
    map.put("METHOD-GetOutputState", MESSAGES.GetOutputStateMethods());
    map.put("METHOD-KeepAlive", MESSAGES.KeepAliveMethods());
    map.put("METHOD-ListFiles", MESSAGES.ListFilesMethods());
    map.put("METHOD-LsGetStatus", MESSAGES.LsGetStatusMethods());
    map.put("METHOD-LsRead", MESSAGES.LsReadMethods());
    map.put("METHOD-LsWrite", MESSAGES.LsWriteMethods());
    map.put("METHOD-MessageRead", MESSAGES.MessageReadMethods());
    map.put("METHOD-MessageWrite", MESSAGES.MessageWriteMethods());
    map.put("METHOD-PlaySoundFile", MESSAGES.PlaySoundFileMethods());
    map.put("METHOD-PlayTone", MESSAGES.PlayToneMethods());
    map.put("METHOD-ResetInputScaledValue", MESSAGES.ResetInputScaledValueMethods());
    map.put("METHOD-ResetMotorPosition", MESSAGES.ResetMotorPositionMethods());
    map.put("METHOD-SetBrickName", MESSAGES.SetBrickNameMethods());
    map.put("METHOD-SetInputMode", MESSAGES.SetInputModeMethods());
    map.put("METHOD-SetOutputState", MESSAGES.SetOutputStateMethods());
    map.put("METHOD-StartProgram", MESSAGES.StartProgramMethods());
    map.put("METHOD-StopProgram", MESSAGES.StopProgramMethods());
    map.put("METHOD-StopSoundPlayback", MESSAGES.StopSoundPlaybackMethods());


/* Parameters */

    map.put("PARAM-fileName", MESSAGES.fileNameParams());
    map.put("PARAM-source", MESSAGES.sourceParams());
    map.put("PARAM-destination", MESSAGES.destinationParams());
    map.put("PARAM-sensorPortLetter", MESSAGES.sensorPortLetterParams());
    map.put("PARAM-motorPortLetter", MESSAGES.motorPortLetterParams());
    map.put("PARAM-wildcard", MESSAGES.wildcardParams());
    map.put("PARAM-list", MESSAGES.listParams());
    map.put("PARAM-rxDataLength", MESSAGES.rxDataLengthParams());
    map.put("PARAM-mailbox", MESSAGES.mailboxParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-frequencyHz", MESSAGES.frequencyHzParams());
    map.put("PARAM-durationMs", MESSAGES.durationMsParams());
    map.put("PARAM-relative", MESSAGES.relativeParams());
    map.put("PARAM-name", MESSAGES.nameParams());
    map.put("PARAM-sensorType", MESSAGES.sensorTypeParams());
    map.put("PARAM-sensorMode", MESSAGES.sensorModeParams());
    map.put("PARAM-power", MESSAGES.powerParams());
    map.put("PARAM-mode", MESSAGES.modeParams());
    map.put("PARAM-regulationMode", MESSAGES.regulationModeParams());
    map.put("PARAM-turnRatio", MESSAGES.turnRatioParams());
    map.put("PARAM-runState", MESSAGES.runStateParams());
    map.put("PARAM-tachoLimit", MESSAGES.tachoLimitParams());
    map.put("PARAM-programName", MESSAGES.programNameParams());


/* Component: NxtDrive */

    map.put("COMPONENT-NxtDrive", MESSAGES.nxtDriveComponentPallette());

    map.put("NxtDrive-helpString", MESSAGES.NxtDriveHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-DriveMotors", MESSAGES.DriveMotorsProperties());
    map.put("PROPERTY-StopBeforeDisconnect", MESSAGES.StopBeforeDisconnectProperties());
    map.put("PROPERTY-WheelDiameter", MESSAGES.WheelDiameterProperties());


/* Events */



/* Methods */

    map.put("METHOD-MoveBackward", MESSAGES.MoveBackwardMethods());
    map.put("METHOD-MoveBackwardIndefinitely", MESSAGES.MoveBackwardIndefinitelyMethods());
    map.put("METHOD-MoveForward", MESSAGES.MoveForwardMethods());
    map.put("METHOD-MoveForwardIndefinitely", MESSAGES.MoveForwardIndefinitelyMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());
    map.put("METHOD-TurnClockwiseIndefinitely", MESSAGES.TurnClockwiseIndefinitelyMethods());
    map.put("METHOD-TurnCounterClockwiseIndefinitely", MESSAGES.TurnCounterClockwiseIndefinitelyMethods());


/* Parameters */

    map.put("PARAM-power", MESSAGES.powerParams());
    map.put("PARAM-distance", MESSAGES.distanceParams());


/* Component: NxtLightSensor */

    map.put("COMPONENT-NxtLightSensor", MESSAGES.nxtLightSensorComponentPallette());

    map.put("NxtLightSensor-helpString", MESSAGES.NxtLightSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-GenerateLight", MESSAGES.GenerateLightProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetLightLevel", MESSAGES.GetLightLevelMethods());


/* Parameters */



/* Component: NxtSoundSensor */

    map.put("COMPONENT-NxtSoundSensor", MESSAGES.nxtSoundSensorComponentPallette());

    map.put("NxtSoundSensor-helpString", MESSAGES.NxtSoundSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetSoundLevel", MESSAGES.GetSoundLevelMethods());


/* Parameters */



/* Component: NxtTouchSensor */

    map.put("COMPONENT-NxtTouchSensor", MESSAGES.nxtTouchSensorComponentPallette());

    map.put("NxtTouchSensor-helpString", MESSAGES.NxtTouchSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-PressedEventEnabled", MESSAGES.PressedEventEnabledProperties());
    map.put("PROPERTY-ReleasedEventEnabled", MESSAGES.ReleasedEventEnabledProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());


/* Events */

    map.put("EVENT-Pressed", MESSAGES.PressedEvents());
    map.put("EVENT-Released", MESSAGES.ReleasedEvents());


/* Methods */

    map.put("METHOD-IsPressed", MESSAGES.IsPressedMethods());


/* Parameters */



/* Component: NxtUltrasonicSensor */

    map.put("COMPONENT-NxtUltrasonicSensor", MESSAGES.nxtUltrasonicSensorComponentPallette());

    map.put("NxtUltrasonicSensor-helpString", MESSAGES.NxtUltrasonicSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AboveRangeEventEnabled", MESSAGES.AboveRangeEventEnabledProperties());
    map.put("PROPERTY-BelowRangeEventEnabled", MESSAGES.BelowRangeEventEnabledProperties());
    map.put("PROPERTY-BluetoothClient", MESSAGES.BluetoothClientProperties());
    map.put("PROPERTY-BottomOfRange", MESSAGES.BottomOfRangeProperties());
    map.put("PROPERTY-SensorPort", MESSAGES.SensorPortProperties());
    map.put("PROPERTY-TopOfRange", MESSAGES.TopOfRangeProperties());
    map.put("PROPERTY-WithinRangeEventEnabled", MESSAGES.WithinRangeEventEnabledProperties());


/* Events */

    map.put("EVENT-AboveRange", MESSAGES.AboveRangeEvents());
    map.put("EVENT-BelowRange", MESSAGES.BelowRangeEvents());
    map.put("EVENT-WithinRange", MESSAGES.WithinRangeEvents());


/* Methods */

    map.put("METHOD-GetDistance", MESSAGES.GetDistanceMethods());


/* Parameters */



/* Component: OrientationSensor */

    map.put("COMPONENT-OrientationSensor", MESSAGES.orientationSensorComponentPallette());

    map.put("OrientationSensor-helpString", MESSAGES.OrientationSensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Angle", MESSAGES.AngleProperties());
    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-Azimuth", MESSAGES.AzimuthProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-Magnitude", MESSAGES.MagnitudeProperties());
    map.put("PROPERTY-Pitch", MESSAGES.PitchProperties());
    map.put("PROPERTY-Roll", MESSAGES.RollProperties());


/* Events */

    map.put("EVENT-OrientationChanged", MESSAGES.OrientationChangedEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-azimuth", MESSAGES.azimuthParams());
    map.put("PARAM-pitch", MESSAGES.pitchParams());
    map.put("PARAM-roll", MESSAGES.rollParams());


/* Component: PasswordTextBox */

    map.put("COMPONENT-PasswordTextBox", MESSAGES.passwordTextBoxComponentPallette());

    map.put("PasswordTextBox-helpString", MESSAGES.PasswordTextBoxHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Hint", MESSAGES.HintProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());


/* Methods */

    map.put("METHOD-RequestFocus", MESSAGES.RequestFocusMethods());


/* Parameters */



/* Component: Pedometer */

    map.put("COMPONENT-Pedometer", MESSAGES.pedometerComponentPallette());

    map.put("Pedometer-helpString", MESSAGES.PedometerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-CalibrateStrideLength", MESSAGES.CalibrateStrideLengthProperties());
    map.put("PROPERTY-Distance", MESSAGES.DistanceProperties());
    map.put("PROPERTY-ElapsedTime", MESSAGES.ElapsedTimeProperties());
    map.put("PROPERTY-Moving", MESSAGES.MovingProperties());
    map.put("PROPERTY-SimpleSteps", MESSAGES.SimpleStepsProperties());
    map.put("PROPERTY-StopDetectionTimeout", MESSAGES.StopDetectionTimeoutProperties());
    map.put("PROPERTY-StrideLength", MESSAGES.StrideLengthProperties());
    map.put("PROPERTY-UseGPS", MESSAGES.UseGPSProperties());
    map.put("PROPERTY-WalkSteps", MESSAGES.WalkStepsProperties());


/* Events */

    map.put("EVENT-CalibrationFailed", MESSAGES.CalibrationFailedEvents());
    map.put("EVENT-GPSAvailable", MESSAGES.GPSAvailableEvents());
    map.put("EVENT-GPSLost", MESSAGES.GPSLostEvents());
    map.put("EVENT-SimpleStep", MESSAGES.SimpleStepEvents());
    map.put("EVENT-StartedMoving", MESSAGES.StartedMovingEvents());
    map.put("EVENT-StoppedMoving", MESSAGES.StoppedMovingEvents());
    map.put("EVENT-WalkStep", MESSAGES.WalkStepEvents());


/* Methods */

    map.put("METHOD-Pause", MESSAGES.PauseMethods());
    map.put("METHOD-Reset", MESSAGES.ResetMethods());
    map.put("METHOD-Resume", MESSAGES.ResumeMethods());
    map.put("METHOD-Save", MESSAGES.SaveMethods());
    map.put("METHOD-Start", MESSAGES.StartMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());


/* Parameters */

    map.put("PARAM-simpleSteps", MESSAGES.simpleStepsParams());
    map.put("PARAM-distance", MESSAGES.distanceParams());
    map.put("PARAM-walkSteps", MESSAGES.walkStepsParams());


/* Component: PhoneCall */

    map.put("COMPONENT-PhoneCall", MESSAGES.phoneCallComponentPallette());

    map.put("PhoneCall-helpString", MESSAGES.PhoneCallHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-PhoneNumber", MESSAGES.PhoneNumberProperties());


/* Events */

    map.put("EVENT-IncomingCallAnswered", MESSAGES.IncomingCallAnsweredEvents());
    map.put("EVENT-PhoneCallEnded", MESSAGES.PhoneCallEndedEvents());
    map.put("EVENT-PhoneCallStarted", MESSAGES.PhoneCallStartedEvents());


/* Methods */

    map.put("METHOD-MakePhoneCall", MESSAGES.MakePhoneCallMethods());


/* Parameters */

    map.put("PARAM-phoneNumber", MESSAGES.phoneNumberParams());
    map.put("PARAM-status", MESSAGES.statusParams());


/* Component: PhoneNumberPicker */

    map.put("COMPONENT-PhoneNumberPicker", MESSAGES.phoneNumberPickerComponentPallette());

    map.put("PhoneNumberPicker-helpString", MESSAGES.PhoneNumberPickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-ContactName", MESSAGES.ContactNameProperties());
    map.put("PROPERTY-ContactUri", MESSAGES.ContactUriProperties());
    map.put("PROPERTY-EmailAddress", MESSAGES.EmailAddressProperties());
    map.put("PROPERTY-EmailAddressList", MESSAGES.EmailAddressListProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-PhoneNumber", MESSAGES.PhoneNumberProperties());
    map.put("PROPERTY-PhoneNumberList", MESSAGES.PhoneNumberListProperties());
    map.put("PROPERTY-Picture", MESSAGES.PictureProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterPicking", MESSAGES.AfterPickingEvents());
    map.put("EVENT-BeforePicking", MESSAGES.BeforePickingEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-Open", MESSAGES.OpenMethods());
    map.put("METHOD-ViewContact", MESSAGES.ViewContactMethods());


/* Parameters */

    map.put("PARAM-uri", MESSAGES.uriParams());


/* Component: PhoneStatus */

    map.put("COMPONENT-PhoneStatus", MESSAGES.phoneStatusComponentPallette());

    map.put("PhoneStatus-helpString", MESSAGES.PhoneStatusHelpStringComponentPallette());



/* Properties */



/* Events */

    map.put("EVENT-OnSettings", MESSAGES.OnSettingsEvents());


/* Methods */

    map.put("METHOD-GetWifiIpAddress", MESSAGES.GetWifiIpAddressMethods());
    map.put("METHOD-doFault", MESSAGES.doFaultMethods());
    map.put("METHOD-getVersionName", MESSAGES.getVersionNameMethods());
    map.put("METHOD-installURL", MESSAGES.installURLMethods());
    map.put("METHOD-isConnected", MESSAGES.isConnectedMethods());
    map.put("METHOD-isDirect", MESSAGES.isDirectMethods());
    map.put("METHOD-setAssetsLoaded", MESSAGES.setAssetsLoadedMethods());
    map.put("METHOD-setHmacSeedReturnCode", MESSAGES.setHmacSeedReturnCodeMethods());
    map.put("METHOD-shutdown", MESSAGES.shutdownMethods());
    map.put("METHOD-startHTTPD", MESSAGES.startHTTPDMethods());


/* Parameters */

    map.put("PARAM-url", MESSAGES.urlParams());
    map.put("PARAM-seed", MESSAGES.seedParams());
    map.put("PARAM-secure", MESSAGES.secureParams());


/* Component: Player */

    map.put("COMPONENT-Player", MESSAGES.playerComponentPallette());

    map.put("Player-helpString", MESSAGES.PlayerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-IsPlaying", MESSAGES.IsPlayingProperties());
    map.put("PROPERTY-Loop", MESSAGES.LoopProperties());
    map.put("PROPERTY-PlayOnlyInForeground", MESSAGES.PlayOnlyInForegroundProperties());
    map.put("PROPERTY-Source", MESSAGES.SourceProperties());
    map.put("PROPERTY-Volume", MESSAGES.VolumeProperties());


/* Events */

    map.put("EVENT-Completed", MESSAGES.CompletedEvents());
    map.put("EVENT-OtherPlayerStarted", MESSAGES.OtherPlayerStartedEvents());


/* Methods */

    map.put("METHOD-Pause", MESSAGES.PauseMethods());
    map.put("METHOD-Start", MESSAGES.StartMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());
    map.put("METHOD-Vibrate", MESSAGES.VibrateMethods());


/* Parameters */

    map.put("PARAM-milliseconds", MESSAGES.millisecondsParams());


/* Component: ProximitySensor */

    map.put("COMPONENT-ProximitySensor", MESSAGES.proximitySensorComponentPallette());

    map.put("ProximitySensor-helpString", MESSAGES.ProximitySensorHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Available", MESSAGES.AvailableProperties());
    map.put("PROPERTY-Distance", MESSAGES.DistanceProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-KeepRunningWhenOnPause", MESSAGES.KeepRunningWhenOnPauseProperties());
    map.put("PROPERTY-MaximumRange", MESSAGES.MaximumRangeProperties());


/* Events */

    map.put("EVENT-ProximityChanged", MESSAGES.ProximityChangedEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-distance", MESSAGES.distanceParams());


/* Component: Sharing */

    map.put("COMPONENT-Sharing", MESSAGES.sharingComponentPallette());

    map.put("Sharing-helpString", MESSAGES.SharingHelpStringComponentPallette());



/* Properties */



/* Events */



/* Methods */

    map.put("METHOD-ShareFile", MESSAGES.ShareFileMethods());
    map.put("METHOD-ShareFileWithMessage", MESSAGES.ShareFileWithMessageMethods());
    map.put("METHOD-ShareMessage", MESSAGES.ShareMessageMethods());


/* Parameters */

    map.put("PARAM-file", MESSAGES.fileParams());
    map.put("PARAM-message", MESSAGES.messageParams());


/* Component: Slider */

    map.put("COMPONENT-Slider", MESSAGES.sliderComponentPallette());

    map.put("Slider-helpString", MESSAGES.SliderHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-ColorLeft", MESSAGES.ColorLeftProperties());
    map.put("PROPERTY-ColorRight", MESSAGES.ColorRightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-MaxValue", MESSAGES.MaxValueProperties());
    map.put("PROPERTY-MinValue", MESSAGES.MinValueProperties());
    map.put("PROPERTY-ThumbEnabled", MESSAGES.ThumbEnabledProperties());
    map.put("PROPERTY-ThumbPosition", MESSAGES.ThumbPositionProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-PositionChanged", MESSAGES.PositionChangedEvents());


/* Methods */



/* Parameters */

    map.put("PARAM-thumbPosition", MESSAGES.thumbPositionParams());


/* Component: Sound */

    map.put("COMPONENT-Sound", MESSAGES.soundComponentPallette());

    map.put("Sound-helpString", MESSAGES.SoundHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-MinimumInterval", MESSAGES.MinimumIntervalProperties());
    map.put("PROPERTY-Source", MESSAGES.SourceProperties());


/* Events */



/* Methods */

    map.put("METHOD-Pause", MESSAGES.PauseMethods());
    map.put("METHOD-Play", MESSAGES.PlayMethods());
    map.put("METHOD-Resume", MESSAGES.ResumeMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());
    map.put("METHOD-Vibrate", MESSAGES.VibrateMethods());


/* Parameters */

    map.put("PARAM-millisecs", MESSAGES.millisecsParams());


/* Component: SoundRecorder */

    map.put("COMPONENT-SoundRecorder", MESSAGES.soundRecorderComponentPallette());

    map.put("SoundRecorder-helpString", MESSAGES.SoundRecorderHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-SavedRecording", MESSAGES.SavedRecordingProperties());


/* Events */

    map.put("EVENT-AfterSoundRecorded", MESSAGES.AfterSoundRecordedEvents());
    map.put("EVENT-StartedRecording", MESSAGES.StartedRecordingEvents());
    map.put("EVENT-StoppedRecording", MESSAGES.StoppedRecordingEvents());


/* Methods */

    map.put("METHOD-Start", MESSAGES.StartMethods());
    map.put("METHOD-Stop", MESSAGES.StopMethods());


/* Parameters */

    map.put("PARAM-sound", MESSAGES.soundParams());


/* Component: SpeechRecognizer */

    map.put("COMPONENT-SpeechRecognizer", MESSAGES.speechRecognizerComponentPallette());

    map.put("SpeechRecognizer-helpString", MESSAGES.SpeechRecognizerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Result", MESSAGES.ResultProperties());


/* Events */

    map.put("EVENT-AfterGettingText", MESSAGES.AfterGettingTextEvents());
    map.put("EVENT-BeforeGettingText", MESSAGES.BeforeGettingTextEvents());


/* Methods */

    map.put("METHOD-GetText", MESSAGES.GetTextMethods());


/* Parameters */

    map.put("PARAM-result", MESSAGES.resultParams());


/* Component: Spinner */

    map.put("COMPONENT-Spinner", MESSAGES.spinnerComponentPallette());

    map.put("Spinner-helpString", MESSAGES.SpinnerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Elements", MESSAGES.ElementsProperties());
    map.put("PROPERTY-ElementsFromString", MESSAGES.ElementsFromStringProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Prompt", MESSAGES.PromptProperties());
    map.put("PROPERTY-Selection", MESSAGES.SelectionProperties());
    map.put("PROPERTY-SelectionIndex", MESSAGES.SelectionIndexProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterSelecting", MESSAGES.AfterSelectingEvents());


/* Methods */

    map.put("METHOD-DisplayDropdown", MESSAGES.DisplayDropdownMethods());


/* Parameters */

    map.put("PARAM-selection", MESSAGES.selectionParams());


/* Component: TableArrangement */

    map.put("COMPONENT-TableArrangement", MESSAGES.tableArrangementComponentPallette());

    map.put("TableArrangement-helpString", MESSAGES.TableArrangementHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-Columns", MESSAGES.ColumnsProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Rows", MESSAGES.RowsProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: TextBox */

    map.put("COMPONENT-TextBox", MESSAGES.textBoxComponentPallette());

    map.put("TextBox-helpString", MESSAGES.TextBoxHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Hint", MESSAGES.HintProperties());
    map.put("PROPERTY-MultiLine", MESSAGES.MultiLineProperties());
    map.put("PROPERTY-NumbersOnly", MESSAGES.NumbersOnlyProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());


/* Methods */

    map.put("METHOD-HideKeyboard", MESSAGES.HideKeyboardMethods());
    map.put("METHOD-RequestFocus", MESSAGES.RequestFocusMethods());


/* Parameters */



/* Component: TextToSpeech */

    map.put("COMPONENT-TextToSpeech", MESSAGES.textToSpeechComponentPallette());

    map.put("TextToSpeech-helpString", MESSAGES.TextToSpeechHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AvailableCountries", MESSAGES.AvailableCountriesProperties());
    map.put("PROPERTY-AvailableLanguages", MESSAGES.AvailableLanguagesProperties());
    map.put("PROPERTY-Country", MESSAGES.CountryProperties());
    map.put("PROPERTY-Language", MESSAGES.LanguageProperties());
    map.put("PROPERTY-Pitch", MESSAGES.PitchProperties());
    map.put("PROPERTY-Result", MESSAGES.ResultProperties());
    map.put("PROPERTY-SpeechRate", MESSAGES.SpeechRateProperties());


/* Events */

    map.put("EVENT-AfterSpeaking", MESSAGES.AfterSpeakingEvents());
    map.put("EVENT-BeforeSpeaking", MESSAGES.BeforeSpeakingEvents());


/* Methods */

    map.put("METHOD-Speak", MESSAGES.SpeakMethods());


/* Parameters */

    map.put("PARAM-result", MESSAGES.resultParams());
    map.put("PARAM-message", MESSAGES.messageParams());


/* Component: Texting */

    map.put("COMPONENT-Texting", MESSAGES.textingComponentPallette());

    map.put("Texting-helpString", MESSAGES.TextingHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-GoogleVoiceEnabled", MESSAGES.GoogleVoiceEnabledProperties());
    map.put("PROPERTY-Message", MESSAGES.MessageProperties());
    map.put("PROPERTY-PhoneNumber", MESSAGES.PhoneNumberProperties());
    map.put("PROPERTY-ReceivingEnabled", MESSAGES.ReceivingEnabledProperties());


/* Events */

    map.put("EVENT-MessageReceived", MESSAGES.MessageReceivedEvents());


/* Methods */

    map.put("METHOD-SendMessage", MESSAGES.SendMessageMethods());


/* Parameters */

    map.put("PARAM-number", MESSAGES.numberParams());
    map.put("PARAM-messageText", MESSAGES.messageTextParams());


/* Component: TimePicker */

    map.put("COMPONENT-TimePicker", MESSAGES.timePickerComponentPallette());

    map.put("TimePicker-helpString", MESSAGES.TimePickerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Enabled", MESSAGES.EnabledProperties());
    map.put("PROPERTY-FontBold", MESSAGES.FontBoldProperties());
    map.put("PROPERTY-FontItalic", MESSAGES.FontItalicProperties());
    map.put("PROPERTY-FontSize", MESSAGES.FontSizeProperties());
    map.put("PROPERTY-FontTypeface", MESSAGES.FontTypefaceProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Hour", MESSAGES.HourProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Instant", MESSAGES.InstantProperties());
    map.put("PROPERTY-Minute", MESSAGES.MinuteProperties());
    map.put("PROPERTY-Shape", MESSAGES.ShapeProperties());
    map.put("PROPERTY-ShowFeedback", MESSAGES.ShowFeedbackProperties());
    map.put("PROPERTY-Text", MESSAGES.TextProperties());
    map.put("PROPERTY-TextAlignment", MESSAGES.TextAlignmentProperties());
    map.put("PROPERTY-TextColor", MESSAGES.TextColorProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-AfterTimeSet", MESSAGES.AfterTimeSetEvents());
    map.put("EVENT-GotFocus", MESSAGES.GotFocusEvents());
    map.put("EVENT-LostFocus", MESSAGES.LostFocusEvents());
    map.put("EVENT-TouchDown", MESSAGES.TouchDownEvents());
    map.put("EVENT-TouchUp", MESSAGES.TouchUpEvents());


/* Methods */

    map.put("METHOD-LaunchPicker", MESSAGES.LaunchPickerMethods());
    map.put("METHOD-SetTimeToDisplay", MESSAGES.SetTimeToDisplayMethods());
    map.put("METHOD-SetTimeToDisplayFromInstant", MESSAGES.SetTimeToDisplayFromInstantMethods());


/* Parameters */

    map.put("PARAM-hour", MESSAGES.hourParams());
    map.put("PARAM-minute", MESSAGES.minuteParams());
    map.put("PARAM-instant", MESSAGES.instantParams());


/* Component: TinyDB */

    map.put("COMPONENT-TinyDB", MESSAGES.tinyDBComponentPallette());

    map.put("TinyDB-helpString", MESSAGES.TinyDBHelpStringComponentPallette());



/* Properties */



/* Events */



/* Methods */

    map.put("METHOD-ClearAll", MESSAGES.ClearAllMethods());
    map.put("METHOD-ClearTag", MESSAGES.ClearTagMethods());
    map.put("METHOD-GetTags", MESSAGES.GetTagsMethods());
    map.put("METHOD-GetValue", MESSAGES.GetValueMethods());
    map.put("METHOD-StoreValue", MESSAGES.StoreValueMethods());


/* Parameters */

    map.put("PARAM-tag", MESSAGES.tagParams());
    map.put("PARAM-valueIfTagNotThere", MESSAGES.valueIfTagNotThereParams());
    map.put("PARAM-valueToStore", MESSAGES.valueToStoreParams());


/* Component: TinyWebDB */

    map.put("COMPONENT-TinyWebDB", MESSAGES.tinyWebDBComponentPallette());

    map.put("TinyWebDB-helpString", MESSAGES.TinyWebDBHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-ServiceURL", MESSAGES.ServiceURLProperties());


/* Events */

    map.put("EVENT-GotValue", MESSAGES.GotValueEvents());
    map.put("EVENT-ValueStored", MESSAGES.ValueStoredEvents());
    map.put("EVENT-WebServiceError", MESSAGES.WebServiceErrorEvents());


/* Methods */

    map.put("METHOD-GetValue", MESSAGES.GetValueMethods());
    map.put("METHOD-StoreValue", MESSAGES.StoreValueMethods());


/* Parameters */

    map.put("PARAM-tagFromWebDB", MESSAGES.tagFromWebDBParams());
    map.put("PARAM-valueFromWebDB", MESSAGES.valueFromWebDBParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-tag", MESSAGES.tagParams());
    map.put("PARAM-valueToStore", MESSAGES.valueToStoreParams());


/* Component: Twitter */

    map.put("COMPONENT-Twitter", MESSAGES.twitterComponentPallette());

    map.put("Twitter-helpString", MESSAGES.TwitterHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-ConsumerKey", MESSAGES.ConsumerKeyProperties());
    map.put("PROPERTY-ConsumerSecret", MESSAGES.ConsumerSecretProperties());
    map.put("PROPERTY-DirectMessages", MESSAGES.DirectMessagesProperties());
    map.put("PROPERTY-Followers", MESSAGES.FollowersProperties());
    map.put("PROPERTY-FriendTimeline", MESSAGES.FriendTimelineProperties());
    map.put("PROPERTY-Mentions", MESSAGES.MentionsProperties());
    map.put("PROPERTY-SearchResults", MESSAGES.SearchResultsProperties());
    map.put("PROPERTY-TwitPic_API_Key", MESSAGES.TwitPic_API_KeyProperties());
    map.put("PROPERTY-Username", MESSAGES.UsernameProperties());


/* Events */

    map.put("EVENT-DirectMessagesReceived", MESSAGES.DirectMessagesReceivedEvents());
    map.put("EVENT-FollowersReceived", MESSAGES.FollowersReceivedEvents());
    map.put("EVENT-FriendTimelineReceived", MESSAGES.FriendTimelineReceivedEvents());
    map.put("EVENT-IsAuthorized", MESSAGES.IsAuthorizedEvents());
    map.put("EVENT-MentionsReceived", MESSAGES.MentionsReceivedEvents());
    map.put("EVENT-SearchSuccessful", MESSAGES.SearchSuccessfulEvents());


/* Methods */

    map.put("METHOD-Authorize", MESSAGES.AuthorizeMethods());
    map.put("METHOD-CheckAuthorized", MESSAGES.CheckAuthorizedMethods());
    map.put("METHOD-DeAuthorize", MESSAGES.DeAuthorizeMethods());
    map.put("METHOD-DirectMessage", MESSAGES.DirectMessageMethods());
    map.put("METHOD-Follow", MESSAGES.FollowMethods());
    map.put("METHOD-RequestDirectMessages", MESSAGES.RequestDirectMessagesMethods());
    map.put("METHOD-RequestFollowers", MESSAGES.RequestFollowersMethods());
    map.put("METHOD-RequestFriendTimeline", MESSAGES.RequestFriendTimelineMethods());
    map.put("METHOD-RequestMentions", MESSAGES.RequestMentionsMethods());
    map.put("METHOD-SearchTwitter", MESSAGES.SearchTwitterMethods());
    map.put("METHOD-StopFollowing", MESSAGES.StopFollowingMethods());
    map.put("METHOD-Tweet", MESSAGES.TweetMethods());
    map.put("METHOD-TweetWithImage", MESSAGES.TweetWithImageMethods());


/* Parameters */

    map.put("PARAM-messages", MESSAGES.messagesParams());
    map.put("PARAM-followers2", MESSAGES.followers2Params());
    map.put("PARAM-timeline", MESSAGES.timelineParams());
    map.put("PARAM-mentions", MESSAGES.mentionsParams());
    map.put("PARAM-searchResults", MESSAGES.searchResultsParams());
    map.put("PARAM-user", MESSAGES.userParams());
    map.put("PARAM-message", MESSAGES.messageParams());
    map.put("PARAM-query", MESSAGES.queryParams());
    map.put("PARAM-status", MESSAGES.statusParams());
    map.put("PARAM-imagePath", MESSAGES.imagePathParams());


/* Component: VerticalArrangement */

    map.put("COMPONENT-VerticalArrangement", MESSAGES.verticalArrangementComponentPallette());

    map.put("VerticalArrangement-helpString", MESSAGES.VerticalArrangementHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AlignHorizontal", MESSAGES.AlignHorizontalProperties());
    map.put("PROPERTY-AlignVertical", MESSAGES.AlignVerticalProperties());
    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: VerticalScrollArrangement */

    map.put("COMPONENT-VerticalScrollArrangement", MESSAGES.verticalScrollArrangementComponentPallette());

    map.put("VerticalScrollArrangement-helpString", MESSAGES.VerticalScrollArrangementHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AlignHorizontal", MESSAGES.AlignHorizontalProperties());
    map.put("PROPERTY-AlignVertical", MESSAGES.AlignVerticalProperties());
    map.put("PROPERTY-BackgroundColor", MESSAGES.BackgroundColorProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Image", MESSAGES.ImageProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */



/* Parameters */



/* Component: VideoPlayer */

    map.put("COMPONENT-VideoPlayer", MESSAGES.videoPlayerComponentPallette());

    map.put("VideoPlayer-helpString", MESSAGES.VideoPlayerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-FullScreen", MESSAGES.FullScreenProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-Source", MESSAGES.SourceProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-Volume", MESSAGES.VolumeProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */

    map.put("EVENT-Completed", MESSAGES.CompletedEvents());


/* Methods */

    map.put("METHOD-GetDuration", MESSAGES.GetDurationMethods());
    map.put("METHOD-Pause", MESSAGES.PauseMethods());
    map.put("METHOD-SeekTo", MESSAGES.SeekToMethods());
    map.put("METHOD-Start", MESSAGES.StartMethods());


/* Parameters */

    map.put("PARAM-ms", MESSAGES.msParams());


/* Component: Voting */

    map.put("COMPONENT-Voting", MESSAGES.votingComponentPallette());

    map.put("Voting-helpString", MESSAGES.VotingHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-BallotOptions", MESSAGES.BallotOptionsProperties());
    map.put("PROPERTY-BallotQuestion", MESSAGES.BallotQuestionProperties());
    map.put("PROPERTY-ServiceURL", MESSAGES.ServiceURLProperties());
    map.put("PROPERTY-UserChoice", MESSAGES.UserChoiceProperties());
    map.put("PROPERTY-UserEmailAddress", MESSAGES.UserEmailAddressProperties());
    map.put("PROPERTY-UserId", MESSAGES.UserIdProperties());


/* Events */

    map.put("EVENT-GotBallot", MESSAGES.GotBallotEvents());
    map.put("EVENT-GotBallotConfirmation", MESSAGES.GotBallotConfirmationEvents());
    map.put("EVENT-NoOpenPoll", MESSAGES.NoOpenPollEvents());
    map.put("EVENT-WebServiceError", MESSAGES.WebServiceErrorEvents());


/* Methods */

    map.put("METHOD-RequestBallot", MESSAGES.RequestBallotMethods());
    map.put("METHOD-SendBallot", MESSAGES.SendBallotMethods());


/* Parameters */

    map.put("PARAM-message", MESSAGES.messageParams());


/* Component: Web */

    map.put("COMPONENT-Web", MESSAGES.webComponentPallette());

    map.put("Web-helpString", MESSAGES.WebHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-AllowCookies", MESSAGES.AllowCookiesProperties());
    map.put("PROPERTY-RequestHeaders", MESSAGES.RequestHeadersProperties());
    map.put("PROPERTY-ResponseFileName", MESSAGES.ResponseFileNameProperties());
    map.put("PROPERTY-SaveResponse", MESSAGES.SaveResponseProperties());
    map.put("PROPERTY-Url", MESSAGES.UrlProperties());


/* Events */

    map.put("EVENT-GotFile", MESSAGES.GotFileEvents());
    map.put("EVENT-GotText", MESSAGES.GotTextEvents());


/* Methods */

    map.put("METHOD-BuildRequestData", MESSAGES.BuildRequestDataMethods());
    map.put("METHOD-ClearCookies", MESSAGES.ClearCookiesMethods());
    map.put("METHOD-Delete", MESSAGES.DeleteMethods());
    map.put("METHOD-Get", MESSAGES.GetMethods());
    map.put("METHOD-HtmlTextDecode", MESSAGES.HtmlTextDecodeMethods());
    map.put("METHOD-JsonTextDecode", MESSAGES.JsonTextDecodeMethods());
    map.put("METHOD-PostFile", MESSAGES.PostFileMethods());
    map.put("METHOD-PostText", MESSAGES.PostTextMethods());
    map.put("METHOD-PostTextWithEncoding", MESSAGES.PostTextWithEncodingMethods());
    map.put("METHOD-PutFile", MESSAGES.PutFileMethods());
    map.put("METHOD-PutText", MESSAGES.PutTextMethods());
    map.put("METHOD-PutTextWithEncoding", MESSAGES.PutTextWithEncodingMethods());
    map.put("METHOD-UriEncode", MESSAGES.UriEncodeMethods());
    map.put("METHOD-XMLTextDecode", MESSAGES.XMLTextDecodeMethods());


/* Parameters */

    map.put("PARAM-url", MESSAGES.urlParams());
    map.put("PARAM-responseCode", MESSAGES.responseCodeParams());
    map.put("PARAM-responseType", MESSAGES.responseTypeParams());
    map.put("PARAM-fileName", MESSAGES.fileNameParams());
    map.put("PARAM-responseContent", MESSAGES.responseContentParams());
    map.put("PARAM-list", MESSAGES.listParams());
    map.put("PARAM-htmlText", MESSAGES.htmlTextParams());
    map.put("PARAM-jsonText", MESSAGES.jsonTextParams());
    map.put("PARAM-path", MESSAGES.pathParams());
    map.put("PARAM-text", MESSAGES.textParams());
    map.put("PARAM-encoding", MESSAGES.encodingParams());
    map.put("PARAM-XmlText", MESSAGES.xmlTextParams());


/* Component: WebViewer */

    map.put("COMPONENT-WebViewer", MESSAGES.webViewerComponentPallette());

    map.put("WebViewer-helpString", MESSAGES.WebViewerHelpStringComponentPallette());



/* Properties */

    map.put("PROPERTY-CurrentPageTitle", MESSAGES.CurrentPageTitleProperties());
    map.put("PROPERTY-CurrentUrl", MESSAGES.CurrentUrlProperties());
    map.put("PROPERTY-FollowLinks", MESSAGES.FollowLinksProperties());
    map.put("PROPERTY-Height", MESSAGES.HeightProperties());
    map.put("PROPERTY-HeightPercent", MESSAGES.HeightPercentProperties());
    map.put("PROPERTY-HomeUrl", MESSAGES.HomeUrlProperties());
    map.put("PROPERTY-IgnoreSslErrors", MESSAGES.IgnoreSslErrorsProperties());
    map.put("PROPERTY-PromptforPermission", MESSAGES.PromptforPermissionProperties());
    map.put("PROPERTY-UsesLocation", MESSAGES.UsesLocationProperties());
    map.put("PROPERTY-Visible", MESSAGES.VisibleProperties());
    map.put("PROPERTY-WebViewString", MESSAGES.WebViewStringProperties());
    map.put("PROPERTY-Width", MESSAGES.WidthProperties());
    map.put("PROPERTY-WidthPercent", MESSAGES.WidthPercentProperties());


/* Events */



/* Methods */

    map.put("METHOD-CanGoBack", MESSAGES.CanGoBackMethods());
    map.put("METHOD-CanGoForward", MESSAGES.CanGoForwardMethods());
    map.put("METHOD-ClearCaches", MESSAGES.ClearCachesMethods());
    map.put("METHOD-ClearLocations", MESSAGES.ClearLocationsMethods());
    map.put("METHOD-GoBack", MESSAGES.GoBackMethods());
    map.put("METHOD-GoForward", MESSAGES.GoForwardMethods());
    map.put("METHOD-GoHome", MESSAGES.GoHomeMethods());
    map.put("METHOD-GoToUrl", MESSAGES.GoToUrlMethods());


/* Parameters */

    map.put("PARAM-url", MESSAGES.urlParams());


/* Component: YandexTranslate */

    map.put("COMPONENT-YandexTranslate", MESSAGES.yandexTranslateComponentPallette());

    map.put("YandexTranslate-helpString", MESSAGES.YandexTranslateHelpStringComponentPallette());



/* Properties */



/* Events */

    map.put("EVENT-GotTranslation", MESSAGES.GotTranslationEvents());


/* Methods */

    map.put("METHOD-RequestTranslation", MESSAGES.RequestTranslationMethods());


/* Parameters */

    map.put("PARAM-responseCode", MESSAGES.responseCodeParams());
    map.put("PARAM-translation", MESSAGES.translationParams());
    map.put("PARAM-languageToTranslateTo", MESSAGES.languageToTranslateToParams());
    map.put("PARAM-textToTranslate", MESSAGES.textToTranslateParams());


    /* Categories */

    map.put("CATEGORY-Connectivity", MESSAGES.connectivityComponentPallette());
    map.put("CATEGORY-Drawing and Animation", MESSAGES.drawingAndAnimationComponentPallette());
    map.put("CATEGORY-Experimental", MESSAGES.experimentalComponentPallette());
    map.put("CATEGORY-For internal use only", MESSAGES.forInternalUseOnlyComponentPallette());
    map.put("CATEGORY-LEGO® MINDSTORMS®", MESSAGES.legoMindstormsComponentPallette());
    map.put("CATEGORY-Layout", MESSAGES.layoutComponentPallette());
    map.put("CATEGORY-Media", MESSAGES.mediaComponentPallette());
    map.put("CATEGORY-Sensors", MESSAGES.sensorsComponentPallette());
    map.put("CATEGORY-Social", MESSAGES.socialComponentPallette());
    map.put("CATEGORY-Storage", MESSAGES.storageComponentPallette());
    map.put("CATEGORY-User Interface", MESSAGES.userInterfaceComponentPallette());
  return map;
  }
}
