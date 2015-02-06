
// Define our 'namespace'
var RoBlockWar = RoBlockWar ||  { };

RoBlockWar.Boot = function(game){
};

//setting game configuration and loading the assets for the loading screen
RoBlockWar.Boot.prototype = {
  init: function () {

    //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
    this.input.maxPointers = 1;
    
    //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
    this.stage.disableVisibilityChange = true;
    
    //  This tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
<<<<<<< HEAD
  },
    
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', '../../assets/preloader-bar.png');
=======
  }
    
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', '/assets/preloader-bar.png');
>>>>>>> ac9e9e9d9c71f660dbecf0b226bfc0592d30f804
  },
  create: function() {
    //  By this point the preloader assets have loaded to the cache, we've set the game settings
    //  So now let's start the real preloader going
    this.state.start('Preloader');
  }
};