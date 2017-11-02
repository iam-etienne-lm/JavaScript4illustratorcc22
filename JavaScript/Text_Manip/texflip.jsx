#target Illustrator-21
#script "texflip"
"use strict"
$.gc();
main();
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("flipper arrete de flipper")
$.gc();

function main() {
    d= app.activeDocument;
    t= d.textFrameItems;
    for (i=0; i<t.length;i++){
        t[i].selected=true
    }
}
