// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2017 Massachusetts Institute of Technology. All rights reserved.

"use strict";

//goog.provide("Blockly.JavaScript");
//goog.require("Blockly.Blocks.Utilities");

Blockly.JavaScript["vr_ptc1"] = function() {
  return "ptc1();";
}

Blockly.JavaScript["vr_ptc2"] = function() {
  return "ptc2(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ");";
}

Blockly.JavaScript["vr_ptc3"] = function() {
  return "ptc3(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + "," + Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["vr_ptc4"] = function() {
  return "ptc4(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + "," + Blockly.JavaScript.valueToCode(this, "boolean", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["vr_return1"] = function() {
  return ["return1()", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return2"] = function() {
  return ["return2(" + (Blockly.JavaScript.valueToCode(this, "string", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return3"] = function() {
  return ["return3(" + Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_return4"] = function() {
  return ["return4(" + Blockly.JavaScript.valueToCode(this, "boolean", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_sleep"] = function() {
  return "await new Promise(r=>setTimeout(r," + Blockly.JavaScript.valueToCode(this, "number", Blockly.JavaScript.ORDER_NONE) * 1000 + "));";
}

Blockly.JavaScript["vr_add_object"] = function() {
  return "addObject(" + Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["vr_remove_object"] = function() {
  return "removeObject(" + Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["vr_set_object_property"] = function() {
  return "setObjectProperty(" + Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) + ",\"" + this.getFieldValue("property").toLowerCase() + "\"," + Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["vr_get_object_property"] = function() {
  return "getObjectProperty(" + Blockly.JavaScript.valueToCode(this, "object", Blockly.JavaScript.ORDER_NONE) + ",\"" + this.getFieldValue("property").toLowerCase() + "\"," + Blockly.JavaScript.valueToCode(this, "value", Blockly.JavaScript.ORDER_NONE) + ");";
}

Blockly.JavaScript["controls_if"] = function() {
  var js = "";
  for (var i = 0; i <= this.elseifCount_; i++) {
    if (i !== 0) {
      js += "else ";
    }
    js += "if(" + Blockly.JavaScript.valueToCode(this, "IF" + i, Blockly.JavaScript.ORDER_NONE) + "){" + Blockly.JavaScript.statementToCode2(this, "DO" + i) + "}";
  }
  if (this.elseCount_ == 1) {
    js += "else{" + Blockly.JavaScript.statementToCode2(this, "ELSE") + "}";
  }
  return js;
}

Blockly.JavaScript["controls_forRange"] = function() {
  var op = "";
  var step = "";
  var index = this.getFieldValue("VAR");
  var start = Blockly.JavaScript.valueToCode(this, "START", Blockly.JavaScript.ORDER_NONE);
  var end = Blockly.JavaScript.valueToCode(this, "END", Blockly.JavaScript.ORDER_NONE);
  if (parseInt(start) <= parseInt(end)) {
    op = "<=";
    step = "+=";
  } else {
    op = ">=";
    step = "-=";
  }
  return "for(var " + index + "=" + start + ";" + index + op + end + ";" + index + step + Blockly.JavaScript.valueToCode(this, "STEP", Blockly.JavaScript.ORDER_NONE) + "){" + Blockly.JavaScript.statementToCode2(this, "DO", Blockly.JavaScript.ORDER_NONE) + "}";
}

Blockly.JavaScript["controls_while"] = function() {
  return "while(" + Blockly.JavaScript.valueToCode(this, "TEST", Blockly.JavaScript.ORDER_NONE) + "){" + Blockly.JavaScript.statementToCode2(this, "DO") + "}";
}

Blockly.JavaScript["vr_on_start"] = function() {
  return "p.onstart = async function(){" + Blockly.JavaScript.statementToCode2(this, "do") + "}";
}

Blockly.JavaScript["logic_boolean"] = function() {
  if (this.getFieldValue("BOOL") == "TRUE") {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
  } else {
    return ["false", Blockly.JavaScript.ORDER_ATOMIC];
  }
}

Blockly.JavaScript["logic_false"] = function() {
  return Blockly.JavaScript.logic_boolean.call(this);
}

Blockly.JavaScript["logic_negate"] = function() {
  return ["!" + Blockly.JavaScript.valueToCode(this, "BOOL", Blockly.JavaScript.ORDER_NONE), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["logic_compare"] = function() {
  var op = "";
  if (this.getFieldValue("OP") === "EQ") {
    op = "===";
  } else {
    op = "!==";
  }
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + op + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["logic_operation"] = function() {
  var op = "";
  if (this.getFieldValue("OP") === "AND") {
    op = "&&";
  } else {
    op = "||";
  }
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + op + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["logic_or"] = function() {
  return Blockly.JavaScript.logic_operation.call(this);
}

Blockly.JavaScript["math_number"] = function() {
  return [this.getFieldValue("NUM"), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_compare"] = function() {
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
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + op + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_add"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "+";
    }
    js += Blockly.JavaScript.valueToCode(this, "NUM" + i, Blockly.JavaScript.ORDER_NONE);
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_subtract"] = function() {
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + "-" + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_multiply"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "*";
    }
    js += Blockly.JavaScript.valueToCode(this, "NUM" + i, Blockly.JavaScript.ORDER_NONE);
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_division"] = function() {
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + "/" + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["math_power"] = function() {
  return ["(" + Blockly.JavaScript.valueToCode(this, "A", Blockly.JavaScript.ORDER_NONE) + "**" + Blockly.JavaScript.valueToCode(this, "B", Blockly.JavaScript.ORDER_NONE) + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["vr_object"] = function() {
  var properties;
  var type = this.getFieldValue("type");
  switch (type) {
    case "BOX":
      properties = "{\"type\":\"BoxBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":5575696,\"textureURL\":\"\",\"mass\":10,\"boxwidth\":4,\"boxheight\":4,\"boxdepth\":4,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "CONE":
      properties = "{\"type\":\"ConeBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":5583360,\"textureURL\":\"\",\"mass\":10,\"coneradius\":2,\"coneheight\":4,\"coneradialsegments\":16,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "CYLINDER":
      properties = "{\"type\":\"CylinderBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":5587968,\"textureURL\":\"\",\"mass\":10,\"cylinderradiustop\":2,\"cylinderradiusbottom\":2,\"cylinderheight\":4,\"cylinderradialsegments\":16,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "DODECAHEDRON":
      properties = "{\"type\":\"DodecahedronBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":1656865,\"textureURL\":\"\",\"mass\":10,\"dodecahedronradius\":2,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "ICOSAHEDRON":
      properties = "{\"type\":\"IcosahedronBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":1983315,\"textureURL\":\"\",\"mass\":10,\"icosahedronradius\":2,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "OCTAHEDRON":
      properties = "{\"type\":\"OctahedronBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":10581,\"textureURL\":\"\",\"mass\":10,\"octahedronradius\":2,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    case "SPHERE":
      properties = "{\"type\":\"SphereBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":1908039,\"textureURL\":\"\",\"mass\":10,\"sphereradius\":2,\"spherewidthsegments\":16,\"sphereheightsegments\":16,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
      break;
    default:
      properties = "{\"type\":\"TetrahedronBufferGeometry\",\"positionx\":0,\"positiony\":0,\"positionz\":0,\"rotationx\":0,\"rotationy\":0,\"rotationz\":0,\"scalex\":1,\"scaley\":1,\"scalez\":1,\"color\":5574428,\"textureURL\":\"\",\"mass\":10,\"tetrahedronradius\":2,\"linearvelocityx\":0,\"linearvelocityy\":0,\"linearvelocityz\":0,\"angularvelocityx\":0,\"angularvelocityy\":0,\"angularvelocityz\":0}";
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

Blockly.JavaScript["text"] = function() {
  return [JSON.stringify(this.getFieldValue("TEXT")), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["text_join"] = function() {
  var js = "";
  for (var i = 0; i < this.itemCount_; i++) {
    if (i !== 0) {
      js += "+";
    }
    js += Blockly.JavaScript.valueToCode(this, "ADD" + i, Blockly.JavaScript.ORDER_NONE) || "\"\"";
  }
  return ["(" + js + ")", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["text_length"] = function() {
  return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "\"\"") + ".length", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["global_declaration"] = function() {
  return "var " + this.getFieldValue("NAME") + "=" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null") + ";";
}

Blockly.JavaScript["lexical_variable_get"] = function() {
  return [Blockly.unprefixName(this.getFieldValue("VAR"))[1], Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript["lexical_variable_set"] = function() {
  return Blockly.unprefixName(this.getFieldValue("VAR"))[1] + "=" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null") + ";";
}
