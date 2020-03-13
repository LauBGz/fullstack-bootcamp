//Imports
const express = require('express');
const bodyParser = require('body-parser');
const animalController =  require('./controllers/animal.controller');

//Server
const server = express();

//Middlewares
server.use(bodyParser.json());

//Endpoints
server.post('/addAnimal', animalController.addAnimal);
server.get('/getAnAnimal/:id', animalController.getAnAnimal);
server.get('/getAllAnimals', animalController.getAllAnimals);
server.delete('/deleteAnAnimal/:id', animalController.deleteAnAnimal);
server.put('/updateKeywords/:id', animalController.updateKeywords);

//Listen server
server.listen(3000, () => {
    console.log("Escuchando en puerto 3000.");
});
