function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){
            callback(JSON.parse(peticion.responseText));
        }
        // if (peticion.status == 404){
        //     alert("Has escrito mal el nombre.");
        // } control de errores
    }
    peticion.open("GET", theUrl, true); 
    peticion.send(null);
}

//titulo, año, rated, runtime, imbd rating, poster

function imprimir(peliculasObj){
    let peliculaHtml = document.querySelector('.pelicula');
    let arrayPeliculas = peliculasObj["Search"];

    for (let i = 0; i < arrayPeliculas.length; i++) {
        if(arrayPeliculas[i]["Title"] === undefined){
            peliculaHtml.innerHTML += `
            <p>${datosPelicula["Error"]}</p>
            `;
           }else{
            peliculaHtml.innerHTML += `
                <h3>${arrayPeliculas[i]["Title"]}</h3>`;
        }
        peliculaHtml.innerHTML +=`
            <p><span class="datos">Año: </span>${arrayPeliculas[i]["Year"]}</p>
            <p><span class="datos">Calificación: </span>${arrayPeliculas[i]["Rated"]}</p>
            <p><span class="datos">Duración: </span>${arrayPeliculas[i]["Runtime"]}</p>
            <img src="${arrayPeliculas[i]["Poster"]}"</img>
        `;
    }

    

    

//    if(datosPelicula["Title"] === undefined){
//     pelicula.innerHTML = `
//     <p>${datosPelicula["Error"]}</p>
//     `
//    }else{
//     pelicula.innerHTML = `
//         <h3>${datosPelicula["Title"]}</h3>
    
    // if (datosPelicula["Poster"] !== "N/A"){
    //     pelicula.innerHTML = `<img src="${datosPelicula["Poster"]}"</img>`;
    // } 
    // pelicula.innerHTML += datosPelicula["Poster"] !== "N/A" ? `<img src="${datosPelicula["Poster"]}"</img>` : `<p>No hay imagen.</p>`

//         <p><span class="datos">Año: </span>${datosPelicula["Year"]}</p>
//         <p><span class="datos">Calificación: </span>${datosPelicula["Rated"]}</p>
//         <p><span class="datos">Duración: </span>${datosPelicula["Runtime"]}</p>
//         <p><span class="datos">Valoración IMDB: </span>${datosPelicula["Ratings"][0]["Value"]}</p>
//         <img src="${datosPelicula["Poster"]}"</img>
//     `;
//  }

    
    //console.log(datosPelicula);
    

}

document.querySelector('.boton').addEventListener("click", () => {
    let pelicula = document.querySelector('.input').value;
    httpGetAsync("http://www.omdbapi.com/?apikey=dc86dd84&s="+pelicula, imprimir);
});


