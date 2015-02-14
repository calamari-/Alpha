var RoBlockWar = RoBlockWar || {};

function RoBlockWar_Robot(processId, robotName, userCode){
  this.processId = processId;
  this.RobotPlayer = null;
  this.RobotName = robotName;
  this.CodeToRun = userCode;
  this.Registers = [];
  for(var i = 0; i <= 34; i++){
    this.Registers[i] = 0;
  }
}

RoBlockWar_Robot.prototype.init = function(View){
    this.RobotPlayer = View;
};

RoBlockWar_Robot.prototype.update = function(){
  
  // Update location phaser -> model
  if(this.getRegister('X') != this.RobotPlayer.body.x ||
     this.getRegister('Y') != this.RobotPlayer.body.y)
  { console.log('player at (' + this.RobotPlayer.body.x + ', ' + this.RobotPlayer.body.y + ')'); }
  this.setRegister('X', this.RobotPlayer.body.x);
  this.setRegister('Y', this.RobotPlayer.body.y);
  
  // update velocity model -> phase
  var newSpeedX = this.getRegister('SPEEDX') || 0;
  var newSpeedY = this.getRegister('SPEEDY') || 0;
  if(newSpeedX != this.RobotPlayer.body.velocity.x ||
     newSpeedY != this.RobotPlayer.body.velocity.y)
  { console.log('player movement (' + newSpeedX + ', ' + newSpeedY + ')'); }
  this.RobotPlayer.body.velocity.x = newSpeedX;
  this.RobotPlayer.body.velocity.y = newSpeedY;
  
  if(this.RobotPlayer.body.velocity.y > 0) {
    this.RobotPlayer.animations.play('up');
  }
  else if(this.RobotPlayer.body.velocity.y < 0) {
    this.RobotPlayer.animations.play('down');
  }
  if(this.RobotPlayer.body.velocity.x > 0) {
    this.RobotPlayer.animations.play('left');
  }
  else if(this.RobotPlayer.body.velocity.x < 0) {
    this.RobotPlayer.animations.play('right');
  }
  
  if(this.RobotPlayer.body.velocity.y == 0 ||
     this.RobotPlayer.body.velocity.x == 0)
  {
    //  Stand still
    this.RobotPlayer.animations.stop();
    this.RobotPlayer.frame = 4;
  }
};

RoBlockWar_Robot.prototype.createInterpreterInitializer = function() {
  var robot = this;
  return function (interpreter, scope, helper) {
    
    // interpreter.setProperty(scope, 'Registers', interpreter.createPrimitive(robot.Registers));
    // interpreter.setProperty(scope, 'RegisterNameMapping', interpreter.createPrimitive(robot.RegisterNameMapping));
    interpreter.setProperty(scope, 'console', helper.nativeValueToInterpreter(window.console));
    
    var wrap_sleep = function(time) {
      return interpreter.createPrimitive(robot.sleepFor(time));
    };
    interpreter.setProperty(scope, 'sleepFor', interpreter.createNativeFunction(wrap_sleep));
    
    var wrap_getReg = function(Reg) {
      return interpreter.createPrimitive(robot.getRegister(Reg));
    };
    interpreter.setProperty(scope, 'getRegister', interpreter.createNativeFunction(wrap_getReg));
    
    var wrap_setReg = function(Reg, Val) {
      return interpreter.createPrimitive(robot.setRegister(Reg, Val));
    };
    interpreter.setProperty(scope, 'setRegister', interpreter.createNativeFunction(wrap_setReg));
    
    var wrap_alert = function(text) {
      text = text ? text.toString() : '';
      return interpreter.createPrimitive(alert(text));
    };
    interpreter.setProperty(scope, 'alert', interpreter.createNativeFunction(wrap_alert));
  };
};

RoBlockWar_Robot.prototype.sleepFor = function( sleepDuration ){
  var now = new Date().getTime();
  while(new Date().getTime() < (now + sleepDuration)){ /* do nothing */ } 
};

RoBlockWar_Robot.prototype.setRegister = function(Reg, val){
  //console.log('Setting {' + Reg + '} to {' + val + '}');
  switch (Reg) {
    case 'A':
    case 1:
      this.Registers[1] = val;
      break;
    case 'X':
    case 24:
      this.Registers[24] = val;
      break;
    case 'Y':
    case 25:
      this.Registers[25] = val;
      break;
    case 'SPEEDX':
    case 31:
      this.Registers[31] = val;
      break;
    case 'SPEEDY':
    case 32:
      this.Registers[32] = val;
      break;
  }
};

RoBlockWar_Robot.prototype.getRegister = function(Reg){
  var val = null;
  switch (Reg) {
    case 'A':
    case 1:
      val = this.Registers[1];
      break;
    case 'X':
    case 24:
      val = this.Registers[24];
      break;
    case 'Y':
    case 25:
      val = this.Registers[25];
      break;
    case 'SPEEDX':
    case 31:
      val = this.Registers[31];
      return;
    case 'SPEEDY':
    case 32:
      val = this.Registers[32];
      break;
  }
  // console.log('getting {' + Reg + '} currently {' + val + '}');
  return val;
};

function RoBlockWar_Robot_sampleCode() 
{
  setRegister('SPEEDX', 0);
  setRegister('SPEEDY', 0);
  var times = 10000;
  while(times > 0) {
    times = times - 1;
    while(getRegister('X') < 450) {
      console.log('Trying to Move Right');
      setRegister('SPEEDX', 350);
    }
    setRegister('SPEEDX', 0);
    while(getRegister('Y') < 450) {
      console.log('Trying to Move Down');
      setRegister('SPEEDY', 350);
    }
    setRegister('SPEEDY', 0);
    while(getRegister('X') > 50) {
      console.log('Trying to Move Left');
      setRegister('SPEEDX', -350);
    }
    setRegister('SPEEDX', 0);
    while(getRegister('Y') > 50) {
      console.log('Trying to Move Up');
      setRegister('SPEEDY', -350);
    }
    setRegister('SPEEDY', 0);
  }
}