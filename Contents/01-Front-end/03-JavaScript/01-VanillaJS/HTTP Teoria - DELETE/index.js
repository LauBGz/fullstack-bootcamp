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


function imprimir(responseText){
    let respuesta = JSON.parse(responseText);
    console.log(respuesta);    

}

document.querySelector('.boton').addEventListener("click", () => {
    httpDeleteAsync("https://reqres.in/api/users/2", imprimir);
});//el endpoint le da al servidor el elemento específico a borrar
