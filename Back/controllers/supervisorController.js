const Supervisor = require("../models/supervisor");


exports.createSupervior = async (req,res) => {
    // console.log('-- From project creation -- ')
    try {
        let supervisor;
        // // project = new Project(req.body);
        // // await project.save();
        // // res.send(project);

        supervisor = new Supervisor(req.body);
            // _idSupervisor: req.body._idSupervisor,
            // fullnameSupervisor : req.body.fullnameSupervisor,
            // mailSupervisor: req.body.mailSupervisor,
            // phoneSupervisor: req.body.phoneSupervisor,
            // photoSupervisor: req.body.photoSupervisor,
            // nationalitySupervisor: req.body.nationalitySupervisor,
            // supervisorAt : req.body.supervisorAt
            /*  
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
                ____________________
                {
                    "nameClient":"VERMEG",
                    "taxRegisterClient":"1001",
                    "addressClient":"Les berges du lac II",
                    "complementAddressClient":"Tunis,Tunisia",
                    "cityClient":"Tunis",
                    "countryClient":"Tunisia",
                    "socialReasonClient":"Social 1",
                    "activitySectorClient":"activty 1",
                    "postCodeClient":"1006",
                    "phoneClient":"71589632",
                    "faxClient":"71546622",
                    "mailClient":"vermeg_tunisie@contact.org",
                    "sitewebClient":"www.vermeg.com"
                }
            **/

        await supervisor.save();
        res.send(supervisor);
    console.log('|__  Supervisors have been created successfully __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findAllSupervisors = async (req,res) => {
    try {
        const supervisor = await Supervisor.find();
        res.json(supervisor);
    console.log('|__  All supervisors have been successfully recovered __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.updateSupervisor = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        //
        // - fullnameSupervisor : String
        // - mailSupervisor : String
        // - phoneSupervisor : String
        // - photoSupervisor : String
        // - nationalitySupervisor : String

        const {  fullnameSupervisor, mailSupervisor,phoneSupervisor, photoSupervisor, nationalitySupervisor , supervisorAt} = req.body;
        let supervisor = await Supervisor.findById(req.params.id);
        if (!supervisor){
            res.statu(500).json({msg : 'Supervisor does not exist'});
        }

        supervisor.fullnameSupervisor = fullnameSupervisor;
        supervisor.mailSupervisor = mailSupervisor;
        supervisor.phoneSupervisor = phoneSupervisor ;
        supervisor.photoSupervisor = photoSupervisor;
        supervisor.nationalitySupervisor = nationalitySupervisor;
        supervisor.supervisorAt = supervisorAt;


        supervisor = await Supervisor.findByIdAndUpdate({ _id: req.params.id},supervisor, {new : true})
        res.json(supervisor);

    console.log('|__ Supervisor have been successfully updated __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.findSupervisorById = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let supervisor = await Supervisor.findById(req.params.id);
        if (!supervisor){
            res.statu(500).json({msg : 'Supervisor does not exist'});
        }
        res.json(supervisor);
    console.log('|__ Supervisor have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.deleteSupervisor = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let supervisor = await Supervisor.findById(req.params.id);
        if (!supervisor){
            res.statu(500).json({msg : 'Supervisor does not exist'});
        }
        await Supervisor.findByIdAndRemove({ _id : req.params.id})
        res.json({msg:'Supervisor have been successfully deleted '});
    console.log('|__ Supervisors have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}