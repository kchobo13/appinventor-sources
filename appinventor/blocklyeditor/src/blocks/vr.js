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

Blockly.Blocks["vr_null"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_NULL_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_NULL_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_NULL_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_NULL_TITLE}]
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

Blockly.Blocks["vr_add_object_to_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_TITLE}]
};

Blockly.Blocks["vr_remove_object_from_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_REMOVE_OBJECT_FROM_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_REMOVE_OBJECT_FROM_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_REMOVE_OBJECT_FROM_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_REMOVE_OBJECT_FROM_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_REMOVE_OBJECT_FROM_SCENE_TITLE}]
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
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LANG_VR_OBJECT_OBJECT, "OBJECT"], [Blockly.Msg.LANG_VR_OBJECT_RIGID_OBJECT, "RIGIDOBJECT"], [Blockly.Msg.LANG_VR_OBJECT_SOFT_OBJECT, "SOFTOBJECT"]].concat(Blockly.Blocks.vr_object.TYPES)), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendValueInput("value")
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "OBJECT":
              return thisBlock.COMMON_PROPERTIES;
            case "RIGIDOBJECT":
              return thisBlock.RIGID_COMMON_PROPERTIES;
            case "SOFTOBJECT":
              return thisBlock.SOFT_COMMON_PROPERTIES;
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
            case "SOFTBOX":
              return thisBlock.SOFT_BOX_PROPERTIES;
            case "SOFTCONE":
              return thisBlock.SOFT_CONE_PROPERTIES;
            case "SOFTCYLINDER":
              return thisBlock.SOFT_CYLINDER_PROPERTIES;
            case "SOFTDODECAHEDRON":
              return thisBlock.SOFT_DODECAHEDRON_PROPERTIES;
            case "SOFTICOSAHEDRON":
              return thisBlock.SOFT_ICOSAHEDRON_PROPERTIES;
            case "SOFTOCTAHEDRON":
              return thisBlock.SOFT_OCTAHEDRON_PROPERTIES;
            case "SOFTSPHERE":
                return thisBlock.SOFT_SPHERE_PROPERTIES;
            case "SOFTTETRAHEDRON":
                return thisBlock.SOFT_TETRAHEDRON_PROPERTIES;
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
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LANG_VR_OBJECT_OBJECT, "OBJECT"], [Blockly.Msg.LANG_VR_OBJECT_RIGID_OBJECT, "RIGIDOBJECT"], [Blockly.Msg.LANG_VR_OBJECT_SOFT_OBJECT, "SOFTOBJECT"]].concat(Blockly.Blocks.vr_object.TYPES)), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "OBJECT":
              return [[Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TYPE, "TYPE"]].concat(Blockly.Blocks.vr_set_object_property.COMMON_PROPERTIES).concat([[Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_SOFT]]);
            case "RIGIDOBJECT":
              return [[Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TYPE, "TYPE"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);
            case "SOFTOBJECT":
              return [[Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_TYPE, "TYPE"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);
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
            case "SOFTBOX":
              return Blockly.Blocks.vr_set_object_property.SOFT_BOX_PROPERTIES;
            case "SOFTCONE":
              return Blockly.Blocks.vr_set_object_property.SOFT_CONE_PROPERTIES;
            case "SOFTCYLINDER":
              return Blockly.Blocks.vr_set_object_property.SOFT_CYLINDER_PROPERTIES;
            case "SOFTDODECAHEDRON":
              return Blockly.Blocks.vr_set_object_property.SOFT_DODECAHEDRON_PROPERTIES;
            case "SOFTICOSAHEDRON":
              return Blockly.Blocks.vr_set_object_property.SOFT_ICOSAHEDRON_PROPERTIES;
            case "SOFTOCTAHEDRON":
              return Blockly.Blocks.vr_set_object_property.SOFT_OCTAHEDRON_PROPERTIES;
            case "SOFTSPHERE":
              return Blockly.Blocks.vr_set_object_property.SOFT_SPHERE_PROPERTIES;
            case "SOFTTETRAHEDRON":
              return Blockly.Blocks.vr_set_object_property.SOFT_TETRAHEDRON_PROPERTIES;
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
  OBJECT: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OBJECT_HELPURL,
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
  OBJECT: Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OBJECT_TOOLTIP,
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
  OBJECT: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_OBJECT_HELPURL,
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
  OBJECT: Blockly.Msg.LANG_VR_GET_OBJECT_PROPERTY_OBJECT_TOOLTIP,
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
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONX, "ROTATIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONY, "ROTATIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONZ, "ROTATIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEX, "SCALEX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEY, "SCALEY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEZ, "SCALEZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OPACITY, "OPACITY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TEXTUREURL, "TEXTUREURL"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_MASS, "MASS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FRICTION, "FRICTION"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FLATSHADING, "FLATSHADING"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_WIREFRAME, "WIREFRAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLLISION, "COLLISION"]];

Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONX, "ROTATIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONY, "ROTATIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONZ, "ROTATIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEX, "SCALEX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEY, "SCALEY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEZ, "SCALEZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OPACITY, "OPACITY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TEXTUREURL, "TEXTUREURL"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_MASS, "MASS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYX, "LINEARVELOCITYX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYY, "LINEARVELOCITYY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_LINEARVELOCITYZ, "LINEARVELOCITYZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYX, "ANGULARVELOCITYX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYY, "ANGULARVELOCITYY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ANGULARVELOCITYZ, "ANGULARVELOCITYZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FRICTION, "FRICTION"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_RESTITUTION, "RESTITUTION"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FLATSHADING, "FLATSHADING"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_WIREFRAME, "WIREFRAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLLISION, "COLLISION"]];

Blockly.Blocks.vr_set_object_property.BOX_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXWIDTH, "BOXWIDTH"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXHEIGHT, "BOXHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXDEPTH, "BOXDEPTH"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXWIDTHSEGMENTS, "BOXWIDTHSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXHEIGHTSEGMENTS, "BOXHEIGHTSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXDEPTHSEGMENTS, "BOXDEPTHSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.CONE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIUS, "CONERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONEHEIGHT, "CONEHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIALSEGMENTS, "CONERADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.CYLINDER_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSTOP, "CYLINDERRADIUSTOP"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSBOTTOM, "CYLINDERRADIUSBOTTOM"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERHEIGHT, "CYLINDERHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIALSEGMENTS, "CYLINDERRADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.DODECAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_DODECAHEDRONRADIUS, "DODECAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.ICOSAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ICOSAHEDRONRADIUS, "ICOSAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.OCTAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OCTAHEDRONRADIUS, "OCTAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SPHERE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHERERADIUS, "SPHERERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREWIDTHSEGMENTS, "SPHEREWIDTHSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREHEIGHTSEGMENTS, "SPHEREHEIGHTSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.TETRAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TETRAHEDRONRADIUS, "TETRAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.RIGID_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_POSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONX, "ROTATIONX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONY, "ROTATIONY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ROTATIONZ, "ROTATIONZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEX, "SCALEX"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEY, "SCALEY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SCALEZ, "SCALEZ"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OPACITY, "OPACITY"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TEXTUREURL, "TEXTUREURL"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_MASS, "MASS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_PRESSURE, "PRESSURE"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FRICTION, "FRICTION"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_FLATSHADING, "FLATSHADING"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_WIREFRAME, "WIREFRAME"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_COLLISION, "COLLISION"]];

Blockly.Blocks.vr_set_object_property.SOFT_BOX_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXWIDTH, "BOXWIDTH"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXHEIGHT, "BOXHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXDEPTH, "BOXDEPTH"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXWIDTHSEGMENTS, "BOXWIDTHSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXHEIGHTSEGMENTS, "BOXHEIGHTSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_BOXDEPTHSEGMENTS, "BOXDEPTHSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_CONE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIUS, "CONERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONEHEIGHT, "CONEHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CONERADIALSEGMENTS, "CONERADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_CYLINDER_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSTOP, "CYLINDERRADIUSTOP"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIUSBOTTOM, "CYLINDERRADIUSBOTTOM"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERHEIGHT, "CYLINDERHEIGHT"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_CYLINDERRADIALSEGMENTS, "CYLINDERRADIALSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_DODECAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_DODECAHEDRONRADIUS, "DODECAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_ICOSAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_ICOSAHEDRONRADIUS, "ICOSAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_OCTAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_OCTAHEDRONRADIUS, "OCTAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_SPHERE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHERERADIUS, "SPHERERADIUS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREWIDTHSEGMENTS, "SPHEREWIDTHSEGMENTS"],
   [Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_SPHEREHEIGHTSEGMENTS, "SPHEREHEIGHTSEGMENTS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks.vr_set_object_property.SOFT_TETRAHEDRON_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_OBJECT_PROPERTY_TETRAHEDRONRADIUS, "TETRAHEDRONRADIUS"]].concat(Blockly.Blocks.vr_set_object_property.SOFT_COMMON_PROPERTIES);

Blockly.Blocks["vr_add_light_to_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_ADD_OBJECT_TO_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("light")
        .appendField(Blockly.Msg.LANG_VR_ADD_LIGHT_TO_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_ADD_LIGHT_TO_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_ADD_LIGHT_TO_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ADD_LIGHT_TO_SCENE_TITLE}]
};

Blockly.Blocks["vr_remove_light_from_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_REMOVE_LIGHT_FROM_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_REMOVE_LIGHT_FROM_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_REMOVE_LIGHT_FROM_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_REMOVE_LIGHT_FROM_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_REMOVE_LIGHT_FROM_SCENE_TITLE}]
};

Blockly.Blocks["vr_set_light_property"] = {
  category: "VR_Commands",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_set_light_property.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("light")
        .appendField(Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LANG_VR_LIGHT_LIGHT, "LIGHT"]].concat(Blockly.Blocks.vr_light.TYPES)), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendValueInput("value")
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "LIGHT":
              return [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"]];
            case "AMBIENT":
              return thisBlock.AMBIENT_PROPERTIES;
            case "DIRECTIONAL":
              return thisBlock.DIRECTIONAL_PROPERTIES;
            case "HEMISPHERE":
              return thisBlock.HEMISPHERE_PROPERTIES;
            case "POINT":
              return thisBlock.POINT_PROPERTIES;
            case "SPOT":
              return thisBlock.SPOT_PROPERTIES;
          }
        }), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_set_light_property.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_TITLE}]
};

