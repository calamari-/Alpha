Blockly.Blocks['roblockwar_state'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("State Name:")
        .appendField(new Blockly.FieldTextInput(""), "StateName");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar_if_condition", "roblockwar_setRegister", "roblockwar_shoot", "roblockwar_comment",
                   "roblockwar_goto", "roblockwar_gosub", "roblockwar_endsub"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_state",  "roblockwar_comment"]);
    this.setNextStatement(true, ["roblockwar_state",  "roblockwar_comment"]);
    this.setTooltip('A Collection of Commands');
  }
};

Blockly.JavaScript['roblockwar_state'] = function(block) {
  var text_statename = block.getFieldValue('StateName');
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = ' case \'' + text_statename + '\': ' + statements_commands;
  return code;
};