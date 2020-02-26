//Importar librerias
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const bcrypt = require('bcrypt');

//Creamos servidor
const servidor = express();

//Condfiguramos middleware
servidor.use(bodyParser.json())

//Creamos los endpoints
servidor.post('/register', (req, res) => {
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

servidor.post('/login', (req, res) =>{
  if(req.body.username && req.body.password){
    const userData = {
      "username": req.body.username,
      "password": req.body.password
    }
    fs.readFile('user.json', (error, fileContents) =>{
      if (error) throw error;
      const data = JSON.parse(fileContents);
      
      //Comprobar hash de la contraseña
      bcrypt.compare(
        userData["password"], 
        data["password"], 
        function(error, result) {
          if (error) throw error;
          if (userData["username"] === data["username"] 
          &&
          result //por defecto es como result === true
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

//Asigno el puerto al servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})


