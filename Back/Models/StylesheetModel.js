import mongoose from "mongoose";
const StyleSheetSchema = mongoose.Schema(
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

const StyleSheet = mongoose.model("StyleSheet", StyleSheetSchema);


export default StyleSheet;
