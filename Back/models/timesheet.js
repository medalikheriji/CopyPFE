const mongoose = require('mongoose');


const ligneSchema = mongoose.Schema(
  {
    typeH: { type: String, required: true},
    NatureProjet: { type: String, required: true},
    Projet: { type:String },
    Activité: { type: String, required: true},
    Description: { type: String, required: true},
    Site: { type: String, required: true},
    date: [{
      day: { type: String, },
      nbh: { type: Number, },
    }]

  }
)


const timesheetSchema = mongoose.Schema(
    {
      date_deb: {
        type: Date,
        required: true,
      },
      date_fin: {
        type: Date,
        required: true,
      },
      Statut: {
        type: String,
        required: true,
        default: "Brouillon"
      },
      date_envoi: {
        type: Date,
        required: true,
      },
      date_approb: {
        type: Date,
        required: false,
      },
      ajouter_par: { type: String},
      matricule:{
        type:String,
        required:true,
      },
      ligne:[ligneSchema]
    },
    
  );
  
module.exports = mongoose.model('timesheet', timesheetSchema);