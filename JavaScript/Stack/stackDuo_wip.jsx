#target Illustrator-21
#script "stackDigital F7.43 mod"
"use strict"
$.write(" ok s>")
$.gc();
main();
$.gc();

function main(){
//INIT
	var fileType = "*.pdf",
	daoFolder = Folder ("S:/MONTAGES/archive/DAO"),					//y.test OK > F7
	files2 = [],
	outputFile = File ("S:/MONTAGES/02.ai"),
	o= app.open (outputFile);
	files2 = daoFolder.getFiles( fileType );
	if ( files2.length =! 0 ){
			for ( var i = 0; i < files2.length; i++ ){//AT EACH i ITERACTION EVENTS DO THINGS
				var d = app.open(files2[i]);
                    rem_plug(d);
				unhide_Layer(d);
                     selector2();
                    scalex();
                    app.redraw();
                   duplicatex(d, o);
                    app.redraw();
                   d.close(SaveOptions.DONOTSAVECHANGES);
                   movexy(i);
				app.redraw();
				$.write(" || "+i+"i || ");
            }
    }
	//outputDoc.close(saveOptions.SAVECHANGES);
}

function rem_plug(d){
            var p = d.pluginItems;
            if (p.length>0){
                var k = p.length-1;
                for ( var k = p.length-1; k >=0; k-- ){
                    p[k].remove();
                }
            }
}

function unhide_Layer(d){											// K LAYERS
	for ( var k = 0; k < d.layers.length; k++ ){				//TODO set names instead of nb
		d.layers[k].visible = true;
    }
}

function selector1(){
	for ( var l = 0; l < app.activeDocument.pageItems.length-1; l++) { 	//pageItems  L
		app.activeDocument.pageItems[l].selected = true;
	}
}

function deselector(d){
	for ( var l = 0; l < d.pageItems.length-1; l++) { 	//pageItems  L
		app.activeDocument.pageItems[l].selected = false;
	}
}

function selector2(){
	app.executeMenuCommand('selectallinartboard');
}

function mergetwin(){ 													//active doc!!!
	if(impFile != null){
		daoFile.activate();
		selector();
		if ( app.activeDocument.selection.length > 0 ) {
			app.executeMenuCommand('copy');
			impFile.activate();
			app.executeMenuCommand('pasteFront');
		}else{  
			alert( 'empty selection' );
		}
	}
}

function scalex(){
	var set = 'a1', // action set name  
	action = 'a1', // action name 
    s=5.0,
actionStr = ['/version 3',
'/name [' + set.length,  
  ascii2Hex(set),				//script_action1
']',
'/isOpen 1',
'/actionCount 1',
'/action-1 {',
	'/name ['+ action.length,  
	ascii2Hex(action), 							//scale10
	']',
	'/keyIndex 0',
	'/colorIndex 0',
	'/isOpen 1',
	'/eventCount 1',
	'/event-1 {',
		'/useRulersIn1stQuadrant 0',
		'/internalName (adobe_scale)',
		'/localizedName [ 18',
			'4d69736520c3a0206c27c3a96368656c6c65', //mise a l'echelle/scale
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
			'/value '+s,							//Should be the %
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

function reframe(){
	var set = 'a2', // action set name  
	action = 'a2', // action name  
actionStr = ['/version 3',
'/name [' + set.length,  
  ascii2Hex(set),				
']',
'/isOpen 1',
'/actionCount 1',
'/action-1 {',
	'/name ['+ action.length,  
	ascii2Hex(action),
'	]',
'	/keyIndex 0',
'	/colorIndex 0',
'	/isOpen 1',
'	/eventCount 1',
'	/event-1 {',
'		/useRulersIn1stQuadrant 0',
'		/internalName (adobe_commandManager)',
'		/localizedName [ 32',
'			416363c3a964657220c3a020756e6520636f6d6d616e6465206465206d656e75',
'		]',
'		/isOpen 0',
'		/isOn 1',
'		/hasDialog 0',
'		/parameterCount 3',
'		/parameter-1 {',
'			/key 1769238125',
'			/showInPalette -1',
'			/type (ustring)',
'			/value [ 28',
'				46697420417274626f61726420746f2073656c656374656420417274',
'			]',
'		}',
'		/parameter-2 {',
'			/key 1818455661',
'			/showInPalette -1',
'			/type (ustring)',
'			/value [ 40',
'				416a757374657220c3a0206c27696c6c757374726174696f6e2073c3a96c6563',
'				74696f6e6ec3a965',
'			]',
'		}',
'		/parameter-3 {',
'			/key 1668114788',
'			/showInPalette -1',
'			/type (integer)',
'			/value -2130706017',
'		}',
'	}',
'}'].join('\n');
loading(action, actionStr, set);
}

function duplicatex(d, o){
	if (d != null){		
		if ( d.selection.length > 0 ) {
			app.executeMenuCommand('copy');
			o.activate();
			app.executeMenuCommand('pasteFront');
		}else{  
			alert( 'empty selection' );
		}
	}
}

function movexy(i){
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
    unit=72/25.4
	amalwidth=87.5,							//col step
	amalheigth=280,                                 //row step
	x = Math.floor((30 + hpos*amalwidth ) *unit), //mm conversion follows +right
	y = Math.floor((30 + vpos*amalheigth) *unit)*(-1); //mm -below

//CODE
	if ( i>=10){
		$.write("[[hpos="+hpos+" vpos="+vpos+"]] //x="+x+" y="+y+"\\ ");
	}else{
        $.write(" "+vpos+" "+hpos+" ");
    }
	var set = 'a3',
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
	app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
	createAction(actionStr, set);     
	app.doScript(action, set);   
	app.unloadAction (set, '');
	app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS
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
