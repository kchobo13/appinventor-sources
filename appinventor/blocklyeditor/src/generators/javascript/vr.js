// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2017 Massachusetts Institute of Technology. All rights reserved.

"use strict";

//goog.provide("Blockly.JavaScript");
//goog.require("Blockly.Blocks.Utilities");

Blockly.JavaScript["vr_color_black"] = function() {
  return ["0x" + this.getFieldValue("COLOR").substring(1), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_color_white"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_red"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_pink"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_orange"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_yellow"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_green"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_cyan"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_blue"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_magenta"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_light_gray"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_gray"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_dark_gray"] = function() {
  return Blockly.JavaScript.color_black.call(this);
}

Blockly.JavaScript["vr_color_make_color"] = function() {
  var colors = Blockly.JavaScript.valueToCode(this, "COLORLIST", Blockly.Yail.ORDER_NONE) || "[0,0,0]";
  return ["((65536*" + colors + "[0])+(256*" + colors + "[1])+" + colors + "[2])", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_ptc1"] = function() {
  return "ptc1();";
}

Blockly.JavaScript["vr_ptc2"] = function() {
  return "ptc2(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ");";
}

Blockly.JavaScript["vr_ptc3"] = function() {
  return "ptc3(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + "," + (Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) || "0") + ");";
}

Blockly.JavaScript["vr_ptc4"] = function() {
  return "ptc4(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + "," + (Blockly.JavaScript.valueToCode(this, "boolean", Blockly.JavaScript.ORDER_NONE) || "false") + ");";
}

