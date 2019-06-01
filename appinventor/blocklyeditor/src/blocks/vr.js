// -*- mode: javascript; js-indent-level: 2; -*-
// Copyright © 2017 Massachusetts Institute of Technology, All rights reserved.

"use strict";

goog.provide("Blockly.Blocks.VR");

goog.require("Blockly.Blocks.Utilities");
goog.require('goog.dom');

/**
 * Prototype bindings for a global variable declaration block
 */
Blockly.Blocks['vr_global_declaration'] = {
  // Global var defn
  category: 'VR_Variables',
  helpUrl: Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL,
  init: function() {
    this.setColour(Blockly.VARIABLE_CATEGORY_HUE);
    this.appendValueInput('VALUE')
        .appendField(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT)
        .appendField(new Blockly.FieldGlobalFlydownVR(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
                                                    Blockly.FieldFlydown.DISPLAY_BELOW), 'NAME')
        .appendField(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP);
  },
  getVars: function() {
    var field = this.getField('NAME');
    return field ? [field.getText()] : [];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT }]
};

/**
 * Prototype bindings for a variable getter block
 */
Blockly.Blocks['vr_lexical_variable_get'] = {
  // Variable getter.
  category: 'VR_Variables',
  helpUrl: Blockly.Msg.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(Blockly.VARIABLE_CATEGORY_HUE);
    this.fieldVar_ = new Blockly.FieldLexicalVariableVR(" ");
    this.fieldVar_.setBlock(this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET)
        .appendField(this.fieldVar_, 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP);
    this.errors = [{name:"checkIsInDefinition"},{name:"checkDropDownContainsValidValue",dropDowns:["VAR"]}];
  },
  mutationToDom: function() { // Handle getters for event parameters specially (to support i8n)
    return Blockly.LexicalVariableVR.eventParamMutationToDom(this);
  },
  domToMutation: function(xmlElement) { // Handler getters for event parameters specially (to support i8n)
    Blockly.LexicalVariableVR.eventParamDomToMutation(this, xmlElement);
  },
  getVars: function() {
    return this.getFieldValue('VAR');
  },
  renameLexicalVar: function(oldName, newName) {
    // console.log("Renaming lexical variable from " + oldName + " to " + newName);
    if (oldName === this.getFieldValue('VAR')) {
        this.setFieldValue(newName, 'VAR');
        Blockly.Blocks.Utilities.renameCollapsed(this, 0);
    }
  },
  renameFree: function (freeSubstitution) {
    var prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    var prefix = prefixPair[0];
    // Only rename lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      var oldName = prefixPair[1];
      var newName = freeSubstitution.apply(oldName);
      if (newName !== oldName) {
        this.renameLexicalVar(oldName, newName);
      }
    }
  },
  freeVariables: function() { // return the free lexical variables of this block
    var prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    var prefix = prefixPair[0];
    // Only return lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      var oldName = prefixPair[1];
      return new Blockly.NameSet([oldName])
    } else {
      return new Blockly.NameSet();
    }
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET + Blockly.Msg.LANG_VARIABLES_VARIABLE }]
};

/**
 * Prototype bindings for a variable setter block
 */
Blockly.Blocks['vr_lexical_variable_set'] = {
  // Variable setter.
  category: 'VR_Variables',
  helpUrl: Blockly.Msg.LANG_VARIABLES_SET_HELPURL, // *** [lyn, 11/10/12] Fix this
  init: function() {
    this.setColour(Blockly.VARIABLE_CATEGORY_HUE);
    this.fieldVar_ = new Blockly.FieldLexicalVariableVR(" ");
    this.fieldVar_.setBlock(this);
    this.appendValueInput('VALUE')
        .appendField(Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET)
        .appendField(this.fieldVar_, 'VAR')
        .appendField(Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP);
    this.errors = [{name:"checkIsInDefinition"},{name:"checkDropDownContainsValidValue",dropDowns:["VAR"]}];
  },
  mutationToDom: function() { // Handle setters for event parameters specially (to support i8n)
    return Blockly.LexicalVariableVR.eventParamMutationToDom(this);
  },
  domToMutation: function(xmlElement) { // Handler setters for event parameters specially (to support i8n)
    Blockly.LexicalVariableVR.eventParamDomToMutation(this, xmlElement);
  },
  getVars: function() {
    return this.getFieldValue('VAR');
  },
  renameLexicalVar: Blockly.Blocks.vr_lexical_variable_get.renameLexicalVar,
  renameFree: function (freeSubstitution) {
    // potentially rename the set variable
    var prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    var prefix = prefixPair[0];
    // Only rename lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      var oldName = prefixPair[1];
      var newName = freeSubstitution.apply(oldName);
      if (newName !== oldName) {
        this.renameLexicalVar(oldName, newName);
      }
    }
    // [lyn, 06/26/2014] Don't forget to rename children!
    this.getChildren().map( function(blk) { Blockly.LexicalVariableVR.renameFree(blk, freeSubstitution); })
  },
  freeVariables: function() { // return the free lexical variables of this block
    // [lyn, 06/27/2014] Find free vars of *all* children, including subsequent commands in NEXT slot.
    var childrenFreeVars = this.getChildren().map( function(blk) { return Blockly.LexicalVariableVR.freeVariables(blk); } );
    var result = Blockly.NameSet.unionAll(childrenFreeVars);
    var prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    var prefix = prefixPair[0];
    // Only return lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      var oldName = prefixPair[1];
      result.insert(oldName);
    }
    return result;
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET + Blockly.Msg.LANG_VARIABLES_VARIABLE }]
};

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

