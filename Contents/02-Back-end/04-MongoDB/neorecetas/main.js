const express = require('express');
const bodyParser = require('body-parser');
const recetasController = require('./controllers/recetas.controller')

//Crear servidor
const server =  express();

//Middleware
server.use(bodyParser.json());

//endpoint
server.get('/all', recetasController.allReceipes)

server.post('/crearReceta', recetasController.crearReceta)

server.put('/actualizarReceta', recetasController.actualizarReceta)

server.delete('/eliminarReceta/:id', recetasController.deleteReceta)
//listen

server.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})