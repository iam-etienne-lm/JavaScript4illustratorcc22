function getObjectsByColor ( colorName )
{
var doc, items, i = 0, n = 0, item, color, selectionArray = [];

if ( app.documents.length == 0 ){ 
    alert("No documents open");
    return;
}

doc = app.activeDocument;
try
{
    color = doc.swatches.getByName ( colorName );
}
catch(e)
{
    alert( "No such color !");
    return;
}

color = color.color ;

items = doc.pageItems;
n = items.length;
if ( items.length == 0 )
{
    alert( "No items found");
    return;
}

for ( i = 0; i < n ; i++ )
{
    item = items[i];
    if ( item.fillColor.typename == color.typename
    && item.fillColor.cyan == color.cyan
    && item.fillColor.magenta == color.magenta
    && item.fillColor.yellow == color.yellow
    && item.fillColor.black == color.black )
    {
        selectionArray [ selectionArray.length ] = item;
    }
}

if ( selectionArray.length == 0 )
{
    alert( "Nothing found" );
    return;
}

app.selection = selectionArray;
}

getObjectsByColor ("CutContour");