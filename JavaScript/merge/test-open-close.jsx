#target Illustrator-21
#targetengine main
var scriptID = "test-open-close v1.0";
var daoFolder = null
var impFolder = null
var sourceFolder = null
var fileType = null
var files1  = null
var files1  = null
var sourceDoc1  = null
var sourceDoc2  = null

var daoFolder = Folder ("C:/TEMPai/F4/base/10A");
var impFolder = Folder ("C:/TEMPai/F4/base/312458-10A_FLOWER_DERIVE+CONE+DEBATTEMENT+TRAPPES LHS/312458-10A_ IMP");
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
				sourceDoc1.close(SaveOptions.DONOTSAVECHANGES);
				sourceDoc2.close(SaveOptions.DONOTSAVECHANGES);
			}
		}
	}