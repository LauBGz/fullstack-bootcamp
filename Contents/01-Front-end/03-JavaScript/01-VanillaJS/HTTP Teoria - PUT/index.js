function httpPutAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){//Puede que sea diferente según
            //la API y haya que cambiarlo (200,201. 203...)
            callback(peticion.responseText);
        }
    }
    peticion.open("PUT", theUrl, true); 

    //creo una variable con la info a enviar (body o payload). EL body tiene que seguir el esquema
    //de los dueños de la API exactamente como ellos lo definen.
    let body = {
        "name": "morpheus",
        "job": "zion resident"
    };

    //variable para convertir el objeto javascript a JSON
    let bodyJSON = JSON.stringify(body);
    //Quitamos el null y metemos el body
    peticion.send(bodyJSON);
}

function imprimir(responseText){
    let respuesta = JSON.parse(responseText);

    console.log(respuesta);
};

httpPutAsync("https://reqres.in/api/users/2", imprimir);