Blockly.Blocks['vr_color_black'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#000000'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_BLACK }]
};

Blockly.Blocks['vr_color_white'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ffffff'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_WHITE }]
};

Blockly.Blocks['vr_color_red'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_RED }]
};

Blockly.Blocks['vr_color_pink'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ffafaf'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_PINK }]
};

Blockly.Blocks['vr_color_orange'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ffc800'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_ORANGE }]
};

Blockly.Blocks['vr_color_yellow'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ffff00'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_YELLOW }]
};

Blockly.Blocks['vr_color_green'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#00ff00'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_GREEN }]
};

Blockly.Blocks['vr_color_cyan'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#00ffff'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_CYAN }]
};

Blockly.Blocks['vr_color_blue'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#0000ff'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_BLUE }]
};

Blockly.Blocks['vr_color_magenta'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#ff00ff'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_MAGENTA }]
};

Blockly.Blocks['vr_color_light_gray'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#cccccc'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_LIGHT_GRAY }]
};

Blockly.Blocks['vr_color_gray'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#888888'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_GRAY }]
};


Blockly.Blocks['vr_color_dark_gray'] = {
  // Colour picker.
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_PICKER_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendDummyInput().appendField(new Blockly.FieldColour('#444444'), 'COLOR');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_DARK_GRAY }]
};

Blockly.Blocks['vr_color_make_color'] = {
  category: "VR_Colors",
  helpUrl: Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL,
  init: function() {
    this.setColour(Blockly.COLOR_CATEGORY_HUE);
    this.appendValueInput('COLORLIST')
      .appendField(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR)
      .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("list", Blockly.Blocks.Utilities.INPUT));
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_COLOUR_MAKE_COLOUR }]
};

Blockly.Blocks['vr_controls_if'] = {
  // If/elseif/else condition.
  category: 'VR_Controls',
  helpUrl: Blockly.Msg.LANG_CONTROLS_IF_HELPURL,
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('IF0')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['vr_controls_if_elseif',
      'vr_controls_if_else']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    this.warnings = [{name: "checkEmptySockets", sockets: [{baseName: "IF"}, {baseName: "DO"}]}];
  },
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  domToMutation: function (xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0
    this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('vr_controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.elseifCount_; x++) {
      var elseifBlock = workspace.newBlock('vr_controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('vr_controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'vr_controls_if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'vr_controls_if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },
  saveConnections: function (containerBlock) {
    // Store a pointer to any connected child blocks.
    var inputDo;
    var clauseBlock = containerBlock.getInput('STACK').connection.targetBlock();
    var x = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'vr_controls_if_elseif':
          var inputIf = this.getInput('IF' + x);
          inputDo = this.getInput('DO' + x);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          x++;
          break;
        case 'vr_controls_if_else':
          inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF}],
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType('boolean', Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO' + i)
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
  }
};

Blockly.Blocks['vr_controls_if_if'] = {
  // If condition.
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['vr_controls_if_elseif'] = {
  // Else-If condition.
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['vr_controls_if_else'] = {
  // Else condition.
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['vr_controls_forRange'] = {
  // For range.
  category: 'VR_Controls',
  helpUrl: Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL,
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    //this.setOutput(true, null);
    // Need to deal with variables here
    // [lyn, 11/30/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
    // Old code:
    // this.appendValueInput('VAR').appendField('for range').appendField('variable').setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('START').setCheck(Number).appendField('start').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('START')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM)
        .appendField(new Blockly.FieldParameterFlydown(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR, true, Blockly.FieldFlydown.DISPLAY_BELOW), 'VAR')
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('END')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('STEP')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP);
  },
  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  blocksInScope: function () {
    var doBlock = this.getInputTargetBlock('DO');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function () {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  renameBound: function (boundSubstitution, freeSubstitution) {
    Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('START'), freeSubstitution);
    Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('END'), freeSubstitution);
    Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('STEP'), freeSubstitution);
    var oldIndexVar = this.getFieldValue('VAR');
    var newIndexVar = boundSubstitution.apply(oldIndexVar);
    if (newIndexVar !== oldIndexVar) {
      this.renameVar(oldIndexVar, newIndexVar);
      var indexSubstitution = Blockly.Substitution.simpleSubstitution(oldIndexVar, newIndexVar);
      var extendedFreeSubstitution = freeSubstitution.extend(indexSubstitution);
      Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('DO'), extendedFreeSubstitution);
    } else {
      var removedFreeSubstitution = freeSubstitution.remove([oldIndexVar]);
      Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('DO'), removedFreeSubstitution);
    }
    if (this.nextConnection) {
      var nextBlock = this.nextConnection.targetBlock();
      Blockly.LexicalVariableVR.renameFree(nextBlock, freeSubstitution);
    }
  },
  renameFree: function (freeSubstitution) {
    var indexVar = this.getFieldValue('VAR');
    var bodyFreeVars = Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('DO'));
    bodyFreeVars.deleteName(indexVar);
    var renamedBodyFreeVars = bodyFreeVars.renamed(freeSubstitution);
    if (renamedBodyFreeVars.isMember(indexVar)) { // Variable capture!
      var newIndexVar = Blockly.FieldLexicalVariableVR.nameNotIn(indexVar, renamedBodyFreeVars.toList());
      var boundSubstitution = Blockly.Substitution.simpleSubstitution(indexVar, newIndexVar);
      this.renameBound(boundSubstitution, freeSubstitution);
    } else {
      this.renameBound(new Blockly.Substitution(), freeSubstitution);
    }
  },
  freeVariables: function () { // return the free variables of this block
    var result = Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('DO'));
    result.deleteName(this.getFieldValue('VAR')); // Remove bound index variable from body free vars
    result.unite(Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('START')));
    result.unite(Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('END')));
    result.unite(Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('STEP')));
    if (this.nextConnection) {
      var nextBlock = this.nextConnection.targetBlock();
      result.unite(Blockly.LexicalVariableVR.freeVariables(nextBlock));
    }
    return result;
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM}]
};

