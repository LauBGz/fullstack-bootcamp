// let numeroMax = prompt("Dime el número máximo: ");

// numeroMax = parseInt(numeroMax);

// for (let i = 0; i < numeroMax; i++){
//     if(i % 2 === 0){
//         document.write(i+" es par! ");  
//     }else{
//         document.write(i+" es impar! ");
//     }
// }

// let animals = ["Alpaca","Ballena", "Cebra", "León", "Antílope", "Aguila"];

// for (let i = 0; i < animals.length; i++){
//     if(animals[i][0] === "A"){
//         document.write(animals[i]);
//     }
// }

//let animals = ["Alpaca","Ballena", "Cebra", "León", "Antílope", "Aguila"];

// let arrAnimals = [];

// for (let i = 0; i < animals.length; i++){
//     if(animals[i][0] === "A"){
//         arrAnimals.push(animals[i]);
//     }
// }

// document.write(arrAnimals);

// let animals = ["Alpaca","Ballena", "Cebra", "León", "Antílope", "Aguila"];

// for (let animal of animals) {
//     console.log(animal);
// }

// let animals = [
//     {"nombre": "Alpaca", "cantidad":2},
//     {"nombre": "Ballena", "cantidad":700},
//     {"nombre": "Cebra", "cantidad":7},
//     {"nombre": "Leon", "cantidad":2},
//     {"nombre": "Antílope", "cantidad":1},
//     {"nombre": "Aguila", "cantidad":12}]

// let animal =  {"nombre": "Alpaca", "cantidad":2};


// for (let clave in animal) {
//     console.log(animal[clave]);

// }

//bucle for

// let palabra = "pelota";

// for (i=0; i < palabra.length; i++) {
//    console.log(palabra[i]);
//    document.write(palabra[i]);
    
// }
// let palabra = "pelota";

// for (let letra of palabra) {
//         console.log(letra);
//         document.write(`Letra: ${letra} .`);
//     }

// let palabra = "pelota";

// for (i=palabra.length-1; i >= 0; i--) {
//    console.log(palabra[i]);
//    document.write(palabra[i]);  
    
// }

    // let animals = [
    // {"nombre": "Alpaca", "cantidad":2},
    // {"nombre": "Ballena", "cantidad":700},
    // {"nombre": "Cebra", "cantidad":7},
    // {"nombre": "Leon", "cantidad":2},
    // {"nombre": "Antílope", "cantidad":1},
    // {"nombre": "Aguila", "cantidad":12}]

    
    // for (let animal of animals) {
    //     for (let clave in animal) {
    //         console.log(animal[clave]);
    //     }
    // }


//     for (let clave in animal) {
//     console.log(animal[clave]);

// }
//-----------------------------------------------------------    
// Ejercicio 1
// let numeros = [];

// for (i=1; i <= 100; i++) {
//     numeros.push(i);
// }
// alert(numeros);

//-----------------------------------------------------------    
// Ejercicio 2
// let numerosPares = [];
// let numerosImpares = [];

// for (i=0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0){
//          numerosPares.push(numeros[i]);
//     } else {
//          numerosImpares.push(numeros[i]);
//     }
    
// }

// alert(numerosPares);
// alert(numerosImpares);

//-----------------------------------------------------------    
// Ejercicio 3
// const animales=["elefante", "perro", "ballena"]
// const peso=[5000, 50, 20000]

// for (i=0; i <= animales.length; i++) {
//     if(animales[i]==="perro"){
//         document.write(animales[i]+peso[i]);
//     }
// }

//-----------------------------------------------------------    
// Ejercicio 4

// let animalesGrandes = [];

// for (i=0; i <= peso.length; i++) {
//     if(peso[i]>1000){
//         animalesGrandes.push(animales[i]+peso[i]);
//     }
// }

// document.write(`<h2>Animales Grandes</h2>`+animalesGrandes);

//-----------------------------------------------------------    
// Ejercicio 5
// let letras = [];
// let palabra = "pizarra";

// for (i=0; i <= palabra.length-1; i++) {
//     if (i % 2 === 0){
//         letras.push(palabra[i]);
//     }
// }

// document.write(letras);

//-----------------------------------------------------------    
// Ejercicio 6
// // const producto = "cereales";

// // switch(producto){
// //     case "naranjas": 
// //      "2€";
// //     break;
// //     case "leche": 
// //      "1.2€";
// //     break;
// //     case "cereales":
// //      "4€";
// //     break;
// //     case "deportivo Ferrari": 
// //      "1000000€";
// //     break;
// //     case "sangre de unicornio":
// //      "0.5€";
// //     break;
// //     default:
//         "No queda";
// }
//-----------------------------------------------------------    
// Ejercicio 7
// const max_number = 12;

// for (i=1; i <= max_number; i++) {

//     let s = (i === 1 ? "" : "s");
//     document.write(`<p>`+i+` ovejita${s}. </p>`);

//     if(i === 1){
//         document.write(`<p>`+i+` ovejita. </p>`);
//     }else{
//         document.write(`<p>`+i+` ovejitas. </p>`);
//     }
// }
//-----------------------------------------------------------    
// Ejercicio 8
// const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"]
// const sopa = ["fideos", "brocoli", "caldo", "pollo"]
// const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"]

// let lista_compra = []

// for (let ingrediente of tacos) {
//     if (ingrediente !== "brocoli"){
//         lista_compra.push(ingrediente);
//     }
// }

// for (let ingrediente of sopa) {
//     if (ingrediente !== "brocoli"){
//         lista_compra.push(ingrediente);
//     }
// }

// for (let ingrediente of pizza) {
//     if (ingrediente !== "brocoli"){
//         lista_compra.push(ingrediente);
//     }
// }

// console.log (lista_compra);

//-----------------------------------------------------------    
// Ejercicio 9
// let factorial = 1;
// let numero = 10;

// for (let i = 1; i <= numero; i++) {
//     factorial = i * factorial;
// }

// console.log(factorial);

//-----------------------------------------------------------    
// Ejercicio 10

const poblaciones = {    
    "españa": 47000000,    
    "italia": 61000000,    
    "francia": 67000000,
}

for(let i=0; i<Object.keys(poblaciones).length; i++){    
    let clave = Object.keys(poblaciones)[i];    
        if (poblaciones[clave] > 60000000){
            console.log(clave);
        }   
}