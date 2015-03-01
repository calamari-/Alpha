
/*************************************
 * Modify Blockly's Procedures Blocks
**************************************/
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'Define Instruction Group';
var old_defNoReturn_init = Blockly.Blocks.procedures_defnoreturn.init; 
Blockly.Blocks.procedures_defnoreturn.init = function(){
  old_defNoReturn_init.call(this);
  this.setMutator(undefined);
};

Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = '';
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'all done';
Blockly.Blocks.procedures_defreturn = undefined;


Blockly.Blocks.logic.HUE = Blockly.Blocks.loops.HUE;

/*************************************
 * Modify Blockly's While Block
  * TODO: see if we really need to remove 'Until' option
var old_controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init; 
Blockly.Blocks.controls_whileUntil.init = function(){
  old_controls_whileUntil_init.call(this);  
  this.setMutator(undefined);
  this.getInput('BOOL').removeField('MODE');
  this.getInput('BOOL')
      .appendField("while", 'MODE');
};
**************************************/

/*************************************
 * Modify Blockly's if Block
**************************************/
var old_controls_if_init = Blockly.Blocks.controls_if.init; 
Blockly.Blocks.controls_if.init = function(){
  old_controls_if_init.call(this);  
  this.setMutator(undefined);
};

/*************************************
 * Radar Block
**************************************/

Blockly.Blocks['roblockwar_radar'] = {
  init: function() {
    this.setColour(359);
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

/*************************************
 * Fire/shoot Block
**************************************/

Blockly.Blocks['roblockwar_fire'] = {
  init: function() {
    this.setColour(359);
    this.appendValueInput("BlastDelay")
        .setCheck("Number")
        .appendField("Fire at Distance:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Fire your Cannon at the target distance');
  }
};

Blockly.JavaScript['roblockwar_fire'] = function(block) {
  var value_blastdelay = Blockly.JavaScript.valueToCode(block, 'BlastDelay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fireAtDistance(' + value_blastdelay + ', asyncWait);';
  return code;
};

/*************************************
 * Get Register Block
**************************************/

Blockly.Blocks['roblockwar_getRegister'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["X", "X"],
                                                ["Y", "Y"],
                                                ["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["DAMAGE", "DAMAGE"],
                                                ["AIM", "AIM"],
                                                ["COOLDOWN", "COOLDOWN"],
                                                ["DISTANCE", "DISTANCE"],
                                                ["DATA", "DATA"],
                                                ["INDEX", "INDEX"],
                                                ["RANDOM", "RANDOM"],
                                                ["A", "A"],
                                                ["B", "B"],
                                                ["C", "C"],
                                                ["D", "D"],
                                                ["E", "E"],
                                                ["F", "F"],
                                                ["G", "G"],
                                                ["H", "H"],
                                                ["I", "I"],
                                                ["J", "J"],
                                                ["K", "K"],
                                                ["L", "L"],
                                                ["M", "M"],
                                                ["N", "N"],
                                                ["O", "O"],
                                                ["P", "P"],
                                                ["Q", "Q"],
                                                ["R", "R"],
                                                ["S", "S"],
                                                ["T", "T"],
                                                ["U", "U"],
                                                ["V", "V"],
                                                ["W", "W"],
                                                ["Z", "Z"]]), "RegisterName");
    this.setOutput(true, "Number");
    this.setTooltip('Get Value from Register');
  }
};

Blockly.JavaScript['roblockwar_getRegister'] = function(block) {
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = 'Registers.getR(\'' + dropdown_registername + '\')';
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*************************************
 * Get Register Block
**************************************/

Blockly.Blocks['roblockwar_setRegister'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("RegisterValue")
        .setCheck("Number")
        .appendField("set ")
        .appendField(new Blockly.FieldDropdown([["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["AIM", "AIM"],
                                                ["INDEX", "INDEX"],
                                                ["RANDOM", "RANDOM"],
                                                ["A", "A"],
                                                ["B", "B"],
                                                ["C", "C"],
                                                ["D", "D"],
                                                ["E", "E"],
                                                ["F", "F"],
                                                ["G", "G"],
                                                ["H", "H"],
                                                ["I", "I"],
                                                ["J", "J"],
                                                ["K", "K"],
                                                ["L", "L"],
                                                ["M", "M"],
                                                ["N", "N"],
                                                ["O", "O"],
                                                ["P", "P"],
                                                ["Q", "Q"],
                                                ["R", "R"],
                                                ["S", "S"],
                                                ["T", "T"],
                                                ["U", "U"],
                                                ["V", "V"],
                                                ["W", "W"],
                                                ["Z", "Z"]]), "RegisterName")
        .appendField(" to ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Save Value to Register');
  }
};

Blockly.JavaScript['roblockwar_setRegister'] = function(block) {
  var value_registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + dropdown_registername + '\', ' + value_registervalue + '); ';
  
  return code;
};

/*************************************
 * Wait Block
**************************************/

Blockly.Blocks['roblockwar_wait'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("sleepTime")
        .setCheck("Number")
        .appendField("Wait for seconds: ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Wait for this Seconds');
  }
};

Blockly.JavaScript['roblockwar_wait'] = function(block) {
  var value_sleeptime = Blockly.JavaScript.valueToCode(block, 'sleepTime', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'waitFor(' + value_sleeptime + ', asyncWait);';
  return code;
};