// Blockly.Blocks['vr_controls_forEach'] = {
//   // For each loop.
//   category: 'VR_Control',
//   helpUrl: Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL,
//   init: function () {
//     this.setColour(Blockly.CONTROL_CATEGORY_HUE);
//     //this.setOutput(true, null);
//     // [lyn, 10/07/13] Changed default name from "i" to "item"
//     // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
//     // Old code:
//     // this.appendValueInput('VAR').appendField('for range').appendField('variable').setAlign(Blockly.ALIGN_RIGHT);
//     // this.appendValueInput('START').setCheck(Number).appendField('start').setAlign(Blockly.ALIGN_RIGHT);
//     this.appendValueInput('LIST')
//         .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("list", Blockly.Blocks.Utilities.INPUT))
//         .appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM)
//         .appendField(new Blockly.FieldParameterFlydown(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR,
//             true, Blockly.FieldFlydown.DISPLAY_BELOW), 'VAR')
//         .appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST)
//         .setAlign(Blockly.ALIGN_RIGHT);
//     this.appendStatementInput('DO').appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip(Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP);
//   },
//   getVars: function () {
//     return [this.getFieldValue('VAR')];
//   },
//   blocksInScope: function () {
//     var doBlock = this.getInputTargetBlock('DO');
//     if (doBlock) {
//       return [doBlock];
//     } else {
//       return [];
//     }
//   },
//   declaredNames: function () {
//     return [this.getFieldValue('VAR')];
//   },
//   renameVar: function (oldName, newName) {
//     if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
//       this.setFieldValue(newName, 'VAR');
//     }
//   },
//   renameBound: function (boundSubstitution, freeSubstitution) {
//     Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('LIST'), freeSubstitution);
//     var oldIndexVar = this.getFieldValue('VAR');
//     var newIndexVar = boundSubstitution.apply(oldIndexVar);
//     if (newIndexVar !== oldIndexVar) {
//       this.renameVar(oldIndexVar, newIndexVar);
//       var indexSubstitution = Blockly.Substitution.simpleSubstitution(oldIndexVar, newIndexVar);
//       var extendedFreeSubstitution = freeSubstitution.extend(indexSubstitution);
//       Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('DO'), extendedFreeSubstitution);
//     } else {
//       var removedFreeSubstitution = freeSubstitution.remove([oldIndexVar]);
//       Blockly.LexicalVariableVR.renameFree(this.getInputTargetBlock('DO'), removedFreeSubstitution);
//     }
//     if (this.nextConnection) {
//       var nextBlock = this.nextConnection.targetBlock();
//       Blockly.LexicalVariableVR.renameFree(nextBlock, freeSubstitution);
//     }
//   },
//   renameFree: function (freeSubstitution) {
//     var indexVar = this.getFieldValue('VAR');
//     var bodyFreeVars = Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('DO'));
//     bodyFreeVars.deleteName(indexVar);
//     var renamedBodyFreeVars = bodyFreeVars.renamed(freeSubstitution);
//     if (renamedBodyFreeVars.isMember(indexVar)) { // Variable capture!
//       var newIndexVar = Blockly.FieldLexicalVariableVR.nameNotIn(indexVar, renamedBodyFreeVars.toList());
//       var boundSubstitution = Blockly.Substitution.simpleSubstitution(indexVar, newIndexVar);
//       this.renameBound(boundSubstitution, freeSubstitution);
//     } else {
//       this.renameBound(new Blockly.Substitution(), freeSubstitution);
//     }
//   },
//   freeVariables: function () { // return the free variables of this block
//     var result = Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('DO'));
//     result.deleteName(this.getFieldValue('VAR')); // Remove bound index variable from body free vars
//     result.unite(Blockly.LexicalVariableVR.freeVariables(this.getInputTargetBlock('LIST')));
//     if (this.nextConnection) {
//       var nextBlock = this.nextConnection.targetBlock();
//       result.unite(Blockly.LexicalVariableVR.freeVariables(nextBlock));
//     }
//     return result;
//   },
//   typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM}]
// };

