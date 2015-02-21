Blockly.Blocks['roblockwar_getRegister'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["X", "X"],
                                                ["Y", "Y"],
                                                ["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["DAMAGE", "DAMAGE"],
                                                ["AIM", "AIM"],
                                                ["COOLDOWN", "COOLDOWN"],
                                                ["DISTANCE", "DISTANCE"],
                                                ["DATA", "DATA"],
                                                ["INDEX", "INDEX"],
                                                ["RANDOM", "RANDOM"],
                                                ["A", "A"],
                                                ["B", "B"],
                                                ["C", "C"],
                                                ["D", "D"],
                                                ["E", "E"],
                                                ["F", "F"],
                                                ["G", "G"],
                                                ["H", "H"],
                                                ["I", "I"],
                                                ["J", "J"],
                                                ["K", "K"],
                                                ["L", "L"],
                                                ["M", "M"],
                                                ["N", "N"],
                                                ["O", "O"],
                                                ["P", "P"],
                                                ["Q", "Q"],
                                                ["R", "R"],
                                                ["S", "S"],
                                                ["T", "T"],
                                                ["U", "U"],
                                                ["V", "V"],
                                                ["W", "W"],
                                                ["Z", "Z"]]), "RegisterName");
    this.setOutput(true, "Number");
    this.setTooltip('Get Value from Register');
  }
};

Blockly.JavaScript['roblockwar_getRegister'] = function(block) {
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.getR(\'' + dropdown_registername + '\') ';
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
