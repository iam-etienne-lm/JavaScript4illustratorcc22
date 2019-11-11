#target Illustrator-21
#script "ROOMCLEANING"
"use strict"
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.gc();
main();

function main(){ //reverse order
	var d=app.activeDocument;
    var l = d.layers[13];   //choose layer
   // here's the "flip horizontal" magic:
    var totalMatrix = app.getScaleMatrix(-100,100);
    // apply the transformation to all art in the document    
    for (var i = 0; i < l.pageItems.length; i++ ) {
        l.pageItems[i].transform( totalMatrix );
     }
 }