Blockly.Blocks["vr_get_light_property"] = {
  category: "VR_Commands",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_get_light_property.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("light")
        .appendField(Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LANG_VR_LIGHT_LIGHT, "LIGHT"]].concat(Blockly.Blocks.vr_light.TYPES)), "type")
        .setAlign(Blockly.ALIGN_RIGHT);
    var thisBlock = this;
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(function() {
          var type = thisBlock.getFieldValue("type");
          switch (type) {
            case "LIGHT":
              return [[Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_TYPE, "TYPE"], [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"]];
            case "AMBIENT":
              return Blockly.Blocks.vr_set_light_property.AMBIENT_PROPERTIES;
            case "DIRECTIONAL":
              return Blockly.Blocks.vr_set_light_property.DIRECTIONAL_PROPERTIES;
            case "HEMISPHERE":
              return Blockly.Blocks.vr_set_light_property.HEMISPHERE_PROPERTIES;
            case "POINT":
              return Blockly.Blocks.vr_set_light_property.POINT_PROPERTIES;
            case "SPOT":
              return Blockly.Blocks.vr_set_light_property.SPOT_PROPERTIES;
          }
        }), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_get_light_property.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_TITLE}]
};

Blockly.Blocks.vr_set_light_property.HELPURLS = {
  AMBIENT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_AMBIENT_HELPURL,
  DIRECTIONAL: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONAL_HELPURL,
  HEMISPHERE: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_HEMISPHERE_HELPURL,
  POINT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINT_HELPURL,
  SPOT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOT_HELPURL
};

