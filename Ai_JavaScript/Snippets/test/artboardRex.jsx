#target Illustrator-21
#script "test v0.0";
test();
function test(){
    var doc = app.activeDocument
    doc.pathItems[1].artboardRect = doc.VisibleBounds
    }