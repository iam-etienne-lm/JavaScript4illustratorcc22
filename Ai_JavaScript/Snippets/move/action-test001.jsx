outputFile = File("C:/TEMPai/F5/output/1test.pdf");
outputDoc = app.open (outputFile);
selector2();
movexy();
var i = 0

function selector2(){
	app.executeMenuCommand('selectallinartboard');
}

function movexy(){
var hpos=null
var vpos=null
var x=null
var y=null
var amalwidth=null
var amalheigth=null
hpos=i+1
vpos=-1	//1 for i<13
amalwidth=87.5	//step increase
amalheigth=280
x = hpos*amalwidth*72/25.4; //mm conversion follows +right
y = vpos*amalheigth*72/25.4; //mm -below
set = 'script_test002'; // action set name  
action = 'test002'; // action name  
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
'			/value ' +x,
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
'			/value ' +y,
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