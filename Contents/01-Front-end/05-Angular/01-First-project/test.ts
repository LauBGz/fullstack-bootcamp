let año:number = 1;// No se debe reasignar el tipo de dato año:string = "uno";

//Los tipos de datos son los mismos que javascript

//Array: puede tener el largo que sea y tiene el mismo tipo da datos

let miArray:string[] = ["hola", "mundo"]; //tipo de dato

let miArray2:number[] = [1, 2];

//Tupla: lista en matemáticas. Contiene diferentes tipos de datos y debe ser corto 

let miArray3:[number, string] = [1, "mundo"];//Tupla

let emergencia:any;//cualquier tipo de dato. Recurso de emergencia

//3 lugares donde hay que poner tipo
/* 
    1. Variables let año:number = 1;
    2. Argumentos de las funciones function saludar(nombre:string){}
    3. Funciones function sumar(num1:number, num2:number):number{
    let resultado = num1 + num2;
    return resultado;

    función sin return: void o boolean y return true/false
}
*/

// let p2: string = autogame(["piedra", "papel", "tijera"])
// ​
// function autogame(machine:string[] ):string {
// ​
//     let result:string = machine[Math.round(Math.random() * (machine.length)) - 1];
//     return result;
// }
// ​
// function game(P1:string, P2:string):void {
// ​
//     if (P1 === "papel" && P2 === "piedra") {
//         alert("P1 Win")
//     }
//     else if (P1 === "piedra" && P2 === "papel") {
//         alert("Machine Win")
//     }
//     else if (P1 === "piedra" && P2 === "tijera") {
//         alert("P1 Win")
//     }
//     else if (P1 === "tijera" && P2 === "piedra") {
//         alert("Machine Win")
//     }
//     else if (P1 === "tijera" && P2 === "papel") {
//         alert("P1 Win")
//     }
//     else if (P1 === "papel" && P2 === "tijera") {
//         alert("Machine Win")
//     } else {
//         alert("Dead Heat")
//     }
// }
// let p1:string = prompt("Player 1 Seleciona piedra , papel o tijera ");

// game(p1, p2)

