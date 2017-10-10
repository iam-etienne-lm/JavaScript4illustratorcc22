#target Illustrator-21
#script export_text_simply
//GLOBAL
var textlist;
//INIT
textlist=null
//CODE
makelist();
exportlist(textlist);

function makelist(){
	textlist = [];
	doc=app.activeDocument
	textlist.push(doc.name);
    var text_frames=doc.textFrames;
	for ( var i = 0; i < text_frames.length; i++ ){
		textlist.push(text_frames[i].contents);
	}
}

function exportlist(){
	var tbuffer = ""
	var fpath = Folder( "C:/TEMPai/y.test/");
	var file_export = File(fpath + '/'+ 'export1.txt');
	file_export.open('w');
	var tbuffer = file_export.read()
	// while (!file_export.eof) {
		// tbuffer += file_export.readln() + "\n";
	// }
	file_export.write(tbuffer+"\n"+textlist);
    alert(+textlist)
}
