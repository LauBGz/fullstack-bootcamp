const express = require('express');
const bodyParser = require('body-parser');
const userController =  require ('./controllers/user.controller');
const cookieParser = require ('cookie-parser');
const authController = require('./controllers/auth.controller');

//Creo servidor
const app = express();

//Middleware // HELMET como middleware debe ir primero
app.use(bodyParser.json());
app.use(cookieParser());

//Endpoints
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/login', authController.login);

app.post('/createUser', userController.createUser)

app.get('/getUser/:id', userController.getUser)

app.put('/changeUser', userController.updateUser)

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.delete('/deleteUser/:id', userController.deleteUser);

//Listen
app.listen(3000,() => {
    console.log("Escuchando el puerto 3000");
})
