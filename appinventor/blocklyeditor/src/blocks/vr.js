// -*- mode: javascript; js-indent-level: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

"use strict";

goog.provide("Blockly.Blocks.VR");

goog.require("Blockly.Blocks.Utilities");

Blockly.Blocks["vr_ptc1"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_PTC1_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_PTC1_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_PTC1_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_PTC1_TITLE}]
};

Blockly.Blocks["vr_ptc2"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_PTC2_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("string")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_PTC2_TITLE)
        .appendField(Blockly.Msg.LANG_VR_PTC2_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_PTC2_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_PTC2_TITLE}]
};

Blockly.Blocks["vr_ptc3"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_PTC3_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("string")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_PTC3_TITLE)
        .appendField(Blockly.Msg.LANG_VR_PTC3_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("number")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_PTC3_ARG2)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_PTC3_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_PTC3_TITLE}]
};

Blockly.Blocks["vr_ptc4"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_PTC4_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("string")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_PTC4_TITLE)
        .appendField(Blockly.Msg.LANG_VR_PTC4_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("boolean")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_PTC4_ARG2)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_PTC4_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_PTC4_TITLE}]
};

Blockly.Blocks["vr_return1"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_RETURN1_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_RETURN1_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_RETURN1_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_RETURN1_TITLE}]
};

Blockly.Blocks["vr_return2"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_RETURN2_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("string")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_RETURN2_TITLE)
        .appendField(Blockly.Msg.LANG_VR_RETURN2_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_RETURN2_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_RETURN2_TITLE}]
};

Blockly.Blocks["vr_return3"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_RETURN3_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("number")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_RETURN3_TITLE)
        .appendField(Blockly.Msg.LANG_VR_RETURN3_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_RETURN3_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_RETURN3_TITLE}]
};

Blockly.Blocks["vr_return4"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_RETURN4_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("boolean")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_RETURN4_TITLE)
        .appendField(Blockly.Msg.LANG_VR_RETURN4_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_RETURN4_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_RETURN4_TITLE}]
};

Blockly.Blocks["vr_sleep"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_SLEEP_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("number")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_VR_SLEEP_TITLE)
        .appendField(Blockly.Msg.LANG_VR_SLEEP_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_SLEEP_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_SLEEP_TITLE}]
};

Blockly.Blocks["vr_add_object"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_ADD_OBJECT_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_ADD_OBJECT_TITLE)
        .appendField(Blockly.Msg.LANG_VR_ADD_OBJECT_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_ADD_OBJECT_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ADD_OBJECT_TITLE}]
};

Blockly.Blocks["vr_remove_object"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_REMOVE_OBJECT_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_REMOVE_OBJECT_TITLE)
        .appendField(Blockly.Msg.LANG_VR_REMOVE_OBJECT_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_REMOVE_OBJECT_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_REMOVE_OBJECT_TITLE}]
};

Blockly.Blocks["vr_set_object_property"] = {
  category: "VR_Commands",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_set_object_property.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendValueInput("value")
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "BOX":
              return thisBlock.BOX_PROPERTIES;
            case "CONE":
              return thisBlock.CONE_PROPERTIES;
            case "CYLINDER":
              return thisBlock.CYLINDER_PROPERTIES;
            case "DODECAHEDRON":
              return thisBlock.DODECAHEDRON_PROPERTIES;
            case "ICOSAHEDRON":
              return thisBlock.ICOSAHEDRON_PROPERTIES;
            case "OCTAHEDRON":
              return thisBlock.OCTAHEDRON_PROPERTIES;
            case "SPHERE":
                return thisBlock.SPHERE_PROPERTIES;
            case "TETRAHEDRON":
                return thisBlock.TETRAHEDRON_PROPERTIES;
          }
        }), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_set_object_property.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TITLE}]
};

Blockly.Blocks["vr_get_object_property"] = {
  category: "VR_Commands",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_get_object_property.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendValueInput("value")
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "BOX":
              return Blockly.Blocks.vr_set_object_property.BOX_PROPERTIES;
            case "CONE":
              return Blockly.Blocks.vr_set_object_property.CONE_PROPERTIES;
            case "CYLINDER":
              return Blockly.Blocks.vr_set_object_property.CYLINDER_PROPERTIES;
            case "DODECAHEDRON":
              return Blockly.Blocks.vr_set_object_property.DODECAHEDRON_PROPERTIES;
            case "ICOSAHEDRON":
              return Blockly.Blocks.vr_set_object_property.ICOSAHEDRON_PROPERTIES;
            case "OCTAHEDRON":
              return Blockly.Blocks.vr_set_object_property.OCTAHEDRON_PROPERTIES;
            case "SPHERE":
              return Blockly.Blocks.vr_set_object_property.SPHERE_PROPERTIES;
            case "TETRAHEDRON":
              return Blockly.Blocks.vr_set_object_property.TETRAHEDRON_PROPERTIES;
          }
        }), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_get_object_property.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TITLE}]
};

Blockly.Blocks.vr_set_object_property.HELPURLS = {
  BOX: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOX_HELPURL,
  CONE: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONE_HELPURL,
  CYLINDER: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDER_HELPURL,
  DODECAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_DODECAHEDRON_HELPURL,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ICOSAHEDRON_HELPURL,
  OCTAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OCTAHEDRON_HELPURL,
  SPHERE: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHERE_HELPURL,
  TETRAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TETRAHEDRON_HELPURL
};

