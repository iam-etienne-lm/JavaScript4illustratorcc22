#target Illustrator-21
#script "UIsaveas"
"use strict"
$.gc();
//app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("UIsavedas")

function main(){
    var doc =app.activeDocument;
    doc.activate();
    app.executeMenuCommand("Save");
    
}


/*
doc.saveAs ( File ( doc.fullName.replace ( /\.ait?$/i, "")+".pdf" ) );

*/
