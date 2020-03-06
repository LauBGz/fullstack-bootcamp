const express = require('express');
const bodyParser = require('body-parser');  
const controller = require('./controllers/controller')
const authController = require('./controllers/auth.controller')

//Crear servidor
const servidor = express();

//Middleware
servidor.use(bodyParser.json());

//Endpoints register y login
servidor.post('/register', authController.register);

//Endpoints usuarios
servidor.get('/usuarios', controller.getUsers);
servidor.get('/usuario/:id', controller.getUser);
servidor.post('/usuarios', controller.addUser);
servidor.put('/usuarios', controller.updateUser);
servidor.delete('/usuario/:id', controller.deleteUser);

//Endpoints caminatas
servidor.get('/caminatas', controller.getTrekkings);
servidor.get('/caminata/:id', controller.getTrekking);
servidor.post('/caminatas', controller.addTrekking);
servidor.put('/caminatas', controller.updateTrekking);
servidor.delete('/caminata/:id', controller.deleteTrekking);

//Escuchar servidor
servidor.listen(3000, () => {
    console.log("Servidor funcionando.");
})