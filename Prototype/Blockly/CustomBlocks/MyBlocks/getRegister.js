Blockly.Blocks['roblockwar_getRegister'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Get Register:")
        .appendField(new Blockly.FieldDropdown([["X", "X"],
                                                ["Y", "Y"],
                                                ["SPEEDX", "SPEEDX"],
                                                ["SPEEDY","SPEEDY"],
                                                ["DAMAGE", "DAMAGE"]]), "RegisterName");
    this.setOutput(true, "Number");
    this.setTooltip('Get Value from Register');
  }
};

Blockly.JavaScript['roblockwar_getRegister'] = function(block) {
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.getR(\'' + dropdown_registername + '\') ';
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
