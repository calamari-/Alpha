Blockly.Blocks['roblockwar_shoot'] = {
  init: function() {
    this.setColour(315);
    this.appendValueInput("BlastDelay")
        .setCheck("Number")
        .appendField("Shoot with Delay:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_comment",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setNextStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_shoot", "roblockwar_comment",
                                 "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setTooltip('');
  }
};

Blockly.JavaScript['roblockwar_shoot'] = function(block) {
  var value_blastdelay = Blockly.JavaScript.valueToCode(block, 'BlastDelay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'shootAtDistance(' + value_blastdelay + ');';
  return code;
};