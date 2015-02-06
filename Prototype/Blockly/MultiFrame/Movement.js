  Blockly.Blocks['roblockwar_movement'] = {
    init: function() {
      this.setHelpUrl('http://www.example.com/');
      this.setColour(65);
      this.appendValueInput("Movement")
          .setCheck("Number")
          .appendField("Move")
          .appendField(new Blockly.FieldDropdown([["Up", "UP"], ["Down", "Down"], ["Left", "LEFT"], ["Right", "RIGHT"]]), "Directions")
          .appendField(" pixels");
      this.setPreviousStatement(true, "null");
      this.setNextStatement(true, "null");
      this.setTooltip('');
    }
  };
  Blockly.JavaScript['roblockwar_movement'] = function(block) {
    var value_movement = Blockly.JavaScript.valueToCode(block, 'Movement', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_movement == null || value_movement == '')
    { value_movement = 0; }
    var dropdown_directions = block.getFieldValue('Directions');
    var code = 'this.Move(\'' + dropdown_directions + '\', (' + value_movement + ') );';
    return code;
  };