
// Define our 'namespace'
var RoBlockWar = RoBlockWar ||  { };

RoBlockWar.Main = function(robotCodes) {
    
	//	100% of the browser window - see Boot.js for additional configuration
	var game = new Phaser.Game("100%", "100%", Phaser.AUTO, '');

    game.Robots = [];
	game.Scheduler = new AsyncScheduler();
	
    for(var i = 0; i < robotCodes.length; i++){
        var newRobot = new RoBlockWar_Robot(i, "Robert" + i, robotCodes[i]);
        game.Robots.push(newRobot);
    }
	//	Add the States the game has.
	game.state.add('Boot', RoBlockWar.Boot);
	game.state.add('Preloader', RoBlockWar.Preloader);
	game.state.add('Game', RoBlockWar.Game);
	//	Now start the Boot state.
	game.state.start('Boot');
};