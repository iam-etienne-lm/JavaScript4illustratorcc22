#target Illustrator-22
#script "rekt"
"use strict"
main();
$.write("rekted")
$.gc();

function main(){
    var d,
    i,
    x,
    y,
    xx,
    yy,
    ab,
    bot,
    rig;
    
    d=app.activeDocument;
    //d.pathItems.rectangle(0,0,40,20);
    
        y=0;
        x=0;
        xx=10;
        yy=10;    
    
    for(i=0;i<100;i++){

        d.pathItems.rectangle(y,x,xx,yy);
        x=xx;
        y=yy*(-1);
        xx=xx+10;
        yy=yy+10;
        }
    
    /*a = d.Artboards[0];
    g=d.Artboards[0].geometricBounds;
    bot = g[3];
    rig = g[2];
    
    for (i=0;i<100;i++){
        x=i%rig;
        y=i%bot;
        d.pathItems.rectangle(x,y,10,10);
    }*/
}
