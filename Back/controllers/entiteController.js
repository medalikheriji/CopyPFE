const Entite = require("../models/entite");


exports.createEntite = async (req,res) => {
    try {
        const {nom,category} = req.body
        entite = new Entite({
            nom,
            category,
            Cree_par:req.user._id
        });
        await entite.save();
        res.send(entite);
    console.log('Entite have been created successfully .. !')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findAllEntites = async (req,res) => {
    try {
        const entite = await Entite.find({Cree_par : req.user._id});
        res.json(entite);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.deleteEntite = async (req,res) => {
    try {
        await Entite.findByIdAndRemove(req.params.id)
        res.json({msg:'Entite have been successfully deleted '});
    } catch (error) {
        res.status(500).send('Something Wrong !!');
    }
}


