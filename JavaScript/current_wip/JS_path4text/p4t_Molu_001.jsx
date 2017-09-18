#target Illustrator-21
#script "molu_geom v0.0"
 
  function get_line(p) {  
        var ps = p.pathPoints,  
            g = p.geometricBounds,  
            i = 0,  
            y2 = g[1];  
        for (; i < ps.length; i++) {  
            if (ps[i].anchor[0].toFixed(5) === g[2].toFixed(5) && y2 > ps[i].anchor[1]) {  
                y2 = ps[i].anchor[1];  
            };  
        };  
        return [  
            [g[0], g[3]],  
            [g[2], y2]  
        ]  
    }  
      
      
    function get_text(p) {  
        var g = p.geometricBounds,  
            t = activeDocument.textFrames,  
            i = 0,  
            gt;  
        for (; i < t.length; i++) {  
            gt = t[i].geometricBounds;  
            if (gt[0] > g[0] && gt[1] < g[1] && gt[2] < g[2] && gt[3] > g[3]) {  
                return t[i]  
            }  
        };  
    }  
      
      
    function create_pathText(p) {  
        var text = get_text(p),  
            l = activeDocument.pathItems.add(),  
            t = (l.setEntirePath(get_line(p)), activeDocument.textFrames.pathText(l)),  
            attr = t.textRange.characterAttributes,  
            _attr = text.textRange.characterAttributes;  
        t.contents = text.contents;  
        attr.size = _attr.size;  
        attr.textFont = _attr.textFont;  
        attr.fillColor = _attr.fillColor;  
        attr.baselineShift = 10; // offset to bottom  
        t.textRange.paragraphAttributes.justification = Justification.CENTER;  
        text.remove();  
    }  
      
      
    create_pathText(app.selection[0]);  