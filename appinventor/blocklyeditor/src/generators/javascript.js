// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

'use strict';

goog.provide('Blockly.JavaScript');

goog.require('Blockly.Generator');

Blockly.JavaScript = new Blockly.Generator('JavaScript');

Blockly.JavaScript.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.JavaScript.ORDER_NONE = 99;          // (...)

/**
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Yail code created for this block.
 * @param {boolean} thisOnly if true, only return code for this block and not any following
 *   statements note that calls of scrub_ with no 3rd parameter are equivalent to thisOnly=false,
 *   which was the behavior before this parameter was added.
 * @return {string} Yail code with comments and subsequent blocks added.
 * @private
 */
Blockly.JavaScript.scrub_ = function(block, code, thisOnly) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  /* TODO: fix for Yail comments?
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Generator.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].targetBlock();
        if (childBlock) {
          var comment = Blockly.Generator.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Generator.prefixLines(comment, '// ');
          }
        }
      }
    }
  }*/
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = thisOnly ? "" : this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
