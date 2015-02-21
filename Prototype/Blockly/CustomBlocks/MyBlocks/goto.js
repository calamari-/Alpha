Blockly.Blocks['roblockwar_goto'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Go to:")
        .appendField(new Blockly.FieldTextInput(""), "LabelName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_gosub",
                                     "roblockwar_fire",
                                     "roblockwar_if",
                                     "roblockwar_label",
                                     "roblockwar_setRegister"]);
    this.setNextStatement(true, ["roblockwar_gosub",
                                 "roblockwar_fire",
                                 "roblockwar_if",
                                 "roblockwar_label",
                                 "roblockwar_setRegister"]);
    this.setTooltip('Jump to State');
  }
};

Blockly.JavaScript['roblockwar_goto'] = function(block) {
  var text_labelname = block.getFieldValue('LabelName');
  
  var code = 'state_stack.push(\'' + text_labelname + '\'); break;';
  return code;
};