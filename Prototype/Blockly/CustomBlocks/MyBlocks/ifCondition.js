Blockly.Blocks['roblockwar_if_condition'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("IF");
    this.appendValueInput("left_operand")
        .setCheck("Number");
    this.appendValueInput("right_operand")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["Greater Than", ">"],
                                                ["Equals", "=="],
                                                ["Not Equal to", "!="],
                                                ["Less Than", "<"]]), "Operator");
    this.appendStatementInput("command")
        .setCheck(["roblockwar_setRegister", "roblockwar_shoot", 
                   "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub" ])
        .appendField("Then");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_comment",
                                     "roblockwar_shoot", "roblockwar_gosub"]);
    this.setNextStatement(true, ["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_shoot", "roblockwar_comment",
                                 "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setTooltip('Simplified if Statement');
  }
};

Blockly.JavaScript['roblockwar_if_condition'] = function(block) {
  var value_left_operand = Blockly.JavaScript.valueToCode(block, 'left_operand', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_operand = Blockly.JavaScript.valueToCode(block, 'right_operand', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_operator = block.getFieldValue('Operator');
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  
  var code = 'if( (' + value_left_operand + ') ' + dropdown_operator + ' (' + value_right_operand + ') ) ' + statements_command ;
  return code;
};