const Frais = require("../models/frais");


exports.createFrais = async (req,res) => {
    // console.log('-- From project creation -- ')
    try {
        let frais;
        frais = new Frais(req.body);
        await frais.save();
        res.send(frais);
    console.log('|__  Frais have been created successfully __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findAllFrais = async (req,res) => {
    try {
        const frais = await Frais.find();
        res.json(frais);
    console.log('|__  All frais have been successfully recovered __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.updateFrais = async (req,res) => {
    try {

        // "nameOfFrais":"Déplacement Djerba - Tunis",
        // "typeOfFrais":"Frais kilométrique",
        // "descOfFrais":"Description",
        // "calcUnitOfFrais:"KM",
        // "quantityOfFrais":17,
        // "unitPriceOfFrais":5200,
        // "coastOfFrais": 88400,
        // "dateOfFrais": "15/04/2022",
        // "categoryOfFrais" : "Déplacement",
        // "stateOfFrais" : "Envoyé",
        // "isRefundable" : true,
        // "isBillable" :false

        const {  nameOfFrais,typeOfFrais,descOfFrais,calcUnitOfFrais,quantityOfFrais , unitPriceOfFrais , coastOfFrais , dateOfFrais , categoryOfFrais , stateOfFrais , isRefundable , isBillable} = req.body;
        let frais = await Frais.findById(req.params.id);
        if (!frais){
            res.statu(500).json({msg : 'Frais does not exist'});
        }

        frais.nameOfFrais = nameOfFrais;
        frais.typeOfFrais = typeOfFrais;
        frais.descOfFrais = descOfFrais ;
        frais.calcUnitOfFrais = calcUnitOfFrais;
        frais.quantityOfFrais = quantityOfFrais;
        frais.unitPriceOfFrais = unitPriceOfFrais;
        frais.coastOfFrais = coastOfFrais;
        frais.dateOfFrais = dateOfFrais ;
        frais.categoryOfFrais = categoryOfFrais;
        frais.stateOfFrais = stateOfFrais ;
        frais.isRefundable = isRefundable;
        frais.isBillable = isBillable;


        frais = await Frais.findByIdAndUpdate({ _id: req.params.id},frais, {new : true})
        res.json(frais);

    console.log('|__ Frais have been successfully updated __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.findFraisById = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let frais = await Frais.findById(req.params.id);
        if (!frais){
            res.statu(500).json({msg : 'Frais does not exist'});
        }
        res.json(frais);
    console.log('|__ Frais have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.deleteFrais = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let frais = await Frais.findById(req.params.id);
        if (!frais){
            res.statu(500).json({msg : 'Frais does not exist'});
        }
        await Frais.findByIdAndRemove({ _id : req.params.id})
        res.json({msg:'Frais have been successfully deleted '});
    console.log('|__ Fraiss have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}