Blockly.Blocks['vr_controls_while'] = {
  // While condition.
  category: 'VR_Controls',
  helpUrl: Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL,
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('TEST')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_WHILE_TITLE}]
};

Blockly.Blocks['vr_controls_openAnotherScreen'] = {
  // Open another screen
  category: 'VR_Controls',
  helpUrl: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL,
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('SCREEN')
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT));
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE}]
};

Blockly.Blocks['vr_controls_openAnotherScreenWithStartValue'] = {
  // Open another screen with start value
  category: 'VR_Controls',
  helpUrl: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL,
  init: function () {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('SCREENNAME')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('STARTVALUE')
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE}]
};

Blockly.Blocks['vr_lists_create_with'] = {
  // Create a list with any number of elements of any type.
  category: 'VR_Lists',
  helpUrl: Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('ADD0')
        .appendField(Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST);
    this.appendValueInput('ADD1');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.OUTPUT));
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 2;
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'ADD';
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_create_with_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){
    this.appendDummyInput(this.emptyInputName)
      .appendField(Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE);
  },
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    if(inputNum === 0){
      input.appendField(Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST);
    }
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setFieldValue(Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
  },
  // create type blocks for both make a list (two items) and create empty list
  typeblock: [
      { translatedName: Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST,
        mutatorAttributes: { items: 2 } },
      { translatedName: Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE,
        mutatorAttributes: { items: 0 } }]
};


Blockly.Blocks['vr_lists_add_items'] = {
  // Create a list with any number of elements of any type.
  category: 'VR_Lists',
  helpUrl: Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST')
      .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT))
      .appendField(Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD)
      .appendField(Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST);
    this.appendValueInput('ITEM0')
      .appendField(Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM)
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP);
    this.setMutator(new Blockly.Mutator(['lists_add_items_item']));
    this.itemCount_ = 1;
    this.emptyInputName = null;
    this.repeatingInputName = 'ITEM';
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_add_items_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){},
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    input.appendField('item').setAlign(Blockly.ALIGN_RIGHT);
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setFieldValue(Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
    containerBlock.setTooltip(Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD }]
};

Blockly.Blocks['vr_lists_is_in'] = {
  // Is in list?.
  category : 'VR_Lists',
  helpUrl : Blockly.Msg.LANG_LISTS_IS_IN_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    var checkTypeList = Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT);
    var checkTypeAny = Blockly.Blocks.Utilities.YailTypeToBlocklyType("any",Blockly.Blocks.Utilities.INPUT);
    this.interpolateMsg(Blockly.Msg.LANG_LISTS_IS_IN_INPUT,
            ['ITEM', checkTypeAny, Blockly.ALIGN_RIGHT],
            ['LIST', checkTypeList, Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean",Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP);
    this.setInputsInline(false);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN }]
};


Blockly.Blocks['vr_lists_length'] = {
  // Length of list.
  category : 'VR_Lists',
  helpUrl : Blockly.Msg.LANG_LISTS_LENGTH_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('LIST')
      .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT))
      .appendField(Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH)
      .appendField(Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST);
    this.setTooltip(Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH }]
};

Blockly.Blocks['vr_lists_select_item'] = {
  // Select from list an item.
  category : 'VR_Lists',
  helpUrl : Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, null);
    var checkTypeList = Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT);
    var checkTypeNumber = Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT);
    this.interpolateMsg(Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT,
            ['LIST', checkTypeList, Blockly.ALIGN_RIGHT],
            ['NUM', checkTypeNumber, Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP);
    this.setInputsInline(false);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT }]
};

Blockly.Blocks['vr_lists_insert_item'] = {
  // Insert Item in list.
  category : 'VR_Lists',
  helpUrl : Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    var checkTypeList = Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT);
    var checkTypeNumber = Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT);
    var checkTypeAny = Blockly.Blocks.Utilities.YailTypeToBlocklyType("any",Blockly.Blocks.Utilities.INPUT);
    this.interpolateMsg(Blockly.Msg.LANG_LISTS_INSERT_INPUT,
            ['LIST', checkTypeList, Blockly.ALIGN_RIGHT],
            ['INDEX', checkTypeNumber, Blockly.ALIGN_RIGHT],
            ['ITEM', checkTypeAny, Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP);
    this.setInputsInline(false);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST }]
};

Blockly.Blocks['vr_logic_boolean'] = {
  // Boolean data type: true and false.
  category: 'VR_Logic',
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'BOOL');
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('BOOL');
      return Blockly.Blocks.vr_logic_boolean.TOOLTIPS()[op];
    });
  },
  helpUrl: function () {
    var op = this.getFieldValue('BOOL');
    return Blockly.Blocks.vr_logic_boolean.HELPURLS()[op];
  },
  typeblock: [{
    translatedName: Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE,
    dropDown: {
      titleName: 'BOOL',
      value: 'TRUE'
    }
  }, {
    translatedName: Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE,
    dropDown: {
      titleName: 'BOOL',
      value: 'FALSE'
    }
  }]
};

