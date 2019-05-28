// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2014 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/**
 * @license
 * @fileoverview Color blocks for Blockly, modified for MIT App Inventor.
 * @author mckinney@mit.edu (Andrew F. McKinney)
 */

'use strict';

goog.provide('Blockly.Blocks.color');

goog.require('Blockly.Blocks.Utilities');

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
