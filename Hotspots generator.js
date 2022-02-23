//Entra a la carpeta donde estan los textos
/*
const generarTexto = (titleText,descriptionText) => {

    var titleGroup = app.activeDocument.layerSets.getByName('Textos');

    var textoDeTitulo = titleGroup.layers[0];
    
    var textoDeDescripcion = titleGroup.layers[1];

    textoDeTitulo.textItem.contents= titleText;
    
    textoDeDescripcion.textItem.contents= descriptionText;

    return "exitoso";

  };
  
exports.generarTexto = generarTexto;
*/
var titleGroup = app.activeDocument.layerSets.getByName('Textos');

var textoDeTitulo = titleGroup.layers[0];

var textoDeDescripcion = titleGroup.layers[1];

textoDeDescripcion.textItem.kind=TextType.POINTTEXT;
textoDeTitulo.textItem.kind=TextType.POINTTEXT;

var file = File.openDialog();
file.open('r');
var textos=[];
numLineas=100;
var aux0=[];
for(var i=0;i<numLineas;i++){
        textos[i]= file.readln();

    }
for(var i=0;i<numLineas;i++){
        aux0=textos[i].split(": ");
        aux1=aux0[0];
        aux2=aux0[1];
        generarTexto(aux2, aux1);
        savePSD(aux1,i);
        }


function generarTexto (titleText,descriptionText) {
    textoDeDescripcion.textItem.font= 'NunitoArrowSans-Bold';
    textoDeTitulo.textItem.contents= titleText;
    textoDeDescripcion.textItem.contents= descriptionText;
};


function savePSD(nombre,numero){
    try {
        var doc=app.activeDocument;
        var file= new File(doc.path+"/"+"hotspot -"+numero+"-"+nombre+".psd");
        var opts= new PhotoshopSaveOptions();
        doc.saveAs(file,opts,true)
        }
        catch (e) {
        var doc=app.activeDocument;
        var file= new File(doc.path+"/"+"hotspot -"+numero+"-"+".psd");
        var opts= new PhotoshopSaveOptions();
        doc.saveAs(file,opts,true)
        }
        
    }
//exports.generarTexto = generarTexto;

/*
var titleGroup2= app.activeDocument.layerSets.getByName("Nametag");

var nameBar = titleGroup2.layers[0];

var box = titleGroup2.layers[1];  

//textoDeDescripcion.textItem.kind=TextType.POINTTEXT;

textoDeDescripcion.textItem.kind=TextType.PARAGRAPHTEXT;

var tipo = nameBar.width;

var tamanoParrafo = textoDeDescripcion.name;

alert(tipo);
*/
//titleLayer.textItem.capitalization = TextCase.ALLCAPS;

//titleLayer.textItem.kind = TextType.PARAGRAPHTEXT;

//var tamano = titleLayer.textItem.width;

//var tamano2 = titleLayer.textItem.height;

//var tamanoParrafo = titleLayer.textItem.height;

//alert (titleLayer.textItem.kind);

//tamano2.as("cm");

//v = new UnitValue(tamano2, "px")

//alert( tamano2);

//titleLayer.textItem.contents= titleLayer.textItem.contents + 'Hello World';

//titleLayer2.textItem.font= 'NunitoArrowSans-Bold';

//alert("El caracter en el indice 0 es " + titleLayer.textItem.contents.charAt(0))

//alert("El caracter en el indice 0 es " + titleLayer.textItem.contents[1])

//var titleLayer2 = titleGroup.layers[1];                    

//titleLayer2.textItem.font= "NunitoArrowSans-Bold";

                                                                                                                                           