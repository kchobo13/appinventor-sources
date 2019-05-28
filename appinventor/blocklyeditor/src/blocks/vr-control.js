// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2014 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/**
 * @fileoverview Control blocks for Blockly, modified for App Inventor
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks.Utilities');

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
    Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('START'), freeSubstitution);
    Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('END'), freeSubstitution);
    Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('STEP'), freeSubstitution);
    var oldIndexVar = this.getFieldValue('VAR');
    var newIndexVar = boundSubstitution.apply(oldIndexVar);
    if (newIndexVar !== oldIndexVar) {
      this.renameVar(oldIndexVar, newIndexVar);
      var indexSubstitution = Blockly.Substitution.simpleSubstitution(oldIndexVar, newIndexVar);
      var extendedFreeSubstitution = freeSubstitution.extend(indexSubstitution);
      Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('DO'), extendedFreeSubstitution);
    } else {
      var removedFreeSubstitution = freeSubstitution.remove([oldIndexVar]);
      Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('DO'), removedFreeSubstitution);
    }
    if (this.nextConnection) {
      var nextBlock = this.nextConnection.targetBlock();
      Blockly.LexicalVariable.renameFree(nextBlock, freeSubstitution);
    }
  },
  renameFree: function (freeSubstitution) {
    var indexVar = this.getFieldValue('VAR');
    var bodyFreeVars = Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('DO'));
    bodyFreeVars.deleteName(indexVar);
    var renamedBodyFreeVars = bodyFreeVars.renamed(freeSubstitution);
    if (renamedBodyFreeVars.isMember(indexVar)) { // Variable capture!
      var newIndexVar = Blockly.FieldLexicalVariable.nameNotIn(indexVar, renamedBodyFreeVars.toList());
      var boundSubstitution = Blockly.Substitution.simpleSubstitution(indexVar, newIndexVar);
      this.renameBound(boundSubstitution, freeSubstitution);
    } else {
      this.renameBound(new Blockly.Substitution(), freeSubstitution);
    }
  },
  freeVariables: function () { // return the free variables of this block
    var result = Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('DO'));
    result.deleteName(this.getFieldValue('VAR')); // Remove bound index variable from body free vars
    result.unite(Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('START')));
    result.unite(Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('END')));
    result.unite(Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('STEP')));
    if (this.nextConnection) {
      var nextBlock = this.nextConnection.targetBlock();
      result.unite(Blockly.LexicalVariable.freeVariables(nextBlock));
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
//     Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('LIST'), freeSubstitution);
//     var oldIndexVar = this.getFieldValue('VAR');
//     var newIndexVar = boundSubstitution.apply(oldIndexVar);
//     if (newIndexVar !== oldIndexVar) {
//       this.renameVar(oldIndexVar, newIndexVar);
//       var indexSubstitution = Blockly.Substitution.simpleSubstitution(oldIndexVar, newIndexVar);
//       var extendedFreeSubstitution = freeSubstitution.extend(indexSubstitution);
//       Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('DO'), extendedFreeSubstitution);
//     } else {
//       var removedFreeSubstitution = freeSubstitution.remove([oldIndexVar]);
//       Blockly.LexicalVariable.renameFree(this.getInputTargetBlock('DO'), removedFreeSubstitution);
//     }
//     if (this.nextConnection) {
//       var nextBlock = this.nextConnection.targetBlock();
//       Blockly.LexicalVariable.renameFree(nextBlock, freeSubstitution);
//     }
//   },
//   renameFree: function (freeSubstitution) {
//     var indexVar = this.getFieldValue('VAR');
//     var bodyFreeVars = Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('DO'));
//     bodyFreeVars.deleteName(indexVar);
//     var renamedBodyFreeVars = bodyFreeVars.renamed(freeSubstitution);
//     if (renamedBodyFreeVars.isMember(indexVar)) { // Variable capture!
//       var newIndexVar = Blockly.FieldLexicalVariable.nameNotIn(indexVar, renamedBodyFreeVars.toList());
//       var boundSubstitution = Blockly.Substitution.simpleSubstitution(indexVar, newIndexVar);
//       this.renameBound(boundSubstitution, freeSubstitution);
//     } else {
//       this.renameBound(new Blockly.Substitution(), freeSubstitution);
//     }
//   },
//   freeVariables: function () { // return the free variables of this block
//     var result = Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('DO'));
//     result.deleteName(this.getFieldValue('VAR')); // Remove bound index variable from body free vars
//     result.unite(Blockly.LexicalVariable.freeVariables(this.getInputTargetBlock('LIST')));
//     if (this.nextConnection) {
//       var nextBlock = this.nextConnection.targetBlock();
//       result.unite(Blockly.LexicalVariable.freeVariables(nextBlock));
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
