#target Illustrator-21
//global
var i,set,action,actionStr,outputDoc,daoFile,impFile,stuff;
//INIT
var i = null;
var set = null;
var action = null;
var actionStr = null;
var outputDoc = null;
var daoFolder = null;
var impFolder = null;
var fileType = null;
var daoFile  = null;
var impFile  = null;
var stuff = null;
var doc = null;

//CODE
var scriptID = "stack_master v1.3bF6";
var fileType = "*.pdf";
opentwinfolder();

function opentwinfolder(){
daoFolder = Folder ("C:/TEMPai/F6/input/dao");								//y.test or F5
impFolder = Folder ("C:/TEMPai/F6/input/imp");	
var files1 = [];
var files2 = [];
files1 = daoFolder.getFiles( fileType );
files2 = impFolder.getFiles( fileType );
outputFile = File("C:/TEMPai/F6/output/1.pdf");
outputDoc = app.open (outputFile);
	if ( files1.length != 0 ){
		if ( files2.length = files1.length){	
			for ( i = 0; i < files1.length; i++ ){									//AT EACH i ITERACTION EVENTS DO THINGS
				daoFile = app.open(files1[i]);
					unhide_Layer();														//event 1/5 pre-process 1
					
				impFile = app.open(files2[i]);
					unhide_Layer();
					
				mergetwin();														//event 2/5 paste DAO front of IMP
					daoFile.close(SaveOptions.DONOTSAVECHANGES);	
					impFile.activate();
					app.activeDocument.layers[4].visible=false;
					selector2();														//focus whole doc not only DAO
					scalex();
					
					impFile.activate();
					selector2();
					reframe();
				
				impFile.activate();
				selector2();
				duplicatex();														//event 4/5
				impFile.close(SaveOptions.DONOTSAVECHANGES);
				outputDoc.activate();
				movexy(i);															//event 5/5
			}
		}
	}
//outputDoc.close(saveOptions.SAVECHANGES);
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
}

function unhide_Layer(){															// K LAYERS
	var k=null;
	var doc_f1=null;
	doc_f1=app.activeDocument;
	for ( k = 0; k < doc_f1.layers.length; k++ ){				//TODO set names instead of nb
		doc_f1.layers[k].visible = true;
	}
}

function selector(){
	var l
	for (l = 0; l < app.activeDocument.pageItems.length-1; l++) { 	//pageItems  L
		app.activeDocument.pageItems[l].selected = true;
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
set = 'script_action1'; // action set name  
action = 'scale7'; // action name  
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
			'/value 7.0',							//Should be the 7%
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
loading();
} 

function reframe(){
set = 'script_action2'; // action set name  
action = 'reframe'; // action name  
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
loading();
}

function duplicatex(){ 													//active doc!!!
	if (impFile != null){		
		if ( impFile.selection.length > 0 ) {
			app.executeMenuCommand('copy');
			outputDoc.activate();
			app.executeMenuCommand('pasteFront');
		}else{  
			alert( 'empty selection' );
		}
	}
}

function movexy(i){ //action error "continue or stop" not critical
var hpos=null
var vpos=null
var x=null
var y=null
var amalwidth=null
var amalheigth=null
hpos= i%12
vpos= Math.floor(i/12)	//0 for i<13
if (vpos==0 && i>12){
vpos = Math.floor(i/12)	
}
amalwidth=87.5	//step increase
amalheigth=280
x = hpos*amalwidth*72/25.4; //mm conversion follows +right
y = (-1)*vpos*amalheigth*72/25.4; //mm -below
set = 'script_action7';   
action = 'move_xy7';   
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
'	/eventCount 2',
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
'			/value -0.0',
'			/unit 592476268',
'		}',
'		/parameter-3 {',
'			/key 1668247673',
'			/showInPalette -1',
'			/type (boolean)',
'			/value 0',
'		}',
'	}',
'	/event-2 {',
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
'			/value 0.0',
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
loading();
} 

function loading(){
	createAction(actionStr, set);     
	app.doScript(action, set);   
	app.unloadAction (set, '');   
}

function createAction (actionStr, set) {
	app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
    var fpath =null
	var fpath = Folder ("C:/TEMPai/y.script/script-test/anothertest/");
    var f = null
	var f = File(fpath + set + '.aia');  
	f.open('w');  
	f.write(actionStr);  
	f.close();  
	app.loadAction(f);  
	f.remove();  
}  
  
function ascii2Hex (hex) {  
	return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})  
}