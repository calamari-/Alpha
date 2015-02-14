var RoBlockWar = RoBlockWar || {};

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
            var botView = this.game.add.sprite(250, 250, 'player');
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
        for(var i = 0; i < this.game.Robots.length; i++){
            this.game.physics.arcade.collide(this.game.Robots[i].RobotPlayer, this.blockedLayer);
            this.game.Robots[i].update();
        }
	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');
	}

};