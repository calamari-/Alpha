var RoBlockWar = RoBlockWar || {};

function RoBlockWar_Robot(processId, robotName, userCode){
  this.processId = processId;
  this.RobotPlayer = null;
  this.RobotName = robotName;
  this.CodeToRun = userCode;
  this.Registers = {
    _regs: [],
    setR: function(Reg, Val){
      if(Val === undefined)
      { return; }
      
      switch (Reg) {
        case 'A':
          this._regs[24] = Val;
          break;
        case 1:
          this._regs[1] = Val;
          break;
        case 'X':
          this._regs[24] = Val;
          break;
        case 24:
          this._regs[24] = Val;
          break;
        case 'Y':
          this._regs[25] = Val;
          break;
        case 25:
          this._regs[25] = Val;
          break;
        case 'SPEEDX':
          this._regs[31] = Val;
          break;
        case 31:
          this._regs[31] = Val;
          break;
        case 'SPEEDY':
          this._regs[32] = Val;
          break;
        case 32:
          this._regs[32] = Val;
          break;
      }
    },
    getR: function(Reg){
      var val = null;
      switch (Reg) {
        case 'A':
          val = this._regs[1];
          break;
        case 1:
          val = this._regs[1];
          break;
        case 'X':
          val = this._regs[24];
          break;
        case 24:
          val = this._regs[24];
          break;
        case 'Y':
          val = this._regs[25];
          break;
        case 25:
          val = this._regs[25];
          break;
        case 'SPEEDX':
          val = this._regs[31];
          break;
        case 31:
          val = this._regs[31];
          break;
        case 'SPEEDY':
          val = this._regs[32];
          break;
        case 32:
          val = this._regs[32];
          break;
      }
      return val;
    }
  };
  for(var i = 0; i <= 34; i++){
    this.Registers.setR(i, 0);
  }
}

RoBlockWar_Robot.prototype.init = function(View){
    this.RobotPlayer = View;
};

RoBlockWar_Robot.prototype.update = function(){
  
  // Update location phaser -> model
  // console.log('this.RobotPlayer.body.x {' + this.RobotPlayer.body.x + '}');
  /*if(this.getRegister('X') != this.RobotPlayer.body.x ||
     this.getRegister('Y') != this.RobotPlayer.body.y)
  { console.log('player at (' + this.RobotPlayer.body.x + ', ' + this.RobotPlayer.body.y + ')'); }
  */
  this.Registers.setR('X', this.RobotPlayer.body.x);
  this.Registers.setR('Y', this.RobotPlayer.body.y);
  
  // update velocity model -> phase
  var newSpeedX = this.Registers.getR('SPEEDX') || 0;
  var newSpeedY = this.Registers.getR('SPEEDY') || 0;
  if(newSpeedX != this.RobotPlayer.body.velocity.x ||
     newSpeedY != this.RobotPlayer.body.velocity.y)
  { console.log('player movement (' + newSpeedX + ', ' + newSpeedY + ')'); }
  this.RobotPlayer.body.velocity.x = newSpeedX;
  this.RobotPlayer.body.velocity.y = newSpeedY;
  
  if(this.RobotPlayer.body.velocity.y < 0) {
    this.RobotPlayer.animations.play('up');
  }
  else if(this.RobotPlayer.body.velocity.y > 0) {
    this.RobotPlayer.animations.play('down');
  }
  if(this.RobotPlayer.body.velocity.x < 0) {
    this.RobotPlayer.animations.play('left');
  }
  else if(this.RobotPlayer.body.velocity.x > 0) {
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
    
    interpreter.setProperty(scope, 'Registers', helper.nativeValueToInterpreter(robot.Registers));
    interpreter.setProperty(scope, 'console', helper.nativeValueToInterpreter(window.console));
    
    
    var wrap_sleep = function(time) {
      return interpreter.createPrimitive(robot.sleepFor(time));
    };
    interpreter.setProperty(scope, 'sleepFor', interpreter.createNativeFunction(wrap_sleep));
    
    /*
    var wrap_getReg = function(Reg) {
      return interpreter.createPrimitive(RoBlockWar_GetRegister(Reg));
    };
    interpreter.setProperty(scope, 'getRegister', interpreter.createNativeFunction(wrap_getReg));
    
    var wrap_setReg = function(Reg, Val) {
      return interpreter.createPrimitive(RoBlockWar_SetRegister(Reg, Val));
    };
    interpreter.setProperty(scope, 'setRegister', interpreter.createNativeFunction(wrap_setReg));
    */
    
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