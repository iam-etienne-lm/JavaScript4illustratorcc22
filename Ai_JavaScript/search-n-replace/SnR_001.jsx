#target Illustrator-21
#targetengine main
var scriptID = "snr v0.1";

var sourceFolder1 = null;
var fileType = null;
var files1  = null;
var sourceDoc1  = null;
var sourceFolder1 = Folder ("C:/TEMPai/y.test");
var fileType = "*.pdf";
var originalInteractionLevel = userInteractionLevel;
userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

files1 = new Array();
files1 = sourceFolder1.getFiles( fileType );
if ( files1.length != 0 ){
  for ( i = 0; i < files1.length; i++ ){
    var sourceDoc1 = app.open(files1[i]); //no close because of huge saving time required
    //ctrlh_Ai();
	cth_m();
  }
}

function cth_m(){ //credits moluapple
var search_string = /D11116136/gi; // g for global search, remove i to make a case sensitive search   
var replace_string = 'D11116176 ';  
var active_doc = app.activeDocument;  
var text_frames = active_doc.textFrames;  
  
  
if (text_frames.length > 0) {  
    for (var i = 0; i < text_frames.length; i++) {  
        var this_text_frame = text_frames[i];  
        var match = search_string.exec('');
		var j=0
        while (match = search_string.exec(this_text_frame.contents)) {  
			
            this_text_frame.characters[match.index +8].contents = replace_string; // replace "▪" with " n"  
           // active_doc.characterStyles.getByName("Square Bullet").applyTo(this_text_frame.characters[match.index + 2], true); // only apply to "n", leave space  
            }
		}
	}
}  



// function ctrlh_Ai(){ // credits Adobe Illustartor CC 17 ref script guide p240
  // Creates a new magenta color and applies the color to all words meeting a specific criteria
  // if ( app.documents.length > 0 && app.activeDocument.textFrames.length > 0 ) {
  // Create the color to apply to the words
    // wordColor = new RGBColor();
    // wordColor.red = 255;
    // wordColor.green = 0;
    // wordColor.blue = 255;
    // Set the value of the word to look for
    // searchWord1 = "123";
    // searchWord2 = "The";
    // searchWord3 = "THE";
    // Iterate through all words in the document
    // and color the words that match searchWord
    // for ( i = 0; i < app.activeDocument.textFrames.length; i++ ) {
      // textArt = activeDocument.textFrames[i];
      // for ( j = 0; j < textArt.words.length; j++) {
        // word = textArt.words[j];
        // if ( word.contents == searchWord1 /*|| word.contents == searchWord2 || word.contents == searchWord3*/ ) {
          // word.filled = true;
          // word.fillColor = wordColor;
          
        // }
      // }
    // }
  // }
// }
