//Imports
const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const animalSchema = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },
    "name": {   
        require: true,
        type: types.String
    },
    "keyWords": {   
        require: true,
        type: [String]
    },
    "diet": {   
        require: true,
        type: types.String
    },
    "reproduction": {   
        require: true,
        type: types.String
    },
    "habit": {   
        require: true,
        type: types.String
    },
    "imageUrl": {   
        require: true,
        type: types.String
    },
    "habitat": {   
        require: true,
        type: types.String
    },
    "category": { 
        require: true,  
        type: types.String,
        enum : ['ANFIBIOS',
                'ANÉLIDOS',
                'ARTRÓPODOS',
                'AVES',
                'CNIDARIOS',
                'EQUINODERMOS',
                'MAMÍFEROS',
                'MOLUSCOS',
                'NEMÁTODOS',
                'PECES',
                'PLATELMINTOS',
                'PORÍFEROS',
                'REPTILES',
            ],
    },
    "conservationStatus": { 
        require: true,  
        type: types.String,
        enum : ['Vulnerable',
                'En peligro de estinción',
                'Preocupación menor'
            ],
    }
});

module.exports = mongoose.model("animal", animalSchema);