Blockly.Blocks.vr_set_light_property.TOOLTIPS = {
  AMBIENT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_AMBIENT_TOOLTIP,
  DIRECTIONAL: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONAL_TOOLTIP,
  HEMISPHERE: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_HEMISPHERE_TOOLTIP,
  POINT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINT_TOOLTIP,
  SPOT: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOT_TOOLTIP
};

Blockly.Blocks.vr_get_light_property.HELPURLS = {
  AMBIENT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_AMBIENT_HELPURL,
  DIRECTIONAL: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_DIRECTIONAL_HELPURL,
  HEMISPHERE: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_HEMISPHERE_HELPURL,
  POINT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_POINT_HELPURL,
  SPOT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_SPOT_HELPURL
};

Blockly.Blocks.vr_get_light_property.TOOLTIPS = {
  AMBIENT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_AMBIENT_TOOLTIP,
  DIRECTIONAL: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_DIRECTIONAL_TOOLTIP,
  HEMISPHERE: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_HEMISPHERE_TOOLTIP,
  POINT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_POINT_TOOLTIP,
  SPOT: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_SPOT_TOOLTIP
};

Blockly.Blocks.vr_set_light_property.AMBIENT_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_AMBIENTCOLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_AMBIENTINTENSITY, "INTENSITY"]];

