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

//Sacar listado solo de las películas que coincidan con el input insertado

function imprimir(peliculasObj){
    let peliculaHtml = document.querySelector('.peliculas');
    let arrayPeliculas = peliculasObj["Search"];

    if (arrayPeliculas === undefined){
        peliculaHtml.innerHTML += `
            <p>Movie not found.</p>
            `;
    }else{
        for (let i = 0; i < arrayPeliculas.length; i++) {
            if(arrayPeliculas[i]["Type"] === "movie"){
                peliculaHtml.innerHTML +=`
                <div class="pelicula">
                    <h3>${arrayPeliculas[i]["Title"]}</h3>
                `
                if (arrayPeliculas[i]["Poster"] !== "N/A"){
                    peliculaHtml.innerHTML +=`
                    <p><img class="poster" src="${arrayPeliculas[i]["Poster"]}"</img></p>
                `;
                }
                if (arrayPeliculas[i]["Year"] !== undefined){
                    peliculaHtml.innerHTML +=`
                    <p><span class="datos">Año: </span>${arrayPeliculas[i]["Year"]}</p>
                `;
                }
                if (arrayPeliculas[i]["Rated"] !== undefined){
                    peliculaHtml.innerHTML +=`
                    <p><span class="datos">Calificación: </span>${arrayPeliculas[i]["Rated"]}</p>
                `;
                }
                if (arrayPeliculas[i]["Runtime"] !== undefined){
                    peliculaHtml.innerHTML +=`
                    <p><span class="datos">Duración: </span>${arrayPeliculas[i]["Runtime"]}</p>
                `;
                }
                peliculaHtml.innerHTML +=`</div>`;
                    	        
            }else{
                `
                <p>Not a movie.</p>
            `;
            }
            
        }

    }
}

document.querySelector('.boton').addEventListener("click", () => {
    let pelicula = document.querySelector('.input').value;
    httpGetAsync("http://www.omdbapi.com/?apikey=dc86dd84&s="+pelicula, imprimir);
    document.querySelector('.data').innerHTML= `
    <div class="peliculas">
    </div>
    `;
    document.querySelector('.input').value = "";
});

document.querySelector('.input').addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('.boton').click();
    }
});

