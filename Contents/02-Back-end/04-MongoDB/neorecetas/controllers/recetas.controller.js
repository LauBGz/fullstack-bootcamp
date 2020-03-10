const recetas =  require('../models/recetas.models');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/neorecetas", 
{'useUnifiedTopology': true, 
'useNewUrlParser': true});

//Crear receta
exports.crearReceta = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "isAnonymous": req.body.isAnonymous,
        "authorName": req.body.authorName,
        "type": req.body.type,
        "name": req.body.name,
        "steps":req.body.steps,
        "ingredientes": req.body.ingredientes
    }

    const newReceta =  new recetas(data);
    newReceta.save((error) =>{
        if(error) throw error;
        res.send({"Message": "Receta guardada",
        "_id": data._id
        });
    })
} 
//Obtener una receta
//Obtener recetas
exports.allReceipes = (req, res) => {
    recetas.find((error, recetas) => {
        if (error) throw error;
        res.send(recetas)
    })
}
//Actualizar recetas
exports.actualizarReceta = (req, res) => {

    const data = {
        "isAnonymous": req.body.isAnonymous,
        "authorName": req.body.authorName,
        "type": req.body.type,
        "name": req.body.name,
        "steps":req.body.steps,
        "ingredientes": req.body.ingredientes
    }

    recetas.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({"message": "Receta actualizada."});
        }
    );
}
//Eliminar una receta

exports.deleteReceta =  (req, res) => {
    const id = req.params.id;

    recetas.findByIdAndDelete(id, (error, result) => {
        res.send({"message": "Receta eliminada."});
    })

}
