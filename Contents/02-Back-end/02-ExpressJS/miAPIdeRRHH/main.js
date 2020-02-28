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
servidor.get('/employee/:id', (req, res) => {
  fs.readFile('users.json', (error, fileContents) => {
    if (error) throw error;
    
    const datosUsuarios = JSON.parse(fileContents);
    
    const idUsuario = req.params.id;

    let result = datosUsuarios.find(obj => {
      return(obj.id === idUsuario)
    })

    if (result === undefined) {
      res.send({"message": "Usuario no existe."});
    } else {
      res.send(result);
    }
  })
})


//Endpoint /addEmployee (POST)
servidor.post('/addEmployee', (req, res) =>{
  if( req.body["FirstName"] && req.body["SecondName"] &&
      req.body["Departamento"] && req.body["Salario"]){

        fs.readFile('users.json', (error, fileContents) => {
          if(error) throw error;      
          const data = JSON.parse(fileContents)

          let idUsuario = 0;
          for (const user of data) {
              if (user["id"] > idUsuario){
                idUsuario = user["id"]
              }
              idUsuario++;
            } 
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
    fs.readFile('users.json', (error, fileContents) => {
      if(error) throw error;      
      const data = JSON.parse(fileContents);
      let posUsuarioEncontrado = -1;

      for (i = 0; i < data.length; i++) {
        if (data[i]["id"] === req.body["id"]){
          posUsuarioEncontrado = i;
        }
      }

      if (posUsuarioEncontrado > -1){
        const newUserData = {
          "FirstName": req.body["FirstName"], 
          "SecondName": req.body["SecondName"], 
          "Departamento": req.body["Departamento"], 
          "Salario": req.body["Salario"], 
          "id": req.body["id"]
          }
        data.splice(posUsuarioEncontrado, 1, newUserData);
        fs.writeFile('users.json', JSON.stringify(data), (error) => {
          if (error) throw error;
          res.send({"message": "Usuario modificado con éxito!"});
          return;
        })
      }else{
        res.send({"message": "Usuario no encontrado."});
        return;
      }
    })
  }else{
    res.send({"message": "Body incorrecto."});
    return;
  }
})

//Endpoint /deleteEmployee/:indice(DELETE) 
servidor.delete('/deleteEmployee/:id', (req, res) =>{
  fs.readFile('users.json', (error, fileContents) => {
    if (error) throw error;

    let datosUsuarios = JSON.parse(fileContents);

    const idUsuario = req.params.id;

    let posArray;

    let result = datosUsuarios.find(obj => {
      return(obj.id === idUsuario);
    })  

    for (i = 0; i < datosUsuarios.length; i++) {
      if(datosUsuarios[i] === result){
        posArray = i;
      }
    }

    datosUsuarios.splice(posArray, 1)

    if(result === undefined){
      res.send({"message": "Usuario no existe"});
      return;
    } else {
      fs.writeFile('users.json', JSON.stringify(datosUsuarios), (error) => {
        if (error) throw error;
        res.send({"message": "Usuario borrado con éxito!"});
        return;
      })
    }
  })
});
  

//Configuración servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})
