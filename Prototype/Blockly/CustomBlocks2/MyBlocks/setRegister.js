Blockly.Blocks['roblockwar_setRegister'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("RegisterValue")
        .setCheck("Number")
        .appendField("set ")
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
    this.setPreviousStatement(true, ["roblockwar_callF",
                                     "roblockwar_comment",
                                     "roblockwar_if",
                                     "roblockwar_return", 
                                     "roblockwar_setRegister", 
                                     "roblockwar_fire",
                                     "roblockwar_while"]);
    this.setNextStatement(true, ["roblockwar_callF",
                                 "roblockwar_comment",
                                 "roblockwar_if",
                                 "roblockwar_return", 
                                 "roblockwar_setRegister", 
                                 "roblockwar_fire",
                                 "roblockwar_while"]);
    this.setTooltip('Save Value to Register');
  }
};

Blockly.JavaScript['roblockwar_setRegister'] = function(block) {
  var value_registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + dropdown_registername + '\', ' + value_registervalue + '); ';
  
  return code;
};
