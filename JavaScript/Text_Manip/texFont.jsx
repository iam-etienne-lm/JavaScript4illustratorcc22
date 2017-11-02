#target Illustrator-21
#script "changeFOnt"
"use strict"
$.gc();
//app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
main();
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write(" done CF=")
$.gc();

function main(){ //reverse order
    var d,//= app.activeDocument
    docs=app.documents,
    i =docs.length-1;
    for ( ; i >= 0; i-- ){
        d=docs[i];
        setAFont(d);
        $.write(" ,"+i);
    }
    /*2 cases recursive or not
        */
}

function setAFont(d){
            var t = d.textFrames,
            i = 0;

        for (; i < t.length; i++) {
            t[i].textRange.characterAttributes.textFont.name = 'CNC Vector';
            //t[i].textRange.characterAttributes.textFont = app.textFonts.getByName("CNC Vector");
        }
        l=null;

}

