const fs = require('fs');
const path = require('path');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuarios = require('../models/user.model');


//Leer clave jwt
const rutaAbsoluta = path.join(__dirname.replace('controllers', ''),'/config/secrets.json');
const secretsContent = fs.readFileSync(rutaAbsoluta);
const secrets = JSON.parse(secretsContent); 

exports.login = (req, res) => {
    //1.Encontrar al usuario por su id
    Usuarios.findById(
        req.body._id,
        (error, user) => {
            if (error) throw error;
        //2.Comprobar contraseña
            bcrypt.compare(
                req.body.password,
                user.password,
                (error, coincidence) => {
                    if (error) throw error;
                    //3. Si es corrrecta poner token
                    if(coincidence){
                        jwt.sign(
                            {"username": user.username},
                                secrets["jwt_clave"],
                                (error, token) => {
                                    if (error) throw error;
                                    res.cookie("arcoiris", token);
                                    res.send({"message":"Bienvenido/a!", "token": token});
                            }
                        )
                    } else {
                        res.send({"error":"Contraseña incorrecta"})
                    }
                }
            )
        }
    )
}

exports.checkToken = (req, res, callback) => {
    //1. comprobar si tiene la cookie arcoiris
    if(req.cookies["arcoiris"] !== undefined){
        //2. si la tienen comprobar si el token de la cookie ha sido firmado por mí
        jwt.verify(req.cookies["arcoiris"],
        secrets["jwt_clave"],
        (error, verificado) => {
            if (error) throw error;
            if(!verificado){
                res.send({"error": "Token no valido."});
                return false;
            } else {
                //Si se verifica el token se ejecuta lo que nos digan
                callback(req, res);
                return true;
            }
        }
        )
    } else {
        res.send({"error": "No estás autentificado", "login": "/login"});
        return false;
    }
}
