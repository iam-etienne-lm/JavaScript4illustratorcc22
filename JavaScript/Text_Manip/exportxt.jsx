#target Illustrator-21
#script "export_text_for_list"
"use strict"
$.level=2;
main();
$.write("extex ok >");
$.gc();

function main(){
//INIT
        var fileType = "*.pdf", i , imax, d, f = [] , sF = [];
        //sF[0] = Folder ("S:/Articles/Source");
        sF[1] = Folder ("S:/Articles/Espace Travail/313/313023-XX JOON A320/°DOSSIER DE TRAVAIL/Kitting/Source/01");
        //sF[2] = Folder ("S:/Articles/Source/02");
        //sF[3] = Folder ("S:/Articles/Source/04");
        //sF[4] = Folder ("S:/Articles/Source/07");
        //sF[5] = Folder ("S:/Articles/Source/08");
        //sF[6] = Folder ("S:/Articles/Source/09");

//MAIN CODE    
        f = sF[1].getFiles( fileType );
        i = 0;
    imax = f.length; //files
    if ( f.length != 0 ){
                for ( ; i < imax; i++ ){
                    d=f[i];
                    app.open(d);
                        makelist(d);
                        exportlist(tL);
                    d.close(SaveOptions.DONOTSAVECHANGES);
                    $.write(" || "+i+"i || ");
                }
    }
}

function makelist(d){
	var tL = []; //text array
	tL.push(d.name);
    var tF = d.textFrames; //array
	for ( var i = 0; i < tF.length; i++ ){
		tL.push(tF[i].contents);
	}
    return (tL);
}

function exportlist(tL){
	var tbuffer = ""
	var fpath = Folder( "S:/Articles/Kitting");
	var file_export = File(fpath + '/'+ 'export1.txt');
	file_export.open('w');
	var tbuffer = file_export.read()
	file_export.write(tbuffer+"\n"+tL);
    alert(+tL)
}
