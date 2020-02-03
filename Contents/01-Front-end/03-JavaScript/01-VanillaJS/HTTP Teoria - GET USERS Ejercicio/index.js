function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){
            callback(JSON.parse(peticion.responseText));
        }
    }
    peticion.open("GET", theUrl, true); 
    //Justo antes de mandar la petición pongo la cabecera que mandan. Al poner esta cabecera
    //le digo al proxy que hago la petición desde javascript.

    peticion.send(null);
}

function imprimir(responseText){
    //Creamos una constante con las propiedades del usuario a imprimir
    const {first_name, last_name, avatar, email} = responseText.data;
    //Seleccionamos donde queremos imprimir
    let html = document.querySelector('.bio').innerHTML;
    //Creamos una etiqueta image, con la url del usuario como source y la añadimos al HTML
    let imagen = document.createElement("img");
    imagen.src = avatar;
    document.querySelector('.bio').appendChild(imagen);
    //Creamos un H3 con el primer y segundo nombre del usuario y lo añadimos al HTML
    let titulo = document.createElement("h3");
    titulo.innerHTML = first_name+ " "+ last_name;
    document.querySelector('.bio').appendChild(titulo);
    //Creamos párrafo con el email y lo añadimos al HTML
    let mail = document.createElement("p");
    mail.innerHTML = email;
    document.querySelector('.bio').appendChild(mail);
}

function httpDeleteAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 204){
            callback(peticion.responseText);
        }
    }
    peticion.open("DELETE", theUrl, true); 
    peticion.send(null);
}

function crearAlerta(callback){
    alert("Usuario eliminado");
}

httpGetAsync("https://reqres.in/api/users/2", imprimir);

document.querySelector('.boton').addEventListener("click", () => {
    httpDeleteAsync("https://reqres.in/api/users/2", crearAlerta);
});//el endpoint le da al servidor el elemento específico a borrar
