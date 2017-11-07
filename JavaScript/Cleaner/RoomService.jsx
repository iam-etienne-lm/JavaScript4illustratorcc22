#target Illustrator-22
#script "ROOMSERVICE"
"use strict"
$.gc();
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("cleaned/saved")
$.gc();

function main(){ //reverse order
        var docs=app.documents;
        var i =docs.length-1;
        var d
        app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
        for ( ; i >= 0; i-- ){
            d=docs[i]; //DOCUMENTS - ok
            app.redraw(d);
                //unselect();
                //0unhide_Layer(d);
                //unlock_pi0(d); //long 
                //remthings(d);
                //addthings(d);
                //closer(d);
                var force=false
                saver(d,force);
                //tvect(d);
                //testnonvect(d);
                //rem_w(d);
            $.write(i+" ,");
    }
}

function selgp(d){
    var g = d.layers['trace'].groupItems;
    var i = g.length-1;
    for ( ; i>=0 ; i--){
        g[i].selected=true;
        app.executeMenuCommand('Live Pathfinder Outline');
        //var p = g.pathItems
    }
}

function tvect(d){
    d.selection=null;
    var tf= d.layers['trace'].textFrames;
    var i = tf.length-1;
	for ( ; i>=0 ; i--){
	    tf[i].selected=true;
	    d.selection[0].createOutline();
	    $.sleep(300);
	    app.executeMenuCommand('Live Pathfinder Outline');
	    $.sleep(50);
        }
    }

function testnonvect(d){
    d.activate();
    var tf= d.layers['trace'].textFrames;
    var i = tf.length-1;
        for ( ; i>=0 ; i--){
            alert(d+" txt");
        }
    }

function unselect(){
        app.selection=null;
}

function unhide_Layer(d){
    var dl=d.layers;
	for (var k = 0; k < dl.length; k++ ){				//TODO set names instead of nb
		dl[k].visible = true;
	}
}

function unlock_pi0(d){	//TIME CONSUMING 
    var p=d.pageItems;
	for (var k = 0; k < p.length; k++ ){				//TODO set names instead of nb
		p[k].locked = false;
	}
}

function rem_w(d){
        
        var w=d.layers['reperage - plots'].pageItems.length;
        //var v = w-1
        //d.layers['neutre'].pageItems[v].selected=true
        //d.layers['neutre'].pageItems[v].remove;
        var pi = d.layers['reperage - plots'].pageItems
        for (v=w-1; v>=0 ; v--){
                if (pi[v].fillcolor=='GrayColor'){
                    pi[v].remove();
                }else if (pi[v].filled==false){                    
                    pi[v].remove();   
                    
              }
            }
    }

function remthings(d){
    var p = d.layers[x].pageItems; 
    var j = p.length-1;
    for ( ; j>=0 ; j--){
        
        p[j].remove();
    }
}

function addthings(d){
    var t1=d.name;
    var text1 = d.textFrames.pointText( [650,550] );
    text1.contents = t1;    
}

function closer(d){ 
			d.close(SaveOptions.DONOTSAVECHANGES);
}

function saver(d,force){
        //ISSUE: CLOSE MAY FAIL in bugged mode
		//var saveOptions = new IllustratorSaveOptions();  
		//saveOptions.pdfCompatible = false;  
		//d.save(d.fullname, saveOptions);  
		//d.saved = true;
        switch(force){
        case true:
            d.close(SaveOptions.SAVECHANGES);//should do saveas instead
        
        default:
                if(d.saved==false){
                d.close(SaveOptions.SAVECHANGES);
            }else{
                d.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
}

function saver2(){
    var destFolder, sourceFolder, files, fileType, sourceDoc, targetFile, pdfSaveOpts;
			// Call function getNewName to get the name and file to save the pdf
			targetFile = getNewName();			
			// Call function getPDFOptions get the PDFSaveOptions for the files
			pdfSaveOpts = getPDFOptions( );			
			// Save as pdf
			sourceDoc.saveAs( targetFile, pdfSaveOpts );			
			sourceDoc.close();
		
		//alert( 'Files are saved as PDF in ' + destFolder );
}

function getNewName()//SAVER2
{
	var ext, docName, newName, saveInFile, docName;
	docName = sourceDoc.name;
	ext = '.pdf'; // new extension for pdf file
	newName = "";
		
	for ( var i = 0 ; docName[i] != "." ; i++ )
	{
		newName += docName[i];
	}
	newName += ext; // full pdf name of the file
	
	// Create a file object to save the pdf
	saveInFile = new File( destFolder + '/' + newName );
	

	return saveInFile;
}

function getPDFOptions()//SAVER2
{
	// Create the PDFSaveOptions object to set the PDF options
	var pdfSaveOpts = new PDFSaveOptions();
	
	pdfSaveOpts.acrobatLayers = true;
	pdfSaveOpts.colorBars = true;
	pdfSaveOpts.colorCompression = CompressionQuality.AUTOMATICJPEGHIGH;
	pdfSaveOpts.compressArt = true; //default
	pdfSaveOpts.embedICCProfile = true;
	pdfSaveOpts.enablePlainText = true;
	pdfSaveOpts.generateThumbnails = true; // default
	pdfSaveOpts.optimization = true;
	pdfSaveOpts.pageInformation = true;
	
	// uncomment to view the pdfs after conversion.
	// pdfSaveOpts.viewAfterSaving = true;
	
	return pdfSaveOpts;
}
