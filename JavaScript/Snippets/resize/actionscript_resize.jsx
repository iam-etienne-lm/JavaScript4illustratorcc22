    #target Illustrator-21  
      
    var sourceFolder1 = Folder ("C:/TEMPai/y.test"); //only 1 file  
      
    openfile_selectallartworks();  
    if ( activeDocument.selection.length > 0 ) {  
        moluapples_code();  
    }  
      
    function openfile_selectallartworks(){  
    var fileType = "*.pdf";  
    files1 = new Array();  
    files1 = sourceFolder1.getFiles( fileType );  
    if ( files1.length != 0 ){  
        var sourceDoc1 = app.open(files1[0]);  
        for (l = 0; l < sourceDoc1.pageItems.length-1; l++) {     //pageItems  L  
            sourceDoc1.pageItems[l].selected = true;                  
        }  
    }  
    }  
      
    function moluapples_code(){      
    var set = 'Action resize10', // action set name  
    action = 'adobe_scale' //there gonna be an issue bcs here I have 2 events, M uses only 1    
    var actionStr = ['/version 3',  
      '/name [ ' + set.length,    
      ascii2Hex(set),  
    ']',  
    '/isOpen 1',  
    '/actionCount 1',  
    '/action-1 {',  
    '    /name [ ' + action.length,    
      ascii2Hex(action),    
      ']',  
    '    /keyIndex 0',  
    '    /colorIndex 0',  
    '    /isOpen 1',  
    '    /eventCount 2',  
    '    /event-1 {',                //ACTION1: Resize selection to 10%  
    '        /useRulersIn1stQuadrant 0',  
    '        /internalName (adobe_scale)',  
    '        /localizedName [ 18',  
    '            4d69736520c3a0206c27c3a96368656c6c65',  
    '        ]',  
    '        /isOpen 1',  
    '        /isOn 1',  
    '        /hasDialog 1',  
    '        /showDialog 0',  
    '        /parameterCount 4',  
    '        /parameter-1 {',  
    '            /key 1970169453',  
    '            /showInPalette -1',  
    '            /type (boolean)',  
    '            /value 1',  
    '        }',  
    '        /parameter-2 {',  
    '            /key 1818848869',  
    '            /showInPalette -1',  
    '            /type (boolean)',  
    '            /value 1',  
    '        }',  
    '        /parameter-3 {',  
    '            /key 1935895653',  
    '            /showInPalette -1',  
    '            /type (unit real)',  
    '            /value 10.0',  
    '            /unit 592474723',  
    '        }',  
    '        /parameter-4 {',  
    '            /key 1668247673',  
    '            /showInPalette -1',  
    '            /type (boolean)',  
    '            /value 0',  
    '        }',  
    '    }',  
    '    /event-2 {',                                    //ACTION2 borders limits  
    '        /useRulersIn1stQuadrant 0',  
    '        /internalName (adobe_commandManager)', //10% resize workarea to selected artwork; this should go around 87.5*280mm  
    '        /localizedName [ 32',  
    '            416363c3a964657220c3a020756e6520636f6d6d616e6465206465206d656e75',  
    '        ]',  
    '        /isOpen 0',  
    '        /isOn 1',  
    '        /hasDialog 0',  
    '        /parameterCount 3',  
    '        /parameter-1 {',  
    '            /key 1769238125',  
    '            /showInPalette -1',  
    '            /type (ustring)',  
    '            /value [ 28',  
    '                46697420417274626f61726420746f2073656c656374656420417274',  
    '            ]',  
    '        }',  
    '        /parameter-2 {',  
    '            /key 1818455661',  
    '            /showInPalette -1',  
    '            /type (ustring)',  
    '            /value [ 40',  
    '                416a757374657220c3a0206c27696c6c757374726174696f6e2073c3a96c6563',  
    '                74696f6e6ec3a965',  
    '            ]',  
    '        }',  
    '        /parameter-3 {',  
    '            /key 1668114788',  
    '            /showInPalette -1',  
    '            /type (integer)',  
    '            /value -2130706017',  
    '        }',  
    '    }',  
    '}'].join('\n');    
    try {    
      app.doScript(action, set); // first run because the action does not exist and pop-up dialog box, click Stop to create the action, do not point to continue    
    } catch(e) {    
      createAction(actionStr, set);    
      app.doScript(action, set);    
    }  
    }//moluapples_code main end    
        
    function createAction (actionStr, set) {    
      var f = File(set + '.aia');    
      f.open('w');    
      f.write(actionStr);    
      f.close();    
      app.loadAction(f);    
      //f.remove();    
    }    
        
    function ascii2Hex (hex) {    
      return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})    
    }    