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

//bucle                                                                                     

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

// const poblaciones = {    
//     "españa": 47000000,    
//     "italia": 61000000,    
//     "francia": 67000000,
// }

// for(let i=0; i<Object.keys(poblaciones).length; i++){    
//     let clave = Object.keys(poblaciones)[i];    
//         if (poblaciones[clave] > 60000000){
//             console.log(clave);
//         }   
// }

//17 enero - Ejercicio 1 / Parte A

/**let numeroNetflix = parseInt(prompt("Cuantas series quieres introducir?"));
let datosNetflix = [];
for(let i = 0; i < numeroNetflix; i++){
    datosNetflix.push({
        "titulo": prompt("Cual es el título?"),
        "tipo": prompt("Responda P para película o S para serie"),
        "valoracion": prompt("Valore del 1 al 5")
    })
} */
// let fltNumero = prompt("Número de películas o series que desea insertar:");

// fltNumero = parseFloat(fltNumero);

// let arrArticulos = [];

// for (let i = 1; fltNumero >= i; i++) {
//     let strNombre = prompt("Nombre de la película o serie:");
//     let strTipo = prompt("¿Es una película o serie? Inserte P o S:");
//     let fltValoracion = prompt("Valoración (1 a 5):");
//     arrArticulos.push({"nombre": strNombre, "tipo": strTipo, "valoracion": fltvaloracion});
// }

//  console.log(arrArticulos);

//17 enero - Ejercicio 1 / Parte B

let arrArticulos = [
    {nombre: "Breaking Bad", tipo: "S", valoracion: "4"},
    {nombre: "Pulp Fiction", tipo: "P", valoracion: "5"},
    {nombre: "Mision Imposible", tipo: "P", valoracion: "3"},
    {nombre: "the Walking Dead", tipo: "S", valoracion: "2"},
    {nombre: "Avatar", tipo: "P", valoracion: "1"}
];

// document.write(`<h2>Series</h2>`);

// for (let i = 0; i < arrArticulos.length; i++) {
//     if (arrArticulos[i]["tipo"] === "S") {
//         if (arrArticulos[i]["nombre"] === "Breaking Bad") {
//             document.write(`<p>Nombre de la serie: <span style="color:green;">${arrArticulos[i]["nombre"]}</span>. Valoración: ${arrArticulos[i]["valoracion"]}.</p>`);
//         }else {
//             let serie = `<p>Nombre de la serie: ${arrArticulos[i]["nombre"]}. Valoración: ${arrArticulos[i]["valoracion"]}.</p>`;
//             document.write(serie);
//         }
//     }
// }

// document.write(`<h2>Peliculas</h2>`);

// let arrPelis = [];

// for (let i = 0; i < arrArticulos.length; i++) {
//     if (arrArticulos[i]["tipo"] === "P"){
//         if (arrArticulos[i]["nombre"] === "Pulp Fiction") {
//             document.write(`<p><span style="color:red;">${arrArticulos[i]["nombre"]}</span> ${arrArticulos[i]["valoracion"]}<i class="fa fa-star-o"></i></p>`);
//         }else {
//             let pelicula = `<p>${arrArticulos[i]["nombre"]} ${arrArticulos[i]["valoracion"]}<i class="fa fa-star-o"></i></p>`;
//             document.write(pelicula);
//         }
//     }
// }


// let numMaxPeli = 0;
// let numMaxSerie = 0;
// let i;


// for (i = 0; i < arrArticulos.length; i++) {
//     if (arrArticulos[i]["tipo"] === "P") {
//     let num = parseFloat(arrArticulos[i]["valoracion"]);
//         if (numMaxPeli < num){
//             numMaxPeli = num;
//             if (parseFloat(arrArticulos[i]["valoracion"]) === numMaxPeli) {
//                 document.write(`<h3>Mejor película</h3>`+arrArticulos[i]["nombre"] );
//             }
//         } 
//     }
// }
 

// for (i = 0; i < arrArticulos.length; i++) {
//     if (arrArticulos[i]["tipo"] === "S") {
//     let num = parseFloat(arrArticulos[i]["valoracion"]);
//         if (numMaxSerie < num){
//             numMaxSerie = num;
//             if (parseFloat(arrArticulos[i]["valoracion"]) === numMaxSerie) {
//                 document.write(`<h3>Mejor serie</h3>`+arrArticulos[i]["nombre"] );
//             }
//         }       
//     }
// }

//17 enero - Ejercicio 2

 const articulos = arrArticulos;
 let artHtml = [];
 let artCsv = [];

 console.log(articulos);

 let strFormato = prompt("Formato de Exportación (HTML o CSV):");

 if (strFormato === "HTML") {
    for (let i = 0; i < articulos.length; i++){
        artHtml.push(`<tr><td>`+articulos[i]["nombre"]+`</td><td>`+articulos[i]["tipo"]+`</td><td>`+articulos[i]["valoracion"]+`</td></tr>`); 
    }
    document.write(`<table><tr><td>Artículo</td><td>Tipo</td><td>Valoración</td></tr>`+artHtml+`</table>`);
} else {
    for (let i = 0; i < articulos.length; i++){
        artCsv.push(`<div>`+articulos[i]["nombre"]+`;`+articulos[i]["tipo"]+`;`+articulos[i]["valoracion"]+`;</div>`); 
    }
    document.write(`<div>Artículo;Tipo;Valoración</div>`+artCsv);
}






