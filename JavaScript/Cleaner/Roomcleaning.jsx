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
    var d

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
        for ( ; i >= 0; i-- ){
         d=docs[i];
       unselect();
     unhide_Layer(d);
    //saver(docs, i);  
    $.write(" ,"+i);
    }
}

function unselect(){
        app.selection=null;
    
}

function unhide_Layer(d){															// K LAYERS
	var k=null;
    var dl=d.layers;
	//var doc_f1=null;
	//doc_f1=app.activeDocument;
	for ( k = 0; k < dl.length; k++ ){				//TODO set names instead of nb
		dl[k].visible = true;
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
