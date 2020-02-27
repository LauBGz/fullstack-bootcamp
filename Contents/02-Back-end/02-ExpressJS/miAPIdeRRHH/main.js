//Importar librerias
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


//Crear servidor
const servidor = express();

//Configuramos middleware
servidor.use(bodyParser.json())

//Endpoint /employees (GET) 
servidor.get('/employees', (req, res) =>{
  fs.readFile('users.json', (error, fileContents) => {
    if(error) throw error;
    const datosUsuarios = JSON.parse(fileContents);
    res.send(datosUsuarios);
    return;
  })
})

//Endpoint /employee/:indice(GET)
servidor.get('/employee/:indice', (req, res) => {
  fs.readFile('users.json', (error, fileContents) => {
    if (error) throw error;
    const datosUsuarios = JSON.parse(fileContents);
    const usuario = datosUsuarios[req.params.indice];
    res.send(usuario);
    return;
  })
})


//Endpoint /addEmployee (POST)
servidor.post('/addEmployee', (req, res) =>{
  if( req.body["FirstName"] && req.body["SecondName"] &&
      req.body["Departamento"] && req.body["Salario"]){

        fs.readFile('users.json', (error, fileContents) => {
          if(error) throw error;      
          const data = JSON.parse(fileContents);
          
          let positionID = data.length-1;
          let id = data[positionID]["id"];
          idUsuario = parseInt(id) + 1;
      
          const userData = {
            "FirstName": req.body["FirstName"], 
            "SecondName": req.body["SecondName"], 
            "Departamento": req.body["Departamento"], 
            "Salario": req.body["Salario"], 
            "id": `${idUsuario}`
          }
          //Añado al array de usuarios, el nuevo usuario
          data.push(userData);
          fs.writeFile('users.json', JSON.stringify(data), (error) => {
            if (error) throw error
            res.send({"message": "Usuario creado con éxito!"});
            return;
          })
        })
  }else{
    res.send({"message": "Body incorrecto."});
    return;
  }
})

//Endpoint /editEmployee (PUT)
servidor.put('/editEmployee', (req, res) =>{
  if( req.body["FirstName"] && req.body["SecondName"] && req.body["Departamento"] 
  && req.body["Salario"] && req.body["Salario"] && req.body["id"]){
    //CONTENIDO IF
    fs.readFile('users.json', (error, fileContents) => {
      if(error) throw error;      
      const data = JSON.parse(fileContents);
      //FOR PARA COMPARAR ID
      for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] === req.body["id"]){
          //Si existe usuario
          const newUserData = {
            "FirstName": req.body["FirstName"], 
            "SecondName": req.body["SecondName"], 
            "Departamento": req.body["Departamento"], 
            "Salario": req.body["Salario"], 
            "id": req.body["id"]
            }
          data.splice(i, 1, newUserData);
          fs.writeFile('users.json', JSON.stringify(data), (error) => {
            if (error) throw error;
            res.send({"message": "Usuario modificado con éxito!"});
            return;
          })
        }else{  
          res.send({"message": "Usuario no encontrado."});
          return;
        }
      }
    })
  }else{
    res.send({"message": "Body incorrecto."});
    return;
  }
})

//Endpoint /deleteEmployee/:indice(DELETE) 
servidor.delete('/deleteEmployee/:indice', (req, res) =>{
  fs.readFile('users.json', (error, fileContents) => {
    if (error) throw error;
    let datosUsuarios = JSON.parse(fileContents);
    const idUsuario = req.params.indice;
   
    datosUsuarios.splice(idUsuario, 1);

    fs.writeFile('users.json', JSON.stringify(datosUsuarios), (error) => {
      if (error) throw error;
      res.send({"message": "Usuario borrado con éxito!"});
      return;
    })
    })
});


//Configuración servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})
