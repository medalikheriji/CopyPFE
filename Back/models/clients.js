const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
/**
*
 - idClient : LongInt
 - matriculeFiscaleClient : String
 - nomClient : String
 - adresseClient : String
 - villeClient : String
 - paysClient : String
 - raisonSocialeClient : String
 - secteurActiviteClient : String
 - complementAdresse : String
 - codePostalClient : String
 - telephoneClient : String
 - faxClient : String
 - mailClient : String
 - siteWebClient : String

 ___________________________
    "_idClient":1,
    "nameClient":"VERMEG",
    "taxRegisterClient":"1001",
    "addressClient":"Les berges du lac II",
    "complementAddressClient":"",
    "cityClient":"Tunis",
    "countryClient":"Tunisia",
    "socialReasonClient":"",
    "activitySectorClient":"",
    "postCodeClient":"",
    "phoneClient":"",
    "faxClient":"",
    "mailClient":"",
    "sitewebClient":""

}
*/

    nameClient: {
        type:String,
        required:true
    },
    taxRegisterClient: {
        type:String,
        required:true
    },
    addressClient: {
        type:String,
        required:true
    },
    complementAddressClient: {
        type:String,
        required:false
    },
    cityClient: {
        type:String,
        required :true
    },
    countryClient: {
        type:String,
        required:true
    },
    socialReasonClient: {
        type:String,
        required:true
    },
    activitySectorClient: {
        type:String,
        required:true
    },
    postCodeClient: {
        type:String,
        required:true
    },
    phoneClient: {
        type:String,
        required:true
    },
    faxClient: {
        type:String,
        required:true
    },
    mailClient: {
        type:String,
        required:true
    },
    sitewebClient: {
        type:String,
        required:true
    },
    supervisors: [{type: mongoose.Schema.Types.ObjectId , ref: 'Supervisor'}]
});

module.exports = mongoose.model('Clients',ClientSchema);

// la réunion de planification de sprint <Sprint Planning Meeting> , permet à l'équipe de se mettre d'accord sur un ensemble d'items de plus fort valeur du backlog de produit à réaliser