Blockly.Blocks.vr_set_light_property.DIRECTIONAL_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONALPOSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONALPOSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONALPOSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONALCOLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_DIRECTIONALINTENSITY, "INTENSITY"]];

Blockly.Blocks.vr_set_light_property.HEMISPHERE_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_HEMISPHERESKYCOLOR, "SKYCOLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_HEMISPHEREGROUNDCOLOR, "GROUNDCOLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_HEMISPHEREINTENSITY, "INTENSITY"]];

Blockly.Blocks.vr_set_light_property.POINT_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINTPOSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINTPOSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINTPOSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINTCOLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_POINTINTENSITY, "INTENSITY"]];

Blockly.Blocks.vr_set_light_property.SPOT_PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_NAME, "NAME"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTPOSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTPOSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTPOSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTCOLOR, "COLOR"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTINTENSITY, "INTENSITY"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTDISTANCE, "DISTANCE"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTANGLE, "ANGLE"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTPENUMBRA, "PENUMBRA"],
   [Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_SPOTDECAY, "DECAY"]];

Blockly.Blocks["vr_set_camera_property"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("value")
        .appendField(Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(this.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_SET_LIGHT_PROPERTY_TITLE}]
};

Blockly.Blocks["vr_get_camera_property"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_CAMERA_PROPERTY_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_CAMERA_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_set_camera_property.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_CAMERA_PROPERTY_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_LIGHT_PROPERTY_TITLE}]
};

Blockly.Blocks.vr_set_camera_property.PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_POSITIONX, "POSITIONX"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_POSITIONY, "POSITIONY"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_POSITIONZ, "POSITIONZ"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_TARGETX, "TARGETX"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_TARGETY, "TARGETY"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_TARGETZ, "TARGETZ"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_FOV, "FOV"],
   [Blockly.Msg.LANG_VR_SET_CAMERA_PROPERTY_INTERACTIVITY, "INTERACTIVITY"]];

Blockly.Blocks["vr_get_all_objects"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_ALL_OBJECTS_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_ALL_OBJECTS_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_ALL_OBJECTS_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_ALL_OBJECTS_TITLE}]
};

Blockly.Blocks["vr_get_objects_by_name"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_OBJECTS_BY_NAME_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("name")
        .appendField(Blockly.Msg.LANG_VR_GET_OBJECTS_BY_NAME_TITLE)
        .appendField(Blockly.Msg.LANG_VR_GET_OBJECTS_BY_NAME_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_OBJECTS_BY_NAME_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_OBJECTS_BY_NAME_TITLE}]
};

Blockly.Blocks["vr_get_all_lights"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_ALL_LIGHTS_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_ALL_LIGHTS_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_ALL_LIGHTS_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_ALL_LIGHTS_TITLE}]
};

