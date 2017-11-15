#target Illustrator-22
#script "rekt"
"use strict"
main();
$.write("rekt")
$.gc();

function main(){
    var d,
    i,
    x,
    y,
    bot,
    rig;
    
    d=app.activeDocument;
    for (i=0;i<100;i++){
        x=i%rig;
        y=i%bot;
        d.pathItems.rectangle(x,y,10,10);
    }
}
