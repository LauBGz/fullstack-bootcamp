function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){
            callback(JSON.parse(peticion.responseText));
        }
        if (peticion.status == 404){
            document.querySelector('.datosUsuario').innerHTML = `
            <div class="error">
                        Does not exist.
            </div>
            `;
        }
    }
    peticion.open("GET", theUrl, true); 
    peticion.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    peticion.send(null);
}

let urlPeticion = "https://cors-anywhere.herokuapp.com/http://prana-solutions.com/neoland/api/?";


function crearUrl(url){
    let category= document.querySelector('.custom-select').value;
    let name = document.querySelector('.inputName').value;
    let codigo = document.querySelector('.inputCode').value;
    let pMin = document.querySelector('.inputMin').value;
    let pMax = document.querySelector('.inputMax').value;

    let urlParameters = "";
    console.log(category);

    if (category !== "Selecciona..."){
        urlParameters += "category=" + category;
    }

    if (name!== ""){
        if (urlParameters === ""){
            urlParameters += "name=" + name;
        }else{
            urlParameters += "&name=" + name;
        }
    }

    if (codigo !== ""){
        if (urlParameters === ""){
            urlParameters += "code=" +codigo;
        }else{
            urlParameters += "&code=" + codigo;
        }
    }

    if (pMin !== ""){
        if (urlParameters === ""){
            urlParameters += "price=" + pMin;
        }else{
            urlParameters += "&price=" + pMin;
        }
    }

    if (pMax !== ""){
        if (urlParameters === ""){
            urlParameters += "price=" + pMax;
        }else{
            urlParameters += "&price=" + pMax;
        }
    }

    let newUrl = urlPeticion + urlParameters;
    console.log(newUrl);
    httpGetAsync(newUrl, imprimir);

}

document.querySelector('.botonBuscar').addEventListener("click", crearUrl);

function imprimir (responseText){
    document.querySelector('.custom-select').value = "Selecciona...";
    document.querySelector('.inputName').value = "";
    document.querySelector('.inputCode').value = "";
    document.querySelector('.inputMin').value = "";
    document.querySelector('.inputMax').value = "";


    let resultado = document.querySelector('.resultados');
    resultado.innerHTML = "";

    let tabla = document.createElement("TABLE");
    tabla.setAttribute("id", "myTable");
    document.querySelector('.resultados').appendChild(tabla);

    let fila = document.createElement("TR");
    fila.setAttribute("id", "myTrHeader");
    document.getElementById("myTable").appendChild(fila);

    let celda = document.createElement("TH");
    let datoCelda = document.createTextNode("Nombre");
    celda.appendChild(datoCelda);
    document.getElementById("myTrHeader").appendChild(celda);

    celda = document.createElement("TH");
    datoCelda = document.createTextNode("Categoría");
    celda.appendChild(datoCelda);
    document.getElementById("myTrHeader").appendChild(celda);
        
    celda = document.createElement("TH");
    datoCelda = document.createTextNode("Precio");
    celda.appendChild(datoCelda);
    document.getElementById("myTrHeader").appendChild(celda);
        
    celda = document.createElement("TH");
    datoCelda = document.createTextNode("Código");
    celda.appendChild(datoCelda);
    document.getElementById("myTrHeader").appendChild(celda);

    for (let index = 0; index < responseText.length; index++) {
        fila = document.createElement("TR");
        fila.setAttribute("id", "myTr"+index);
        document.getElementById("myTable").appendChild(fila);

        celda = document.createElement("TD");
        datoCelda = document.createTextNode(responseText[index]["name"]);
        celda.appendChild(datoCelda);
        document.getElementById("myTr"+index).appendChild(celda);

        celda = document.createElement("TD");
        datoCelda = document.createTextNode(responseText[index]["category"]);
        celda.appendChild(datoCelda);
        document.getElementById("myTr"+index).appendChild(celda);
        
        celda = document.createElement("TD");
        datoCelda = document.createTextNode(responseText[index]["price"]+"€");
        celda.appendChild(datoCelda);
        document.getElementById("myTr"+index).appendChild(celda);
        
        celda = document.createElement("TD");
        datoCelda = document.createTextNode(responseText[index]["code"]);
        celda.appendChild(datoCelda);
        document.getElementById("myTr"+index).appendChild(celda);
        
        
    }
   console.log(responseText); 
}


