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
  this.RegisterNameMapping = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7, 
    H: 8, 
    I: 9, 
    J: 10, 
    K: 11, 
    L: 12, 
    M: 13, 
    N: 14, 
    O: 15, 
    P: 16, 
    Q: 17, 
    R: 18, 
    S: 19, 
    T: 20, 
    U: 21, 
    V: 22, 
    W: 23, 
    X: 24, 
    Y: 25, 
    Z: 26, 
    AIM: 27, 
    SHOT: 28,
    RADAR: 29,
    DAMAGE: 30,
    SPEEDX: 31,
    SPEEDY: 32,
    RANDOM: 33,
    INDEX: 34
  };
}

RoBlockWar_Robot.prototype.init = function(View){
    this.RobotPlayer = View;
};

RoBlockWar_Robot.prototype.update = function(){
  this.Registers[this.RegisterNameMapping.X] = this.RobotPlayer.body.x;
  this.Registers[this.RegisterNameMapping.Y] = this.RobotPlayer.body.y;
  
  //reset player movement
  this.RobotPlayer.body.velocity.y = this.Registers[this.RegisterNameMapping.SPEEDX];
  this.RobotPlayer.body.velocity.x = this.Registers[this.RegisterNameMapping.SPEEDY];
  
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
  return function (interpreter, scope, helper) {
    interpreter.setProperty(scope, 'this', this);
    interpreter.setProperty(scope, 'sleepFor', helper.createGenericNativeWrapper(this.sleepFor));
    interpreter.setProperty(scope, 'console', helper.nativeValueToInterpreter(window.console));
  };
}

RoBlockWar_Robot.prototype.sleepFor = function( sleepDuration ){
  var now = new Date().getTime();
  while(new Date().getTime() < (now + sleepDuration)){ /* do nothing */ } 
}

function RoBlockWar_Robot_sampleCode() 
{
  
  this.Registers[this.RegisterNameMapping.SPEEDX] = 0;
  this.Registers[this.RegisterNameMapping.SPEEDY] = 0;
  var times = 10;
  while(times > 0)
  {
  	times = times - 1;
  	while(this.Registers[this.RegisterNameMapping.X] < 50)
  	{ 
  		this.Registers[this.RegisterNameMapping.SPEEDX] = 50;
  		this.sleepFor(1000);
  	}
  	this.Registers[this.RegisterNameMapping.SPEEDX] = 0;
  	this.sleepFor(1000);
  	
  	while(this.Registers[this.RegisterNameMapping.Y] < 50)
  	{ 
  		this.Registers[this.RegisterNameMapping.SPEEDY] = 50;
  		this.sleepFor(1000);
  	}
  	this.Registers[this.RegisterNameMapping.SPEEDY] = 0;
  	this.sleepFor(1000);
  	
  	while(this.Registers[this.RegisterNameMapping.X] > 50)
  	{ 
  		this.Registers[this.RegisterNameMapping.SPEEDX] = -50;
  		this.sleepFor(1000);
  	}
  	this.Registers[this.RegisterNameMapping.SPEEDX] = 0;
  	this.sleepFor(1000);
  	
  	while(this.Registers[this.RegisterNameMapping.Y] > 50)
  	{ 
  		this.Registers[this.RegisterNameMapping.SPEEDY] = -50;
  		this.sleepFor(1000);
  	}
  	this.Registers[this.RegisterNameMapping.SPEEDY] = 0;
  	this.sleepFor(1000);
  }
}