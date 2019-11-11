#target Illustrator-21
#targetengine main
var scriptID = "open-merge-close v0.2";
var daoFolder = null
var impFolder = null
var sourceFolder = null
var fileType = null
var files1  = null
var files1  = null
var sourceDoc1  = null
var sourceDoc2  = null

var daoFolder = Folder ("C:/TEMPai/F4/script/merge/merge_bigger/DAO");
var impFolder = Folder ("C:/TEMPai/F4/script/merge/merge_bigger/IMP");
var fileType = "*.pdf";



files1 = new Array();
files2 = new Array();
files1 = daoFolder.getFiles( fileType );
files2 = impFolder.getFiles( fileType );
	if ( files1.length != 0 ){
		if ( files2.length != 0 ){	//  number of files   
			for ( i = 0; i < files1.length; i++ ){           	// iterate through files num
				var sourceDoc1 = app.open(files1[i]);
				var sourceDoc2 = app.open(files2[i]);
				
				var daoFile = sourceDoc1;
				var impFile = sourceDoc2;
				mergetwin();									//should use parameters instead
				
				sourceDoc1.close(SaveOptions.DONOTSAVECHANGES);
				//sourceDoc2.close(SaveOptions.DONOTSAVECHANGES);
			}
		}
	}
	

function mergetwin() {
	if(impFile != null){
	newItem = new Array();


				sourceDoc1.activate();
				for (l = 0; l < sourceDoc1.pageItems.length-1; l++) { 	//pageItems  L
					sourceDoc1.pageItems[l].selected = true;				
				}
				if ( sourceDoc1.selection.length > 0 ) {
					app.executeMenuCommand('copy');
					sourceDoc2.activate();
					app.executeMenuCommand('pasteFront');
				}else{  
					alert( 'empty selection' );
				}
				
		
	}
}