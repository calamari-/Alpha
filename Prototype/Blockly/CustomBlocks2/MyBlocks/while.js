Blockly.Blocks['roblockwar_while'] = {
  init: function() {
    this.setColour(120);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("while");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_callF",
                   "roblockwar_comment",
                   "roblockwar_if",
                   "roblockwar_return", 
                   "roblockwar_setRegister", 
                   "roblockwar_fire",
                   "roblockwar_while"])
        .appendField("do");
    this.setPreviousStatement(true, ["roblockwar_callF",
                                     "roblockwar_comment",
                                     "roblockwar_if", 
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
    this.setTooltip('repeat these instructions while condition is true');
  }
};

Blockly.JavaScript['roblockwar_while'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'while(' + value_condition + ') { ' + statements_commands  + '} ';
  return code;
};