Blockly.Blocks.vr_logic_boolean.OPERATORS = function () {
  return [
    [Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE, 'TRUE'],
    [Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE, 'FALSE']
  ];
};

Blockly.Blocks.vr_logic_boolean.TOOLTIPS = function () {
  return {
    TRUE: Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE,
    FALSE: Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE
  }
};

Blockly.Blocks.vr_logic_boolean.HELPURLS = function () {
  return {
    TRUE: Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL,
    FALSE: Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL
  }
};

Blockly.Blocks['vr_logic_false'] = {
  // Boolean data type: true and false.
  category: 'VR_Logic',
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_logic_boolean.OPERATORS), 'BOOL');
    this.setFieldValue('FALSE', 'BOOL');
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('BOOL');
      return Blockly.Blocks.vr_logic_boolean.TOOLTIPS()[op];
    });
  },
  helpUrl: function () {
    var op = this.getFieldValue('BOOL');
    return Blockly.Blocks.vr_logic_boolean.HELPURLS()[op];
  }
};

Blockly.Blocks['vr_logic_negate'] = {
  // Negation.
  category: 'VR_Logic',
  helpUrl: Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL,
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('BOOL')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT);
    this.setTooltip(Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT}]
};

Blockly.Blocks['vr_logic_compare'] = {
  // Comparison operator.
  category: 'VR_Logic',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_logic_compare.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_logic_compare.TOOLTIPS()[mode];
    });
  },
  // Potential clash with Math =, so using 'logic equal' for now
  typeblock: [{translatedName: Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME}]
};

Blockly.Blocks.vr_logic_compare.TOOLTIPS = function () {
  return {
    EQ: Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ,
    NEQ: Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ
  }
};

Blockly.Blocks.vr_logic_compare.HELPURLS = function () {
  return {
    EQ: Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ,
    NEQ: Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ
  }
};

Blockly.Blocks.vr_logic_compare.OPERATORS = function () {
  return [
    [Blockly.Msg.LANG_LOGIC_COMPARE_EQ, 'EQ'],
    [Blockly.Msg.LANG_LOGIC_COMPARE_NEQ, 'NEQ']
  ];
};

Blockly.Blocks['vr_logic_operation'] = {
  // Logical operations: 'and', 'or'.
  category: 'VR_Logic',
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('B')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_logic_operation.TOOLTIPS()[op];
    });
  },
  helpUrl: function () {
    var op = this.getFieldValue('OP');
    return Blockly.Blocks.vr_logic_operation.HELPURLS()[op];
  },
  typeblock: [{
    translatedName: Blockly.Msg.LANG_LOGIC_OPERATION_AND,
    dropDown: {
      titleName: 'OP',
      value: 'AND'
    }
  }, {
    translatedName: Blockly.Msg.LANG_LOGIC_OPERATION_OR,
    dropDown: {
      titleName: 'OP',
      value: 'OR'
    }
  }]
};

Blockly.Blocks.vr_logic_operation.OPERATORS = function () {
  return [
    [Blockly.Msg.LANG_LOGIC_OPERATION_AND, 'AND'],
    [Blockly.Msg.LANG_LOGIC_OPERATION_OR, 'OR']
  ]
};

Blockly.Blocks.vr_logic_operation.HELPURLS = function () {
  return {
    AND: Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND,
    OR: Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR
  }
};
Blockly.Blocks.vr_logic_operation.TOOLTIPS = function () {
  return {
    AND: Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND,
    OR: Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR
  }
};

Blockly.Blocks['vr_logic_or'] = {
  // Logical operations: 'and', 'or'.
  category: 'VR_Logic',
  init: function () {
    this.setColour(Blockly.LOGIC_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('B')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_logic_operation.OPERATORS), 'OP');
    this.setFieldValue('OR', 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_logic_operation.TOOLTIPS()[op];
    });
  },
  helpUrl: function () {
    var op = this.getFieldValue('OP');
    return Blockly.Blocks.vr_logic_operation.HELPURLS()[op];
  }
};

Blockly.Blocks['vr_text'] = {
  // Text value.
  category: 'VR_Text',
  helpUrl: Blockly.Msg.LANG_TEXT_TEXT_HELPURL,
  init: function () {
    this.setColour(Blockly.TEXT_CATEGORY_HUE);
    this.appendDummyInput().appendField(Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE).appendField(
        new Blockly.FieldTextBlockInput(''),
        'TEXT').appendField(Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE);
    this.setOutput(true, [Blockly.Blocks.vr_text_connectionCheck]);
    this.setTooltip(Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_CATEGORY_TEXT}]
};

Blockly.Blocks.vr_text_connectionCheck = function (myConnection, otherConnection) {
  var block = myConnection.sourceBlock_;
  var otherTypeArray = otherConnection.check_;
  for (var i = 0; i < otherTypeArray.length; i++) {
    if (otherTypeArray[i] == "String") {
      return true;
    } else if (otherTypeArray[i] == "Number" && !isNaN(parseFloat(block.getFieldValue('TEXT')))) {
      return true;
    }
  }
  return false;
};

