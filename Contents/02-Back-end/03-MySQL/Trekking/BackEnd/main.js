const express = require('express');
const bodyParser = require('body-parser');  
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const controller = require('./controllers/controller')
const authController = require('./controllers/auth.controller')
const userLogged = require('./controllers/isLoggedIn.controller')

//Crear servidor
const servidor = express();

//Middleware
servidor.use(bodyParser.json());
servidor.use(cookieParser())
servidor.use(helmet())

//Endpoints register y login
servidor.post('/register', authController.register);
servidor.post('/login', authController.login);

//Endpoints usuarios
servidor.get('/usuarios', userLogged, controller.getUsers);
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