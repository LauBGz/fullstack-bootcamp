//Una opción

// const https = require('https');
// https.get(
//     "https://api.chucknorris.io/jokes/random",
//     (responseAPI) => {
//         let buffer = "";
//         //Cada vez que recibo un dato de la API
//         responseAPI.on('data', (trozoDeInformacion) => {
//             buffer += trozoDeInformacion;
//         })
//         //Cuando haya terminado la respuesta de la API
//         responseAPI.on('end', ()=>{
//             console.log(buffer)
//         })
//     }
// )

//Con esta librería estoy creando un pequeño servidor.
//A este servidor le tengo que indicar un determinado puerto.
//puertos son un numero que se le asigna a los servidors que se estan 
//ejecutando en una instancia para que no se interrumpan enrtre ellos
// el rango de puertops abiertos va de 0 - 65.583

//http 80
//https 443

//Otra opción
// const htttp = require('http');

// htttp.createServer((request, response)=>{
//   response.write("Hola Mundo");
//   response.end()
// }).listen(3000) //Crea un puerto

//La opción que vamos a usar: ExpressJS
