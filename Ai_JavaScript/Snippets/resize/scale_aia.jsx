#target Illustrator-21
#script "scale"
"use strict"
$.gc();
app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("scaled")

function main(){ //reverse order
    var docs=app.documents;
    var i =docs.length-1;
    var d
    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS
    for ( ; i >= 0; i-- ){
        d=docs[i];
        scale (d)
        $.write(" ,"+i);
    }
}

function scale(d){
    //out of bounds errors
    app.executeMenuCommand('selectallinartboard');
    var x=1000;
    var set = 's1'; // action set name  
    var action = 'a1'; // action name  
    var actionStr = ['/version 3',
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
			'/value 0',
		'}',
		'/parameter-3 {',
			'/key 1935895653',
			'/showInPalette -1',
			'/type (unit real)',
			'/value '+x,							//Should be the x%
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

createAction(actionStr, set);     
app.doScript(action, set);   
app.unloadAction (set, '');
}
  
function createAction (actionStr, set) {  
  var fpath = Folder ("C:/TEMPai/y.script/script-test") //avoids "C:/pgmfiles"
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
