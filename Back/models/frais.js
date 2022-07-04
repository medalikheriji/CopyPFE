const mongoose = require('mongoose');

const FraisSchema = mongoose.Schema({


    nameOfFrais: {
        type:String,
        required:true
    },
    typeOfFrais: {
        type:String,
        required:false
    },
    descOfFrais: {
        type:String,
        required:false
    },
    calcUnitOfFrais: {
        type:String,
        required:false
    },
    quantityOfFrais: {
        type:Number,
        required:false
    },
    unitPriceOfFrais: { 
        type:Number, 
        required :false
    },
    coastOfFrais: { 
        type:Number,
        required:false
    },
    dateOfFrais: {
        type:Date,
        required:false
    },
    categoryOfFrais: {
        type:String,
        required :false
    },
    stateOfFrais: {
        type:String,
        required:false
    },
    isRefundable: {
        type:Boolean,
        required:false
    },
    isBillable: {
        type:Boolean,
        required :false
    }
    // supervisorAt: [{type: mongoose.Schema.Types.Array , ref: 'Clients'}]
});

module.exports = mongoose.model('Frais',FraisSchema);

/* /**
*
 - fullnameSupervisor : String
 - mailSupervisor : String
 - phoneSupervisor : String
 - photoSupervisor : String
 - nationalitySupervisor : String

    ___________________________
    "_id":1,
    "nameOfFrais":"Déplacement Djerba - Tunis",
    "typeOfFrais":"Frais kilométrique",
    "descOfFrais":"Description",
    "calcUnitOfFrais:"KM",
    "quantityOfFrais":17,
    "unitPriceOfFrais":5200,
    "coastOfFrais": 88400,
    "dateOfFrais": "15/04/2022",
    "categoryOfFrais" : "Déplacement",
    "stateOfFrais" : "Envoyé",
    "isRefundable" : true,
    "isBillable" : false
    
*/