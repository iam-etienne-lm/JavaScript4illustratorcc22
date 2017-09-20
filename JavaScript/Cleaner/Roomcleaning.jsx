#target Illustrator-21
#script "ROOMCLEANING"
"use strict"
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.gc();
main();

function main(){ //reverse order
	var docs=app.documents;
	var i =docs.length-1;
	//app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
     //unselect();
     unhide_Layer();
     //closer();
    //saver();  
}

function unselect(){
        app.selection=null;
}

function unhide_Layer(){															// K LAYERS
	var k=null;
	var doc_f1=null;
	doc_f1=app.activeDocument;
	for ( k = 0; k < doc_f1.layers.length; k++ ){				//TODO set names instead of nb
		doc_f1.layers[k].visible = true;
	}
}

function closer(){
    for ( ; i >= 0; i-- ){
		//var saveOptions = new IllustratorSaveOptions();  
		//saveOptions.pdfCompatible = false;  
		//d.save(d.fullname, saveOptions);  
		//d.saved = true;
		$.write(" i "+i);
			docs[i].close(SaveOptions.DONOTSAVECHANGES);
}

function saver(){
	for ( ; i >= 0; i-- ){		
		//var saveOptions = new IllustratorSaveOptions();  
		//saveOptions.pdfCompatible = false;  
		//d.save(d.fullname, saveOptions);  
		//d.saved = true;
		$.write(" i "+i);
		if(docs.saved==false){
			docs[i].close(SaveOptions.SAVECHANGES);
		}else{
			docs[i].close(SaveOptions.DONOTSAVECHANGES);
		}
	}
}
