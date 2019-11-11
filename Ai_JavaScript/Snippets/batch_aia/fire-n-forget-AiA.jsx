#target Illustrator-21
/*** HIGHLY BUGGY (actions potentials bugs + nostop) ***/
//GLOBAL
var action,set;
//INIT
action = null;
set = null;
//CODE
//Considering actions are already loaded ... no sel into action panel or crash
set=""; //the assembly
action="";						//packs a bunch of actions
var scriptID = "runexistingaction v1.0"; //may fail while using stored actions after a crash - besides can't stop action once launched
open1folder();
 
function open1folder(){
//fn init
var fileType= null;
var sourceFolder=null;
var files1=null;
var doc=null;
//fn code
var fileType = "*.pdf";
var sourceFolder = Folder ("C:/TEMPai/F7/input/dao/temp");
var files1 = [];
var files1 = sourceFolder.getFiles( fileType );
/**** Need output? ****/
//var outputFile = File("C:/TEMPai/F7/input/dao/temp");
//var outputDoc = app.open (outputFile);
	if ( files1.length != 0 ){	
		for ( i = 0; i < files1.length; i++ ){									//AT EACH i ITERACTION EVENTS DO THINGS
			var doc = app.open(files1[i]);
			unhide_Layer(doc);
			runexistingaction(doc, action, set);
			//doc.close(saveOptions.SAVECHANGES);
		}	
	}
//outputDoc.close(saveOptions.SAVECHANGES);
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
}

function runexistingaction(doc, action, set){
	app.doScript(action, set); 
}

function unhide_Layer(doc){															// K LAYERS
	var k=null;
	for ( k = 0; k < doc.layers.length; k++ ){				//TODO set names instead of nb
		doc.layers[k].visible = true;
	}
}