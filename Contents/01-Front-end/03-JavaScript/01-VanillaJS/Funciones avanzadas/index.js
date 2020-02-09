//Funciones anónimas

// (function(){
//     alert("Hola usuario");
// }());

// function saludar(callback){
//     alert("Hola usuario"); // Primero se ejecuta el alert y después la función de callback
//     callback();
// };

// saludar(function (){
//     alert("Adiós usuario");
// });

//setTimeout(function(){
//     alert("Hola")
// }, 2000);

//función flecha
//setTimeout(() => {alert("Hola")}, 2000);

// setInterval(function(){
//     alert("Hola")
// }, 2000)

// setInterval(callback, milisegundos);

// let cuenta = 10;
// setInterval(() => {
//     if (cuenta > 0){
//         cuenta--;
//         document.open();
//         document.write(cuenta);
//         document.close();
//     } 
//     if (cuenta === 0){
//         cuenta--;
//         document.open();
//         document.write("Boom");
//         document.close();
//     }
// }, 1000);