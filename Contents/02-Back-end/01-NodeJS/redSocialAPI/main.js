//Imports
const express = require('express');
const fs = require ('fs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')

//Servidor
const miServidor = express();

//Middleware
miServidor.use(bodyParser.json());

//GET TWEETS
miServidor.get('/tweets',(request, response)=>{
  fs.readFile('data.json', (error, fileContents)=> {
    if ( error ){
      throw error
    } else {
      const data = JSON.parse(fileContents)
      response.send(data)
    }
  })
})

//POST TWEET
miServidor.post('/editar', (request, response)=> {
  if( request.body.content && request.body.fecha && request.body.usuario){
    fs.readFile('data.json', (error, fileContents) => {
    if ( error ){
      throw error
    }else{  
      let data = JSON.parse(fileContents);
      let newData = {
          content: request.body.content,
          fecha: request.body.fecha,
          usuario: request.body.usuario 
      }

      data.push(newData)

      fs.writeFile('data.json', JSON.stringify(data),
        (error)=> {
          if ( error ){
            throw error

          }else{
            response.send({"content": "formato de tweet correcto"})
          }
        })
      }
    })   
  }else{
    response.send({"message":"todo esta mal"})
  }
})       

//REGISTER
miServidor.post('/register', (req, res) => {
  if(req.body.username && req.body.password){
    //Generar hash de contraseña
    bcrypt.hash(req.body.password, 14, (error, hash) => {
      if(error) throw error;
      const userData = {
        "username": req.body.username,
        "password": hash
      };
      fs.writeFile('user.json', JSON.stringify(userData), 
        error => {
          if(error) throw error;
          res.send({"message": "Usuario creado como objeto."});
        }
      )
    });
  }else{
    res.send({"error": "Has mandado mal el body."});
  }
})

//LOGIN
miServidor.post('/login', (req, res) =>{
  if(req.body.username && req.body.password){
    const userData = {
      "username": req.body.username,
      "password": req.body.password
    }
    fs.readFile('user.json', (error, fileContents) =>{
      if (error) throw error;
      const data = JSON.parse(fileContents);
      bcrypt.compare(
        userData["password"], 
        data["password"], 
        function(error, result) {
          if (error) throw error;
          if (userData["username"] === data["username"] 
          &&
          result
        ){
          res.send({"message": "Usuario logueado"});
      }else{
        res.send({"error": "Usuario o contraseña incorrectos."});
      }
      });
    })
  }else{
      res.send({"error": "Has mandado mal el body."});
  }
})
     
//SERVIDOR

miServidor.listen(3000, ()=> {
  console.log('servidor escuchando en el puerto 3000')
})