//Imports
const animal = require('../models/animal.model');
const mongoose = require('mongoose');

//Create connection
mongoose.connect("mongodb://localhost:27017/animal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Add animal
exports.addAnimal = (req, res) => {

    const rq = req.body;

    const data = {
        "_id": mongoose.Types.ObjectId(),
        "name": rq.name,
        "keyWords": rq.keyWords,
        "diet": rq.diet,
        "reproduction":rq.reproduction,
        "habit": rq.habit,
        "imageUrl": rq.imageUrl,
        "habitat": rq.habitat,
        "category": rq.category,
        "conservationStatus": rq.conservationStatus
    }

    const newAnimal =  new animal(data);
    newAnimal.save((error) =>{
        if(error) throw error;
        res.send({"Message": "Animal guardado.",
        "_id": data._id
        });
    })
}

//Get all animals
exports.getAllAnimals = (req, res) => {
    animal.find((error, animals) => {
        if (error) throw error;
        res.send(animals)
    })
}