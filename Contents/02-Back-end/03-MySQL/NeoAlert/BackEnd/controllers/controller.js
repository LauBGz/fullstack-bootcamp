const barriosModel = require('../models/barrios.model.js');
const ciudadanosModel = require('../models/ciudadanos.model.js');
const alertasModel = require('../models/alertas.model.js');
const bodyController = require('./body.controller.js');

exports.getCiudadanos = (req, res) => {
    ciudadanosModel.listarCiudadanos((error, rows) => {
        if (error){
            res.status(500).send({"error": error});
            throw error;
        } else {
            res.send(rows);
        }
    })
}

exports.nuevoCiudadano = (req, res) => {
    bodyController.checkBody(res, req.body, ["username", "password", "email"])

    ciudadanosModel.listarCiudadanos((error, rows) => {
           //Crearé un usuario
           ciudadanosModel.crearCiudadano(
            req.body["userName"], 
            req.body["password"], 
            req.body["email"],
            (error, result) => {
                if (error){
                    res.send(error);// no sabemos si el body está mal o es culpa nuestra
                    //error generico
                    throw error; //para app detenga
                } else {
                    res.send({
                        "message": "OK usuario creado",
                        "id": result["insertId"]
                    });
                }
            }
           );
        }
    )
}

exports.nuevaAlerta =  (req, res) => {
    if (
        req.body["descripcion"] &&
        req.body["atendida"] !== undefined &&
        req.body["ciudadano_id"] &&
        req.body["barrio_id"] &&
        req.body["tipoDeAlerta_id"]
    ) {
        const fecha = new Date().toJSON().slice(0,10).replace(/-/g,'');

        alertasModel.crearAlerta(
            fecha,
            req.body["descripcion"],
            req.body["atendida"],
            req.body["ciudadano_id"],
            req.body["barrio_id"],
            req.body["tipoDeAlerta_id"],
            (error, result) => {
                if (error) {
                    res.send({"error": error});
                } else {
                    res.send({
                        "message": "OK alerta creada.",
                        "id": result["insertId"]
                    });
                }
            }
        )
    } else {
    res.status(400).send({"error":"Revisa el body."});
    }
}