Blockly.Blocks["vr_get_lights_by_name"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_LIGHTS_BY_NAME_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("name")
        .appendField(Blockly.Msg.LANG_VR_GET_LIGHTS_BY_NAME_TITLE)
        .appendField(Blockly.Msg.LANG_VR_GET_LIGHTS_BY_NAME_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_LIGHTS_BY_NAME_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_LIGHTS_BY_NAME_TITLE}]
};

Blockly.Blocks["vr_is_object_in_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_IS_OBJECT_IN_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("object")
        .appendField(Blockly.Msg.LANG_VR_IS_OBJECT_IN_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_IS_OBJECT_IN_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_IS_OBJECT_IN_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_IS_OBJECT_IN_SCENE_TITLE}]
};

Blockly.Blocks["vr_is_light_in_scene"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_IS_LIGHT_IN_SCENE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("light")
        .appendField(Blockly.Msg.LANG_VR_IS_LIGHT_IN_SCENE_TITLE)
        .appendField(Blockly.Msg.LANG_VR_IS_LIGHT_IN_SCENE_ARG1)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_IS_LIGHT_IN_SCENE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_IS_LIGHT_IN_SCENE_TITLE}]
};

Blockly.Blocks["vr_set_world_property"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput("value")
        .appendField(Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(this.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_TITLE}]
};

Blockly.Blocks["vr_get_world_property"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_WORLD_PROPERTY_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_WORLD_PROPERTY_TITLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_set_world_property.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_WORLD_PROPERTY_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_WORLD_PROPERTY_TITLE}]
};

Blockly.Blocks.vr_set_world_property.PROPERTIES =
  [[Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_BACKGROUNDCOLOR, "BACKGROUNDCOLOR"],
   [Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_GRAVITYX, "GRAVITYX"],
   [Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_GRAVITYY, "GRAVITYY"],
   [Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_GRAVITYZ, "GRAVITYZ"],
   [Blockly.Msg.LANG_VR_SET_WORLD_PROPERTY_SHADOWS, "SHADOWS"]];

Blockly.Blocks["vr_get_touch"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_TOUCH_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_TOUCH_TITLE)
        .appendField(new Blockly.FieldDropdown(this.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_TOUCH_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_TOUCH_TITLE}]
};

Blockly.Blocks.vr_get_touch.PROPERTIES =
  [[Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHSCREENX, "TOUCHSCREENX"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHSCREENY, "TOUCHSCREENY"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHX, "TOUCHX"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHY, "TOUCHY"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHZ, "TOUCHZ"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TARGETX, "TARGETX"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TARGETY, "TARGETY"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TARGETZ, "TARGETZ"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_OBJECT, "OBJECT"],
   [Blockly.Msg.LANG_VR_GET_TOUCH_TOUCHID, "TOUCHID"]];

Blockly.Blocks["vr_get_window_size"] = {
  category: "VR_Commands",
  helpUrl: Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_TITLE)
        .appendField(new Blockly.FieldDropdown(this.PROPERTIES), "property")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_TITLE}]
};

Blockly.Blocks.vr_get_window_size.PROPERTIES =
  [[Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_WIDTH, "WIDTH"],
   [Blockly.Msg.LANG_VR_GET_WINDOW_SIZE_HEIGHT, "HEIGHT"]];

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

Blockly.Blocks["vr_on_render"] = {
  category: "VR_Events",
  helpUrl: Blockly.Msg.LANG_VR_ON_RENDER_HELPURL,
  init: function() {
    this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_ON_RENDER_TITLE);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.LANG_VR_ON_RENDER_DO);
    this.setTooltip(Blockly.Msg.LANG_VR_ON_RENDER_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ON_RENDER_TITLE}]
};

Blockly.Blocks["vr_on_touch_start"] = {
  category: "VR_Events",
  helpUrl: Blockly.Msg.LANG_VR_ON_TOUCH_START_HELPURL,
  init: function() {
    this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_START_TITLE);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_START_DO);
    this.setTooltip(Blockly.Msg.LANG_VR_ON_TOUCH_START_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ON_TOUCH_START_TITLE}]
};

