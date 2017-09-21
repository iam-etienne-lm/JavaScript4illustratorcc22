#target Illustrator-21
#script "textEdit"
$.gc();
app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
main();
app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("snr")

function main(){ //reverse order
    var d //= app.activeDocument
    var docs=app.documents;
    var i =docs.length-1;
    for ( ; i >= 0; i-- ){
        d=docs[i];
        tgt();
        $.write(" ,"+i);
    }
}

function tgt(){
     var t1, t2;
    var d=app.activeDocument;
    t1 = 'DAO ';
    t2 = '' ;
    cth_s(t1,t2);
    t1 = 'FORMAT';
    t2 = '              ';
    cth_s(t1,t2);
    t1 = '.pdf';
    t2 = '';
    cth_s(t1,t2);
    }

function cth_s(t1,t2){
    //var openDocument = app.documents.item(0);  
    var active_doc = app.activeDocument;
    var search_string = t1; // g for global search, remove i to make a case sensitive search    
        $.write(search_string)
    var replace_string = t2;      
    var text_frames = active_doc.textFrames;    
        
    if (text_frames.length > 0)    
    {    
        for (var h = 0 ; h < text_frames.length; h++)    
          {    
              var this_text_frame = text_frames[h];    
               var new_string = this_text_frame.contents.replace(search_string, replace_string);    
                   
               if (new_string != this_text_frame.contents)    
                   {    
                        this_text_frame.contents = new_string;    
                   }    
          }    
    }  
}
