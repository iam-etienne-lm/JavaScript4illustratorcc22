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

function getNewName()
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

function getPDFOptions()
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
