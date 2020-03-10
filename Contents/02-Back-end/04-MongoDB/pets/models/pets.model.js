const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const animales = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },
    "type": {
        require: true,
        type: types.String,
        enum:["perro", "gato"]
    },
    "name": {
        require: true,
        type: types.String
    },
    "breed": {
        require: true,
        type: types.String
    },
    "sex": {
        require: true,
        type: types.String,
        enum:["hembra", "macho"]
    },
    "size": {
        require: true,
        type: types.String,
        enum:["pequeño", "mediano", "grande"]
    },
    "age": {
        require: true,
        type: types.Number,
    },
    "state": {
        require: true,
        type: types.String,
        enum:["En adopción", "Adoptado", "En acogida"]
    },
})

module.exports = mongoose.model("pets", animales);