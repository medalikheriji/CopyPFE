const mongoose = require('mongoose');

const EntiteSchema = mongoose.Schema(
    {
      nom: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      Projet: [{type: mongoose.Schema.Types.ObjectId , ref: 'Project'}],
      ListColab: [{type: mongoose.Schema.Types.ObjectId , ref: 'User'}],
      Cree_par: [{type: mongoose.Schema.Types.ObjectId , ref: 'User'}]

    },
    
  );



module.exports = mongoose.model('Entite', EntiteSchema);