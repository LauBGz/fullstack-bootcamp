//Pregunto al usuario los datos
let nacimiento = prompt("Dime tu año de nacimiento: ");
let nombre = prompt("Dime tu nombre: ");

//Casteo la variable nacimiento a numérica
nacimiento = parseInt(nacimiento);
const edad = 2020-nacimiento;

//Imprimir el mensaje al usuario
document.write(`Hola ${nombre}. Tu edad es ${edad} años.`)
document.write("Hola "+nombre+". Tu edad es "+edad+" años.")