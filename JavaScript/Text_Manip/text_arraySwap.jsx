#target Illustrator-22
#script "RAswap"
"use strict"
$.level=2;
main();
//app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
$.write("array swap'd");
$.gc();

function main(){ //reverse order
    var d = app.activeDocument;
    var docs = app.documents;
    var docs = d;
    //var i = docs.length-1;
    var i = 0;
	for ( ; i >= 0; i-- ){
        d = docs[i];
        tgt(d);
        $.write(" ,"+i);
    }
    /*2 cases recursive or not
        */
}

function tgt2(d){
     var t1, t2;
    t1 = '3-0';
    t2 = '';
    cth_s(d,t1,t2);

    }

function tgt(d){
     var t1, t2, j, j0, jm, t;
    //t1 = 'D11116136';
    //t2 = 'D11116177' ;
    //cth_s(d,t1,t2);
    //t1 = '34';
    //t2 = 'EL';
    //cth_s(d,t1,t2);
    d=app.activeDocument;
	t=d.textFrames;
    j0=0;
	jm=t.length-1;
	for(j=j0;j<jm;j++){ //basic array swap, no comparison
        if(j+1<10){
            t[j].contents="x 0"+(j+1);
        }else{
            t[j].contents="x "+(j+1);
        }
    }

    /*t1 = '12/10';
    t2 = '25/10';
    cth_s(d,t1,t2);
    t1 = '312820';
    t2 = '312819';
    cth_s(d,t1,t2);
	*/
    }

function cth_s(d,t1,t2){
    //var openDocument = app.documents.item(0);  
    var active_doc = d;
    var search_string = t1; // g for global search, remove i to make a case sensitive search    
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
