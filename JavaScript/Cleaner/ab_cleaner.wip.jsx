#target Illustrator-21
#script "ab 0.0"
"use strict"
$.gc();
app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("abtest")
$.gc();

function main(){ //reverse order
        var docs=app.documents;
        var i =docs.length-1;
        var d = app.activeDocument;
        clean_ab(d);
        /*for ( ; i >= 0; i-- ){
            d=docs[i];
           
            $.write(" ,"+i);
        }*/
}

function clean_ab(d){
    var p = d.pageItems;
    var j = p.length-1;
    var ab=d.artboards[0].artboardRect;
    var s=    app.selection[0].geometricBounds
    $.write(" ab "+ab+" "+" s "+s+" ")
    /*for ( ; j>=0 ; j--){
        ifif (gt[0] > g[0] && gt[1] < g[1] && gt[2] < g[2] && gt[3] > g[3])
        p[j-1].remove();
        
    }*/
}
