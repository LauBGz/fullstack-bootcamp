//Importar librerías
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path =  require('path');
const bodyController = require('./body.controller');

//Importar modelo de usuario
const usuarioModel = require('../models/usuario.model');

//Leer clave jwt
const rutaAbsoluta = path.join(__dirname.replace('controllers', ''),'/config/lockup.json');
const clave = fs.readFileSync(rutaAbsoluta);
const claveJWT = JSON.parse(clave); 

//Función para autenticación
exports.register = (req, res) => {
    bodyController.checkBody(res, req.body, [
    "username", 
    "password", 
    "email"]
    );

    usuarioModel.getUserByEmail(
        req.body["username"], 
        req.body["email"], 
        (error, result) => {
   
        if (result.length !== 0) {
            res.send({"error": "Usuario ya existe."});
        } else{
            res.send({"error": "Todo ok."})
        }
    })
}
