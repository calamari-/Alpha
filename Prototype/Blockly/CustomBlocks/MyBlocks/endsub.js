Blockly.Blocks['roblockwar_endsub'] = {
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField("EndSub");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_fire",
                                     "roblockwar_gosub",
                                     "roblockwar_goto",
                                     "roblockwar_if",
                                     "roblockwar_label",
                                     "roblockwar_setRegister"]);
    this.setTooltip('End a SubCall');
  }
};

Blockly.JavaScript['roblockwar_endsub'] = function(block) {
  var code = 'break;';
  return code;
};