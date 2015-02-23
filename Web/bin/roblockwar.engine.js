var RoBlockWar = RoBlockWar || {};

RoBlockWar.Boot = function (game) {
};

//setting game configuration and loading the assets for the loading screen
RoBlockWar.Boot.prototype = {
  init: function () {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
  },
    
  preload: function() {
    this.load.image('preloadbar', '../assets/sprite/preloader-bar.png');
  },
  create: function() {
    this.state.start('Preloader');
  }
};

//loading the game assets
RoBlockWar.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};

RoBlockWar.Preloader.prototype = {
  preload: function() {
    // show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');

    this.load.setPreloadSprite(this.preloadBar);

    // load game assets
    this.load.image('sky', '../assets/sprite/sky.png');
    this.load.spritesheet('player', '../assets/sprite/dude.png', 32, 48);
  },
  create: function() {
    this.state.start('Game');
  }
};

RoBlockWar.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
	
    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator
    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words',
    // i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    
    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
};

RoBlockWar.Game.prototype = {
	create: function () {
        //  Our tiled scrolling background
        this.land = this.game.add.sprite(0, 0, 'sky');
        
        //create players
        for(var i = 0; i < this.game.Robots.length; i++)
        {
            var botView = this.game.add.sprite(250 + (10 * i), 250, 'player');
            this.game.physics.arcade.enable(botView);
            
            botView.body.maxVelocity.setTo(400, 400);
            botView.body.collideWorldBounds = true;
            
            botView.animations.add('left', [0, 1, 2, 3], 10, true);
            botView.animations.add('right', [5, 6, 7, 8], 10, true);
            this.game.Robots[i].init(botView);
        
    		var runner = new AsyncInterpreterRunner(this.game.Robots[i].CodeToRun, this.game.Robots[i].createInterpreterInitializer());
    		this.game.Scheduler.submit(runner, 'process' + this.game.Robots[i].processId);
    	}
    	
    	this.game.Scheduler.run(function () {
    		alert('Game now Over');
    	});
	},

	update: function () {
	    var startWith = (this.time.totalElapsedSeconds() % this.game.Robots.length) / 100;
	    
        for(var i = 0; i < this.game.Robots.length; i++){
            this.game.physics.arcade.collide(this.game.Robots[i].RobotPlayer, this.blockedLayer);
            this.game.Robots[i].update();
        }
        for(var i = 0; i < startWith; i++){
            this.game.physics.arcade.collide(this.game.Robots[i].RobotPlayer, this.blockedLayer);
            this.game.Robots[i].update();
        }
	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.shutDown();
	}
};

RoBlockWar.Main = function(r) {
    
	//	100% of the browser window - see Boot.js for additional configuration
	var game = new Phaser.Game("100%", "100%", Phaser.AUTO, '');

    game.Robots = r;
	game.Scheduler = new AsyncScheduler();
	
    
	//	Add the States the game has.
	game.state.add('Boot', RoBlockWar.Boot);
	game.state.add('Preloader', RoBlockWar.Preloader);
	game.state.add('Game', RoBlockWar.Game);
	
	//	Now start the Boot state.
	game.state.start('Boot');
};