Blockly.JavaScript["vr_return1"] = function() {
  return ["return1()", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return2"] = function() {
  return ["return2(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return3"] = function() {
  return ["return3(" + (Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return4"] = function() {
  return ["return4(" + (Blockly.JavaScript.valueToCode(this, "boolean", Blockly.JavaScript.ORDER_NONE) || "false") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_null"] = function() {
  return ["null", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_sleep"] = function() {
  return "await new Promise(r=>setTimeout(r," + (Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) || "0") + "*1000));";
}

Blockly.JavaScript["vr_add_object_to_scene"] = function() {
  return "addObjectToScene(" + (Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_remove_object_from_scene"] = function() {
  return "removeObjectFromScene(" + (Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_set_object_property"] = function() {
  return "setObjectProperty(" + (Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) || "null") + ",\"" + this.getFieldValue("property").toLowerCase() + "\"," + (Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_get_object_property"] = function() {
  return ["getObjectProperty(" + (Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) || "null") + ",\"" + this.getFieldValue("property").toLowerCase() + "\")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_add_light_to_scene"] = function() {
  return "addLightToScene(" + (Blockly.JavaScript.valueToCode(this, "light", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_remove_light_from_scene"] = function() {
  return "removeLightFromScene(" + (Blockly.JavaScript.valueToCode(this, "light", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_set_light_property"] = function() {
  return "setLightProperty(" + (Blockly.JavaScript.valueToCode(this, "light", Blockly.JavaScript.ORDER_NONE) || "null") + ",\"" + this.getFieldValue("property").toLowerCase() + "\"," + (Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_get_light_property"] = function() {
  return ["getLightProperty(" + (Blockly.JavaScript.valueToCode(this, "light", Blockly.JavaScript.ORDER_NONE) || "null") + ",\"" + this.getFieldValue("property").toLowerCase() + "\")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_set_camera_property"] = function() {
  return "setCameraProperty(\"" + this.getFieldValue("property").toLowerCase() + "\"," + (Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_get_camera_property"] = function() {
  return ["getCameraProperty(\"" + this.getFieldValue("property").toLowerCase() + "\")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_all_objects"] = function() {
  return ["getAllObjects()", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_objects_by_name"] = function() {
  return ["getObjectsByName(" + (Blockly.JavaScript.valueToCode(this, "name", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_all_lights"] = function() {
  return ["getAllLights()", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_lights_by_name"] = function() {
  return ["getLightsByName(\"" + (Blockly.JavaScript.valueToCode(this, "name", Blockly.JavaScript.ORDER_NONE) || "\"\"") + "\")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_is_object_in_scene"] = function() {
  return ["isObjectInScene(" + (Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) || "null") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_is_light_in_scene"] = function() {
  return ["isLightInScene(" + (Blockly.JavaScript.valueToCode(this, "light", Blockly.JavaScript.ORDER_NONE) || "null") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_set_world_property"] = function() {
  return "setWorldProperty(\"" + this.getFieldValue("property").toLowerCase() + "\"," + (Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_get_world_property"] = function() {
  return ["getWorldProperty(\"" + this.getFieldValue("property").toLowerCase() + "\")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_touch"] = function() {
  var js = "";
  switch (this.getFieldValue("property")) {
    case "TOUCHSCREENX":
      js = "_touchscreenx";
      break;
    case "TOUCHSCREENY":
      js = "_touchscreeny";
      break;
    case "TOUCHX":
      js = "_touch.x";
      break;
    case "TOUCHY":
      js = "_touch.y";
      break;
    case "TOUCHZ":
      js = "_touch.z";
      break;
    case "TARGETX":
      js = "_targetx";
      break;
    case "TARGETY":
      js = "_targety";
      break;
    case "TARGETZ":
      js = "_targetz";
      break;
    case "OBJECT":
      js = "_object";
      break;
    default:
      js = "_touchid";
  }
  return [js, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_get_window_size"] = function() {
  var js = "";
  if (this.getFieldValue("property") === "WIDTH") {
    js = "window.innerWidth";
  } else {
    js = "window.innerHeight";
  }
  return [js, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_controls_if"] = function() {
  var js = "";
  for (var i = 0; i <= this.elseifCount_; i++) {
    if (i !== 0) {
      js += "else ";
    }
    js += "if(" + (Blockly.JavaScript.valueToCode(this, "IF" + i, Blockly.JavaScript.ORDER_NONE) || "false") + "){" + Blockly.JavaScript.statementToCode(this, "DO" + i) + "}";
  }
  if (this.elseCount_ == 1) {
    js += "else{" + Blockly.JavaScript.statementToCode(this, "ELSE") + "}";
  }
  return js;
}

Blockly.JavaScript["vr_controls_forRange"] = function() {
  var op = "";
  var step = "";
  var index = this.getFieldValue("VAR");
  var start = Blockly.JavaScript.valueToCode(this, "START", Blockly.JavaScript.ORDER_NONE) || "0";
  var end = Blockly.JavaScript.valueToCode(this, "END", Blockly.JavaScript.ORDER_NONE) || "0";
  if (parseInt(start) <= parseInt(end)) {
    op = "<=";
    step = "+=";
  } else {
    op = ">=";
    step = "-=";
  }
  return "for(var " + index + "=" + start + ";" + index + op + end + ";" + index + step + (Blockly.JavaScript.valueToCode(this, "STEP", Blockly.JavaScript.ORDER_NONE) || "0") + "){" + Blockly.JavaScript.statementToCode(this, "DO", Blockly.JavaScript.ORDER_NONE) + "}";
}

Blockly.JavaScript["vr_controls_while"] = function() {
  return "while(" + (Blockly.JavaScript.valueToCode(this, "TEST", Blockly.JavaScript.ORDER_NONE) || "false") + "){" + Blockly.JavaScript.statementToCode(this, "DO") + "}";
}

Blockly.JavaScript["vr_controls_openAnotherScreen"] = function() {
  return "switchScreen(" + (Blockly.JavaScript.valueToCode(this, "SCREEN", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_controls_openAnotherScreenWithStartValue"] = function() {
  return "switchScreenWithValue(" + (Blockly.JavaScript.valueToCode(this, "SCREENNAME", Blockly.JavaScript.ORDER_NONE) || "null") + "," + (Blockly.JavaScript.valueToCode(this, "STARTVALUE", Blockly.JavaScript.ORDER_NONE) || "null") + ");";
}

Blockly.JavaScript["vr_on_start"] = function() {
  return "p.onstart = async function(){" + Blockly.JavaScript.statementToCode(this, "do") + "};";
}

Blockly.JavaScript["vr_on_render"] = function() {
  return "p.onrender = async function(){" + Blockly.JavaScript.statementToCode(this, "do") + "};";
}

Blockly.JavaScript["vr_on_touch_start"] = function() {
  return "p.ontouchstart = async function(_touchscreenx, _touchscreeny, _touch, _targetx, _targety, _targetz, _object, _touchid){" + Blockly.JavaScript.statementToCode(this, "do") + "};";
}

Blockly.JavaScript["vr_on_touch_move"] = function() {
  return "p.ontouchmove = async function(_touchscreenx, _touchscreeny, _touch, _targetx, _targety, _targetz, _object, _touchid){" + Blockly.JavaScript.statementToCode(this, "do") + "};";
}

Blockly.JavaScript["vr_on_touch_end"] = function() {
  return "p.ontouchend = async function(_touchscreenx, _touchscreeny, _touch, _targetx, _targety, _targetz, _object, _touchid){" + Blockly.JavaScript.statementToCode(this, "do") + "};";
}

Blockly.JavaScript["vr_light"] = function() {
  var properties;
  var type = this.getFieldValue("type");
  switch (type) {
    case "AMBIENT":
      properties = "{type:\"AmbientLight\",name:\"Ambient Light\",color:16777215,intensity:0.5}";
      break;
    case "DIRECTIONAL":
      properties = "{type:\"DirectionalLight\",name:\"Directional Light\",positionx:0,positiony:0,positionz:0,color:65535,intensity:1}";
      break;
    case "HEMISPHERE":
      properties = "{type:\"HemisphereLight\",name:\"Hemisphere Light\",skycolor:16711680,groundcolor:255,intensity:1}";
      break;
    case "POINT":
      properties = "{type:\"PointLight\",name:\"Point Light\",positionx:10,positiony:10,positionz:0,color:16711680,intensity:1}";
      break;
    default:
      properties = "{type:\"SpotLight\",name:\"Spot Light\",positionx:0,positiony:10,positionz:10,color:65280,intensity:10,distance:40,angle:0.5236,penumbra:0.2,decay:1}";
  }
  return ["createLight(" + properties + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_directional"] = function() {
  return Blockly.JavaScript.vr_light.call(this);
}

Blockly.JavaScript["vr_hemisphere"] = function() {
  return Blockly.JavaScript.vr_light.call(this);
}

Blockly.JavaScript["vr_point"] = function() {
  return Blockly.JavaScript.vr_light.call(this);
}

Blockly.JavaScript["vr_spot"] = function() {
  return Blockly.JavaScript.vr_light.call(this);
}

Blockly.JavaScript["vr_lists_create_with"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += ",";
    }
    js += Blockly.JavaScript.valueToCode(this, "ADD" + i, Blockly.JavaScript.ORDER_NONE) || "null";
  }
  return ["[" + js + "]", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_lists_add_items"] = function() {
  var list = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      list += ",";
    }
    list += Blockly.JavaScript.valueToCode(this, "ITEM" + i, Blockly.JavaScript.ORDER_NONE) || "null";
  }
  return (Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "null") + "=" + (Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "null") + ".concat([" + list + "]);";
}

Blockly.JavaScript["vr_lists_is_in"] = function() {
  return [(Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "null") + ".includes(" + (Blockly.JavaScript.valueToCode(this, "ITEM", Blockly.JavaScript.ORDER_NONE) || "null") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_lists_length"] = function() {
  return [(Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "null") + ".length", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_lists_select_item"] = function() {
  return [(Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "null") + "[" + (Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_NONE) || "1") + "-1]", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_logic_boolean"] = function() {
  if (this.getFieldValue("BOOL") == "TRUE") {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
  } else {
    return ["false", Blockly.JavaScript.ORDER_ATOMIC];
  }
}

Blockly.JavaScript["vr_logic_false"] = function() {
  return Blockly.JavaScript.vr_logic_boolean.call(this);
}

Blockly.JavaScript["vr_logic_negate"] = function() {
  return ["!" + (Blockly.JavaScript.valueToCode(this, "BOOL", Blockly.JavaScript.ORDER_NONE) || "false"), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_logic_compare"] = function() {
  var op = "";
  if (this.getFieldValue("OP") === "EQ") {
    op = "===";
  } else {
    op = "!==";
  }
  return ["(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "false") + op + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "false") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_logic_operation"] = function() {
  var op = "";
  if (this.getFieldValue("OP") === "AND") {
    op = "&&";
  } else {
    op = "||";
  }
  return ["(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "false") + op + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "false") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_logic_or"] = function() {
  return Blockly.JavaScript.logic_operation.call(this);
}

Blockly.JavaScript["vr_math_number"] = function() {
  return [this.getFieldValue("NUM"), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_compare"] = function() {
  var op = "";
  var opValue = this.getFieldValue("OP");
  if (opValue === "EQ") {
    op = "===";
  } else if (opValue === "NEQ") {
    op = "!==";
  } else if (opValue === "LT") {
    op = "<";
  } else if (opValue === "LTE") {
    op = "<=";
  } else if (opValue === "GT") {
    op = ">";
  } else {
    op = ">=";
  }
  return ["(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "0") + op + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_add"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "+";
    }
    js += Blockly.JavaScript.valueToCode(this, "NUM" + i, Blockly.JavaScript.ORDER_NONE) || "0";
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_subtract"] = function() {
  return ["(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "0") + "-" + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_multiply"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "*";
    }
    js += Blockly.JavaScript.valueToCode(this, "NUM" + i, Blockly.JavaScript.ORDER_NONE) || "0";
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_division"] = function() {
  return ["(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "0") + "/" + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "1") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_power"] = function() {
  return ["Math.pow(" + (Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) || "0") + "," + (Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_random_int"] = function() {
  var min = Blockly.JavaScript.valueToCode(this, "FROM", Blockly.JavaScript.ORDER_NONE) || "0";
  var max = Blockly.JavaScript.valueToCode(this, "TO", Blockly.JavaScript.ORDER_NONE) || "0";
  return ["(Math.floor(Math.random()*(Math.floor(" + max + ")-Math.ceil(" + min + ")+1))+Math.ceil(" + min + "))", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_random_float"] = function() {
  return ["Math.random()", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_on_list"] = function() {
  var op = "";
  if (this.getFieldValue("OP") === "MIN") {
    op = "min";
  } else {
    op = "max";
  }
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += ",";
    }
    js += Blockly.JavaScript.valueToCode(this, "NUM" + i, Blockly.JavaScript.ORDER_NONE) || "0";
  }
  return ["Math." + op + "(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_single"] = function() {
  var op = "";
  switch (this.getFieldValue("OP")) {
    case "ROOT":
      op = "Math.sqrt";
      break;
    case "ABS":
      op = "Math.abs";
      break;
    case "NEG":
      op = "-";
      break;
    case "LN":
      op = "Math.log";
      break;
    case "EXP":
      op = "Math.exp";
      break;
    case "ROUND":
      op = "Math.round";
      break;
    case "CEILING":
      op = "Math.ceil";
      break;
    default:
      op = "Math.floor";
  }
  return [op + "(" + (Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_abs"] = function() {
  return Blockly.JavaScript.math_single.call(this);
}

Blockly.JavaScript["vr_math_neg"] = function() {
  return Blockly.JavaScript.math_single.call(this);
}

Blockly.JavaScript["vr_math_round"] = function() {
  return Blockly.JavaScript.math_single.call(this);
}

Blockly.JavaScript["vr_math_ceiling"] = function() {
  return Blockly.JavaScript.math_single.call(this);
}

Blockly.JavaScript["vr_math_floor"] = function() {
  return Blockly.JavaScript.math_single.call(this);
}

Blockly.JavaScript["vr_math_trig"] = function() {
  var op = "";
  switch (this.getFieldValue("OP")) {
    case "SIN":
      op = "sin";
      break;
    case "COS":
      op = "cos";
      break;
    case "TAN":
      op = "tan";
      break;
    case "ASIN":
      op = "asin";
      break;
    case "ACOS":
      op = "acos";
      break;
    default:
      op = "atan";
      break;
  }
  return ["Math." + op + "(" + (Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_NONE) || "0") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_math_cos"] = function() {
  return Blockly.JavaScript.math_trig.call(this);
}

Blockly.JavaScript["vr_math_tan"] = function() {
  return Blockly.JavaScript.math_trig.call(this);
}

Blockly.JavaScript["vr_object"] = function() {
  var properties;
  var type = this.getFieldValue("type");
  switch (type) {
    case "BOX":
      properties = "{type:\"BoxBufferGeometry\",name:\"Box\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5575696,opacity:1,textureURL:\"\",mass:10,boxwidth:4,boxheight:4,boxdepth:4,boxwidthsegments:1,boxheightsegments:1,boxdepthsegments:1,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "CONE":
      properties = "{type:\"ConeBufferGeometry\",name:\"Cone\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5583360,opacity:1,textureURL:\"\",mass:10,coneradius:2,coneheight:4,coneradialsegments:16,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "CYLINDER":
      properties = "{type:\"CylinderBufferGeometry\",name:\"Cylinder\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5587968,opacity:1,textureURL:\"\",mass:10,cylinderradiustop:2,cylinderradiusbottom:2,cylinderheight:4,cylinderradialsegments:16,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "DODECAHEDRON":
      properties = "{type:\"DodecahedronBufferGeometry\",name:\"Dodecahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1656865,opacity:1,textureURL:\"\",mass:10,dodecahedronradius:2,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "ICOSAHEDRON":
      properties = "{type:\"IcosahedronBufferGeometry\",name:\"Icosahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1983315,opacity:1,textureURL:\"\",mass:10,icosahedronradius:2,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "OCTAHEDRON":
      properties = "{type:\"OctahedronBufferGeometry\",name:\"Octahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:10581,opacity:1,textureURL:\"\",mass:10,octahedronradius:2,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "SPHERE":
      properties = "{type:\"SphereBufferGeometry\",name:\"Sphere\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1908039,opacity:1,textureURL:\"\",mass:10,sphereradius:2,spherewidthsegments:16,sphereheightsegments:16,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
      break;
    case "TETRAHEDRON":
      properties = "{type:\"TetrahedronBufferGeometry\",name:\"Tetrahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5574428,opacity:1,textureURL:\"\",mass:10,tetrahedronradius:2,linearvelocityx:0,linearvelocityy:0,linearvelocityz:0,angularvelocityx:0,angularvelocityy:0,angularvelocityz:0,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:false}";
    case "SOFTBOX":
      properties = "{type:\"BoxBufferGeometry\",name:\"Box\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5575696,opacity:1,textureURL:\"\",mass:10,boxwidth:4,boxheight:4,boxdepth:4,boxwidthsegments:8,boxheightsegments:8,boxdepthsegments:8,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTCONE":
      properties = "{type:\"ConeBufferGeometry\",name:\"Cone\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5583360,opacity:1,textureURL:\"\",mass:10,coneradius:2,coneheight:4,coneradialsegments:16,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTCYLINDER":
      properties = "{type:\"CylinderBufferGeometry\",name:\"Cylinder\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5587968,opacity:1,textureURL:\"\",mass:10,cylinderradiustop:2,cylinderradiusbottom:2,cylinderheight:4,cylinderradialsegments:16,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTDODECAHEDRON":
      properties = "{type:\"DodecahedronBufferGeometry\",name:\"Dodecahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1656865,opacity:1,textureURL:\"\",mass:10,dodecahedronradius:2,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTICOSAHEDRON":
      properties = "{type:\"IcosahedronBufferGeometry\",name:\"Icosahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1983315,opacity:1,textureURL:\"\",mass:10,icosahedronradius:2,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTOCTAHEDRON":
      properties = "{type:\"OctahedronBufferGeometry\",name:\"Octahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:10581,opacity:1,textureURL:\"\",mass:10,octahedronradius:2,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    case "SOFTSPHERE":
      properties = "{type:\"SphereBufferGeometry\",name:\"Sphere\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:1908039,opacity:1,textureURL:\"\",mass:10,sphereradius:2,spherewidthsegments:16,sphereheightsegments:16,pressure:250,friction:0.5,restitution:0,flatshading:true,wireframe:false,collision:true,soft:true}";
      break;
    default:
      properties = "{type:\"TetrahedronBufferGeometry\",name:\"Tetrahedron\",positionx:0,positiony:0,positionz:0,rotationx:0,rotationy:0,rotationz:0,scalex:1,scaley:1,scalez:1,color:5574428,opacity:1,textureURL:\"\",mass:10,tetrahedronradius:2,pressure:250,friction:0.5,flatshading:true,wireframe:false,collision:true,soft:true}";
  }
  return ["createObject(" + properties + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_cone"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_cylinder"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_dodecahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_icosahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_octahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_sphere"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_tetrahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_box"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_cone"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_cylinder"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_dodecahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_icosahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_octahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_sphere"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_soft_tetrahedron"] = function() {
  return Blockly.JavaScript.vr_object.call(this);
}

Blockly.JavaScript["vr_text"] = function() {
  return [JSON.stringify(this.getFieldValue("TEXT")), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_text_join"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "+";
    }
    js += Blockly.JavaScript.valueToCode(this, "ADD" + i, Blockly.JavaScript.ORDER_NONE) || "\"\"";
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_text_length"] = function() {
  return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ".length", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_global_declaration"] = function() {
  return "var " + this.getFieldValue("NAME") + "=" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null") + ";";
}

Blockly.JavaScript["vr_lexical_variable_get"] = function() {
  return [Blockly.unprefixName(this.getFieldValue("VAR"))[1], Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_lexical_variable_set"] = function() {
  return Blockly.unprefixName(this.getFieldValue("VAR"))[1] + "=" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null") + ";";
}
