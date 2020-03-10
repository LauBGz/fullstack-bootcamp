const express = require('express');
const bodyParser = require('body-parser');
const petsController = require('../pets/controllers/pets.controller');

//Crear servidor
const servidor = express();

//Middleware
servidor.use(bodyParser.json());

servidor.get('/getPets', petsController.getPets);
servidor.post('/createPet', petsController.createPet);
servidor.put('/updatePet', petsController.updatePet);
servidor.delete('/deletePet/:id', petsController.deletePet);
servidor.get('/getAPet/:id', petsController.getAPet);

//Escuchar servidor
servidor.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})