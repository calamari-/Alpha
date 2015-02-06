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
        
        //create player
        this.player = this.game.add.sprite(0, 0, 'player');
        this.game.physics.arcade.enable(this.player);
        
        this.player.body.maxVelocity.setTo(400, 400);
        this.player.body.collideWorldBounds = true;
        
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        
        //the camera will follow the player in the world
        this.game.camera.follow(this.player);
        
        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();
	},

	update: function () {
        //collision
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        
        //reset player movement
        this.player.body.velocity.y = 0;
        this.player.body.velocity.x = 0;
        
        if(this.cursors.up.isDown) {
            this.player.body.velocity.y -= 50;
        }
        else if(this.cursors.down.isDown) {
            this.player.body.velocity.y += 50;
        }
        if(this.cursors.left.isDown) {
            this.player.body.velocity.x -= 50;
            this.player.animations.play('left');
        }
        else if(this.cursors.right.isDown) {
            this.player.body.velocity.x += 50;
            this.player.animations.play('right');
        }
        else
        {
            //  Stand still
            this.player.animations.stop();
        
            this.player.frame = 4;
        }
	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');
	}

};