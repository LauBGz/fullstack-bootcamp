//Las contraseñas de usuarios se deben guardar hasheadas. No se debe permitir hacer llamadas
// a ningún endpoint si no se tiene un token de sesión válido en las cookies. 

//TODO: Es importante documentar todos los endpoints de la API en el README del proyecto. 

//Importar librerias
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const express = require('express');
//TODO: AÑADIR VALIDACIONES CON EXPRESS

//Importar archivo lockUp
const lockUpContent = fs.readFileSync('./lockup.json');
const lockUp = JSON.parse(lockUpContent);

//Creamos servidor
const servidor = express();

//Configuramos middleware
servidor.use(bodyParser.json())
servidor.use(cookieParser())
servidor.use(helmet())

//Funcion cookies
function isThereCookie (clientCookie){
    let thereIsCookie;
    if (clientCookie){
        //El usuario tiene al menos una cookie
        jwt.verify(clientCookie, lockUp["jwt_clave"], (error, decode) => {
          if (error) throw error;
          if (decode !== undefined) {
           thereIsCookie = true;
          }
    });
      }else{
        thereIsCookie =  false;
    }
    return thereIsCookie;
}

// Endpoint /register. Se realizará una llamada POST a este endpoint 
//enviando la información de un cliente nuevo: username, email, password
servidor.post('/register', (req, res) =>{
    if(req.body["username"] && req.body["password"] && req.body["email"]){
        fs.readFile('users.json', (error, fileContents) => {
            if(error) throw error;      

            const data = JSON.parse(fileContents);

            for (let i = 0; i < data.length; i++) {
                if(data[i]["username"] === req.body['username']){
                    res.send({"error": "Ese usuario ya existe"});
                    return;
                }    
            }

            bcrypt.hash(req.body["password"], 14, (error, hash) => {
                if (error) throw error;
                
                let idUsuario = 0;
                for (const user of data) {
                    if (user["id"] > idUsuario){
                        idUsuario = user["id"]
                }
                    idUsuario++;
                } 

                const userData = {
                    "username": req.body["username"], 
                    "password": hash, 
                    "email": req.body["email"], 
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
        })
    } else {
    res.send({"message": "Body incorrecto."});
    return;
    }
})
//TODO: AÑADIR VALIDACION POST USUARIO

// Endpoint /login. Se realizará una llamada POST a este endpoint enviando 
//el username y la password. El servidor comprobará la password y, 
//si es correcta, enviará al cliente un token de sesión en una cookie. 

servidor.post('/login', (req, res) => {
    if (req.body["username"] && req.body["username"]) {
        const userData = {
            "username": req.body["username"],
            "password": req.body["password"]
        }

        fs.readFile('users.json', (error, fileContents) => {
            if (error) throw error;

            const data = JSON.parse(fileContents);

            //Buscar el usuario por su nombre
            for (let i = 0; i < data.length; i++) {
                if (data[i]["username"] === req.body["username"]) {
                    bcrypt.compare(userData["password"], data[i]["password"],(error, result) => {
                        if (error) throw error;

                        if (userData["username"] === data[i]["username"] && result){
                            jwt.sign({ "username": userData["username"] }, 
                                lockUp["jwt_clave"], (error, token) => {
                                if (error) throw error;

                                res.cookie('stamp', token);
                                res.send({ "message": "Usuario loggeado",
                                            "token": token})  
                                //TODO: quitar token antes de deployar 
                            });
                        } else {
                            res.send({ "error": "usuario o contraseña incorrectos" })
                        }
                    })
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
  
//Endpoint /pedidos. Se realizará una llamada GET a este endpoint y se devolverá 
//un array con todos los pedidos.
servidor.get('/pedidos', (req, res) =>{
    let access = isThereCookie(req.cookies.stamp);

    if (access){
        fs.readFile('data.json', (error, fileContents) => {
            if(error) throw error;
            const ordersData = JSON.parse(fileContents);
            res.send(ordersData);
            return;
        })
    } else {
        res.send({"message": "No puede acceder a esta información."});
    }
}) 

//Endpoint /pedido/:indice Se realizará una llamada GET a este endpoint y 
//se devolverá la información de aquel pedido que se encuentre en la posición :indice 
servidor.get('/pedido/:id', (req, res) => {
    let access = isThereCookie(req.cookies.stamp);

    if (access){
        fs.readFile('data.json', (error, fileContents) => {
            if (error) throw error;
            
            const data = JSON.parse(fileContents);
            
            const orderID = req.params.id;
        
            let singleOrder = data.find(obj => {
              return(obj.id === orderID)
            })
        
            if (singleOrder === undefined) {
              res.send({"message": "Pedido no existe."});
            } else {
              res.send(singleOrder);
            }
          })
    } else {
        res.send({"message": "No puede acceder a esta información."});
    }
})

//Endpoint /crearPedido. Se realizará una llamada POST con toda la información necesaria 
//para crear un nuevo pedido: + Productos: array de strings + fecha: string + dirección: string + precio: string 
servidor.post('/crearPedido', (req, res) =>{
    let access = isThereCookie(req.cookies.stamp);

    if (access){
if(req.body["productos"] && req.body["fecha"] && req.body["direccion"] && req.body["precio"]){
        fs.readFile('data.json', (error, fileContents) => {
          if(error) throw error;      

          const data = JSON.parse(fileContents)

          let idPedido = 0;
          for (const user of data) {
              if (user["id"] > idPedido){
                idPedido = user["id"]
              }
              idPedido++;
            } 

          const orderData = {
            "productos": req.body["productos"], 
            "fecha": req.body["fecha"], 
            "direccion": req.body["direccion"], 
            "precio": req.body["precio"],
            "id": `${idPedido}`
          }
          //Añado al array de usuarios, el nuevo usuario
          data.push(orderData);
          fs.writeFile('data.json', JSON.stringify(data), (error) => {
            if (error) throw error
            res.send({"message": "Pedido creado con éxito!"});
            return;
          })
        })
  }else{
    res.send({"message": "Body incorrecto."});
    return;
  }
    } else {
        res.send({"message": "No puede acceder a esta información."});
    }
})
//TODO: AÑADIR VALIDACION POST PEDIDO

// Endpoint /editarPedido. Se realizará una llamada PUT con toda la información necesaria 
//para modificar un pedido ya existente. + Productos: array de strings + fecha: 
//string + dirección: string + precio: string + indice: numero → este número indicará la 
//posición del pedido que hay que modificar dentro del array de todos los pedidos.
servidor.put('/editarPedido', (req, res) =>{
  if(req.body["productos"] && req.body["fecha"] && req.body["direccion"] 
  && req.body["precio"] && req.body["id"]){
    fs.readFile('data.json', (error, fileContents) => {
      if(error) throw error;      
      const data = JSON.parse(fileContents);
      let orderPosition = -1;

      for (i = 0; i < data.length; i++) {
        if (data[i]["id"] === req.body["id"]){
          orderPosition = i;
        }
      }

      if (orderPosition > -1){
        const newOrderData = {
          "productos": req.body["productos"], 
          "fecha": req.body["fecha"], 
          "direccion": req.body["direccion"], 
          "precio": req.body["precio"],
          "id": req.body["id"]
          }
        data.splice(orderPosition, 1, newOrderData);
        fs.writeFile('data.json', JSON.stringify(data), (error) => {
          if (error) throw error;
          res.send({"message": "Pedido modificado con éxito!"});
          return;
        })
      }else{
        res.send({"message": "Pedido no encontrado."});
        return;
      }
    })
  }else{
    res.send({"message": "Body incorrecto."});
    return;
  }
})
//TODO: AÑADIR VALIDACION PUT PEDIDO

//+ Endpoint /eliminarPedido/:indice. Se realizará una llamada DELETE a este endpoint y 
//se eliminará del archivo de datos aquel pedido que se encuentre en la posición :indice 
servidor.delete('/eliminarPedido/:id', (req, res) =>{
  fs.readFile('data.json', (error, fileContents) => {
    if (error) throw error;

    let data= JSON.parse(fileContents);

    const orderID = req.params.id;

    let positionInArray;

    let orderToDelete = data.find(obj => {
      return(obj.id === orderID);
    })  

    for (i = 0; i < data.length; i++) {
      if(data[i] === orderToDelete){
        positionInArray = i;
      }
    }

    data.splice(positionInArray, 1)

    if(orderToDelete === undefined){
      res.send({"message": "Pedido no existe"});
      return;
    } else {
      fs.writeFile('data.json', JSON.stringify(data), (error) => {
        if (error) throw error;
        res.send({"message": "Pedido borrado con éxito!"});
        return;
      })
    }
  })
});
//TODO: AÑADIR VALIDACION DELETE PEDIDO

//Configuración servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})


