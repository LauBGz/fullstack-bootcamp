const userController = require ('./controller/user.controller');
const express = require('express');
const bodyParser = require('body-parser');

//Creo servidor
const server = express();

//Middleware
server.use(bodyParser.json());

//Endpoints
server.get('/user/:id', userController.getOneUser);

server.post('/createUser', userController.createUser);

//Listen
server.listen(3000,() => {
    console.log("Escuchando el puerto 3000");
})


