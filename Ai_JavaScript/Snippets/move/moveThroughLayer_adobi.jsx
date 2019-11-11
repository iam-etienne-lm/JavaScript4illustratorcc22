function moovItem(){
//duplicate Item or not


        sourcePageRef = sourceDoc.pageItems[0];
        dupRef = sourcePageRef.duplicate();
        targetLayer = targetDoc.layers.add();
        targetLayer.name = "targetLayer";


        // now move the new page item to the beginning of the new layer.
        // the new layer is in a different document
        dupRef.moveToBeginning (targetLayer);
        
        
}
