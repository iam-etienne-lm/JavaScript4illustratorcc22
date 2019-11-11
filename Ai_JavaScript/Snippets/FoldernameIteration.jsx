#target Illustrator-21
#script "ctl replo typo 00"
"use strict"
$.level=2;
main();
$.write("typo check ok >");
$.gc();

function main(){ 
    var fileType = "*.pdf", f, files,d ,i ,j ,k ,kmax = 10;
    for ( j = 1; j <= 2 ; j++){
        for ( i = 1; i <= 8 ; i++){
            f = Folder("S/DAO "+i +j);
			if(j==2){
				f = Folder("S:/PROJ "+i +j);
			}
			files = f.getFiles( fileType );
			kmax = files.length-1;
			for ( k = 0 ;k <= kmax; k++){
				//d = app.open(files[k]);
				$.write("i"+i+"k"+k+" - ");
            }
        }
    }
}

function can_open(){
    
}
