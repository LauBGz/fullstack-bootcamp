let listaCervezas = [];

class Cerveza {
    linkImagen = "";
    nombre = "";
    fabricante = "";
    fecha = "";
    lugar = "";
    precio = 0;
    nota = 0;

    constructor(argLinkImagen, argNombre, argFabricante, argFecha, argLugar, argPrecio, argNota){
        this.linkImagen = argLinkImagen;
        this.nombre = argNombre;
        this.fabricante = argFabricante;
        this.fecha = argFecha;
        this.lugar = argLugar;
        this.precio = argPrecio;
        this.nota = argNota;
    }
};

$('.save').click( () => {
    let data={};
    $("input").each ( function () {
        let clave = $(this).attr("data-clave");
        data[clave] = $(this).val();
    } )
    listaCervezas.push(data)
    imprimir(listaCervezas);
});


function imprimir(params) {
    $('.resultados').empty();

    for (let index = 0; index < listaCervezas.length; index++) {

        let {imagen, nombre, fabricante, fecha, lugar, precio, nota} = listaCervezas[index];
        
        $('.resultados').append(`
            <div class="cerveza">
            <h1>${nombre}</h1>
            <img src="${imagen}" class="imgCerveza">
            <p><span class="subtitulos">Fabricada por:</span> ${fabricante}</p>
            <p><span class="subtitulos">Probada el</span> ${fecha} <span class="subtitulos">en</span> ${lugar}</p>
            <p><span class="subtitulos">Precio:</span> ${precio}€</p>
            <p><span class="subtitulos">Valoración:</span> ${nota}</p></div>
        `
        );
    }
}
