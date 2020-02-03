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
    alert("Usuario creado!");
};

document.querySelector(".boton").addEventListener("click", () => {
    let body = {
        "name": document.querySelector('#nombre').value,
        "age": document.querySelector('#edad').value,
        "salary": document.querySelector('#sueldo').value,
    };

    httpPostAsync("http://dummy.restapiexample.com/api/v1/create", body, imprimir);
});
