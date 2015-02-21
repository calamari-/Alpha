Blockly.Blocks['roblockwar_if'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_callF",
                   "roblockwar_if",
                   "roblockwar_return", 
                   "roblockwar_setRegister", 
                   "roblockwar_fire",
                   "roblockwar_while"])
        .appendField("do ");
    this.setInputsInline(false);
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
    this.setTooltip('do these instructions if condition is true');
  }
};

Blockly.JavaScript['roblockwar_if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'if(' + value_condition + '){ ' + statements_commands + ' } ';
  return code;
};