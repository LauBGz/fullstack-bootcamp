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
exports.getUser = (req, res) => {
    const id = req.params.id;

    usuarioModel.getAnUser(id, (error, rows) => {
        if (rows.length === 0){
            res.status(400).send({"Error": "El ID no existe."});
            throw error;
        } else {
            res.send(rows);
        }
    })
}

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

//Actualizar un usuario
exports.updateUser = (req, res) => {
    console.log("hola")
    bodyController.checkBody(res, req.body, [
        "id",
        "username", 
        "password", 
        "email",
        "edad", 
        "peso", 
        "sexo"
    ]);

    const fechaInscripcion = new Date().toJSON().slice(0,10).replace(/-/g,'');

    const id =  req.body["id"]

    usuarioModel.updateAnUser(
        req.body["username"],
        req.body["password"],
        fechaInscripcion,
        req.body["email"],
        req.body["edad"],
        req.body["peso"],
        req.body["sexo"],
        id,
        (error, result) => {
            if (error) {
                res.send({"error": error})
            } else {
                res.send({"message": "Usuario modificado"})  
            }
        }
    )
}

//Eliminar un usuario
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    usuarioModel.deleteAnUser(id, (error, rows) => {
        if (rows.length === 0){
            res.status(400).send({"Error": "El ID no existe."});
            throw error;
        } else {
            res.send({"message": "Usuario eliminado con éxito."});
        }
    })
}