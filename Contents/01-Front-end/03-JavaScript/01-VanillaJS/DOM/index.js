// Variable global
let tareas = [];

//Funciones
function Write (event){
    let listado = document.querySelector("body > div > div > div > div > div > div");
    let listadoActualizado = `<ul class="list-group">`;

    for (let i= 0; i < tareas.length; i++) {
        listadoActualizado += `
        <li class="list-group-item mt-3">
            <div class="d-flex justify-content-between">
            ${tareas[i]} <i class="fa fa-trash" id="${i}"></i>
            </div>
        </li>    
        `;   
    }

    listadoActualizado += "</ul>";

    listado.innerHTML = listadoActualizado;

    let todosLosBotones = document.querySelectorAll(".fa");

    for (i = 0; i < todosLosBotones.length; i++) {
        todosLosBotones[i].addEventListener("click", Remove);
    }
}

function Add(event){
    let tarea = document.querySelector("#task").value;

    if(tarea !== ""){
        tareas.push(tarea);
    }

    Write();

    document.querySelector("#task").value = "";
}

function Remove(event){
    tareas.splice(event.target.id,1);
    Write();
}

//eventos
document.querySelector("#add").addEventListener("click", Add);

document.querySelector("#task").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('#add').click();
    }
});

    