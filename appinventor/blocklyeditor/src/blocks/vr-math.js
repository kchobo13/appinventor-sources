// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2019 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/**
 * @license
 * @fileoverview VR_Math blocks for Blockly, modified for MIT App Inventor.
 */

'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks.Utilities');

Blockly.Blocks['vr_math_number'] = {
  // Numeric value.
  category: 'VR_Math',
  helpUrl: Blockly.Msg.LANG_MATH_NUMBER_HELPURL,
  init: function () {
    this.setColour(Blockly.MATH_CATEGORY_HUE);
    this.appendDummyInput().appendField(
        new Blockly.FieldTextInput('0', Blockly.Blocks.vr_math_number.validator), 'NUM');
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

Blockly.Blocks.vr_math_bitwise.OPERATORS = function () {
  return [[Blockly.Msg.LANG_MATH_BITWISE_AND, 'BITAND'],
    [Blockly.Msg.LANG_MATH_BITWISE_IOR, 'BITIOR'],
    [Blockly.Msg.LANG_MATH_BITWISE_XOR, 'BITXOR']]
};

Blockly.Blocks.vr_math_bitwise.TOOLTIPS = function () {
  return {
    BITAND: Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_AND,
    BITIOR: Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_IOR,
    BITXOR: Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_XOR
  }
};

Blockly.Blocks.vr_math_bitwise.HELPURLS = function () {
  return {
    BITAND: Blockly.Msg.LANG_MATH_BITWISE_HELPURL_AND,
    BITIOR: Blockly.Msg.LANG_MATH_BITWISE_HELPURL_IOR,
    BITXOR: Blockly.Msg.LANG_MATH_BITWISE_HELPURL_XOR
  }
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
