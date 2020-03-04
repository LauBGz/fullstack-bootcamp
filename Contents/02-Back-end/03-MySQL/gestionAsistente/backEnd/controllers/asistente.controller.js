const asistenteModel = require('../models/asistente.model');

//Obtener participantes
exports.getParticipants = (req, res) => { 
    asistenteModel.getAllParticipants( (error, rows) => {
        if (error) throw error;
        res.send(rows)
    })
};

//Obtener un participante
exports.getOneParticipant = (req, res) => {
    const id = req.params.id;
    
    asistenteModel.getParticipantByID(id, (error, rows) => {
        if (error) throw error;
        if (rows.length === 0){
            res.status(400).send({"error": "Ese ID no existe en la base de datos"}) 
        } else {
            res.send(rows)
        }
    })
};

//Añadir un participante
exports.addOneParticipant = (req, res) => {

    if (req.body["name"] && req.body["telephone"] && req.body["email"] && req.body["numberComp"] && req.body["paid"]){
        
        asistenteModel.addParticipant(
            req.body["name"], 
            req.body["telephone"], 
            req.body["email"], 
            req.body["numberComp"],
            req.body["paid"],

            (error, result) => {
                if (error) {
                    res.send({"error": error})
                } else {
                    res.send({"message": "Ok usuario creado!", "id": result["insertId"]})
                }
        })

    } else {

        res.status(400).send({"error": "petición POST mal formada. Revisa el body."})

    }
};

//Editar un participante
exports.updateOneParticipant  = (req, res) => {
    const id = req.params.id;
  
    asistenteModel.getParticipantByID(id, (error, rows) => {
        if (error) throw error;
        if (rows.length === 0){
            res.status(400).send({"error": "Ese ID no existe en la base de datos"}) 
        } else {
    
            if (req.body["name"] && req.body["telephone"] && req.body["email"] && req.body["numberComp"] && req.body["paid"]){
           
                asistenteModel.updateParticipant(
                    req.body["name"], 
                    req.body["telephone"], 
                    req.body["email"], 
                    req.body["numberComp"],
                    req.body["paid"],
                    id,        
                    (error, result) => {
                        
                        if (error) {
                            res.send({"error": error})
                        } else {
                            res.send({"message": "Ok usuario creado!", "id": result["insertId"]})
                        }
                })
        
            } else {
        
                res.status(400).send({"error": "petición POST mal formada. Revisa el body."})
        
            }



        }
    })
};

//Eliminar un participante
exports.deleteOneParticipant = (req, res) => {
    const id = req.params.id;
    console.log(id)
    asistenteModel.deleteParticipant(id, (error, rows) => {
        if (error) throw error;
        if (rows.length === 0){
            res.status(400).send({"error": "Ese ID no existe en la base de datos"}) 
        } else {
            res.send({"error": "Usuario eliminado."})
        }
    })
};

