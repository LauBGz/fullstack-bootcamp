const usuarioModel = require('../models/usuario.model');
const bodyController = require('./body.controller');

//Obtener usuarios
exports.getUsers = (req, res) => {
    usuarioModel.getAllUsers((error, rows) => {
        if (error){
            res.status(500).send({"error": error});
            throw error;
        } else {
            res.send(rows);
        }
    })
}

//Obtener un usuario


//Añadir un usuario
exports.addUser = (req, res) => {
    
    bodyController.checkBody(res, req.body, [
        "username", 
        "password", 
        "email",
        "edad", 
        "peso", 
        "sexo"
    ]);

    const fechaInscripcion = new Date().toJSON().slice(0,10).replace(/-/g,'');

    usuarioModel.addAnUser(
        req.body["username"],
        req.body["password"],
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
}

