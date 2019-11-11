#target Illustrator-22
#script "stackDuo 1.61 noMove"
"use strict"
$.level=2; //allows stops
head();
$.gc();
$.write(" ok sd>"+'\n');

function head(){
    //EACH BATCH MUST HAVE xx NUMBERS ie: 02
    var Folder1, Folder2, r;
	//WARNING ANTISLASH NOT ALLOWED
    Folder1 = Folder ("C:/TEMPai/F13/ech5/D10");//DAO
    Folder2 = Folder ("C:/TEMPai/F13/ech5/I10");//IMP
    main(Folder1, Folder2,r);
    r=2;
    Folder1 = Folder ("C:/TEMPai/F13/ech5/D20");
    Folder2 = Folder ("C:/TEMPai/F13/ech5/I20");
    main(Folder1, Folder2,r);
    }

function main(Folder1, Folder2, r){
//INIT
	var fileType = "*.pdf",
    	
    files1 = [],
	files2 = [],
    o, i , imax,
	outputFile = File ("C:/TEMPai/F10/ech5/o1.ai");
    
    // if(outputFile !== ""){
          // o= app.open (outputFile);
    // }
//MAIN
    files1 = Folder1.getFiles( fileType ); //DAO
	files2 = Folder2.getFiles( fileType ); //IMP
    imax = files2.length; // LENGTH = i + 1
	var test2= files1.length; 
	if ( files2.length == files1.length ){
        //o= app.open(outputFile);
		for (i = 0; i < imax; i++ ){
                //D TYPE MUST BE A DOC, NOT A FILE
                    //o.activate();
                    var d1 = app.open(files1[i]);
                    var d2 = app.open(files2[i]);
                    preprocess( d1 );
                    preprocess( d2 );
                            //app.redraw();
                    mergetwin(d1, d2); //Paste d1 over d2 | conerve layers during must be enabled
                    //duplicatex(d2, o);
                            //app.redraw();
                   d1.close(SaveOptions.DONOTSAVECHANGES);
                   //d2.close(SaveOptions.DONOTSAVECHANGES);                  
                   //movexy(i, r);
                            app.redraw();
				$.write(" || "+i+"i || ");
		}
    }
    r++;
    return (r);
	//outputDoc.close(saveOptions.SAVECHANGES);
}

function preprocess( d ){        
        unhide_Layer(d); //unecessary first
        rem_plug(d)
        //d.activate();
        //selector2();
        //sizex();      //DOC BOUNDS MUST END AT PLOTS
        //scalex();               
        //selector2();
        //return (d);
}

/* function rem_w(d1){
        var w=d1.layers['neutre'].pageItems.length;
        var v = w-1;
        d1.layers['neutre'].pageItems[v].remove();
     }*/


function rem_plug(d){
            var p = d.pluginItems;
            if (p.length>0){
                $.write("p");
                var k = p.length-1;
                for ( ; k >=0; k-- ){
                    p[k].remove();
                }
            }
}

function unhide_Layer(d){											// K LAYERS
	for ( var k = 0; k < d.layers.length; k++ ){				//TODO set names instead of nb
		d.layers[k].visible = true;
		d.layers[k].locked = false;
    }
}

function selector2(){
	app.executeMenuCommand('selectallinartboard');
}

function mergetwin(d1, d2){ 													//active doc!!!
	if(d2 !== null){
		d1.activate();
		selector2();
		if ( d1.selection.length > 0 ) {
			app.executeMenuCommand('copy');
			d2.activate();
			app.executeMenuCommand('pasteFront');
		}else{  
			alert( 'empty selection' );
		}
	}
}

function sizex(){
var set = 's0', // action set name  
	action = 'a0', // action name 
    mm2pt=72/25.4,
    a=62.5 * mm2pt,//mm
actionStr = ['/version 3',
'/name [' + set.length,  
  ascii2Hex(set),
']',
'/isOpen 1',
'/actionCount 1',
'/action-1 {',
'	/name [' + action.length,  
	ascii2Hex(action), 
'	]',
'	/keyIndex 0',
'	/colorIndex 0',
'	/isOpen 1',
'	/eventCount 1',
'	/event-1 {',
'		/useRulersIn1stQuadrant 0',
'		/internalName (ai_plugin_transformPalette)',
'		/localizedName [ 22',
'			50616e6e656175205472616e73666f726d6174696f6e',
'		]',
'		/isOpen 0',
'		/isOn 1',
'		/hasDialog 0',
'		/parameterCount 2',
'		/parameter-1 {',
'			/key 1954115685',
'			/showInPalette -1',
'			/type (enumerated)',
'			/name [ 34',
'				4d69736520c3a0206c27c3a96368656c6c65206465206c61206c617267657572', //keep ratio = true
'				203a',
'			]',
'			/value 2',
'		}',
'		/parameter-2 {',
'			/key 1986096245',
'			/showInPalette -1',
'			/type (unit real)',
'			/value '+a,
'			/unit 592476268',
'		}',
'	}',
'}'].join('\n');
loading(action, actionStr, set);
}

