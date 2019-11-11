#target illustrator-21
#script rempic_v1

"use strict"
canopener();
$.write (" okay");
$.gc();

function main(doc){
	rempic0(doc);
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
			main(doc);
            $.write(i+" ,")
            $.gc();
		}
	}
}

function rempic0(doc,j){
    app.activeDocument.selection = null;
    var rerun=false;
	var p5 = doc.layers[5].pageItems;
      var j = p5.length-1;
    for ( ; j>=0 ; j--){
        if (p5[j].typename=="RasterItem"){
            p5[j].remove();
        }else if(p5[j].typename=="GroupItem"){
                  p5[j].selected=true;
                    app.executeMenuCommand('ungroup');
                    app.executeMenuCommand('ungroup');
                    app.executeMenuCommand('ungroup');
                    rerun=true;
        }
    }
    if(rerun==true){
        rempic0(doc);
    }
}
