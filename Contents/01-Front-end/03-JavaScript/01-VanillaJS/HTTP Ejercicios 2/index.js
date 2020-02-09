//funciones y al final función princial
function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200)
            callback(JSON.parse(peticion.responseText));
    }
    peticion.open("GET", theUrl, true); 
    peticion.send(null);
}

function imprimir(respuestaParseada){
    let pais = document.querySelector('.pais');
    pais.innerHTML="";

    for (let i = 0; i < respuestaParseada.length; i++) {
        pais.innerHTML+= `
        <div class="card">
        <div class="card-body">
        <h3>${respuestaParseada[i]["name"]}</h3>
        <p><img class="img-thumbnail" src="${respuestaParseada[i]["flag"]}"></p>
        <p><span class="categorias">Código telefónico:</span> +${respuestaParseada[i]["callingCodes"][0]}</p>
        <p><span class="categorias">Capital:</span> ${respuestaParseada[i]["capital"]}</p>
        <p><span class="categorias">Población:</span> ${respuestaParseada[i]["population"]}</p>
        <p><span class="categorias">Coeficiente gini:</span> ${respuestaParseada[i]["gini"]}</p>
        <p><span class="categorias">Nombre de la lengua:</span> ${respuestaParseada[i]["languages"][0]["nativeName"]}</p>
        <p><span class="categorias">Moneda:</span> ${respuestaParseada[i]["currencies"][0]["symbol"]}</p>
        </div>
        </div>`
        }   
}

document.querySelector('.boton').addEventListener("click", () => {
    let pais = document.querySelector('.input').value;
    httpGetAsync("https://restcountries.eu/rest/v2/name/"+pais, imprimir);
});