Blockly.Blocks['vr_text_join'] = {
  // Create a string made up of any number of elements of any type.
  // TODO: (Andrew) Make this handle multiple arguments.
  category: 'VR_Text',
  helpUrl: Blockly.Msg.LANG_TEXT_JOIN_HELPURL,
  init: function () {
    this.setColour(Blockly.TEXT_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('ADD0')
        .appendField(Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN);
    this.appendValueInput('ADD1');
    this.setTooltip(Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP);
    this.setMutator(new Blockly.Mutator(['vr_text_join_item']));
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'ADD';
    this.itemCount_ = 2;
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function (workspace) {
    return Blockly.decompose(workspace, 'vr_text_join_item', this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function () {
    this.appendDummyInput(this.emptyInputName)
        .appendField(Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN);
  },
  addInput: function (inputNum) {
    var input = this.appendValueInput(this.repeatingInputName + inputNum).setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT));
    if (inputNum === 0) {
      input.appendField(Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN);
    }
    return input;
  },
  updateContainerBlock: function (containerBlock) {
    containerBlock.inputList[0].fieldRow[0].setText(Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN}]

};

Blockly.Blocks['vr_text_join_item'] = {
  // Add items.
  init: function () {
    this.setColour(Blockly.TEXT_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['vr_text_length'] = {
  // String length.
  category: 'VR_Text',
  helpUrl: Blockly.Msg.LANG_TEXT_LENGTH_HELPURL,
  init: function () {
    this.setColour(Blockly.TEXT_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('VALUE')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH);
    this.setTooltip(Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH}]
};

Blockly.Blocks['vr_math_number'] = {
  // Numeric value.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_NUMBER_HELPURL,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.appendDummyInput().appendField(
        new Blockly.FieldTextInput('0', Blockly.Blocks.vr_validator), 'NUM');
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.setTooltip(Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER}]
};

Blockly.Blocks.vr_math_number.validator = function (text) {
  // Ensure that only a number may be entered.
  // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
  var n = window.parseFloat(text || 0);
  return window.isNaN(n) ? null : String(n);
};

Blockly.Blocks['vr_math_compare'] = {
  // Basic arithmetic operator.
  // TODO(Andrew): equality block needs to have any on the sockets.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_compare.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(null);
    this.appendValueInput('B')
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS, Blockly.Blocks.vr_math_compare.onchange), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_compare.TOOLTIPS()[mode];
    });
  },
  // Potential clash with logic equal, using '=' for now
  typeblock: [{
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_EQ,
    dropDown: {
      titleName: 'OP',
      value: 'EQ'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_NEQ,
    dropDown: {
      titleName: 'OP',
      value: 'NEQ'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_LT,
    dropDown: {
      titleName: 'OP',
      value: 'LT'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_LTE,
    dropDown: {
      titleName: 'OP',
      value: 'LTE'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_GT,
    dropDown: {
      titleName: 'OP',
      value: 'GT'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_COMPARE_GTE,
    dropDown: {
      titleName: 'OP',
      value: 'GTE'
    }
  }]
};

Blockly.Blocks.vr_math_compare.onchange = function (value) {
  if (!this.sourceBlock_) {
    return;
  }
  if (value == "EQ" || value == "NEQ") {
    this.sourceBlock_.getInput("A").setCheck(null);
    this.sourceBlock_.getInput("B").setCheck(null);
  } else {
    this.sourceBlock_.getInput("A")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.sourceBlock_.getInput("B")
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
  }
};

Blockly.Blocks.vr_math_compare.OPERATORS = function () {
  return [[Blockly.Msg.LANG_MATH_COMPARE_EQ, 'EQ'],
    [Blockly.Msg.LANG_MATH_COMPARE_NEQ, 'NEQ'],
    [Blockly.Msg.LANG_MATH_COMPARE_LT, 'LT'],
    [Blockly.Msg.LANG_MATH_COMPARE_LTE, 'LTE'],
    [Blockly.Msg.LANG_MATH_COMPARE_GT, 'GT'],
    [Blockly.Msg.LANG_MATH_COMPARE_GTE, 'GTE']];
};

Blockly.Blocks.vr_math_compare.TOOLTIPS = function () {
  return {
    EQ: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ,
    NEQ: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ,
    LT: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT,
    LTE: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE,
    GT: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT,
    GTE: Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE
  }
};

Blockly.Blocks.vr_math_compare.HELPURLS = function () {
  return {
    EQ: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ,
    NEQ: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ,
    LT: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT,
    LTE: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE,
    GT: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT,
    GTE: Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE
  }
};

Blockly.Blocks['vr_math_add'] = {
  // Basic arithmetic operator.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM0')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    // append the title on a separate line to avoid overly long lines
    this.appendValueInput('NUM1')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_MATH_ARITHMETIC_ADD);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      return Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD;
    });
    this.setMutator(new Blockly.Mutator(['vr_math_mutator_item']));
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'NUM';
    this.itemCount_ = 2;
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function (workspace) {
    return Blockly.decompose(workspace, 'vr_math_mutator_item', this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function () {
    var input = this.appendDummyInput(this.emptyInputName);
  },
  addInput: function (inputNum) {
    var input = this.appendValueInput(this.repeatingInputName + inputNum)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    if (inputNum !== 0) {
      input.appendField(Blockly.Msg.LANG_MATH_ARITHMETIC_ADD);
    }
    return input;
  },
  updateContainerBlock: function (containerBlock) {
    containerBlock.setFieldValue("+", "CONTAINER_TEXT");
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_ARITHMETIC_ADD}]
};

Blockly.Blocks['vr_math_mutator_item'] = {
  // Add items.
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.appendDummyInput()
      //.appendField(Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE);
        .appendField("number");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP_1);
    this.contextMenu = false;
  }
};

