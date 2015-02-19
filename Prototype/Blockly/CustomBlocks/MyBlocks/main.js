Blockly.Blocks['roblockwar_main'] = {
  init: function() {
    this.setColour(225);
    this.appendDummyInput()
        .appendField("Robot Code");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_state"]);
    this.setTooltip('All the Code for your custom Robot');
    this.setDeletable(false);
    this.setMovable(false);
  }
};

Blockly.JavaScript['roblockwar_main'] = function(block) {
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'var state_stack = []; while(!state_stack.empty()) { var cur_state = state_stack.pop(); switch(cur_state) { ' + statements_commands + ' } } ';
  return code;
};
