function httpGetAsync(theUrl, callback){
    let peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = function() {
        if (peticion.readyState == 4 && peticion.status == 200)
            callback(peticion.responseText);
    }

    peticion.open("GET", theUrl, true); 
    peticion.send(null);
}

function Imprimir(responseText){
    let respuestaParseada = JSON.parse(responseText);
    let claves = Object.keys(respuestaParseada);
    let valores = Object.values(respuestaParseada);

    for (let i = 0; i < 8; i++) {
        document.querySelector("body > div").innerHTML += `
        <p>${claves[i]} - ${valores[i]}</p>
        `
    }

    // document.querySelector("body > div").innerHTML = `
    // <p>${respuestaParseada["name"]}</p>
    // <p>${respuestaParseada["height"]}</p>
    // <p>${respuestaParseada["mass"]}</p>
    // <p>${respuestaParseada["hair_color"]}</p>
    // <p>${respuestaParseada["skin_color"]}</p>
    // <p>${respuestaParseada["eye_color"]}</p>
    // <p>${respuestaParseada["birth_year"]}</p>
    // <p>${respuestaParseada["gender"]}</p>`
}

document.querySelector("body > div > button").addEventListener("click", () => {
    httpGetAsync("https://swapi.co/api/people/1/", Imprimir);
});//Mejor función flecha porque conserva la referencia del this. 

