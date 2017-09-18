#target Illustrator-21
#script "ROOMCLEANING"
"use strict"
$.gc();
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("cleaned/saved")

function main(){ //reverse order
    
	var docs=app.documents;
	var i =docs.length-1;

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
        for ( ; i >= 0; i-- ){
       unselect();
     //unhide_Layer();
    saver(docs, i);  
    $.write(" ,"+i);
    }
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

function saver(docs, i){
			
		//var saveOptions = new IllustratorSaveOptions();  
		//saveOptions.pdfCompatible = false;  
		//d.save(d.fullname, saveOptions);  
		//d.saved = true;
		
		if(docs[i].saved==false){
			docs[i].close(SaveOptions.SAVECHANGES);
		}else{
			docs[i].close(SaveOptions.DONOTSAVECHANGES);

	}
}
