
/*************************************
 * Modify Blockly's Procedures Blocks
**************************************/
var old_defNoReturn_init = Blockly.Blocks.procedures_defnoreturn.init; 
Blockly.Blocks.procedures_defnoreturn.init = function(){
  old_defNoReturn_init.call(this);  
  var newMutator = new Blockly.Mutator();
  /*newMutator.createIcon = function(){
    this.iconGroup_ = [];
    return;
  }*/
  this.setMutator(newMutator);
  this.mutator = null;
};

Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = '';
var old_callNoReturn_init = Blockly.Blocks.procedures_callnoreturn.init; 
Blockly.Blocks.procedures_callnoreturn.init = function(){
  old_callNoReturn_init.call(this);  
  var newMutator = new Blockly.Mutator();
  newMutator.isVisible = function(){
    return false;
  }
  this.setMutator(newMutator);
  this.mutator = null;
};

var old_callNoReturn_domToMutation = Blockly.Blocks.procedures_callnoreturn.domToMutation;
Blockly.Blocks.procedures_callnoreturn.domToMutation = function(xmlElement){
  var name = xmlElement.getAttribute('name');
    this.setFieldValue(name, 'NAME');
    this.setTooltip(
        (this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP :
         Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace('%1', name));
};

Blockly.Blocks.procedures_defreturn = undefined;

/*

  this.mutator.isVisible = function(){
    return false;
  }
var olddefNoReturn = Blockly.Blocks.controls_whileUntil.init; 
Blockly.Blocks.procedures_defnoreturn.init = function(){
  old.call(this);  
  this.setMutator(undefined);
};
*/

/*************************************
 * Modify Blockly's While Block
**************************************/

Blockly.Blocks['roblockwar.while'] = {
  init: function() {
    this.setColour(120);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("while");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar.callF",
                   "roblockwar.comment",
                   "roblockwar.if",
                   "roblockwar.return", 
                   "roblockwar.setRegister", 
                   "roblockwar.fire",
                   "roblockwar.while"])
        .appendField("do");
    this.setPreviousStatement(true, ["roblockwar.callF",
                                     "roblockwar.comment",
                                     "roblockwar.if", 
                                     "roblockwar.setRegister", 
                                     "roblockwar.fire",
                                     "roblockwar.while"]);
    this.setNextStatement(true, ["roblockwar.callF",
                                 "roblockwar.comment",
                                 "roblockwar.if",
                                 "roblockwar.return", 
                                 "roblockwar.setRegister", 
                                 "roblockwar.fire",
                                 "roblockwar.while"]);
    this.setTooltip('repeat these instructions while condition is true');
  }
};

Blockly.JavaScript['roblockwar.while'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'while(' + value_condition + ') { ' + statements_commands  + '} ';
  return code;
};

/*************************************
 * Radar Block
**************************************/

Blockly.Blocks['roblockwar.if'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("commands")
        .setCheck(["roblockwar.callF",
                   "roblockwar.if",
                   "roblockwar.return", 
                   "roblockwar.setRegister", 
                   "roblockwar.fire",
                   "roblockwar.while"])
        .appendField("do ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["roblockwar.callF",
                                     "roblockwar.if", 
                                     "roblockwar.setRegister", 
                                     "roblockwar.fire",
                                     "roblockwar.while"]);
    this.setNextStatement(true, ["roblockwar.callF",
                                 "roblockwar.if",
                                 "roblockwar.return", 
                                 "roblockwar.setRegister", 
                                 "roblockwar.fire",
                                 "roblockwar.while"]);
    this.setTooltip('do these instructions if condition is true');
  }
};

Blockly.JavaScript['roblockwar.if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  
  var code = 'if(' + value_condition + '){ ' + statements_commands + ' } ';
  return code;
};


/*************************************
 * Radar Block
**************************************/

Blockly.Blocks['roblockwar.radar'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Radar Distance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Check your Radar');
  }
};

Blockly.JavaScript['roblockwar.radar'] = function(block) {
  var code = 'sendRadarPulse()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*************************************
 * Fire/shoot Block
**************************************/

Blockly.Blocks['roblockwar.fire'] = {
  init: function() {
    this.setColour(359);
    this.appendValueInput("BlastDelay")
        .setCheck("Number")
        .appendField("Fire at Distance:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar.callF",
                                     "roblockwar.if",
                                     "roblockwar.return", 
                                     "roblockwar.setRegister", 
                                     "roblockwar.fire",
                                     "roblockwar.while"]);
    this.setNextStatement(true, ["roblockwar.callF",
                                 "roblockwar.if",
                                 "roblockwar.return", 
                                 "roblockwar.setRegister", 
                                 "roblockwar.fire",
                                 "roblockwar.while"]);
    this.setTooltip('Fire your Cannon at the target distance');
  }
};

Blockly.JavaScript['roblockwar.fire'] = function(block) {
  var value_blastdelay = Blockly.JavaScript.valueToCode(block, 'BlastDelay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fireAtDistance(' + value_blastdelay + ');';
  return code;
};

/*************************************
 * Get Register Block
**************************************/

Blockly.Blocks['roblockwar.getRegister'] = {
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

Blockly.JavaScript['roblockwar.getRegister'] = function(block) {
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = 'Registers.getR(\'' + dropdown_registername + '\')';
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*************************************
 * Get Register Block
**************************************/

Blockly.Blocks['roblockwar.setRegister'] = {
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
    this.setPreviousStatement(true, ["roblockwar.callF",
                                     "roblockwar.comment",
                                     "roblockwar.if",
                                     "roblockwar.return", 
                                     "roblockwar.setRegister", 
                                     "roblockwar.fire",
                                     "roblockwar.while"]);
    this.setNextStatement(true, ["roblockwar.callF",
                                 "roblockwar.comment",
                                 "roblockwar.if",
                                 "roblockwar.return", 
                                 "roblockwar.setRegister", 
                                 "roblockwar.fire",
                                 "roblockwar.while"]);
    this.setTooltip('Save Value to Register');
  }
};

Blockly.JavaScript['roblockwar.setRegister'] = function(block) {
  var value_registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + dropdown_registername + '\', ' + value_registervalue + '); ';
  
  return code;
};
