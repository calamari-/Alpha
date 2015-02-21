Blockly.Blocks['roblockwar_if'] = {
  init: function() {
    this.setColour(60);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_gosub",
                   "roblockwar_fire",
                   "roblockwar_gosub",
                   "roblockwar_goto",
                   "roblockwar_if",
                   "roblockwar_setRegister"])
        .appendField("do ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["roblockwar_fire",
                                     "roblockwar_gosub",
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
    this.setTooltip('Simplified if Statement');
  }
};

Blockly.JavaScript['roblockwar_if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  // var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  var all_commands = block.getInputTargetBlock('commands');
  var children = all_commands.getDescendants();
  var code = '';
  if(children !== undefined && children.length > 0) {
    if(children[0].getNextBlock() !== undefined && children[0].getNextBlock() != null)
    {
        children[0].getNextBlock().dispose(false, false, true);
    }
    var first_child_code = Blockly.JavaScript.blockToCode(children[0]);
    code = 'if(' + value_condition + ')\n ' 
         + first_child_code + '  ';
  }
  return code;
};