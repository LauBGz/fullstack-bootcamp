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

//Función para registrar usuario y hashear la contraseña
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
            bcrypt.hash(req.body["password"], 14, (error, hash) => {
                if (error) throw error;
                
                const fechaInscripcion = new Date().toJSON().slice(0,10).replace(/-/g,'');

                usuarioModel.addAnUser(
                    req.body["username"],
                    hash,
                    fechaInscripcion,
                    req.body["email"],
                    req.body["edad"],
                    req.body["peso"],
                    req.body["sexo"],
                    (error, result) => {
                        if (error) {
                            res.send({"error": error})
                        } else {
                            res.send({"message": "Ok usuario creado!", "id": result["insertId"]})
                        }
                    }
                )
            })
        }
    })
}

//Función para loguear usuario 