Blockly.Blocks['roblockwar_goto'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Go to:")
        .appendField(new Blockly.FieldTextInput(""), "StateName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setTooltip('Jump to State');
  }
};

Blockly.JavaScript['roblockwar_goto'] = function(block) {
  var text_statename = block.getFieldValue('StateName');
  
  var code = 'state_stack.push(\'' + text_statename + '\'); break;';
  return code;
};