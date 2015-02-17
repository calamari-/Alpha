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
    
    <script type="text/javascript" id="index_driver">
        function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)  {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return sParameterName[1];
                }
            }
        }
        
        function toggleSound(e){
            var isSoundOn = readCookie('roblockwar_sound');
            if(isSoundOn === 'Y') {
                $(e).html('Switch Sound (Now Off)');
                eraseCookie('roblockwar_sound');
            }
            else {
                $(e).html('Switch Sound (Now On)');
                createCookie('roblockwar_sound', 'Y', 5);
            }
        }
        
        function toggleDocs(){
            $('#Documentation').toggle();
        }
        
        $(document).ready(function(){
            var isMenuActive = getUrlParameter('MainMenu');
            console.log('isMenuActive {' + isMenuActive + '}');
            if(isMenuActive !== undefined){
                $('#SplashScreen').hide();
            }
            else {
                $('#MainMenu').hide();
                $('#SplashScreen').click(function(){
                    $('#MainMenu').show();
                    $('#SplashScreen').hide();
                });
            }
            
            $(document).keypress(function(event){
               if($('#SplashScreen').is(":visible")) {
                   if(event.which == 13) {
                       $('#MainMenu').show();
                       $('#SplashScreen').hide();
                   }
               }
               else {
                   var keyPressed = String.fromCharCode(event.which);
                   console.log('keypressed {' + keyPressed + '}');
                   if($.isNumeric(keyPressed)){
                       console.log('#MainMenu ol li:nth-child(' + keyPressed + ') a {' + $('#MainMenu ol li:nth-child(' + keyPressed + ') a').html() + '}');
                       $('#MainMenu ol li:nth-child(' + keyPressed + ') a')[0].click();
                   }
               }
            });
        });
        
    </script>
</head>
<body>
    <div id="page">
        <div id="SplashScreen">
            <div id="SpashScreenBorder">
                <img id="RobbieLogo" src="./assets/images/robotLogo.png" alt="RoBlockWar Logo" />
                <h1>RoBlockWars<sup>TM</sup></h1>
                <h2>By CSCI 630</h2>
                <br/>
                <br/>
                <h2>Press Return to Begin</h2>
                <br class="clear"/>
            </div>
            <div id="CopyrightBorder">
                <h2>Copyright<br/>2015 By</h2>
            </div>
            <div id="Company">
                <h1>400</h1>
                <p>West First Software<sup><small>TM</small></sup></p>
            </div>
        </div>
        <div id="MainMenu">
            <h1>What do you want to do now?</h1>
            <ol>
                <li><a href="./Battle.php" alt="Fight some Robots!">Start a Robot Battle</a></li>
                <li><a href="./Workbench.php" alt="Go to the Workbench!">Assemble or Test a Robot</a></li>
                <li><a onclick="return toggleSound(this);">Switch Sound (Now Off)</a></li>
                <li><a href="./Documentation.php">View Documentation</a></li>
            </ol>
        </div>
    </div>
</body>
</html>