Blockly.Blocks['vr_math_subtract'] = {
  // Basic arithmetic operator.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('B')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    this.setTooltip(Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS}]
};

Blockly.Blocks['vr_math_multiply'] = {
  // Basic arithmetic operator.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM0')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('NUM1')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Blocks.Utilities.times_symbol);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      return Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY;
    });
    this.setMutator(new Blockly.Mutator(['vr_math_mutator_item']));
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'NUM';
    this.itemCount_ = 2;
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function (workspace) {
    return Blockly.decompose(workspace, 'vr_math_mutator_item', this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function () {
    var input = this.appendDummyInput(this.emptyInputName);
  },
  addInput: function (inputNum) {
    var input = this.appendValueInput(this.repeatingInputName + inputNum)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    if (inputNum !== 0) {
      input.appendField(Blockly.Blocks.Utilities.times_symbol);
    }
    return input;
  },
  updateContainerBlock: function (containerBlock) {
    containerBlock.setFieldValue(Blockly.Blocks.Utilities.times_symbol, "CONTAINER_TEXT");
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY}]
};

Blockly.Blocks['vr_math_division'] = {
  // Basic arithmetic operator.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('B')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    this.setTooltip(Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE}]
};

Blockly.Blocks['vr_math_power'] = {
  // Basic arithmetic operator.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('A')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.appendValueInput('B')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_MATH_ARITHMETIC_POWER);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_ARITHMETIC_POWER}]
};

Blockly.Blocks['vr_math_random_int'] = {
  // Random integer between [X] and [Y].
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));

    var checkTypeNumber = Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT);
    this.interpolateMsg(Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT,
        ['FROM', checkTypeNumber, Blockly.ALIGN_RIGHT],
        ['TO', checkTypeNumber, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT)
    /*this.appendValueInput('FROM')
     .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT))
     .appendField(Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM)
     .appendField(Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM);
     this.appendValueInput('TO')
     .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT))
     .appendField(Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO);*/
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM}]
};

Blockly.Blocks['vr_math_random_float'] = {
  // Random fraction between 0 and 1.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM);
    this.setTooltip(Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP);
  },
  typeblock: [{translatedName: Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM}]
};

Blockly.Blocks['vr_math_on_list'] = {
  // Evaluate a list of numbers to return sum, average, min, max, etc.
  // Some functions also work on text (min, max, mode, median).
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_on_list.HELPURLS()[mode];
  },
  init: function () {
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM0')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.appendValueInput('NUM1')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    this.setInputsInline(false);
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_on_list.TOOLTIPS()[mode];
    });
    this.setMutator(new Blockly.Mutator(['vr_math_mutator_item']));
    this.itemCount_ = 2;
    this.valuesToSave = {'OP': null};
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'NUM';
  },
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function (workspace) {
    return Blockly.decompose(workspace, 'vr_math_mutator_item', this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function () {
    var input = this.appendDummyInput(this.emptyInputName);
    input.appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setFieldValue(this.valuesToSave['OP'], 'OP');
  },
  addInput: function (inputNum) {
    var input = this.appendValueInput(this.repeatingInputName + inputNum)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT));
    if (inputNum == 0) {
      input.appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
      this.setFieldValue(this.valuesToSave['OP'], 'OP');
    }
    return input;
  },
  updateContainerBlock: function (containerBlock) {

    for (var i = 0; i < Blockly.Blocks.vr_math_on_list.OPERATORS.length; i++) {
      if (Blockly.Blocks.vr_math_on_list.OPERATORS[i][1] == this.getFieldValue("OP")) {
        containerBlock.setFieldValue(Blockly.Blocks.vr_math_on_list.OPERATORS[i][0], "CONTAINER_TEXT");
      }
    }

  },
  typeblock: [{
    translatedName: Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN,
    dropDown: {
      titleName: 'OP',
      value: 'MIN'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX,
    dropDown: {
      titleName: 'OP',
      value: 'MAX'
    }
  }]
};

Blockly.Blocks.vr_math_on_list.OPERATORS = function () {
  return [[Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN, 'MIN'],
    [Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX, 'MAX']]
};

Blockly.Blocks.vr_math_on_list.TOOLTIPS = function () {
  return {
    MIN: Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN,
    MAX: Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX
  }
};

Blockly.Blocks.vr_math_on_list.HELPURLS = function () {
  return {
    MIN: Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MIN,
    MAX: Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MAX
  }
};

