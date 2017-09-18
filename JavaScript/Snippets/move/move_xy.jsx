#target Illustrator-21

var scriptID = "action_move_xy v1.0";
var set = 'script_action2'; // action set name  
var action = 'move_xy'; // action name  
var actionStr = ['/version 3',
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
'			/value 398.9323755551',				//X horizontal mm*0.3527777778
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
'			/value -1178.81308',				//Y vertical mm/0.35
'			/unit 592476268',
'		}',
'		/parameter-3 {',
'			/key 1668247673',
'			/showInPalette -1',
'			/type (boolean)',
'			/value 0',
'		}',
'}',].join('\n'); 

createAction(actionStr, set);     
app.doScript(action, set);   
app.unloadAction (set, '');   
  
function createAction (actionStr, set) {  
  var fpath = Folder ("C:/TEMPai/y.script/script-test/anothertest")
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