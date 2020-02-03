function httpPostAsync(theUrl, body, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && (peticion.status == 200 || peticion.status == 201)){//Puede que sea diferente según
            //la API y haya que cambiarlo (200,201. 203...)
            callback(peticion.responseText);
        }
    }
    peticion.open("POST", theUrl, true); 

    //creo una variable con la info a enviar (body o payload). EL body tiene que seguir el esquema
    //de los dueños de la API exactamente como ellos lo definen.
    //variable para convertir el objeto javascript a JSON
    let bodyJSON = JSON.stringify(body);
    //Quitamos el null y metemos el body
    peticion.setRequestHeader('content-type', 'application/json');
    //Para asegurarnos de que se envíen los datos en el formato correcto
    peticion.send(bodyJSON);
}

function imprimir(responseText){
    let respuesta = JSON.parse(responseText);

    document.cookie = `token=${respuesta["token"]}`;

    console.log(respuesta["token"])
};

document.querySelector("#enviar").addEventListener("click", () => {
    let body = {
        "first_name": document.querySelector('#inputName').value,
        "email": document.querySelector('#inputEmail').value,
        "password": document.querySelector('#inputPassword').value,
    };

    httpPostAsync("https://reqres.in/api/register", body, imprimir);
});