Blockly.Blocks.vr_set_object_property.TOOLTIPS = {
  BOX: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOX_TOOLTIP,
  CONE: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONE_TOOLTIP,
  CYLINDER: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDER_TOOLTIP,
  DODECAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_DODECAHEDRON_TOOLTIP,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ICOSAHEDRON_TOOLTIP,
  OCTAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OCTAHEDRON_TOOLTIP,
  SPHERE: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHERE_TOOLTIP,
  TETRAHEDRON: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TETRAHEDRON_TOOLTIP
};

Blockly.Blocks.vr_get_object_property.HELPURLS = {
  BOX: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_BOX_HELPURL,
  CONE: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_CONE_HELPURL,
  CYLINDER: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_CYLINDER_HELPURL,
  DODECAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_DODECAHEDRON_HELPURL,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_ICOSAHEDRON_HELPURL,
  OCTAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_OCTAHEDRON_HELPURL,
  SPHERE: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_SPHERE_HELPURL,
  TETRAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TETRAHEDRON_HELPURL
};

Blockly.Blocks.vr_get_object_property.TOOLTIPS = {
  BOX: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_BOX_TOOLTIP,
  CONE: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_CONE_TOOLTIP,
  CYLINDER: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_CYLINDER_TOOLTIP,
  DODECAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_DODECAHEDRON_TOOLTIP,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_ICOSAHEDRON_TOOLTIP,
  OCTAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_OCTAHEDRON_TOOLTIP,
  SPHERE: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_SPHERE_TOOLTIP,
  TETRAHEDRON: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TETRAHEDRON_TOOLTIP
};

Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONX, "ROTATIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONY, "ROTATIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONZ, "ROTATIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEX, "SCALEX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEY, "SCALEY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEZ, "SCALEZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TEXTUREURL, "TEXTUREURL"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_MASS, "MASS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYX, "LINEARVELOCITYX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYY, "LINEARVELOCITYY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYZ, "LINEARVELOCITYZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYX, "ANGULARVELOCITYX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYY, "ANGULARVELOCITYY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYZ, "ANGULARVELOCITYZ"]];

Blockly.Blocks.vr_set_object_property.BOX_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXWIDTH, "BOXWIDTH"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXHEIGHT, "BOXHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXDEPTH, "BOXDEPTH"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.CONE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIUS, "CONERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONEHEIGHT, "CONEHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIALSEGMENTS, "CONERADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.CYLINDER_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSTOP, "CYLINDERRADIUSTOP"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSBOTTOM, "CYLINDERRADIUSBOTTOM"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERHEIGHT, "CYLINDERHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIALSEGMENTS, "CYLINDERRADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.DODECAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_DODECAHEDRONRADIUS, "DODECAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.ICOSAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ICOSAHEDRONRADIUS, "ICOSAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.OCTAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OCTAHEDRONRADIUS, "OCTAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SPHERE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHERERADIUS, "SPHERERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREWIDTHSEGMENTS, "SPHEREWIDTHSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREHEIGHTSEGMENTS, "SPHEREHEIGHTSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.TETRAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TETRAHEDRONRADIUS, "TETRAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES);

Blockly.Blocks["vr_on_start"] = {
  category: "VR_Events",
  helpUrl: Blockly.Msg.LANG_VR_ON_START_HELPURL,
  init: function() {
    this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_ON_START_TITLE);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.LANG_VR_ON_START_DO);
    this.setTooltip(Blockly.Msg.LANG_VR_ON_START_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ON_START_TITLE}]
};

Blockly.Blocks["vr_object"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.TYPES), "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_OBJECT_TITLE}]
};

Blockly.Blocks["vr_cone"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("CONE", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_cylinder"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("CYLINDER", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_dodecahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("DODECAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_icosahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("ICOSAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_octahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("OCTAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_sphere"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SPHERE", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks["vr_tetrahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("TETRAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  },
};

Blockly.Blocks.vr_object.TYPES =
  [[Blockly.Msg.LANG_VR_OBJECT_BOX, "BOX"],
   [Blockly.Msg.LANG_VR_OBJECT_CONE, "CONE"],
   [Blockly.Msg.LANG_VR_OBJECT_CYLINDER, "CYLINDER"],
   [Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON, "DODECAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON, "ICOSAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON, "OCTAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SPHERE, "SPHERE"],
   [Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON, "TETRAHEDRON"]];

Blockly.Blocks.vr_object.HELPURLS = {
  BOX: Blockly.Msg.LANG_VR_OBJECT_BOX_HELPURL,
  CONE: Blockly.Msg.LANG_VR_OBJECT_CONE_HELPURL,
  CYLINDER: Blockly.Msg.LANG_VR_OBJECT_CYLINDER_HELPURL,
  DODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON_HELPURL,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON_HELPURL,
  OCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON_HELPURL,
  SPHERE: Blockly.Msg.LANG_VR_OBJECT_SPHERE_HELPURL,
  TETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON_HELPURL
};

Blockly.Blocks.vr_object.TOOLTIPS = {
  BOX: Blockly.Msg.LANG_VR_OBJECT_BOX_TOOLTIP,
  CONE: Blockly.Msg.LANG_VR_OBJECT_CONE_TOOLTIP,
  CYLINDER: Blockly.Msg.LANG_VR_OBJECT_CYLINDER_TOOLTIP,
  DODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON_TOOLTIP,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON_TOOLTIP,
  OCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON_TOOLTIP,
  SPHERE: Blockly.Msg.LANG_VR_OBJECT_SPHERE_TOOLTIP,
  TETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON_TOOLTIP
};
