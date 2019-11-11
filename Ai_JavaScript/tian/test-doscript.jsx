#target Illustrator-21
#targetengine main

var originalInteractionLevel = userInteractionLevel;  
userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;  
var scriptID = "test do script v0.0";
var sourceScript1 = Folder("C:/TEMPai/script");
var fileType = "*.jsx";
var script1 = sourceScript1.getFiles( fileType );

app.executeMenuCommand('ai_browse_for_script';script1);