Blockly.Blocks['vr_math_single'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  },
  typeblock: [{
    translatedName: Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT,
    dropDown: {
      titleName: 'OP',
      value: 'ROOT'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE,
    dropDown: {
      titleName: 'OP',
      value: 'ABS'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_SINGLE_OP_NEG,
    dropDown: {
      titleName: 'OP',
      value: 'NEG'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_SINGLE_OP_LN,
    dropDown: {
      titleName: 'OP',
      value: 'LN'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_SINGLE_OP_EXP,
    dropDown: {
      titleName: 'OP',
      value: 'EXP'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND,
    dropDown: {
      titleName: 'OP',
      value: 'ROUND'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING,
    dropDown: {
      titleName: 'OP',
      value: 'CEILING'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR,
    dropDown: {
      titleName: 'OP',
      value: 'FLOOR'
    }
  }]
};

Blockly.Blocks.vr_math_single.OPERATORS = function () {
  return [[Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT, 'ROOT'],
    [Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE, 'ABS'],
    [Blockly.Msg.LANG_MATH_SINGLE_OP_NEG, 'NEG'],
    [Blockly.Msg.LANG_MATH_SINGLE_OP_LN, 'LN'],
    [Blockly.Msg.LANG_MATH_SINGLE_OP_EXP, 'EXP'],
    [Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND, 'ROUND'],
    [Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING, 'CEILING'],
    [Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR, 'FLOOR']];
};

Blockly.Blocks.vr_math_single.TOOLTIPS = function () {
  return {
    ROOT: Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT,
    ABS: Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS,
    NEG: Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG,
    LN: Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN,
    EXP: Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP,
    ROUND: Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND,
    CEILING: Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING,
    FLOOR: Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR
  }
};

Blockly.Blocks.vr_math_single.HELPURLS = function () {
  return {
    ROOT: Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT,
    ABS: Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS,
    NEG: Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG,
    LN: Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN,
    EXP: Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP,
    ROUND: Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND,
    CEILING: Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING,
    FLOOR: Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR
  }
};

Blockly.Blocks['vr_math_abs'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_single.OPERATORS), 'OP');
    this.setFieldValue('ABS', "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_neg'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_single.OPERATORS), 'OP');
    this.setFieldValue('NEG', "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_round'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_single.OPERATORS), 'OP');
    this.setFieldValue('ROUND', "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_ceiling'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_single.OPERATORS), 'OP');
    this.setFieldValue('CEILING', "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_floor'] = {
  // Advanced math operators with single operand.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_single.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_single.OPERATORS), 'OP');
    this.setFieldValue('FLOOR', "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_single.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_trig'] = {
  // Trigonometry operators.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_trig.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_trig.TOOLTIPS()[mode];
    });
  },
  typeblock: [{
    translatedName: Blockly.Msg.LANG_MATH_TRIG_SIN,
    dropDown: {
      titleName: 'OP',
      value: 'SIN'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_TRIG_COS,
    dropDown: {
      titleName: 'OP',
      value: 'COS'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_TRIG_TAN,
    dropDown: {
      titleName: 'OP',
      value: 'TAN'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_TRIG_ASIN,
    dropDown: {
      titleName: 'OP',
      value: 'ASIN'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_TRIG_ACOS,
    dropDown: {
      titleName: 'OP',
      value: 'ACOS'
    }
  }, {
    translatedName: Blockly.Msg.LANG_MATH_TRIG_ATAN,
    dropDown: {
      titleName: 'OP',
      value: 'ATAN'
    }
  }]
};

Blockly.Blocks.vr_math_trig.OPERATORS = function () {
  return [[Blockly.Msg.LANG_MATH_TRIG_SIN, 'SIN'],
    [Blockly.Msg.LANG_MATH_TRIG_COS, 'COS'],
    [Blockly.Msg.LANG_MATH_TRIG_TAN, 'TAN'],
    [Blockly.Msg.LANG_MATH_TRIG_ASIN, 'ASIN'],
    [Blockly.Msg.LANG_MATH_TRIG_ACOS, 'ACOS'],
    [Blockly.Msg.LANG_MATH_TRIG_ATAN, 'ATAN']];
}

Blockly.Blocks.vr_math_trig.TOOLTIPS = function () {
  return {
    SIN: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN,
    COS: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS,
    TAN: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN,
    ASIN: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN,
    ACOS: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS,
    ATAN: Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN
  }
};

Blockly.Blocks.vr_math_trig.HELPURLS = function () {
  return {
    SIN: Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN,
    COS: Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS,
    TAN: Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN,
    ASIN: Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN,
    ACOS: Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS,
    ATAN: Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN
  }
};

Blockly.Blocks['vr_math_cos'] = {
  // Trigonometry operators.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_trig.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_trig.OPERATORS), 'OP');
    this.setFieldValue('COS', "OP");
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_trig.TOOLTIPS()[mode];
    });
  }
};

Blockly.Blocks['vr_math_tan'] = {
  // Trigonometry operators.
  category: 'VR_Math',
  helpUrl: function () {
    var mode = this.getFieldValue('OP');
    return Blockly.Blocks.vr_math_trig.HELPURLS()[mode];
  },
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.OUTPUT));
    this.appendValueInput('NUM')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number", Blockly.Blocks.Utilities.INPUT))
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.vr_math_trig.OPERATORS), 'OP');
    this.setFieldValue('TAN', "OP");
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.vr_math_trig.TOOLTIPS()[mode];
    });
  }
};
