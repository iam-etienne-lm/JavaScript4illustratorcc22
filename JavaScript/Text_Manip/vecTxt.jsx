function tvect(d){
    //var d= app.activeDocument;
    var tf= d.textFrames;
    var i = tf.length-1;
        for ( ; i>=0 ; i--){
            tf[i].selected=true;
            tf[i].createOutline();
            app.executeMenuCommand('Live Pathfinder Outline');
        }
    }
