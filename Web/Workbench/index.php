<!doctype html>
<html lang="en"> 
<head>
    <title>RoBlock Wars</title>
    
    <link href="../assets/css/Site.css" media="screen" rel="stylesheet" type="text/css" />
    
    <script src="../bin/cookieHelper.js"></script>
    
    <?php //Add JQuery from google to makes things simplier  ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <?php //End JQuery pulls  ?>
    
    <script type="text/javascript" id="workbench_driver">
        
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
    <script>
      function replaceAll(find, replace, str) {
        return str.replace(new RegExp(find, 'g'), replace);
      }
      var current_workspace = null;
      function blocklyLoaded(blockly) {
        current_workspace = blockly;
        // Called once Blockly is fully loaded.
        blockly.addChangeListener(function () {
            
            var code = current_workspace.JavaScript.workspaceToCode();
            var newline = String.fromCharCode(13, 10) || '\n';
            code = replaceAll("}", "}" + newline, code);
            code = replaceAll(":", ":" + newline, code);
            code = replaceAll(";", ";" + newline, code);
            code = replaceAll("{", "{" + newline, code);
            document.getElementById('jsResult').innerHTML = code;
            
            var xml = current_workspace.Xml.workspaceToDom(current_workspace.mainWorkspace);
            var xml_text = current_workspace.Xml.domToText(xml);
            document.getElementById('xmlResult').innerHTML = xml_text;
        });
      }
      
      var startBattle = null;
      function battlefieldLoaded(func) {
        startBattle = func;
      }
      $(document).ready(function(){
          $('#Testbutton').click(function(){
             if(startBattle != null){
                startBattle([current_workspace.JavaScript.workspaceToCode()]);
             } 
          });
      });
    </script>
</head>
</head>
<body class="ThrowBack">
    <div id="page">
        <div id="SubMenu">
            <h1>Workbench</h1>
            <ol>
                <li><a href="../index.php?MainMenu=Y" alt="Return to Menu">Return to Main Menu</a></li>
            </ol>
            <hr/>
        </div>
        <br/>
        <br/>
        <iframe id="workspace" src="./workspace.html" style="height: 700px;width:60%;margin-right: 5%;">
        </iframe>
        <!--
        <iframe id="battlefield" src="./battlefield.html" style="width:30%;">
        </iframe>
        -->
        <hr/>
        <div style="height: 500px;width: 45%; float:left; overflow: auto;color:white;">
            <h1>JS Generated from Workspace:</h1>
            <pre><code id="jsResult" style="height: 97%; width: 97%;" ></code></pre>
        </div>
        <div style="height: 500px;width: 45%; float:right; overflow: auto;">
            <h1>XML Generated from Workspace:</h1>
            <textarea id="xmlResult" rows="15" cols="75" ></textarea>
        </div>
        <br style="clear:both;"/>
        <br style="clear:both;"/>
    </div>
</body>
</html>
