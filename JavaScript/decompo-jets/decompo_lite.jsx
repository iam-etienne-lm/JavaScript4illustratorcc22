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