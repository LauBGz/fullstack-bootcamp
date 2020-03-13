//Imports
const express = require('express');
const bodyParser = require('body-parser');
const animalController =  require('./controllers/animal.controller');
const uploadController =  require('./controllers/upload.controller');

//Server
const server = express();

//Middlewares
server.use(bodyParser.json());
server.use(express.static('web'))

//Endpoints
server.post('/addAnimal', animalController.addAnimal);
server.get('/getAnAnimal/:id', animalController.getAnAnimal);
server.get('/getAllAnimals', animalController.getAllAnimals);
server.delete('/deleteAnAnimal/:id', animalController.deleteAnAnimal);
server.put('/updateKeywords/:id', animalController.updateKeywords);
server.post('/uploadImage', uploadController.uploadImage);

//Listen server
server.listen(3000, () => {
    console.log("Escuchando en puerto 3000.");
});
