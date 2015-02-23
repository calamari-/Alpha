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
        if( !isNaN(Reg) && (function(x) { return (x | 0) === x; })(parseFloat(Reg)) ) {
          if(Reg > 0 && Reg < 34) {
            this._regs[Reg] = Val;
            return;
          }
        }
        switch (Reg) {
            case 0:
                if(Val < 34 && Val > 0) {
                    this._regs[0] = Val;
                }
                break;
            case 'INDEX':
                if(Val < 34 && Val > 0) {
                    this._regs[0] = Val;
                }
                break;
            case 'A':
                this._regs[1] = Val;
                break;
            case 'B':
                this._regs[2] = Val;
                break;
            case 'C':
                this._regs[3] = Val;
                break;
            case 'D':
                this._regs[4] = Val;
                break;
            case 'E':
                this._regs[5] = Val;
                break;
            case 'F':
                this._regs[6] = Val;
                break;
            case 'G':
                this._regs[7] = Val;
                break;
            case 'H':
                this._regs[8] = Val;
                break;
            case 'I':
                this._regs[9] = Val;
                break;
            case 'J':
                this._regs[10] = Val;
                break;
            case 'K':
                this._regs[11] = Val;
                break;
            case 'L':
                this._regs[12] = Val;
                break;
            case 'M':
                this._regs[13] = Val;
                break;
            case 'N':
                this._regs[14] = Val;
                break;
            case 'O':
                this._regs[15] = Val;
                break;
            case 'P':
                this._regs[16] = Val;
                break;
            case 'Q':
                this._regs[17] = Val;
                break;
            case 'R':
                this._regs[18] = Val;
                break;
            case 'S':
                this._regs[19] = Val;
                break;
            case 'T':
                this._regs[20] = Val;
                break;
            case 'U':
                this._regs[21] = Val;
                break;
            case 'V':
                this._regs[22] = Val;
                break;
            case 'W':
                this._regs[23] = Val;
                break;
            case 'X':
                this._regs[24] = Val;
                break;
            case 'Y':
                this._regs[25] = Val;
                break;
            case 'Z':
                this._regs[26] = Val;
                break;
            case 'AIM':
                this._regs[27] = Val;
                break;
            case 'COOLDOWN':
                this._regs[28] = Val;
                break;
            case 'DISTANCE':
                this._regs[29] = Val;
                break;
            case 'DAMAGE':
                this._regs[30] = Val;
                break;
            case 'SPEEDX':
                this._regs[31] = Val;
                break;
            case 'SPEEDY':
                this._regs[32] = Val;
                break;
            case 'RANDOM':
                this._regs[33] = Val;
                break;
        }
    },
    getR: function(Reg){
        var Val = null;
        if( !isNaN(Reg) && (function(x) { return (x | 0) === x; })(parseFloat(Reg)) ) {
          if(Reg > 0 && Reg < 34) {
            Val = this._regs[Reg] = Val;
          }
        }
        else
        {
          switch (Reg) {
            case 'DATA':
                Val = this._regs[this._regs[0]];
                break;
            case 'INDEX':
                Val = this._regs[0];
                break;
            case 'A':
                Val = this._regs[1];
                break;
            case 'B':
                Val = this._regs[2];
                break;
            case 'C':
                Val = this._regs[3];
                break;
            case 'D':
                Val = this._regs[4];
                break;
            case 'E':
                Val =  this._regs[5];
                break;
            case 'F':
                Val = this._regs[6];
                break;
            case 'G':
                Val = this._regs[7];
                break;
            case 'H':
                Val = this._regs[8];
                break;
            case 'I':
                Val = this._regs[9];
                break;
            case 'J':
                Val = this._regs[10];
                break;
            case 'K':
                Val = this._regs[11];
                break;
            case 'L':
                Val = this._regs[12];
                break;
            case 'M':
                Val = this._regs[13];
                break;
            case 'N':
                Val = this._regs[14];
                break;
            case 'O':
                Val = this._regs[15];
                break;
            case 'P':
                Val = this._regs[16];
                break;
            case 'Q':
                Val = this._regs[17];
                break;
            case 'R':
                Val = this._regs[18];
                break;
            case 'S':
                Val = this._regs[19];
                break;
            case 'T':
                Val = this._regs[20];
                break;
            case 'U':
                Val = this._regs[21];
                break;
            case 'V':
                Val = this._regs[22];
                break;
            case 'W':
                Val = this._regs[23];
                break;
            case 'X':
                Val = this._regs[24];
                break;
            case 'Y':
                Val = this._regs[25];
                break;
            case 'Z':
                Val = this._regs[26];
                break;
            case 'AIM':
                Val = this._regs[27];
                break;
            case 'COOLDOWN':
                Val = this._regs[28];
                break;
            case 'DISTANCE':
                Val = this._regs[29];
                break;
            case 'DAMAGE':
                Val = this._regs[30];
                break;
            case 'SPEEDX':
                Val = this._regs[31];
                break;
            case 'SPEEDY':
                Val = this._regs[32];
                break;
            case 'RANDOM':
                Val = Math.floor((Math.random() * this._regs[33]) + 1);
                break;
            }
        }
        return Val;
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
  
  if(this.RobotPlayer.body.velocity.y == 0 &&
     this.RobotPlayer.body.velocity.x == 0){
    //  Stand still
    this.RobotPlayer.animations.stop();
    this.RobotPlayer.frame = 4;
  }
};

RoBlockWar_Robot.prototype.fireAtDistance = function (distance) {
    if(this.RobotPlayer != null){
        
    }
};

RoBlockWar_Robot.prototype.sendRadarPulse = function (distance) {
    if(this.RobotPlayer != null){
        
    }
};

RoBlockWar_Robot.prototype.createInterpreterInitializer = function() {
    var robot = this;
    return function (interpreter, scope, helper) {
        interpreter.setProperty(scope, 'Registers', helper.nativeValueToInterpreter(robot.Registers));
        interpreter.setProperty(scope, 'fireAtDistance', helper.nativeValueToInterpreter(robot.fireAtDistance));
        interpreter.setProperty(scope, 'sendRadarPulse', helper.nativeValueToInterpreter(robot.sendRadarPulse));
        interpreter.setProperty(scope, 'console', helper.nativeValueToInterpreter(window.console));
    };
};


