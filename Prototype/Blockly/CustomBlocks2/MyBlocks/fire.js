Blockly.Blocks['roblockwar_fire'] = {
  init: function() {
    this.setColour(359);
    this.appendValueInput("BlastDelay")
        .setCheck("Number")
        .appendField("Shoot at Distance:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_callF",
                                     "roblockwar_if",
                                     "roblockwar_return", 
                                     "roblockwar_setRegister", 
                                     "roblockwar_fire",
                                     "roblockwar_while"]);
    this.setNextStatement(true, ["roblockwar_callF",
                                 "roblockwar_if",
                                 "roblockwar_return", 
                                 "roblockwar_setRegister", 
                                 "roblockwar_fire",
                                 "roblockwar_while"]);
    this.setTooltip('Fire your Cannon at the target distance');
  }
};

Blockly.JavaScript['roblockwar_fire'] = function(block) {
  var value_blastdelay = Blockly.JavaScript.valueToCode(block, 'BlastDelay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fireAtDistance(' + value_blastdelay + ');';
  return code;
};