//Declaración de la función
// function  CalcularEdad (nacimiento){
//     const result = 2020 - parseInt(nacimiento);
//     return result;
// }

// let nacimientoBob = prompt("¿En qué año nació Bob?");

// let edadBob = CalcularEdad(nacimientoBob);

// let nacimientoAna = prompt("¿En qué año nació Ana?");

// let edadAna = CalcularEdad(nacimientoAna);

// if (edadBob > edadAna){
//     document.write("Bob es mayor!");
// }else{
//     document.write("Ana es mayor!");
// }

/////////////////////////////////////////////////////////////////////////

// function obtenerDiaSemana(numero){
//     let result;
//     switch(numero){
//         case 1: 
//             result = "Lunes";
//             break;
//         case 2: 
//             result = "Martes";
//             break;
//         case 3: 
//             result = "Miércoles";
//             break;
//         case 4: 
//             result = "Jueves";
//             break;
//         case 5: 
//             result = "Viernes";
//             break;
//         case 6: 
//             result = "Sábado";
//             break;
//         case 7: 
//             result = "Domingo";
//             break;
//         default: 
//             result = "Escribe un número del 1 al 7, por favor.";
//     }

//     return result;

// }

// let numero = prompt("Dime un número del 1 al 7:");

// numero = parseInt(numero);

// const diaSemana = obtenerDiaSemana(numero);

// document.write(diaSemana);

// Acepta un número como argumento y lo multipla x 10

// function  multiplicar (numero){
//     const result = numero * 10;
//     return result;
// }

// let fltNumero = parseFloat(prompt("Introduce un numero:"));

// let fltNumMultiplicado = multiplicar(fltNumero);

// console.log(fltNumMultiplicado);

// function  multiplicar (numero, multiplicador){
//     const result = numero * multiplicador;
//     return result;
// }

// let fltNumero = parseFloat(prompt("Introduce un numero:"));
// let fltMultiplicador = parseFloat(prompt("Introduce un numero:"));

// let fltNumMultiplicado = multiplicar(fltNumero, fltMultiplicador);

// console.log(fltNumMultiplicado);

// function calcularEdad (edadHumanos){
//     const result = edadHumanos * 7;
//     return result;
// }

// let fltEdadHumanos = parseFloat(prompt("Introduce edad: "));

// let fltEdadPerros = calcularEdad(fltEdadHumanos);

// console.log(fltEdadPerros);

//Recibe 2 string

// function  concatenar (string1, string2){
//     const result = string1 + " " + string2;
//     return result;
// }

// let strFrase1 = "Hola"
// let strFrase2 = "mundo."

// let strFraseEntera = concatenar(strFrase1, strFrase2)

// document.write(strFraseEntera);

// function  concatenar (string1, string2, dejarEspacio = false){
//     let result;
//     if(dejarEspacio === true){
//         result = string1 + " " + string2;
//     }else{
//         result = string1 + string2;
//     }
//     return result;
// }

// function pickOne(arrFrutas, numero){
//     let result = arrFrutas[numero];
//     return result;
// }

// const listaFrutas = ["manzana", "pera", "platano", "piña", "fresa", "coco", "melon"];

// let strFruta = pickOne(listaFrutas, 3);

// console.log(strFruta);

//pickAnother({type:"Fiat", model:"500", color:"white"}, "model") --> "500"

// function pickAnother(object, key){
//     let result = object[key];
//     return result;
// }

// const coche = {type:"Fiat", model:"500", color:"white"};

// let modeloCoche = pickAnother(coche, "model");

// console.log(modeloCoche);

// function pickProperty(object, property){
//     let result;
//     for (key in object){
//         if (object[key] === property){
//             result = key;
//             return result;
//         }
//     }
//    
// }

// const coche = {type:"Fiat", model:"500", color:"white"};

// let claveCoche = pickProperty(coche, "Fiat");

// console.log(claveCoche);


//Funcion que coge un string y dice si es un palíndromo

// function checkPalindromo(palabra){
//     let palabraRev = "";
//     for (i=palabra.length-1; i >= 0; i--) {
//         let letra = palabra[i];
//         palabraRev += palabra[i];  
//     }
//     if (palabraRev === palabra){
//         document.write(palabra+` es un palíndromo.`);
//     }else{
//         document.write(palabra+` no es un palíndromo.`);
//     }
// }

// let palabra = "oso";
// checkPalindromo(palabra)

