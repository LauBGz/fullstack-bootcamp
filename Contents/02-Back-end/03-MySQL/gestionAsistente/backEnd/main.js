const asistenteController = require('./controllers/asistente.controller')
const express = require('express');
const bodyParser = require('body-parser');

//Creo servidor
const server = express();

//Middleware
server.use(bodyParser.json());

//Endpoints 
server.get('/asistentes', asistenteController.getParticipants);
server.get('/asistente/:id', asistenteController.getOneParticipant);
server.post('/asistentes', asistenteController.addOneParticipant);
server.put('/asistente/:id', asistenteController.updateOneParticipant);
server.delete('/asistente/:id', asistenteController.deleteOneParticipant);

//Servidor
server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
})