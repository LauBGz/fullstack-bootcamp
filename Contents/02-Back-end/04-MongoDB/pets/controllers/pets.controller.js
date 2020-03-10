const pets =  require('../models/pets.model');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//Obtener mascotas
exports.getPets = (req, res) => {
    pets.find((error, pets) => {
        if (error) throw error;
        res.send(pets)
    })
}

//Obtener 1 mascota
exports.getAPet = (req, res) => {
    const id = req.params.id;
  
    pets.findById(id, (error, pets) => {
        if (error) throw error;
        res.send(pets)
    })
}

//Crear mascota
exports.createPet = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "type": req.body.type,
        "name": req.body.name,
        "breed": req.body.breed,
        "sex": req.body.sex,
        "size":req.body.size,
        "age": req.body.age,
        "state": req.body.state
    }

    const newPet =  new pets(data);
    newPet.save((error) =>{
        if(error) throw error;
        res.send({"Message": "Animal guardada",
        "_id": data._id
        });
    })
}

//Actualizar mascotas
exports.updatePet = (req, res) => {

    const data = {
        "type": req.body.type,
        "name": req.body.name,
        "breed": req.body.breed,
        "sex": req.body.sex,
        "size":req.body.size,
        "age": req.body.age,
        "state": req.body.state
    }

    pets.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({"message": "Animal actualizado."});
        }
    );
}

//Borrar una mascota
exports.deletePet =  (req, res) => {
    const id = req.params.id;
    pets.findByIdAndDelete(id, (error, result) => {
        res.send({"message": "Animal borrado del registro."});
    })
}