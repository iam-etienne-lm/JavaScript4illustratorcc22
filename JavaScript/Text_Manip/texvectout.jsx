#target Illustrator-22
#script "texvectout"
"use strict"
$.level=2;
tvect();
$.write("stackPrint sing ok >");
$.gc();

function tvect(){
    var d= app.activeDocument;
    var tf= d.layers['trace'].textFrames;
    var i = tf.length-1;
        for ( ; i>=0 ; i--){
            tf[i].selected=true;
            d.selection[0].createOutline();
            app.executeMenuCommand('Live Pathfinder Outline');
        }
    }

function selgp(){
    var d= app.activeDocument;
    var g = d.layers['trace'].groupItems;
    var i = g.length-1;
    for ( ; i>=0 ; i--){
        g[i].selected=true;
        app.executeMenuCommand('Live Pathfinder Outline');
    }
}
