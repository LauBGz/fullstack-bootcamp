const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt')

exports.getOneUser = (req, res) => {
    const id = req.params.id;
    
    userModel.getUserById(id, (error, rows) => {
        if (error) throw error;
        
        if (rows.length === 0){
            res.status(404).send({"error": "Esa ID no existe en la base de datos"});
            //Se puede poner un estado a la respuesta
        }else{
            res.send(rows);
        }
    })
}  

exports.createUser = (req, res) => {
    if (
        req.body["username"] &&
        req.body["password"] &&
        req.body["firstName"] &&
        req.body["secondName"] &&
        req.body["email"]
    ){
        const fechaInscripcion = new Date().toJSON().slice(0,10).replace(/-/g,'');
        bcrypt.hash(req.body["password"], 14, (error, hash) => {
            userModel.createNewUser(
                req.body["username"],
                hash,
                req.body["firstName"],
                req.body["secondName"],
                fechaInscripcion,
                req.body["email"],
                (error, result) => {
                    if (error) {
                        res.send({"error": error})
                    } else {
                        res.send({"message": "Ok usuario creado!", "id": result["insertId"]})
                    }
                }
            )
        });
    } else {
        res.status(400).send({"error": "petición POST mal formada. Revisa el body."})
    }
}