#target illustrator-21
#script text-down_v0.9

"use strict"
canopener();
$.write (" okay");
$.gc();

function main(doc){
	get_pi(doc);
}

function canopener(){
	var sort=[];
	var sourceFolder = Folder ("C:/TEMPai/F7/output/dao");		//y.test or F7
	var files1 = [];
    var fileType = "*.pdf"; //pdf
	files1 = sourceFolder.getFiles( fileType );
	if ( files1.length != 0 ){
		var i=0;
		for ( ; i < files1.length; i++ ){			//AT EACH i ITERACTION EVENTS DO THINGS
			var doc = app.open(files1[i]);
			app.redraw();
               $.write(i+" ,")
			main(doc);
            
		}
	}
}

function get_pi(doc){
	var pi=doc.layers[3].pageItems;
	for(var j=0; j < pi.length; j++){
		//pi[j].selected=true;
		//create_pathText(app.selection[0]);  
		create_pathText(pi[j]);
		app.redraw();
		$.sleep (50);
	}
}

    function create_pathText(p) {
        var text = get_text(p),
            l = activeDocument.pathItems.add(),
            t = (l.setEntirePath(get_line(p)), activeDocument.textFrames.pathText(l));
        text.textRange.move(t, ElementPlacement.PLACEATBEGINNING);
        t.textRange.characterAttributes.baselineShift = 400; // offset to bottom
        t.textRange.paragraphAttributes.justification = Justification.CENTER;
        text.remove();
    }

    function get_text(p) {
        var g = p.geometricBounds,
            t = activeDocument.textFrames,
            i = 0,
            gt;
        for (; i < t.length; i++) {
            gt = t[i].geometricBounds;
            if (gt[0] > g[0] && gt[1] < g[1] && gt[2] < g[2] && gt[3] > g[3]) { //POSSIBLE ISSUE TOO LARGE TF
                return t[i]
            }
        }
    }

    function get_line(p) {
        var ps = p.pathPoints,
            g = p.geometricBounds,
            i = 0,
            br/*bottomRight*/, pre, next;
        for (; i < ps.length; i++) {
            pre = (i == 0) ? ps[ps.length - 1] : ps[i - 1];
            next = (i == ps.length - 1) ? ps[0] : ps[i + 1];
            br = ps[i].anchor;
            if ((pre.anchor[0] - br[0]) < (pre.anchor[1] - br[1]) &&
                (br[0] - next.anchor[0]) > (br[1] - next.anchor[1])
            ) {
                return [[g[0], g[3]], br]
            }
        }
    }
