//Permite dar un valor por defecto al parámetro. 
//En caso de que no se pase un parámetro se aplica el par por defecto pero no peta
// function hola(persona="usuario"){
//     alert("hola "+persona)
// }

// hola();

//ES5 - solo sirve para array
// let alumnos = ["Alex", "Alejandro", "Ambrosio", "Laura", "Pepe"]

// alumnos.forEach(alumno => {if (alumno[0] === 'A'){console.log(alumno)}});

//Bucle for of
// for (element of alumnos){
//     console.log(element);
// };

//Bucle for of
// for (element of alumnos){
//     console.log(element);
// };

//Bucle for in
// for (clave in {"nombre":"Ernesto", "ocupacion": "estudiante"}){
//     console.log(clave)
// };

// const parts = ['shoulders', 'knees']; 
// const lyrics = ['head', ...parts, 'and', 'toes']; 

// console.log(lyrics); //  ["head", "shoulders", "knees", "and", "toes"]

//spread: si pones un argumento, saludo a 1. Si pones 2, saluda a 1 + 2 y así sucesivamente

// function saludar(...personas){
//     alert("hola"+personas)
//     }
    
// let alumno = {
//     "nombre":"Samuel",
//     "saluda": function(){
//         console.log(this)
//     }
// }

//Destructuración
// let respuesta = {"status": "ok", "data": "datos", "timestamp": 3352688922, "nextData":"siguientesDatos"};

// let {data, nextData} = respuesta;

// console.log(data, nextData)

//Modulos: tiene que haber un servidor

// export{funcion} // archivo funciones.js: para exportar la funcion a otro archivo
// import {funcion} from "./funciones.js";// archivo index.js: 
// //para importar la función desde otro archivo

// //en html 

// <script type = "module" src="index.js"></script>
// <script type = "module" src="funciones.js"></script>

class Edificio{
    color = "rojo";
    tamano = 100;

    constructor(argumentoColor, argumentoTamano){
        this.color = argumentoColor;
        this.tamano = argumentoTamano;
    }

    destruir(){ //se puede crear un función y llamarla después desde el objeto creado
        this.color = "";
        this.tamano = 0;
    }
}

const piso = new Edificio("rojo", 20);//Mejor crear con const

console.log(piso);

piso.destruir();

console.log(piso);

piso.color = "verde";//No es del todo correcto (ver encapsulamiento)

console.log(piso);

//para añadir propiedades que podamos necesitar para otros objetos no se cambia en el objeto
//se crea otro a partir dese
class Oficina extends Edificio{
    salas = 4;

    constructor(){
        super();//llama al constructor del objeto padre
    }
}

const nuevaCosa = new Oficina();

console.log(nuevaCosa);