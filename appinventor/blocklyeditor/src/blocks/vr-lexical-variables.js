// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2014 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/**
 * @license
 * @fileoverview Variables blocks for Blockly, modified for MIT App Inventor.
 * @author fturbak@wellesley.edu (Lyn Turbak)
 */

'use strict';

goog.provide('Blockly.Blocks.lexicalvariables');
goog.require('Blockly.Blocks.Utilities');
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
        .appendField(new Blockly.FieldGlobalFlydown(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
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
    this.fieldVar_ = new Blockly.FieldLexicalVariable(" ");
    this.fieldVar_.setBlock(this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET)
        .appendField(this.fieldVar_, 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP);
    this.errors = [{name:"checkIsInDefinition"},{name:"checkDropDownContainsValidValue",dropDowns:["VAR"]}];
  },
  mutationToDom: function() { // Handle getters for event parameters specially (to support i8n)
    return Blockly.LexicalVariable.eventParamMutationToDom(this);
  },
  domToMutation: function(xmlElement) { // Handler getters for event parameters specially (to support i8n)
    Blockly.LexicalVariable.eventParamDomToMutation(this, xmlElement);
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
    this.fieldVar_ = new Blockly.FieldLexicalVariable(" ");
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
    return Blockly.LexicalVariable.eventParamMutationToDom(this);
  },
  domToMutation: function(xmlElement) { // Handler setters for event parameters specially (to support i8n)
    Blockly.LexicalVariable.eventParamDomToMutation(this, xmlElement);
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
    this.getChildren().map( function(blk) { Blockly.LexicalVariable.renameFree(blk, freeSubstitution); })
  },
  freeVariables: function() { // return the free lexical variables of this block
    // [lyn, 06/27/2014] Find free vars of *all* children, including subsequent commands in NEXT slot.
    var childrenFreeVars = this.getChildren().map( function(blk) { return Blockly.LexicalVariable.freeVariables(blk); } );
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
