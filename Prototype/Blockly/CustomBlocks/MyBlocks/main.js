Blockly.Blocks['roblockwar_main'] = {
  init: function() {
    this.setColour(225);
    this.appendDummyInput()
        .appendField("Robot Code");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_gosub",
                   "roblockwar_fire",
                   "roblockwar_gosub",
                   "roblockwar_goto",
                   "roblockwar_if",
                   "roblockwar_setRegister"]);
    this.setTooltip('All the Code for your custom Robot');
    this.setDeletable(false);
    this.setMovable(false);
  }
};

Blockly.JavaScript['roblockwar_main'] = function(block) {
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'var state_stack = [];\n'
           + 'state_stack.push(\'__start__\');\n'
           + 'while(!state_stack.empty()) {\n'
           + Blockly.JavaScript.INDENT + 'var cur_state = state_stack.pop();\n'
           + Blockly.JavaScript.INDENT + 'switch(cur_state) {\n'
           + Blockly.JavaScript.INDENT + Blockly.JavaScript.INDENT + 'case \'__start__\':\n' 
           + Blockly.JavaScript.INDENT + Blockly.JavaScript.INDENT + statements_commands 
           + Blockly.JavaScript.INDENT + ' }\n'
           + ' } ';
  return code;
};
