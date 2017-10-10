#target Illustrator-21
#script "export_text_for_list"
"use strict"
$.level=2;
main();
$.write("extex ok >");
$.gc();

function main(){
//INIT
        var fileType = "*.pdf", i , imax, d, f = [] , sF = [], j , jmax;
        
        var tL =[]
        //sF[0] = Folder ("S:/Articles/Espace Travail/313/313023-XX JOON A320/°DOSSIER DE TRAVAIL/Kitting/Source");
        sF[1] = Folder ("S:/Source/01");
        sF[2] = Folder ("S:/Source/02");
        sF[3] = Folder ("S:/Source/04");
        sF[4] = Folder ("S:/Source/07");
        sF[5] = Folder ("S:/Source/08");
        sF[6] = Folder ("S:/Source/09");
        jmax = sF.length;
        j=2
        for ( ; j < jmax; j++ ){
        //sF[0] = Folder ("S:/Articles/Espace Travail/313/313023-XX JOON A320/°DOSSIER DE TRAVAIL/Kitting/Source");


//MAIN CODE    
        f = sF[j].getFiles( fileType );
        i = 0;
    imax = f.length; //files
    if ( f.length != 0 ){
                for ( ; i < imax; i++ ){
                    d= app.open (f[i]);
                        makelist(d, tL);
                        
                        exportlist(tL);
                    d.close(SaveOptions.DONOTSAVECHANGES);
                    $.write(" || "+i+"i || ");
                }
     }
    }
}

function makelist(d, tL){
    //tL = []; //text array
    var tF = d.textFrames; //array
	tL.push(d.name);
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
    //alert(+tL)
}
