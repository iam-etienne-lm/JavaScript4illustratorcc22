#target illustrator-21
#script recompo_js

"use strict"
canopener();
$.write ("ok");
$.gc();

function canopener(){
	var sort=[];
	var sourceFolder = Folder ("C:/TEMPai/F7/output/dao");		//y.test or F7
	var files1 = [];
    var fileType = "*.pdf"; //pdf
	files1 = sourceFolder.getFiles( fileType );    
	if ( files1.length != 0 ){
		var i=0;
		for ( ; i < files1.length; i++ ){			//AT EACH i ITERACTION EVENTS DO THINGS
			doc = app.open(files1[i]);
			app.redraw();
			main(doc);
		}
	}		
}

function main(){
	//alert(doc)             /*DEBUG*/
	sort_raw2(doc);
	app.redraw();
	$.sleep (50);
	app.redraw();
	sort_raw2(doc);
}
	

function sort_raw2(){	//v2 is extended
    //NB: CANNOT COMPARE STROKECOLORS(3*1) 
	//TODO: change algo to use val instead of object
    //TODO: 1)optimize 2)parameter
	  // var  doc = app.activeDocument;  
	var red1 = new RGBColor();
    var blue1 = new RGBColor();
    var purp1 = new RGBColor();
	var black1 = new RGBColor();//points
	var test1 = new RGBColor();	//testcolor top
	var test2 = new RGBColor();	//testcolor bottom
	var blue2 = new RGBColor(); //remfram
	red1.red = 255, red1.green = 0, red1.blue = 0;	
	blue1.red = 0, blue1.green = 0, blue1.blue = 255;	  
	purp1.red = 128, purp1.green = 0, purp1.blue = 255;
	black1.red = 0, black1.green = 0, black1.blue = 0;
	test1.test = 0, test1.green = 118, test1.blue = 179;
	test2.red = 152, test2.green = 116, test2.blue = 101;
	blue2.red = 0, blue2.green = 126, blue2.blue = 196;
    var r1=doc.pathItems.add();
    var b1=doc.pathItems.add();
    var p1=doc.pathItems.add();
	var k1=doc.pathItems.add();	
	var t1=doc.pathItems.add();
	var t2=doc.pathItems.add();
	var b2=doc.pathItems.add();
    r1.stroked = true;
    b1.stroked=true;
    p1.stroked=true;
    k1.stroked = false, k1.filled=true;
    t1.stroked = false, t1.filled=true;
    t2.stroked = false, t1.filled=true;
    b2.stroked = true;
    r1.strokeColor=red1;
    b1.strokeColor=blue1;
    p1.strokeColor=purp1;
    k1.fillColor=black1;
    t1.fillColor=test1;
    t2.fillColor=test2;
    b2.strokeColor=blue2;
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
			}else if(p.fillColor.red==k1.fillColor.red&&p.fillColor.green==k1.fillColor.green&&p.fillColor.blue==k1.fillColor.blue){
				p.move(doc.layers[2], ElementPlacement.INSIDE);
			}else if(p.fillColor.red==t1.fillColor.red&&p.fillColor.green==t1.fillColor.green&&p.fillColor.blue==t1.fillColor.blue){
				p.move(doc.layers[2], ElementPlacement.INSIDE);
			}else if(p.fillColor.red==t2.fillColor.red&&p.fillColor.green==t2.fillColor.green&&p.fillColor.blue==t2.fillColor.blue){
				p.move(doc.layers[2], ElementPlacement.INSIDE);
			//}else if(p.strokeColor.red==b2.strokeColor.red&&p.strokeColor.green==b2.strokeColor.green&&p.strokeColor.blue==b2.strokeColor.blue){
				//p.remove();
			}else{
			}				
		}
    app.redraw();
	$.write("FILE "+j+" "+pr+" "+pb+" "+pp+" "+pk+" ");
    r1.remove();
    b1.remove();
    p1.remove();
    k1.remove();
    t1.remove();
    t2.remove();
    b2.remove();

	 
}
