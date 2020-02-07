//Array de tareas vacío a completar
let array = []

//Función para imprimir array de tareas
function imprimirArray(array){
    //Vaciado del array para imprimir el listado actualizado
    $('.resultsList').empty();
    //Impresión de cada elemento en un li asignando un índice diferente a cada botón
    for (let index = 0; index < array.length; index++) {
        $('.resultsList').append(`<li>${array[index]}<button type="button" class="delete" id="${index}"></button></li>`)
    }
    //Selección de todos los botones delete
    let botones  =  $('.delete');
    //Incorporación de un evento a cada botón con la función borrar tareas
    for (let index = 0; index < botones.length; index++) {
        $(botones[index]).click(borrarTareas);
    }
}

//Función añadir tarea
function anadirTareas(){
    let tarea = $('.inputTarea').val();
    array.push(tarea);
    imprimirArray(array)
}

//Función eliminar tarea: splice de 
function borrarTareas(event){
    array.splice(event.target.id,1);
    imprimirArray(array)
}

$('.add').click(anadirTareas);

// let num = 1;
// $('button').click(function (e) {
//     e.preventDefault();
//     $('.list').append(`<li id="${num}">${$('input').val()} <button class="btn-delete-${num}">Delete</button></li>`);
//     $('input').val('');
//     $('.btn-delete-' + num).click(function (e) {
//         e.target.parentElement.remove();
//     });
//     num++;
// });
// $('input').keypress(function (e) {
//     if (e.keyCode == 13) {
//         $('.list').append(`<li id="${num}">${$('input').val()} <button class="btn-delete-${num}">Delete</button></li>`);
//         $('input').val('');
//         $('.btn-delete-' + num).click(function (e) {
//             e.target.parentElement.remove();
//         });
//         num++;
//     }
// });
