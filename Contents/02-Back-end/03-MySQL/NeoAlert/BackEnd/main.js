const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');

//Creo servidor
const server = express();

//Middleware
server.use(bodyParser.json());

//Endpoints
server.get("/ciudadanos", controller.getCiudadanos);
server.post("/nuevoCiudadano", controller.nuevoCiudadano);
server.post("/nuevaAlerta", controller.nuevaAlerta);

//Escuchar servidor
server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
})

