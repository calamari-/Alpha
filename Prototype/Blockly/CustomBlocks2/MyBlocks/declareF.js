Blockly.Blocks['roblockwar_declareF'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Instruction Group")
        .appendField(new Blockly.FieldTextInput("name"), "functionName");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_callF",
                   "roblockwar_if",
                   "roblockwar_return", 
                   "roblockwar_setRegister", 
                   "roblockwar_fire",
                   "roblockwar_while"]);
    this.setTooltip('Create a Group of Instructions');
  }
};

Blockly.JavaScript['roblockwar_declareF'] = function(block) {
  var text_functionname = block.getFieldValue('functionName');
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = ' function ' + text_functionname + '() { ' + statements_commands + '}';
  return code;
};