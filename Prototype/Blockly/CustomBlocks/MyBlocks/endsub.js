Blockly.Blocks['roblockwar_endsub'] = {
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField("EndSub");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_comment",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setTooltip('End a SubCall');
  }
};

Blockly.JavaScript['roblockwar_endsub'] = function(block) {
  var code = 'break;';
  return code;
};