const usuarioModel = require('../models/usuario.model');
const caminataModel = require('../models/caminata.model');
const bodyController = require('./body.controller');


//Obtener caminatas
exports.getTrekkings = (req, res) => {
    caminataModel.getAllTrekkings((error, rows) => {
        if (error){
            res.status(500).send({"error": error});
        } else {
            res.send(rows);
        }
    })
}

//Obtener usuarios
exports.getUsers = (req, res) => {
    usuarioModel.getAllUsers((error, rows) => {
        if (error){
            res.status(500).send({"error": error});
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
        } else {
            res.send(rows);
        }
    })
}

//Obtener una caminata
exports.getTrekking = (req, res) => {
    const id = req.params.id;

    caminataModel.getATrekking(id, (error, rows) => {
        if (rows.length === 0){
            res.status(400).send({"Error": "El ID no existe."});
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

//Añadir una caminata
exports.addTrekking = (req, res) => {
      
    bodyController.checkBody(res, req.body, [
        "lugar", 
        "duracion", 
        "dificultad",
        "compania", 
        "Usuario_id"
    ]);

    caminataModel.addATrekking(
        req.body["lugar"],
        req.body["duracion"],
        req.body["dificultad"],
        req.body["compania"],
        req.body["Usuario_id"],
        (error, result) => {
            if (error) {
                res.send({"error": error})
            } else {
                res.send({"message": "Ok caminata creada!", "id": result["insertId"]})
            }
        }
    );
}

//Actualizar un usuario
exports.updateUser = (req, res) => {
    bodyController.checkBody(res, req.body, [
        "id",
        "username", 
        "password",
        "email",
        "edad", 
        "peso", 
        "sexo"
    ]);

    const id =  req.body["id"]

    usuarioModel.updateAnUser(
        req.body["username"],
        req.body["password"],
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

//Actualizar una caminata
exports.updateTrekking = (req, res) => {
    bodyController.checkBody(res, req.body, [
        "id",
        "lugar",
        "duracion", 
        "dificultad", 
        "compania",
        "Usuario_id", 
    ]);

    const id =  req.body["id"];

    caminataModel.updateATrekking(
        req.body["lugar"],
        req.body["duracion"],
        req.body["dificultad"],
        req.body["compania"],
        req.body["Usuario_id"],
        id,
        (error, result) =>{
            if (error) {
                res.send({"error": error})
            } else {
                res.send({"message": "Caminata modificada"})  
            }
        }
    );

}

//Eliminar un usuario
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    usuarioModel.deleteAnUser(id, (error, rows) => {
        if (rows.length === 0){
            res.status(400).send({"Error": "El ID no existe."});
        } else {
            res.send({"message": "Usuario eliminado con éxito."});
        }
    })
}

//Eliminar una caminata
exports.deleteTrekking = (req, res) => {
    const id = req.params.id;

    caminataModel.deleteATrekking(id, (error, rows) => {
        if (rows.length === 0){
            res.status(400).send({"Error": "El ID no existe."});
        } else {
            res.send({"message": "Caminata eliminada con éxito."});
        }
    })
}