const express = require('express');
const bodyParser = require('body-parser');  
const controller = require('./controllers/controller')

//Crear servidor
const servidor = express();

//Middleware
servidor.use(bodyParser.json());

//Endpoints
servidor.get('/usuarios', controller.getUsers)
servidor.post('/usuarios', controller.addUser)

//Escuchar servidor
servidor.listen(3000, () => {
    console.log("Servidor funcionando.");
})