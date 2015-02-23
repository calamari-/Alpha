<!doctype html>
<html lang="en"> 
<head>
    <title>RoBlock Wars</title>
    
    <link href="assets/css/Site.css" media="screen" rel="stylesheet" type="text/css" />
    
    <script src="./bin/cookieHelper.js"></script>
    
    <?php //Add JQuery from google to makes things simplier  ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <?php //End JQuery pulls  ?>
    
    <script type="text/javascript" id="documentation_driver">
        
        $(document).ready(function(){
            $(document).keydown(function(event){
               var code = event.keyCode || event.which;
               if(code == 27) {
                   window.location = $('#SubMenu ol li:nth-child(1) a').attr('href');
               }
               else {
                   var keyPressed = String.fromCharCode(code);
                   if($.isNumeric(keyPressed)){
                       $('#SubMenu ol li:nth-child(' + keyPressed + ') a')[0].click();
                   }
               }
            });
        });
        
    </script>
</head>
<body class="ThrowBack">
    <div id="page">
        <div id="SubMenu">
            <ol>
                <li><a href="./index.php?MainMenu=Y" alt="Return to Menu">Return to Main Menu</a></li>
            </ol>
        </div>
        <br/>
        <br/>
        <div id="Documentation">
            <h1>ROBOTS AND ROBOT BATTLES</h1>
            <h2 id="Locomotion">Locomotion</h2>
            <p>Each robot is moved by tracks mounted on a 1.5
            meter square chassis. The two independent motors,
            driving the tracks, enable the robot to move vertically
            (north/south) and horizontally (east/west).</p>
            <br/>
            <h2 id="PowerSupply">Power Supply</h2>
            <p>The power supply will take the severest damage from
            the enemy shells. It is built into the central body of
            the robot, along with damage sensors. These sensors
            monitor the damage to the power supply and when 100%
            damage is attained, the robot will explode!</p>
            <br/>
            <h2 id="Radar">Radar</h2>
            <p>On top of the robot is a radar unit that emits a
            beam in any desired direction. This beam reflects from
            walls and other robots and returns to the robot. The
            beam is accurately timed, enabling the robot to find
            its position and to spot enemy robots.</p>
            <br/>
            <h2 id="Guns">Guns and Ammunition</h2>
            <p>Your robot is equipped with one gun that swivels
            through 360 degrees and is automatically loaded. It
            uses time-fused shells that can be set to explode at
            any specified distance. The gun also has a cooling
            period between each shot to keep it from overheating.</p>
            <br/>
            <h2 id="Brain">The Brain</h2>
            <p>Inside the robot is a micro-computer "brain" that
            executes the instructions exactly as they have been
            programmed. The brain has several parts: an
            accumulator where a robot performs all arithmetic
            operations, a program storage area where the
            instructions are stored in memory, and registers where
            numbers are stored. The brain links to input sensors
            monitoring damage and position as well as to the drive
            motors, radar, and gun. While the robot is on the
            battlefield the brain is in complete control!</p>
            <br/>
            <h2 id="Battlefield">The Battlefield</h2>
            <p>Robot battles take place on a square battlefield
            inside four strong walls. Each wall is 260 meters long
            and strong enough that a robot cannot crash or shoot
            through it. As many as five robots can fight at once,
            but only one will emerge as the winner.
            There is an observation station, directly above the
            battlefield, enclosed in blast-proof glass to protect
            you and the other observers.</p>
            <br/>
            <h2 id="Damage">Damage</h2>
            <p>Robots are eliminated from battle by incurring over
            100% damage. When a shell hits a robot or explodes
            nearby, the robot is damaged. The extent of that
            damage depends on the proximity of the shell to the
            robot. A shell exploding directly on top of a robot
            can do 30% damage.<br/>
            A robot can also be damaged through collisions with
            walls or other robots. The extent of damage would
            depend on the angle of collision. A head-on collision
            between two robots can do 25% damage to both robots.</p>
            <br/>
            <h2 id="Scoring">The Scoring System</h2>
            <p>Each robot has a score associated with it. As each
            battle is fought the robots earn points which are added
            to its cumulative score. Every time a robot's program
            is changed, its score is reset to O.
            Robots earn points in the following manner. During
            a battle, every time a robot is destroyed, 1 point is
            earned by all of the survivors. Thus in a five-robot
            battle, the first to be destroyed receives 0 points.
            For outlasting that first robot, all other robots on
            the battlefield earn 1 point. For outlasting 4 other
            robots, the winner of a 5-robot battle earns 4 points!</p>
            <br/>
            <h2 id="Battling">Battling It Out</h2>
            <p>To start a robot battle, select option one from the
            main menu by pressing '1'<br/>
            A catalog of available robots will appear on the screen.
            RobotWar comes with of five pre-programmed robots.
            As you create more robots, their names will be
            added to the list (see Exhibit 2).</p>
        </div>
    </div>
</body>
</html>