Blockly.Blocks["vr_on_touch_move"] = {
  category: "VR_Events",
  helpUrl: Blockly.Msg.LANG_VR_ON_TOUCH_MOVE_HELPURL,
  init: function() {
    this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_MOVE_TITLE);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_MOVE_DO);
    this.setTooltip(Blockly.Msg.LANG_VR_ON_TOUCH_MOVE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ON_TOUCH_MOVE_TITLE}]
};

Blockly.Blocks["vr_on_touch_end"] = {
  category: "VR_Events",
  helpUrl: Blockly.Msg.LANG_VR_ON_TOUCH_END_HELPURL,
  init: function() {
    this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_END_TITLE);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.LANG_VR_ON_TOUCH_END_DO);
    this.setTooltip(Blockly.Msg.LANG_VR_ON_TOUCH_END_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_ON_TOUCH_END_TITLE}]
};

Blockly.Blocks["vr_light"] = {
  category: "VR_Lights",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_light.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.TYPES), "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_light.TOOLTIPS[type];
    });
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_VR_LIGHT_TITLE}]
};

Blockly.Blocks["vr_directional"] = {
  category: "VR_Lights",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_light.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_light.TYPES), "type");
    this.setFieldValue("DIRECTIONAL", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_light.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_hemisphere"] = {
  category: "VR_Lights",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_light.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_light.TYPES), "type");
    this.setFieldValue("HEMISPHERE", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_light.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_point"] = {
  category: "VR_Lights",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_light.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_light.TYPES), "type");
    this.setFieldValue("POINT", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_light.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_spot"] = {
  category: "VR_Lights",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_light.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_light.TYPES), "type");
    this.setFieldValue("SPOT", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_light.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks.vr_light.TYPES =
  [[Blockly.Msg.LANG_VR_LIGHT_AMBIENT, "AMBIENT"],
   [Blockly.Msg.LANG_VR_LIGHT_DIRECTIONAL, "DIRECTIONAL"],
   [Blockly.Msg.LANG_VR_LIGHT_HEMISPHERE, "HEMISPHERE"],
   [Blockly.Msg.LANG_VR_LIGHT_POINT, "POINT"],
   [Blockly.Msg.LANG_VR_LIGHT_SPOT, "SPOT"]];

Blockly.Blocks.vr_light.HELPURLS = {
  AMBIENT: Blockly.Msg.LANG_VR_LIGHT_AMBIENT_HELPURL,
  DIRECTIONAL: Blockly.Msg.LANG_VR_LIGHT_DIRECTIONAL_HELPURL,
  HEMISPHERE: Blockly.Msg.LANG_VR_LIGHT_HEMISPHERE_HELPURL,
  POINT: Blockly.Msg.LANG_VR_LIGHT_POINT_HELPURL,
  SPOT: Blockly.Msg.LANG_VR_LIGHT_SPOT_HELPURL
};

Blockly.Blocks.vr_light.TOOLTIPS = {
  AMBIENT: Blockly.Msg.LANG_VR_LIGHT_AMBIENT_TOOLTIP,
  DIRECTIONAL: Blockly.Msg.LANG_VR_LIGHT_DIRECTIONAL_TOOLTIP,
  HEMISPHERE: Blockly.Msg.LANG_VR_LIGHT_HEMISPHERE_TOOLTIP,
  POINT: Blockly.Msg.LANG_VR_LIGHT_POINT_TOOLTIP,
  SPOT: Blockly.Msg.LANG_VR_LIGHT_SPOT_TOOLTIP
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
};

Blockly.Blocks["vr_soft_box"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTBOX", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_cone"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTCONE", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_cylinder"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTCYLINDER", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_dodecahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTDODECAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_icosahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTICOSAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_octahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTOCTAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_sphere"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTSPHERE", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks["vr_soft_tetrahedron"] = {
  category: "VR_Objects",
  helpUrl: function() {
    var type = this.getFieldValue("type");
    return Blockly.Blocks.vr_object.HELPURLS[type];
  },
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_object.TYPES), "type");
    this.setFieldValue("SOFTTETRAHEDRON", "type");
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var type = thisBlock.getFieldValue("type");
      return Blockly.Blocks.vr_object.TOOLTIPS[type];
    });
  }
};

