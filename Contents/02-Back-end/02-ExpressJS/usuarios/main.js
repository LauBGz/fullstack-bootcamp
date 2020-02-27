//Importar librerias
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//Importar archivo secrets: en este caso es SÍNCRONO para que se ejecute primero
const secretContent = fs.readFileSync('secrets.json');
const secrets = JSON.parse(secretContent);

//Creamos servidor
const servidor = express();

//Condfiguramos middleware
servidor.use(bodyParser.json())
servidor.use(cookieParser())

//REGISTER
servidor.post('/register', (req, res) => {
  if (req.body.username && req.body.password) {
      //Comprobar que el usuario no exista
      fs.readFile('users.json', (error, fileContents) => {
          if (error) throw error;
          const data = JSON.parse(fileContents);
          //Teniendo un array, comprobar si alguno de los objetos
          //Que hay dentro tiene un username igual al que me dan
          for (let i = 0; i < data.length; i++) {
              if(data[i]["username"] === req.body['username']){
                  res.send({"error": "Ese usuario ya existe"});
                  return;
              }    
          }
          //No se ha encontrado un usuario repetido
          bcrypt.hash(
              req.body.password,
              13,
              (error, hash) => {
                  if (error) throw error;
                  const userData = {
                      "username": req.body.username,
                      "password": hash
                  }
                  //Añado al array de usuarios, el nuevo usuario
                  data.push(userData)
                  fs.writeFile(
                      'users.json', 
                      JSON.stringify(data),
                      (error) => {
                          if (error) throw error
                          res.send({"message": "Usuario creado con éxito!"})
                      }
                  )
              }
          )
      })
      //generar hash de contraseña
  } else {
      res.send({"error": "Has mandado mal el body"})
  }
})

//LOGIN
servidor.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
      const userData = {
          "username": req.body.username,
          "password": req.body.password
      }
      fs.readFile('users.json', (error, fileContents) => {
          if (error) throw error;
          const data = JSON.parse(fileContents);
          //Buscar el usuario por su nombre
          for (let i = 0; i < data.length; i++) {
              if (data[i]["username"] === req.body['username']) {
                  //tenemos encontrado al usuario!!
                  //el usuario será data[i]
                  //Voy a comprobar el hash de la contraseña
                  bcrypt.compare(
                      userData["password"],
                      data[i]["password"],
                      (error, result) => {
                          if (error) throw error;
                          if (
                              userData["username"] === data[i]["username"] &&
                              result
                          ) {
                              jwt.sign(
                                { "username": userData["username"] }, 
                                secrets["jwt_clave"], 
                                (error, token) => {
                                  if (error) throw error;
                                  res.cookie('sello', token);
                                  //Ofuscar: Poner un nombre que no desvele
                                  //que no es una cookie
                                  res.send({ "message": "Usuario loggeado",
                                            "token": token
                                //La cookie no se va a guardar si no hay https.
                                //Es un provblema para trabajar en localhost.
                                //Por eso añadimos "token"
                                //Antes de deployar hay que quitarlo

                                })
                                  //Después del send se acaba la función
                              });
                           
                          }
                          else {
                              res.send({ "error": "usuario o contraseña incorrectos" })
                          }
                      }
                  )
                  return
              } else {
                  if (i === data.length -1){
                      res.send({"error": "usuario no existente"})
                      return;
                  }
              }
          }
      })
  } else {
      res.send({ "error": "Has mandado mal el body" })
  }
})

servidor.get('/endpointSecreto', (req,res) => {
  if (req.cookies.sello){
    //El usuario tiene al menos una cookie
    jwt.verify(req.cookies.sello, secrets["jwt_clave"], (error, decode) => {
      if (error) throw error;
      if (decode !== undefined) {
        //toda la lógica del endpoint
        res.send({"message": "OK. Puedes pasar."});
      }
});
  }else{
    res.send({"message": "You shall not pass!!"});
  }
})


//PATH PARAMS
servidor.get('/user/:indice', (req, res) => {
  fs.readFile('users.json', (error, fileContents) => {
    if (error) throw error;
    const data = JSON.parse(fileContents);
    const user = data[req.params.indice];
    res.send(user);
  })
})

//Asigno el puerto al servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})


