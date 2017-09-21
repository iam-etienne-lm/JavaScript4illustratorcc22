#target Illustrator-21
#script "ROOMSERVICE"
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
            //unselect();
            //unhide_Layer(d);
            unlock_all(d);
            remthings(d);
           
            //closer(d);
            //saver(d);
            $.write(" ,"+i);
    }
}

function unselect(){
        app.selection=null;
}

function unhide_Layer(d){															// K LAYERS
    var dl=d.layers;
	for (var k = 0; k < dl.length; k++ ){				//TODO set names instead of nb
		dl[k].visible = true;
	}
}

function unhide_Layer(d){															// K LAYERS
    var p=d.pagetItems;
	for (var k = 0; k < p.length; k++ ){				//TODO set names instead of nb
		p[k].locked = false;
	}
}

function remthings(d){
    var p = d.layers[5].pageItems;
    var j = p.length-1;
    //for ( ; j>=0 ; j--){
        p[j-1].remove();
    //}
}

function closer(d){ 
			d.close(SaveOptions.DONOTSAVECHANGES);
}

function saver(d){
		//var saveOptions = new IllustratorSaveOptions();  
		//saveOptions.pdfCompatible = false;  
		//d.save(d.fullname, saveOptions);  
		//d.saved = true;
		if(d.saved==false){
			d.close(SaveOptions.SAVECHANGES);
		}else{
			d.close(SaveOptions.DONOTSAVECHANGES);
	}
}
