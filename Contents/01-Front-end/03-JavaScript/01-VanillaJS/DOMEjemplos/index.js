//Función que cuando se haga click en el botón pase a azul y negrita

// function CambiarColor(){
//     document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").className = "ColorAzul negrita";
// };

// document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click", CambiarColor);

// function CambiarTexto(){
//     if(document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > input").value === "chorpecha"){
//         document.querySelector("body > div.container > div > div:nth-child(2) > div.card-body > h1").innerHTML =` $5 <small class="text-muted">/ mo</small>`;
//     }
// }

// document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click", CambiarTexto);

//Cuando se clique en el botón se vacía la carta 
//document.querySelector("body > div.container > div > div:nth-child(1)").innerHTML = ""
//se escribe el titulo
//se escribe el año y autor
//se pone imagen
let libro = {
    "titulo":"Un mundo feliz",
    "autor": "Huxley",
    "año": "1932",
    "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg"
};


function CambiarCarta(){
    // document.querySelector("body > div.container > div > div:nth-child(1)").innerHTML = `
    // <p>${libro["titulo"]}</p>
    // <p>${libro["autor"]} ${libro["año"]}</p>
    // <p>
    //     <img src="${libro["imagen"]}">
    // </p>
    // `;

    document.querySelector("body > div.container > div > div:nth-child(1)").innerHTML = `
    <div class="card-header">
    <h4 class="my-0 font-weight-normal">${libro["titulo"]}</h4>
    </div>
    <div class="card-body">
        <h5 class="card-title pricing-card-title">${libro["autor"]}-${libro["año"]}</h5>
        <img src="${libro["imagen"]}" class="img-thumbnail">
    </div>
    `;
}

document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click", CambiarCarta);
