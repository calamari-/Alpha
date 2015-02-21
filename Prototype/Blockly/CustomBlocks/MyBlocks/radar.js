Blockly.Blocks['roblockwar_radar'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Radar Distance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Check your Radar');
  }
};

Blockly.JavaScript['roblockwar_radar'] = function(block) {
  var code = 'sendRadarPulse()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};