let array = [];

//Función para escribir array
function imprimirArray(){
    let arrayHTML = document.querySelector('.array');
    arrayHTML.innerHTML = `<p>`;

    for (let index = 0; index < array.length; index++) {
        arrayHTML.innerHTML += `${array[index]}, `;
    }

    arrayHTML.innerHTML += `</p>`;
};

//Función para añadir elemento
function anadirElemento(){
    let elemento = document.querySelector('.input').value;
    if(elemento !== ""){
        array.push(elemento);
        imprimirArray(array);
        document.querySelector('.input').value = "";
    };
    console.log(array)
};

//Función para eliminar elemento
function eliminarElemento(){
    let indexNumber = document.querySelector('.numberDelete').value;
    array.splice(indexNumber, 1);
    imprimirArray(array);
    document.querySelector('.numberDelete').value = "0";
    console.log(array)
};


//Función para revertir elementos
function revertirElementos(){
    array.reverse();
    imprimirArray(array);
    console.log(array)
};

//Función para buscar elementos
function buscarElemento(){
    let palabra = document.querySelector('.inputPalabra').value;

    if(palabra !== "" || array !== [] ){
        if (array.indexOf(palabra) === "-1"){
            document.querySelector('.array').innerHTML += "False";    
        }else{
            document.querySelector('.array').innerHTML += "True";   
        }
    }

    document.querySelector('.inputPalabra').value = "";
};

//Evento al botón add para vinvular función añadir elemento
document.querySelector('.add').addEventListener("click", anadirElemento);
document.querySelector('.input').addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('.add').click();
    }
});

//Evento para eliminar un elemento del array
document.querySelector('.delete').addEventListener("click", eliminarElemento);

//Evento para revertir array
document.querySelector('.reverse').addEventListener("click", revertirElementos);

//Evento para buscar palabra
document.querySelector('.find').addEventListener("click", buscarElemento);