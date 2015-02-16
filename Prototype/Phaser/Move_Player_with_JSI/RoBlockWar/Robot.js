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
  this.Registers.setR('X', this.RobotPlayer.body.x);
  this.Registers.setR('Y', this.RobotPlayer.body.y);
  
  // update velocity model -> phase
  var newSpeedX = this.Registers.getR('SPEEDX') || 0;
  var newSpeedY = this.Registers.getR('SPEEDY') || 0;
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
  };
};