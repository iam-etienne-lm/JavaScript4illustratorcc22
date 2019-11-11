#target illustrator-21
#script recompo_js

"use strict"
canopener();
$.write (" okay");
$.gc();

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
		}
	}		
}

function main(doc){
	//alert(doc)             /*DEBUG*/
	sort_remfram(doc);
	//clozed();
	app.redraw();
	$.sleep (50);	
}

function sort_remfram(doc){
	//lite version only for remfram
    //NB: CANNOT COMPARE STROKECOLORS(3*1) 
	//ONLY REMOVE in reverse order
	//TODO: change algo to use val instead of object
    //TODO: 1)optimize 2)parameter
	var count; 
	count=0;
	var p0 = doc.layers[0].pageItems
	if(p0.length>0){
		for ( var j=p0.length; j>0; j--) {
			//var p=p0[j];
			$.sleep (50);
			p0.removeAll();
			count++;
		}
	}
    app.redraw();
	$.write("FILE "+" "+count+" "+" "+" "+" ");
}

function clozed(){
	UserInteractionLevel.DONTDISPLAYALERTS;
	//for (var i = app.documents.length-1;i>1; i++) { 
		cls();
		//app.documents[i].close(SaveOptions.SAVECHANGES);
	//	$.sleep (3000);
	//}
	UserInteractionLevel.DISPLAYALERTS;
}

function cls(){
app.activeDocument.close(SaveOptions.SAVECHANGES);
}
