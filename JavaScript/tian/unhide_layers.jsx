#target Illustrator-21
#targetengine main
var scriptID = "unhide-layer v1.0";

var sourceFolder1 = null;
//var sourceFolder2 = null;
//var sourceFolder = null;
var fileType = null;
var files1  = null;
//var files2  = null;
var sourceDoc1  = null;
//var sourceDoc2  = null;
var sourceFolder1 = Folder ("C:/TEMPai/TIANYA/00/313029-00 IMP");
//SOURCE FILES TO STACK
//var sourceFolder2 = Folder ("C:/TEMPai/F1/output3");
//OUTPUT STACK
var fileType = "*.pdf";
var originalInteractionLevel = userInteractionLevel;
userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

files1 = new Array();
//files2 = new Array();
files1 = sourceFolder1.getFiles( fileType );
if ( files1.length != 0 ){
  for ( i = 0; i < files1.length; i++ ){
    var sourceDoc1 = app.open(files1[i]); //no close because of huge saving time required
    unhideLayer();
    //as_Remcolortest();
    //as_Resize10();
    //as_Thinlines();
	//as_cleaning();
  }
}
function unhideLayer(){
  for ( k = 0; k < sourceDoc1.layers.length; k++ ){
    sourceDoc1.layers[0].visible = true;
	sourceDoc1.layers[3].visible = true;
	sourceDoc1.layers[4].visible = false;
	sourceDoc1.layers[5].visible = true;
  }
}

function as_Remcolortest(){
	
}

function as_Resize10(){
	
}

function as_Thinlines(){
	
}

function as_cleaning(){
	
}
