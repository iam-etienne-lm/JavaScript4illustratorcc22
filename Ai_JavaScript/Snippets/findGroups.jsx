#target photoshop  
var myDoc = app.activeDocument;  
main();  
  
function main() {  
    var groups = [];  
    /////////Find Your Base Groups/////////  
    for(var z=0;z<myDoc.layers.length;z++) { //Cycle through all the layers in the document  
        if(myDoc.layers[z].layerSets) { //Determine if it is a group or not  
            groups.push(myDoc.layers[z]); //Add the layer to the "groups" array if it is, in fact, a group  
        }  
    }  
    ////////Find All Sub-Groups//////////  
    for(var z=0;z<groups.length;z++) { //Cycle through all the groups in the "groups" array  
        for(var e=0;e<groups[z].layers.length;e++) { //Cycle through the layers in the current group  
            if(groups[z].layers[e].layerSets) { //Determine if layer is a group or not  
                groups.push(groups[z].layers[e]); //Add the layer to the "groups" array if it is, in fact, a group  
            }  
        }  
    }  
    /////////Look for Your Layer//////////  
    var foundLayer = null;  
    for(var z in groups) { //Cycle through the list of groups and sub-groups we created earlier  
        try {  
            foundLayer = groups[z].layers.getByName("targetLayer"); //Change the "foundLayer" variable to the target layer if it exists in the current group of this loop cycle  
            break; //Stop the loop if the layer is found  
        } catch(e) {}  
    }  
    /////////Determine if the layer was found////////  
    if(foundLayer != null) {  
        myDoc.activeLayer = foundLayer; //Make the layer active if it's found  
        //run your script here (recommend placing it in another function and calling the function here instead).  
    } else {  
        alert("The layer could not be found!"); //Alert if the layer could not be found  
    }  
}
