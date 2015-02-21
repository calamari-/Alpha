Blockly.Blocks['roblockwar_setRegister'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("RegisterValue")
        .setCheck("Number")
        .appendField("Set ")
        .appendField(new Blockly.FieldDropdown([["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["AIM", "AIM"],
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
                                                ["Z", "Z"]]), "RegisterName")
        .appendField(" to ");
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
    this.setTooltip('Save Value to Register');
  }
};

Blockly.JavaScript['roblockwar_setRegister'] = function(block) {
  var value_registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + dropdown_registername + '\', ' + value_registervalue + '); ';
  
  return code;
};
