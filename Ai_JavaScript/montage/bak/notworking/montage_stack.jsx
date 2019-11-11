/*********************************************************
====PLAN1====
0.1 open copy paste on a new doc
0.2 same and reScale
0.3 same and moveAway

====PLAN2====
>0.01 open doc
0.02 select doc
0.1 duplicate
0.11 duplicate with offset and ref corner
0.2 resize
0.3 parameters
0.4 rebuild layers with action script recompo
0.5 no GUI


 ====core functionality====
0) open folder and open all files
1) paste each file into a single pdf for printing
2) copy paste content should set group name or a layer or both (group for each neutral + michair layer)
3) close files

**********************************************************/
#target Illustrator-21
//#targetengine session
// Main Code [Execution of script begins here]
// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var scriptID = "stack v0.02";
var destFolder, sourceFolder, files, fileType, sourceDoc, doc, targetFile, mySel;

// Select the source folder. DISABLED FOR TEST
//sourceFolder = Folder.selectDialog( 'Select the folder with Illustrator files you want to stack', '~' );

//var sourceFolder = "C:\TEMPai\script\test stack";  
//app.open( new Folder( sourceFolder ) ); 

//sourceFolder = Folder.selectDialog("wot");  
//alert (sourceFolder);
// Pre-defined starting point  
folder = Folder.myDocuments;  
sourceFolder = folder.selectDlg("wot");  
alert (sourceFolder);  

// Get the destination to save the files
//destFolder = Folder.selectDialog( 'Select the folder where you want to save.', '~' ); DISABLED FOR TEST
var targetFile = "C:\TEMPai\script\test stack\save\stackA.pdf";

// If a valid folder is selected
if ( sourceFolder != null )
{
  files = new Array();
	fileType = prompt( 'Select type of Illustrator files to you want to process. Eg: *.ai', '*.pdf' );
	
	// Get all files matching the pattern
	files = sourceFolder.getFiles( fileType );
	
	if ( files.length > 0 ) //number of files
	{      
		for ( i = 0; i < files.length; i++ ) // iterate through files num
		{
			var sourceDoc = app.open(files[i]); // returns the document object 
              var doc = app.activeDocument;
              for (i = 0; i < doc.pageItems.length; i++) { 
                            doc.pageItems[i].selected = true;
                      }
              alert(scriptID + "\nSelection was empty. Did select " + doc.selection.length.toString() + " page items");
             //var mySel =     app.select(app.activeWindow.activePage.allPageItems);  
             //var mySel = doc.selection;
            //app.selection = app.activeDocument; 
            //mySel=app.selection
            // var mySel = app.activeDocument.pages.item(0).allPageItems; //blind sel
             //var mySel = app.activeWindow.activeSpread.pageItems;                     //visible sel
            //app.activeWindow.activeSpread.groups.add(mySel);
            //app.select(mySel);
                    if ( activeDocument.selection.length > 0 ) {
                                var mySel = app.activeDocument.selection;

                                // New Coords for your dupicated object
                                newX = 500;
                                newY = 500;

                                if (mySel.length > 0)
                                //{
                                newItem = mySel[0].duplicate();
                                newItem.position = [newX,newY];

                            //duplicate(mySel, targetFile) //<==================CURRENT ERROR
                            //Mysel.resize(0.07, 0.07)
                            
                            
                    }
                    else
                    {   
                            alert( 'empty selection' );
                    }
             
             //var newGroup = targetFile.groupItems.add()
           
             //for ( j = 0; j < targetFile.group; j++ )
                    //translate(mySel)
            {
             }
            
              //targetFile = 
			sourceDoc.close();
		}
		alert( 'Files are saved as xxx in ' + destFolder );
	}
	else
	{
		alert( 'No matching files found' );
	}
}



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
*/









































