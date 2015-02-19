Blockly.Blocks['roblockwar_radarPulse'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("Get Radar Pulse");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Send a Radar Pulse');
  }
};

Blockly.JavaScript['roblockwar_radarPulse'] = function(block) {
  var code = 'sendRadarPulse()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};