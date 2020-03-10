const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },
    "isAnonymous": {
        require: true,
        type: types.Boolean,
        default: true
    },
    "authorName": {
        type: types.String,
        require: () => {
            if(this.isAnonymous){
                return false;
            } else {
                return true;
            }
        }
    },
    "type": {
        require: true,
        type: types.String,
        enum:["desayuno", "comida", "cena"]
    },
    "name": {
        require: true,
        type: types.String
    },
    "steps": {
        require: true,
        type: types.Array
    },
    "ingredientes": {
        require: true, 
        type: types.Array
    }
})

module.exports = mongoose.model("recetas", Schema);