//ExpressJS: librería que por detrás utiliza la librería del CORE de Node.js.
// const express = require('express');

// //Creo un servidor
// const miServidor = express();

// //Decirle el puerto en el que escuchar
// miServidor.listen(
//   3000, 
//   () => {
//     console.log("Servidor escuchando en el puerto 3000")
//   }
// )

//Al lanzar se queda escuchando eternamente a recibir peticiones

//Esta parte siempre se hace igual pero falta decirle al servidor que hacer
//cuando reciba una petición


// const express = require('express');

// //Creo un servidor
// const miServidor = express();

// //Configurar los endpoints
// miServidor.get('/saludar', (request, response) => {
// //Request: objeto que utilizaré para sacar info de la petición
// //Response: objeto para enviar la respuesta
//   response.send({"Message": "Adiós Vida"})
// })

// //Decirle el puerto en el que escuchar
// miServidor.listen(
//   3000, 
//   () => {
//     console.log("Servidor escuchando en el puerto 3000")
//   }
// )

const express = require('express');
const fs = require('fs');
const bodyParser =  require('body-parser');

//Creo un servidor
const miServidor = express();

//Añadir los middleware
miServidor.use(bodyParser.json())// de esta manera siempre parseará a Json 
//sin tener que repetirlo en cada llamada

//Configurar los endpoints
miServidor.get('/name', (request, response) => {  
  response.send({"Message": "Me llamo Laura"})
})


miServidor.get('/data', (request, response) => {
    fs.readFile('data.json', (error, fileContents) => {
      if(error){
        throw error
      }else{
        const data = JSON.parse(fileContents);
        response.send(data);
      }
    })
  })


//Llamadas post

miServidor.post('/editarArchivo', (request, response) =>{
  fs.writeFile(
    'data.json',
    JSON.stringify(request.body),
    (error) => {
      if (error){
        throw error
      } else {
        response.send({"message":"Ok archivo creado"})
      }
    }
  )
})

miServidor.get('/saludar', (request, response) => {
  response.send({"Message": "Adiós Vida"})
})

//Decirle el puerto en el que escuchar
miServidor.listen(
  3000, 
  () => {
    console.log("Servidor escuchando en el puerto 3000")
  }
)

