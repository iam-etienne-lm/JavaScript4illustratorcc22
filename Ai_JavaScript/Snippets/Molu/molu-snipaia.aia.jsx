#target Illustrator-21
#targetengine main

var set = 'Script Action', // action set name  
  action = 'PastePDF', // action name  
  menuEn = 'paste', // menu English  
  menuZh = '粘贴', // menu Chinese  
  actionStr = ['/version 3',  
  '/name [ ' + set.length,  
  ascii2Hex(set),  
  ']',  
  '/isOpen 0',  
  '/actionCount 1',  
  '/action-1 {',  
  '/name [ ' + action.length,  
  ascii2Hex(action),  
  ']',  
  '/keyIndex 0',  
  '/colorIndex 0',  
  '/isOpen 1',  
  '/eventCount 1',  
  '/event-1 {',  
  '/useRulersIn1stQuadrant 0',  
  '/internalName (adobe_commandManager)',  
  '/localizedName [ 15',  
  'e8aebfe997aee88f9ce58d95e9a1b9',  
  ']',  
  '/isOpen 0',  
  '/isOn 1',  
  '/hasDialog 0',  
  '/parameterCount 3',  
  '/parameter-1 {',  
  '/key 1769238125',  
  '/showInPalette -1',  
  '/type (ustring)',  
  '/value [ ' + menuEn.length,  
  ascii2Hex(menuEn),  
  ']',  
  '}',  
  '/parameter-2 {',  
  '/key 1818455661',  
  '/showInPalette -1',  
  '/type (ustring)',  
  '/value [ ' + menuZh.length * 3,  
  GBK2Hex(menuZh),  
  ']',  
  '}',  
  '/parameter-3 {',  
  '/key 1668114788',  
  '/showInPalette -1',  
  '/type (integer)',  
  '/value 1885434740',  
  '}',  
  '}',  
  '}'].join('\n');  
try {  
  app.doScript(action, set); // first run because the action does not exist and pop-up dialog box, click Stop to create the action, do not point to continue  
} catch(e) {  
  createAction(actionStr, set);  
  app.doScript(action, set);  
}  
  
function createAction (str, set) {  
  var f = File(set + '.aia');  
  f.open('w');  
  f.write(str);  
  f.close();  
  app.loadAction(f);  
  f.remove();  
}  
  
function ascii2Hex (hex) {  
  return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})  
}  
  
function GBK2Hex (str/* Chinese characters*/) {  
  var f = File('hex.txt'), hex;  
  f.encoding = 'UTF8';  
  f.open('w'), f.write(str), f.close();  
  f.encoding = 'BINARY';  
  f.open('r');  
  hex = f.read().toSource().replace(/(?:\(new String\("|"\)\)|\\u00)/g, '');  
  f.close(), f.remove();  
  return hex  
}  