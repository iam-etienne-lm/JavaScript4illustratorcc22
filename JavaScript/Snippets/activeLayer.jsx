    var myDoc = app.activeDocument; //Alternatively: var myDoc = app.documents.getByName("docName.psd"); to find the document named "docName.psd" if multiple docs are open  
    var myLayer = myDoc.layers.getByName("targetLayer"); //Finds the layer named targetLayer if it's not in any groups  
    myDoc.activeLayer = myLayer; //Make the layer the active layer  

 

//If your layer is within a group, you'll have to check inside that group, which can be done by changing the second line above to:

 

    var myLayer = myDoc.layerSets.getByName("groupName").layers.getByName("targetLayer");  
