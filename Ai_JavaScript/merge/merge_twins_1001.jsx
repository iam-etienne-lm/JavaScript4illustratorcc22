#target Illustrator-21
#targetengine main
var scriptID = "merge v1.0";
var impFile, daoFile, newItem, doc, l, docImp, docDao; 

//
var daoFile = "C:/TEMPai/F4/script/merge/dao1-10.pdf";
var impFile = "C:/TEMPai/F4/script/merge/imp1-10.pdf";
alert (impFile);
alert (daoFile);
mergetwin();

function mergetwin() {
if(impFile != null){
newItem = new Array();
//	fileType = prompt( 'Select type of Illustrator files to you want to process. Eg: *.ai', '*.pdf' );
	// Get all files matching the pattern
//	files = sourceFolder.getFiles( fileType );
	if ( daoFile.length > 0 ){
		if (impFile.length > 0) {
			var docDao = app.open(File(daoFile))
			var docImp = app.open( File(impFile))
			docDao.activate();
			for (l = 0; l < docDao.pageItems.length-1; l++) { 	//pageItems  L
                docDao.pageItems[l].selected = true;				
            }
			if ( activeDocument.selection.length > 0 ) {
				app.executeMenuCommand('copy');
				docImp.activate();
                app.executeMenuCommand('pasteFront');
			}else{  
                alert( 'empty selection' );
            }
		}	
	}
}
}
//syntax was correct
