Blockly.Blocks['roblockwar_setRegister'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("RegisterValue")
        .setCheck("Number")
        .appendField("Set Register:")
        .appendField(new Blockly.FieldDropdown([["X", "X"],
                                                ["Y", "Y"],
                                                ["SPEEDX", "SPEEDX"],
                                                ["SPEEDY","SPEEDY"],
                                                ["DAMAGE", "DAMAGE"]]), "RegisterName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setNextStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_shoot",
                                 "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setTooltip('Save Value to Register');
  }
};

Blockly.JavaScript['roblockwar_setRegister'] = function(block) {
  var value_registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + dropdown_registername + '\', ' + value_registervalue + '); ';
  
  return code;
};