function scalex(){ //NOT WORKING
    selector2();
	var set = 's1', // action set name  
	action = 'a1', // action name 
    s=5.0,   //FACTOR SCALE
actionStr = ['/version 3',
'/name [' + set.length,  
  ascii2Hex(set),
']',
'/isOpen 1',
'/actionCount 1',
'/action-1 {',
	'/name ['+ action.length,  
	ascii2Hex(action), 
	']',
	'/keyIndex 0',
	'/colorIndex 0',
	'/isOpen 1',
	'/eventCount 1',
	'/event-1 {',
		'/useRulersIn1stQuadrant 0',
		'/internalName (adobe_scale)',
		'/localizedName [ 18',
			'4d69736520c3a0206c27c3a96368656c6c65',
		']',
		'/isOpen 0',
		'/isOn 1',
		'/hasDialog 1',
		'/showDialog 0',
		'/parameterCount 4',
		'/parameter-1 {',
			'/key 1970169453',
			'/showInPalette -1',
			'/type (boolean)',
			'/value 1',
		'}',
		'/parameter-2 {',
			'/key 1818848869',
			'/showInPalette -1',
			'/type (boolean)',
			'/value 1',
		'}',
		'/parameter-3 {',
			'/key 1935895653',
			'/showInPalette -1',
			'/type (unit real)',
			'/value '+s,
			'/unit 592474723',
		'}',
		'/parameter-4 {',
			'/key 1668247673',
			'/showInPalette -1',
			'/type (boolean)',
			'/value 0',
		'}',
	'}',
'}'].join('\n');
loading(action, actionStr, set);
} 

function duplicatex(d, o){
	if (d != null){
		d.activate();
        app.executeMenuCommand('selectallinartboard');
		if ( d.selection.length > 0 ) {
			app.executeMenuCommand('copy');
			o.activate();
			app.executeMenuCommand('pasteFront');
		}else{  
			alert( 'empty selection' );
		}
	}
}

function movexy(i, r){ //NOT WORKING
    if (r>1){
        i=i+17;
    }
    //LAISE 1200 : 13 columns  @ 7%
    //LAISE 1200 : 19 columns @ 5%
/*//INIT 7%
	var hpos= i%13,
	vpos= Math.floor(i/13),					//0 for i<13
    unit=72/25.4
	amalwidth=87.5,							//col step
	amalheigth=280,                                 //row step
	x = Math.floor((30 + hpos*amalwidth ) *unit), //mm conversion follows +right
	y = Math.floor((30 + vpos*amalheigth) *unit)*(-1); //mm -below
 */
//INIT 5% test
	var hpos= i%13,
	vpos= Math.floor(i/13),					//0 for i<13
    unit=72/25.4,
	amalwidth=62.5,							//col step
	amalheigth=200,                                 //row step
	x = Math.floor((30 + hpos*amalwidth ) *unit), //mm conversion follows +right
	y = Math.floor((30 + vpos*amalheigth) *unit);//*(-1); //mm -below

//CODE
	if ( i>=0){
		$.write("[[hpos="+hpos+" vpos="+vpos+"]] //x="+x+" y="+y+"\\ ");
	}else{
        $.write(" "+vpos+hpos);
    }
	var set = 's3',
	action = 'a3',
actionStr = ['/version 3',
'/name [ ' + set.length,  
    ascii2Hex(set),
']',
'/isOpen 1',
'/actionCount 1',
'/action-1 {',
'	/name [' + action.length,
	ascii2Hex(action),
'	]',
'	/keyIndex 0',
'	/colorIndex 0',
'	/isOpen 1',
'	/eventCount 1',
'	/event-1 {',
'		/useRulersIn1stQuadrant 0',
'		/internalName (adobe_move)',
'		/localizedName [ 12',
'			44c3a9706c6163656d656e74',
'		]',
'		/isOpen 0',
'		/isOn 1',
'		/hasDialog 1',
'		/showDialog 0',
'		/parameterCount 3',
'		/parameter-1 {',
'			/key 1752136302',
'			/showInPalette -1',
'			/type (unit real)',
'			/value '+x,
'			/unit 592476268',
'		}',
'		/parameter-2 {',
'			/key 1987339116',
'			/showInPalette -1',
'			/type (unit real)',
'			/value '+y,
'			/unit 592476268',
'		}',
'		/parameter-3 {',
'			/key 1668247673',
'			/showInPalette -1',
'			/type (boolean)',
'			/value 0',
'		}',
'	}',
'}'].join('\n');
loading(action, actionStr, set);
} 

function loading(action, actionStr, set){
	app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
	createAction(actionStr, set);     
	app.doScript(action, set);
     $.sleep(500);
	app.unloadAction (set, '');
	app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
}

function createAction (actionStr, set) {
    var fpath = Folder ("C:/TEMPai/y.script/script-test/"),
    f = File(fpath + set + '.aia');
	f.open('w');
	f.write(actionStr);
	f.close(SaveOptions.DONOTSAVECHANGES);
    app.redraw();
	app.loadAction(f);
	f.remove();
}

function ascii2Hex (hex) {
	return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16);});
}
