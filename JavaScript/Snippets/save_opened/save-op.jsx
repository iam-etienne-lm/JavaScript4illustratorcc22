#target Illustrator-21
//GLOBAL
//INIT
//CODE
var scriptID = "saveusall v0.0"; //may fail while using stored actions after a crash - besides can't stop action once launched
saveusall();

function saveusall(){
//fn init
var opDoc=null
//fn code

	app.documents.everyItem().close(SaveOptions.YES);
	
/**** Need output? todo ****/
//var outputFile = File("");
//var outputDoc = app.open (outputFile);
}
