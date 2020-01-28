// Variables globales
// si algo lo voy a usar más de 1 vez crear variable.
let tareas = []; //State: variable estado que tendrá todos los datos y 
//sobre la que se basará toda la aplicación

// Funciones

function Write(event){
    //Me guardo el html de la lista en una variable
    let ul = document.querySelector("body > ul");

    //Comienzo una plantilla para el HTML
    let nuevoHtml = "<ul>";

    //Para cada elemento del array tareas, añado
    //una etiqueta <li> a la plantilla html
    for (let i = 0; i < tareas.length; i++) {
        nuevoHtml += `<li>${tareas[i]}<button id="${i}" class="btn-eliminar">Eliminar</button></li>`;
    }

    //Cierro la etiqueta ul de la plantilla
    nuevoHtml += "</ul>";

    //Reemplazo el HTML original por la plantilla nueva
    ul.innerHTML = nuevoHtml;

    //Seleccionar todos los botones
    let botonesEliminar = document.querySelectorAll(".btn-eliminar");

    //Asignar a todos los botones un evento remove
    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", Remove);
    }
}

function Add(event){
    //Cojo lo que el usuario haya escrito en el input
    let nuevaTarea = document.querySelector("body > input").value;
    //Lo añado al array
    tareas.push(nuevaTarea);
    //Reescribo toda la lista
    Write();
}

function Remove(event){
    //Eliminar del array el elemento cuya id coincida con el target - 
    //splice (posición del elemento, número de elementos a borrar)
    tareas.splice(event.target.id, 1);
    //Volver a escribir sin el elemento borrado
    Write();
}

// Eventlisteners
document.querySelector("body > button").addEventListener("click", Add);







