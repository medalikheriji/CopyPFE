const mongoose = require('mongoose');

const timesheetSchema = mongoose.Schema(
    {
      date_deb: {
        type: String,
        required: true,
      },
      date_fin: {
        type: String,
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
        required: true,
      },
      ajouter_par: {
          type: String,
          required: true,
        },
      matricule:{
        type:String,
        required:true,
      }
    
    },
    {
      timestamps: true,
    }
  );
  
module.exports = mongoose.model('timesheet', timesheetSchema);