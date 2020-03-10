const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const usuarios =  require('../models/user.model');
const bcrypt = require('bcrypt');
const authController = require('../controllers/auth.controller');

const rutaAbsoluta = path.join(__dirname.replace('controllers', ''),'/config/secrets.json');
const secretsContent = fs.readFileSync(rutaAbsoluta);
const secrets = JSON.parse(secretsContent); 

//Conectarme a mongoose

mongoose.connect(secrets["mongo_login"], 
    {useNewUrlParser: true, 
    useUnifiedTopology: true}
);

console.log("Conectado a la base de datos");

exports.createUser = (req, res) =>{
    
    bcrypt.hash(
        req.body.password,
        14,
        (error, hash) => {
            if (error) throw error;

            const data = {
                "_id": mongoose.Types.ObjectId(),
                "password": hash,
                "username": req.body.username,
                "email": req.body.email,
            }

            const newUser = new usuarios(data);
            newUser.save((error, result) => {
                if (error) throw error;
                res.send({"message": "Usuario guardado.", "_id": result._id});
            });
        }
    )
}
  

exports.getUser = (req, res) => {
    authController.checkToken(req, res, (req, res) => {
        const id =  req.params.id;
        usuarios.findById(id, (error, result) => {
            if (error) throw error;
            res.send(result);
        })      
    });
}

exports.updateUser = (req, res) => {

    authController.checkToken(req, res, (req, res) => {
        const data = {
            "_id": req.body._id,//Ojo a poner el ide como _id
            "username": req.body.username,
            "email": req.body.email
        }
    
        usuarios.findByIdAndUpdate(
            req.body._id,
            {
                $set: data
            },
            (error, result) => {
                if (error) throw error;
                res.send({"message": "Usuario actualizado."});
            }
        );
    })
 
}

exports.deleteUser =  (req, res) => {
    
    authController.checkToken(req, res, (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndDelete(id, (error, result) => {
            res.send({"message": "Usuario eliminado."});
        })
    })
}