Blockly.Blocks['roblockwar_fire'] = {
  init: function() {
    this.setColour(315);
    this.appendValueInput("BlastDelay")
        .setCheck("Number")
        .appendField("Shoot at Distance:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_gosub",
                                     "roblockwar_fire",
                                     "roblockwar_if",
                                     "roblockwar_label",
                                     "roblockwar_setRegister"]);
    this.setNextStatement(true, ["roblockwar_endsub",
                                 "roblockwar_fire",
                                 "roblockwar_gosub",
                                 "roblockwar_goto",
                                 "roblockwar_if",
                                 "roblockwar_label",
                                 "roblockwar_setRegister"]);
    this.setTooltip('');
  }
};

Blockly.JavaScript['roblockwar_fire'] = function(block) {
  var value_blastdelay = Blockly.JavaScript.valueToCode(block, 'BlastDelay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'shootAtDistance(' + value_blastdelay + ');';
  return code;
};