//PALINDROMO
// function checkPalindromo(palabra){
//     let palabraRev = "";
//     for (i=palabra.length-1; i >= 0; i--) {
//         let letra = palabra[i];
//         palabraRev += palabra[i];  
//     }
//     if (palabraRev === palabra){
//         document.write(palabra+` es un palíndromo.`);
//     }else{
//         document.write(palabra+` no es un palíndromo.`);
//     }
// }

// let palabra = "oso";
// checkPalindromo(palabra)

//Ejercicio 1

// function miFuncion(numero){
//     let result = numero / 100;
//     return result;
// }

// let intNumber = 50;
// let resultado = miFuncion(intNumber);

// console.log(resultado);

    
// Ejercicio 2

// function miFuncion(array, string){
//     let result = array.indexOf(string);
//     return result;
// }

// const listaFrutas = ["manzana", "pera", "platano", "piña", "fresa", "coco", "melon"];
// let resultado = miFuncion(listaFrutas, "melon");

// console.log(resultado);

//Ejercicio 3

// function miFuncion(array){
//     let resultado;
//     if (array[1] === 4) {
//         resultado = false;
//     }else{
//         if(array[0] === array[1] || array[1] === array[2]){
//            resultado = true;
//         }else{
//             resultado = false;
//         }
//     }
//     return resultado;
// }

// let arrayNum=[1,4,3];   
// let resultado = miFuncion(arrayNum);

// console.log(resultado);

//Ejercicio  4
// function tellFortune (number, name, location, job){
//     let resultado = `<p>You will be a `+job+` in `+location+`, and married to `+name+` with `+number+` kids.</p>`;
//     document.write(resultado);
// }

// tellFortune(2, "Al", "Brasil", "professor");
// tellFortune(1, "Ana", "México", "doctor");
// tellFortune(0, "David", "Spain", "developer");

//Ejercicio  5

// function calculateDogAge(ageAnimal, ageHuman){
//     let dogAge = ageAnimal * ageHuman;
//     let result = `<p>Your doggie is `+dogAge+` years old in dogyears!</p>`;
//     document.write(result);
// }

// calculateDogAge(5, 7);
// calculateDogAge(10, 7);
// calculateDogAge(1, 7);

//Ejercicio  6

// function CelsiusToFahrenheit(celsius){
//     let resultado = (celsius * 9/5) + 32;
//     document.write(resultado);
// }

// CelsiusToFahrenheit(30);

//Ejercicio  7

// function FahrenheitToCelsius(fahrenheit){
//     let resultado = (fahrenheit - 32) * 5/9;
//     document.write(resultado);
// }

// Ejercicio 8

function convertTemperature (grados, tipo){
    if (tipo === "Celsius"){
        resultado = CelsiusToFahrenheit(grados);
    }
    if (tipo === "Fahrenheit"){
        resultado = FahrenheitToCelsius(grados);
    }
}

convertTemperature(10, "Celsius");

// Ejercicio 9

// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function testArray (num1, num2){
//     let resultado = false;
//     for (let i = 0; i<arrayNum.length; i++){
//         if (arrayNum[i] === num1 || arrayNum[i] === num2){
//             resultado = true;
//         }
//     }
//     return resultado;

// }

// let existeNum = testArray(1,3);
// console.log(existeNum);

// Ejercicio 10

// function checkAge(age){
//     let resultado;
//     if ( (age >= 20 && age <= 30) || (age >= 50 && age <= 60)){
//         resultado = document.write(`You are between 20-30 or 50-60 years old.`)
//     }else{
//         resultado = document.write(`You are not between 20-3 or 50-60 years old.`)
//     }   
// }

// checkAge(55);

//Ejercicio 11

// function checkMultiple(number){
//     let resultado = false;
//     if ( number % 3 === 0 || number % 7 === 0){
//         resultado = true;
//     }   
//     return resultado;
// }

// let multiplo = checkMultiple(10);
// console.log(multiplo);

//Ejercicio 12

// function createString(string){
//     let threeChar = string.slice(-3);
//     let newLength = string.length-3;
//     let restString = string.slice(0, newLength);
//     let newString = threeChar+restString+threeChar;
//     return newString;
// }


// let newStr = createString("ornitorrinco"); 
// console.log(newStr);

// function countTimes (string, char){
//     let numRepeticiones = 0;
//     for (let i = 0; i<string.length; i++){
//         if (string[i] === char){
//            numRepeticiones++;
//         }
//     }
//     return numRepeticiones;
// }

// let contarVeces = countTimes("ornitorrinco", "r");

// console.log(contarVeces);