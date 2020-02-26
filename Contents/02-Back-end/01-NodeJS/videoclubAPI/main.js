const express = require('express');
const fs = require('fs');
const bodyParser =  require('body-parser');
let catalogoCompleto = [];

//Creo un servidor
const miServidor = express();

miServidor.use(bodyParser.json())


miServidor.get('/pelis', (request, response) => {
  fs.readFile('data.json', (error, fileContents) => {
    if(error){
      throw error
    }else{
      catalogoCompleto = JSON.parse(fileContents);
      response.send(catalogoCompleto);
    }
  })
})



miServidor.post('/editar', (request, response) =>{
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

miServidor.post('/anadir', (request, response) =>{
  fs.writeFile(
    'data.json',
    JSON.stringify(request.body),
    (error) => {
      if (error){
        throw error
      } else {
        console.log(request)
        console.log(response)
      }
    }
  )
  // fs.readFile('data.json', (error, fileContents) => {
  //   if(error){
  //     throw error
  //   }else{
  //     catalogoCompleto = JSON.parse(fileContents);
  //     response.send(catalogoCompleto);
  //   }
  // })
})


miServidor.listen(
  3000, 
  () => {
    console.log("Servidor escuchando en el puerto 3000")
  }
)
