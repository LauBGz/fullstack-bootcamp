// //Pregunto al usuario los datos
// let nacimiento = prompt("Dime tu año de nacimiento: ");
// //let nombre = prompt("Dime tu nombre: ");

// //Casteo la variable nacimiento a numérica
// nacimiento = parseInt(nacimiento);
// const edad = 2020-nacimiento;

// //Bifurcación
// if ( (edad >= 18) && (edad < 65) ){
//     let mes = prompt ("Dime el mes en el que naciste?: ");
//     if ( (mes === "Enero") || (mes === "Diciembre") ){
//         document.write(`Bienvenido`)
//     }else{
//         document.write(`No eres capri.`)
//     };
// } else {
//     document.write(`Tu edad es inferior a 18 años. Vuelve a la guardería. `)
// };

// //Imprimir el mensaje al usuario
// //document.write(`Hola ${nombre}. Tu edad es ${edad} años.`)
// //document.write("Hola "+nombre+". Tu edad es "+edad+" años.")

const mes = prompt("Dime tu mes de nacimiento:");

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
    case "Marzo":
        document.write("Naciste en invierno.");
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        document.write("Naciste en primavera.");
        break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
        document.write("Naciste en verano.");
        break;
    case "Octubre":
    case "Noviembre":
        document.write("Naciste en verano.");
        break;   
    default:
        document.write("Lo escribiste mal.");
        break;
};