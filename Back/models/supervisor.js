const mongoose = require('mongoose');

const SupervisorSchema = mongoose.Schema({
/**
*
 - fullnameSupervisor : String
 - mailSupervisor : String
 - phoneSupervisor : String
 - photoSupervisor : String
 - nationalitySupervisor : String

 ___________________________
    "_id":1,
    "fullnameSupervisor":"Ahmed Bejji",
    "mailSupervisor":"ahmedbejji@ieee.org",
    "phoneSupervisor":"22001199",
    "photoSupervisor":"image n°1",
    "nationalitySupervisor":"Tunisian"
    }
*/

    fullnameSupervisor: {
        type:String,
        required:false
    },
    mailSupervisor: {
        type:String,
        required:false
    },
    phoneSupervisor: {
        type:String,
        required:false
    },
    photoSupervisor: {
        type:String,
        required:false
    },
    nationalitySupervisor: {
        type:String,
        required :false
    },
    supervisorAt: [{type: mongoose.Schema.Types.Array , ref: 'Clients'}]
});

module.exports = mongoose.model('Supervisor',SupervisorSchema);