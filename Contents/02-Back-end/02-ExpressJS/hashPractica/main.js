//Imports
const color = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');

//Crear servidor
servidor = express();

//Configuramos middleware
servidor.use(bodyParser.json())

//Configuramos endpoint POST
servidor.post('/registro', (req, res) => {
  if(req.body.username && req.body.password){
    bcrypt.hash(req.body.password, 13, (error, hash) => {
      if (error) throw error;
      const dataUsuario = {
        "username": req.body.username,
        "password": hash,
      };
    fs.writeFile('user.json', JSON.stringify(dataUsuario), error => {
      if (error) throw error;
      res.send({"message": "Usuario registrado correctamente."});
    })
  });
  }else{
    res.send({"error": "Has mandado mal el body."});
  }
});

//Configuramos endpoint PUT

servidor.post('/login', (req, res) => {
  if (req.body.username && req.body.password){//y no string vacío
    const dataUsuario = {
      "username": req.body.username,
      "password": req.body.password,
    };
    fs.readFile('user.json',(error, fileContents) => {
      if (error) throw error;
      const data = JSON.parse(fileContents);

      bcrypt.compare(dataUsuario.password, data.password, (error, result) => {
        if (error) throw error;
        if (data.username === dataUsuario.username && result){
          res.send({"message": "Usuario logueado"})
        }else{
          res.send({"error": "Usuario o contraseña incorrectos."})
        }
      })
    })
  }else{
    res.send({"error": "Has mandado mal el body."});
}
})

//Asignación de puerto al servidor 
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});