Blockly.Blocks['roblockwar_gosub'] = {
  init: function() {
    this.setColour(285);
    this.appendDummyInput()
        .appendField("SubCall:")
        .appendField(new Blockly.FieldTextInput(""), "StateName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_comment",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setNextStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister",  "roblockwar_comment", "roblockwar_shoot",
                                 "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setTooltip('Go to SubCall and then return here');
  }
};

Blockly.JavaScript['roblockwar_gosub'] = function(block) {
  var text_statename = block.getFieldValue('StateName');
  
  var code = '{ state_stack.push(\'rtn_sub_' + block.id + '_\'); state_stack.push(\'' + text_statename + '\'); break; } case \'rtn_sub_' + block.id + '_\': ';
  return code;
};