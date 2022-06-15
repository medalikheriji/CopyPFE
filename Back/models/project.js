const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
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

        /**
         * {
    "_idProject":1,
    "nameProject":"timesheet",
    "descProject":"it's a project that manages expenses and timesheets",
    "createdAtProject":"2022-05-12",
    "expiredAtProject":"2022-06-20",
    "deadlineProject":"2022-06-25",
    "stateOfProject":"In progress",
    "priorityOfProject":"High"
}
         */
    nameProject: {
        type:String,
        default:'NAME OF THE PROJECT' ,
        required:true
    },
    descProject: {
        type:String,
        required:true
    },
    createdAtProject: {
        type:Date,
        required:true
    },
    // expiredAtProject: {
    //     type:Date,
    //     required:false
    // },
    // deadlineProject: {
    //     type:Date,
    //     required:true
    // },
    stateOfProject: {
        type:String,
        required:false
    },
    priorityOfProject: {
        type:String,
        required :true
    },
    activatedProject: {
        type:Boolean,
        required:true
    },
    typeOfProject: {
        type:String,
        required:true
    },
    departmentProject: {
        type:String,
        required:r=true
    },
    serviceLine: {
        type:String,
        required:r=true
    },
    listColab: [[{type: mongoose.Schema.Types.ObjectId , ref: 'User'}]]

});

module.exports = mongoose.model('Project',ProjectSchema);