const mongoose = require('mongoose');

//mongoose.Schema.Types se puede meter en una variable y llamar los tipos desde ahí

const userSchema = new mongoose.Schema({
    "_id":{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    "username": {
        type: mongoose.Schema.Types.String,
        require: true,
        min: 3,
        max: 50
    },
    "email":{
        type: mongoose.Schema.Types.String,
        require: true,
        min: 5, 
        max: 255
    },
    "password": {
        type: mongoose.Schema.Types.String,
        require: true
    }   
});

module.exports = mongoose.model("Usuarios", userSchema);