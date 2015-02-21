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
    
    <script type="text/javascript" id="battle_driver">
        
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
</head>
<body>
    <div id="page">
        <div id="SubMenu">
            <h1>Battle Royale!</h1>
            <ol>
                <li><a href="./index.php?MainMenu=Y" alt="Return to Menu">Return to Main Menu</a></li>
            </ol>
        </div>
        <hr/>
    </div>
</body>
</html>
