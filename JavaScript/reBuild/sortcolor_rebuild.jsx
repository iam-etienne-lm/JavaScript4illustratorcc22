#target illustrator-21
#script recompo_js

"use strict"
canopener();
$.write ("ok");
$.gc();

function canopener(){
	var sort=[];
	var sourceFolder = Folder ("C:/TEMPai/F7/output/dao");								//y.test or F5
	var files1 = [];
    var fileType = "*.pdf"; //pdf
	files1 = sourceFolder.getFiles( fileType );    
	if ( files1.length != 0 ){
		var i=0;
		for ( ; i < files1.length; i++ ){									//AT EACH i ITERACTION EVENTS DO THINGS
			doc = app.open(files1[i]);
              app.redraw();
			main(doc);
             remfram(doc)
		}
	}		
}

function main(){
	//alert(doc)             /*DEBUG*/
	sort_raw(doc);
	app.redraw();
	$.sleep (50);
	sort_raw(doc);
}
	

function sort_raw(){
    //NB: CANNOT COMPARE STROKECOLORS(3*1) 
    //TODO: 1)optimize 2)parameter
	// var  doc = app.activeDocument;  
	var red1 = new RGBColor();
    var blue1 = new RGBColor();
    var purp1 = new RGBColor();
	red1.red = 255, red1.green = 0, red1.blue = 0;	
	blue1.red = 0, blue1.green = 0, blue1.blue = 255;	  
	purp1.red = 128, purp1.green = 0, purp1.blue = 255;
    var r1=doc.pathItems.add();
    var b1=doc.pathItems.add();
    var p1=doc.pathItems.add();
    r1.stroked = true;
    b1.stroked=true;
    p1.stroked=true;
    r1.strokeColor=red1;
    b1.strokeColor=blue1;
    p1.strokeColor=purp1;
	var j=0;
	var pr,pb,pp,pk; 										//DEBUG VAR
	pr=0,pb=0,pp=0,pk=0;
    
	for ( ; j < doc.pathItems.length; j++ ){
		var p=doc.pathItems[j];
        //$.write(p.strokeColor.red+" "+p.strokeColor.blue+" ");
			if(p.strokeColor.red==r1.strokeColor.red&&p.strokeColor.green==r1.strokeColor.green&&p.strokeColor.blue==r1.strokeColor.blue){
				p.move(doc.layers[3], ElementPlacement.INSIDE);
				pr++;
			}else if(p.strokeColor.red==b1.strokeColor.red&&p.strokeColor.green==b1.strokeColor.green&&p.strokeColor.blue==b1.strokeColor.blue){
				p.move(doc.layers[1], ElementPlacement.INSIDE);
				pb++;
			}else if( p.strokeColor.red==p1.strokeColor.red&&p.strokeColor.green==p1.strokeColor.green&&p.strokeColor.blue==p1.strokeColor.blue){
				p.move(doc.layers[5], ElementPlacement.INSIDE);
				pp++;
				var e3="0 mm";
			}else if(p.strokeWidth==e3){
				p.move(doc.layers[4], ElementPlacement.INSIDE);
				pk++;
			}else{
			}				
		}
    app.redraw();
	$.write(pr+" "+pb+" "+pp+" "+pk+" ");
    r1.remove();
    b1.remove();
    p1.remove();
	 
}

/* wiiiip idea
function sort_by_id2(clr,li){ //COLOR,LAYER_INDEX
	var  doc = app.activeDocument;  
    var c1=clr;
    var pc1=doc.pathItems.add();
    pc1.stroked = true;
    pc1.strokeColor=red1;
	var j=0;
	for ( ; j < doc.pathItems.length; j++ ){
		var p=doc.pathItems[j];
        app.redraw();
              if(sort[j]===true){
			}else if(p.strokeColor==pc1.strokeColor){
				p.move(doc.layers[li], ElementPlacement.INSIDE);
                sort.push(true)
              }else{
                sort.push(false)
				}				
		}
    }
*/
