Blockly.Blocks['roblockwar_return'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("all done");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_callF",
                                     "roblockwar_comment",
                                     "roblockwar_if",
                                     "roblockwar_return", 
                                     "roblockwar_setRegister", 
                                     "roblockwar_fire",
                                     "roblockwar_while"]);
    this.setTooltip('Exit a Group of Instructions');
  }
};

Blockly.JavaScript['roblockwar_return'] = function(block) {
  var code = 'return;';
  return code;
};