Blockly.Blocks['roblockwar_callF'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("instructions ")
        .appendField(new Blockly.FieldTextInput("Instruction Group"), "functionName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_callF",
                                     "roblockwar_if",
                                     "roblockwar_setRegister", 
                                     "roblockwar_fire",
                                     "roblockwar_while"]);
    this.setNextStatement(true, ["roblockwar_callF",
                                 "roblockwar_if",
                                 "roblockwar_return", 
                                 "roblockwar_setRegister", 
                                 "roblockwar_fire",
                                 "roblockwar_while"]);
    this.setTooltip('do a group of instructions');
  }
};

Blockly.JavaScript['roblockwar_callF'] = function(block) {
  var text_functionname = block.getFieldValue('functionName');
  
  var code = text_functionname + '();'; // HUGELY insecure
  return code;
};