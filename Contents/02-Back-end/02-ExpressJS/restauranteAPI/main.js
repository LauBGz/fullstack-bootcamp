//Las contraseñas de usuarios se deben guardar hasheadas. No se debe permitir hacer llamadas
// a ningún endpoint si no se tiene un token de sesión válido en las cookies. 

//TODO: Es importante documentar todos los endpoints de la API en el README del proyecto. 

//Importar librerias
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const isLoggedIn = require("./isLoggedIn");
//TODO: AÑADIR VALIDACIONES CON EXPRESS

//Creamos servidor
const servidor = express();

//Importar archivo lockUp
const lockUpContent = fs.readFileSync('lockUp.json');
const lockUp = JSON.parse(lockUpContent);

//Configuramos middleware
servidor.use(bodyParser.json())
servidor.use(cookieParser())
servidor.use(helmet())
// servidor.use(isLoggedIn())

//Rutas externas
require('./routes/auth')(servidor);
// require('./routes/crud')(servidor);

//Configuración servidor
servidor.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
})


