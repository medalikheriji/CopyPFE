const mongoose = require('mongoose');

const EssaiSchema = mongoose.Schema({
    /**
     *
     * _idProject?:number;
        nameProject:String;
        descProject:String;
        createdAtProject:Date;
        expiredAtProject:Date;
        deadlineProject:Date;
        priceProject:number;
        stateOfProject:String;
        priorityOfProject:String;
     */

    id: {
        type:String , default:'1' , required : true
    },
    name: {
        type:String , default:'Hamdoulleh' , required : true
    }

});

module.exports = mongoose.model('Essai',EssaiSchema);