Blockly.Blocks['roblockwar_label'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Label:")
        .appendField(new Blockly.FieldTextInput(""), "LabelName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_endsub",
                                     "roblockwar_gosub",
                                     "roblockwar_goto",
                                     "roblockwar_if",
                                     "roblockwar_setRegister",
                                     "roblockwar_shoot"]);
    this.setNextStatement(true, ["roblockwar_endsub",
                                 "roblockwar_gosub",
                                 "roblockwar_goto",
                                 "roblockwar_if",
                                 "roblockwar_setRegister",
                                 "roblockwar_shoot"]);
    this.setTooltip('A Collection of Commands');
  }
};

Blockly.JavaScript['roblockwar_label'] = function(block) {
  var text_labelname = block.getFieldValue('LabelName');

  var code = ' case \'' + text_labelname + '\': ';
  return code;
};