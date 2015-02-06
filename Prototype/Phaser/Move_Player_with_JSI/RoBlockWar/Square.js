var Square = Square || {};

//title screen
RoBlockWar.Game = function(){};

RoBlockWar.Game.prototype = {
  create: function() {
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
  update: function() {
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
  }
};