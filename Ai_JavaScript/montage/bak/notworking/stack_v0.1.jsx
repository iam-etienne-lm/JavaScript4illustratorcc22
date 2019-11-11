#target Illustrator-21
#targetengine main
// Main Code [Execution of script begins here]
// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var scriptID = "stack v0.1";
var destFolder, sourceFolder, files, fileType, sourceDoc, doc, targetFile, mySel, i, j, k, l, newItem, newX, newY; 
//sourceFolder = Folder.selectDialog( 'Select the folder with Illustrator files you want to stack', '~' );
//var sourceFolder = "C:\TEMPai\script\test stack";  
//app.open( new Folder( sourceFolder ) ); 

var targetFile = app.documents.add();   // upcoming ERROR: CMYK instead of RGB

// Pre-defined starting point  
folder = Folder.myDocuments;  
sourceFolder = folder.selectDlg("source");
alert (sourceFolder);
//sourceFolder = Folder.selectDialog( 'Select the folder with Illustrator files you want to stack', '~' );  
//var targetFile = "C:\TEMPai\script\test stack\save\stackA.pdf";

// If a valid folder is selected
if(sourceFolder != null){
files = new Array();
newitem = new Array();
	fileType = prompt( 'Select type of Illustrator files to you want to process. Eg: *.ai', '*.pdf' );
	// Get all files matching the pattern
	files = sourceFolder.getFiles( fileType );
	if ( files.length > 0 ){ 				                //  number of files   
        for ( i = 0; i < files.length; i++ ){           	// iterate through files num
            var sourceDoc = app.open(files[i]);     		// returns the document object 
            j=1
			k=1
			//var j = (i+1) Math.mod (13)
            //var k = Math.ceil ((i+1)/4)
            var doc = app.activeDocument;
            for (l = 0; l < doc.pageItems.length-1; l++) { 	//pageItems  L
                doc.pageItems[l].selected = true;				
				//alert(scriptID + "\nSelection was empty. Did select " + doc.selection.length.toString() + " page items");
            }
			if ( activeDocument.selection.length > 0 ) {
                var mySel = app.activeDocument.selection;
				sourceDoc.resize(0.07,0.07)
                app.executeMenuCommand('copy');
                targetFile.activate();
                newItem = app.executeMenuCommand('paste front');
                //var newItem = app.activeWindow.activeSpread.groups.add(mySel);
                // New Coords for dupicated object
                var newX = (87.5*(j - 1) -50)*2.83465;
                // var newY = (280*(k - 1) -500)*2.83465;
                newItem.position = ([newX,newY]);
                mySel.resize([0.07, 0.07]); 
            }else{  
                alert( 'empty selection' );
            }
			sourceDoc.close(SaveOptions.DONOTSAVECHANGES);			//debug intented last posisiton
			var doc = null;
			alert( 'Files are saved as xxx in ' + destFolder );
		}
	}
}


/*********************************************************

====PLAN2====
0.01 open doc
0.02 select doc
>0.1 duplicate
0.11 duplicate with offset and ref corner
0.2 resize
0.3 parameters on top
0.4 rebuild layers with action script recompo
0.5 no GUI


 ====core functionality====
0) open folder and open all files inside then switch to next folder
1) paste each file into a single pdf for printing
2) copy paste content should set group name or a layer or both (group for each neutral + michair layer)
3) close files

**********************************************************/

/*PASTEBIN
 var fileRef = "C:/myImage.jpg";  
app.open( new File( fileRef ) ); 

    // Generic form  
    f = Folder.selectDialog("wot");  
    alert (f);  
      
    // Pre-selected starting point  
    folder = new Folder("/usr/bin");  
    f = folder.selectDlg("wot");  
    alert (f);  
      
    // Pre-defined starting point  
    folder = Folder.myDocuments;  
    f = folder.selectDlg("wot");  
    alert (f); 

BIN
				//var mySel =     app.select(app.activeWindow.activePage.allPageItems);  
				//var mySel = doc.selection;
				//app.selection = app.activeDocument; 
				//mySel=app.selection
				// var mySel = app.activeDocument.pages.item(0).allPageItems; //blind sel
				//var mySel = app.activeWindow.activeSpread.pageItems;                     //visible sel
				//app.activeWindow.activeSpread.groups.add(mySel);
				//app.select(mySel);
				
				//var newGroup = targetFile.groupItems.add()
				//for ( j = 0; j < targetFile.group; j++ )
                //translate(mySel)
				//targetFile =				
*/