Blockly.Blocks.vr_object.TYPES =
  [[Blockly.Msg.LANG_VR_OBJECT_BOX, "BOX"],
   [Blockly.Msg.LANG_VR_OBJECT_CONE, "CONE"],
   [Blockly.Msg.LANG_VR_OBJECT_CYLINDER, "CYLINDER"],
   [Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON, "DODECAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON, "ICOSAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON, "OCTAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SPHERE, "SPHERE"],
   [Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON, "TETRAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_BOX, "SOFTBOX"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_CONE, "SOFTCONE"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_CYLINDER, "SOFTCYLINDER"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_DODECAHEDRON, "SOFTDODECAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_ICOSAHEDRON, "SOFTICOSAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_OCTAHEDRON, "SOFTOCTAHEDRON"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_SPHERE, "SOFTSPHERE"],
   [Blockly.Msg.LANG_VR_OBJECT_SOFT_TETRAHEDRON, "SOFTTETRAHEDRON"]];

Blockly.Blocks.vr_object.HELPURLS = {
  BOX: Blockly.Msg.LANG_VR_OBJECT_BOX_HELPURL,
  CONE: Blockly.Msg.LANG_VR_OBJECT_CONE_HELPURL,
  CYLINDER: Blockly.Msg.LANG_VR_OBJECT_CYLINDER_HELPURL,
  DODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON_HELPURL,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON_HELPURL,
  OCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON_HELPURL,
  SPHERE: Blockly.Msg.LANG_VR_OBJECT_SPHERE_HELPURL,
  TETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON_HELPURL,
  SOFTBOX: Blockly.Msg.LANG_VR_OBJECT_SOFT_BOX_HELPURL,
  SOFTCONE: Blockly.Msg.LANG_VR_OBJECT_SOFT_CONE_HELPURL,
  SOFTCYLINDER: Blockly.Msg.LANG_VR_OBJECT_SOFT_CYLINDER_HELPURL,
  SOFTDODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_DODECAHEDRON_HELPURL,
  SOFTICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_ICOSAHEDRON_HELPURL,
  SOFTOCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_OCTAHEDRON_HELPURL,
  SOFTSPHERE: Blockly.Msg.LANG_VR_OBJECT_SOFT_SPHERE_HELPURL,
  SOFTTETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_TETRAHEDRON_HELPURL
};

Blockly.Blocks.vr_object.TOOLTIPS = {
  BOX: Blockly.Msg.LANG_VR_OBJECT_BOX_TOOLTIP,
  CONE: Blockly.Msg.LANG_VR_OBJECT_CONE_TOOLTIP,
  CYLINDER: Blockly.Msg.LANG_VR_OBJECT_CYLINDER_TOOLTIP,
  DODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_DODECAHEDRON_TOOLTIP,
  ICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_ICOSAHEDRON_TOOLTIP,
  OCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_OCTAHEDRON_TOOLTIP,
  SPHERE: Blockly.Msg.LANG_VR_OBJECT_SPHERE_TOOLTIP,
  TETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_TETRAHEDRON_TOOLTIP,
  SOFTBOX: Blockly.Msg.LANG_VR_OBJECT_SOFT_BOX_TOOLTIP,
  SOFTCONE: Blockly.Msg.LANG_VR_OBJECT_SOFT_CONE_TOOLTIP,
  SOFTCYLINDER: Blockly.Msg.LANG_VR_OBJECT_SOFT_CYLINDER_TOOLTIP,
  SOFTDODECAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_DODECAHEDRON_TOOLTIP,
  SOFTICOSAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_ICOSAHEDRON_TOOLTIP,
  SOFTOCTAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_OCTAHEDRON_TOOLTIP,
  SOFTSPHERE: Blockly.Msg.LANG_VR_OBJECT_SOFT_SPHERE_TOOLTIP,
  SOFTTETRAHEDRON: Blockly.Msg.LANG_VR_OBJECT_SOFT_TETRAHEDRON_TOOLTIP
};
