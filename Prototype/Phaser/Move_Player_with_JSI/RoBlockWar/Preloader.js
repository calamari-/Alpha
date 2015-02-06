var RoBlockWar = RoBlockWar || {};

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
    this.load.image('sky', '../assets/sky.png');
    this.load.spritesheet('player', '../assets/dude.png', 32, 48);
  },
  create: function() {
    this.state.start('Game');
  }
};