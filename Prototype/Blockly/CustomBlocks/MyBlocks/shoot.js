Blockly.Blocks['roblockwar_shoot'] = {
  init: function() {
    this.setColour(315);
    this.appendDummyInput()
        .appendField("Shoot!");
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setNextStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_shoot",
                                 "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setTooltip('');
  }
};

Blockly.JavaScript['roblockwar_shoot'] = function(block) {
  var code = 'shootBullet();';
  return code;
};