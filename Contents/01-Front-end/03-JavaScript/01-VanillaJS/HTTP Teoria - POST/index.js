function httpPostAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){//Puede que sea diferente según
            //la API y haya que cambiarlo (200,201. 203...)
            callback(peticion.responseText);
        }
    }
    peticion.open("POST", theUrl, true); 

    //creo una variable con la info a enviar (body o payload). EL body tiene que seguir el esquema
    //de los dueños de la API exactamente como ellos lo definen.
    let body = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };

    //variable para convertir el objeto javascript a JSON
    let bodyJSON = JSON.stringify(body);
    //Quitamos el null y metemos el body
    peticion.setRequestHeader('content-type', 'application/json');
    
    peticion.send(bodyJSON);
}

function imprimir(responseText){
    let respuesta = JSON.parse(responseText);

    document.cookie = `token=${respuesta["token"]}`;

    console.log(respuesta["token"])
};

httpPostAsync("https://test-neoland3.free.beeceptor.com/login", imprimir);