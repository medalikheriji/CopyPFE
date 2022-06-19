const Clients = require("../models/clients");
const supervisor = require("../models/supervisor");


exports.createClient = async (req,res) => {
    // console.log('-- From project creation -- ')
    try {
        let client;
        // project = new Project(req.body);
        // await project.save();
        // res.send(project);

        client = new Clients(req.body);
            // _idClient: req.body._idClient,
            // nameClient: req.body.nameClient,
            // taxRegisterClient: req.body.taxRegisterClient,
            // addressClient: req.body.addressClient,
            // complementAddressClient: req.body.complementAddressClient,
            // cityClient: req.body.cityClient,
            // countryClient : req.body.countryClient,
            // socialReasonClient : req.body.socialReasonClient,
            // activitySectorClient : req.body.activitySectorClient,
            // postCodeClient : req.body.postCodeClient,
            // phoneClient : req.body.phoneClient,
            // faxClient : req.body.faxClient,
            // mailClient : req.body.mailClient,
            // sitewebClient : req.body.sitewebClient,
            // supervisors : req.body.supervisors
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
        await client.save();
        res.send(client);
    console.log('|__  Clients have been created successfully __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.findAllClients = async (req,res) => {
    try {
        const clients = await Clients.find().populate('supervisors');
        res.json(clients);
    console.log('|__  All clients have been successfully recovered __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.updateClient = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);
        // "nameClient":"VERMEG",
        // "taxRegisterClient":"1001",
        // "addressClient":"Les berges du lac II",
        // "complementAddressClient":"",
        // "cityClient":"Tunis",
        // "countryClient":"Tunisia",
        // "socialReasonClient":"",
        // "activitySectorClient":"",
        // "postCodeClient":"",
        // "phoneClient":"",
        // "faxClient":"",
        // "mailClient":"",
        // "sitewebClient":""
        const {  nameClient, taxRegisterClient, addressClient, complementAddressClient, cityClient , countryClient , socialReasonClient , postCodeClient, phoneClient , faxClient , mailClient , sitewebClient , supervisors} = req.body;
        let client = await Clients.findById(req.params.id);
        if (!client){
            res.statu(500).json({msg : 'Client does not exist'});
        }

        client.nameClient = nameClient;
        client.taxRegisterClient = taxRegisterClient;
        client.addressClient = addressClient ;
        client.complementAddressClient = complementAddressClient;
        client.cityClient = cityClient;
        client.countryClient = countryClient;
        client.socialReasonClient = socialReasonClient;
        client.postCodeClient = postCodeClient,
        client.phoneClient = phoneClient,
        client.faxClient = faxClient;
        client.mailClient = mailClient,
        client.sitewebClient = sitewebClient,
        client.supervisors = supervisors

        client = await Clients.findByIdAndUpdate({ _id: req.params.id},client, {new : true})
        res.json(client);

    console.log('|__ Client have been successfully updated __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findClientById = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let client = await Clients.findById(req.params.id);
        if (!client){
            res.statu(500).json({msg : 'Client does not exist'});
        }
        res.json(client);
    console.log('|__ Client have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}


exports.deleteClient = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let client = await Clients.findById(req.params.id);
        if (!client){
            res.statu(500).json({msg : 'Client does not exist'});
        }
        await Clients.findByIdAndRemove({ _id : req.params.id})
        res.json({msg:'Client have been successfully deleted '});
    console.log('|__ Clients have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

// exports.createSupervisorUnderClient = async (req, res) => {
//     try{
//         const client = await Clients.findById(req.params.id);
//         const superviseur = {  
//           fullnameSupervisor:req.body.fullnameSupervisor,
//           mailSupervisor:req.body.mailSupervisor,
//           phoneSupervisor:req.body.phoneSupervisor,
//           photoSupervisor:req.body.photoSupervisor,
//           nationalitySupervisor: req.body.nationalitySupervisor   
//         };
  
//         client.supervisors.push(superviseur);
       
//         await client.save();
//         res.status(201).json({ message: "supperviseur ajouté" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Something Wrong !!');
//     }
// }

exports.createSupervisorUnderClient = async (req, res) => {
    try{
        const client = await Clients.findById(req.params.id);
        if (client)
        {
        const superviseur = await supervisor.create({  
          fullnameSupervisor:req.body.fullnameSupervisor,
          mailSupervisor:req.body.mailSupervisor,
          phoneSupervisor:req.body.phoneSupervisor,
          photoSupervisor:req.body.photoSupervisor,
          nationalitySupervisor: req.body.nationalitySupervisor   
        });
  
        client.supervisors.push(superviseur);
       
        await client.save();
        res.status(201).json({ message: "supperviseur ajouté" });
      }
    else
    {
      res.status(404).send('Client Invalide  !!');
  
    }
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
  }
    // try{
    //     const client = await Clients.findById(req.params.id);
    //     if (client){
    //         const superviseurexist= Clients.supervisor.findById(req.body.supId);
    
    //         if (superviseurexist) {
    //             superviseurexist.remove();
    //             await client.save();
    //         }
    //         res.status(201).json({ message: "Supervisor removed successfully .. " });
    //    }
    //     else {
    //     res.status(404).send('Client Invalide  !!');
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send('Something Wrong !!');
    // }

//   exports.deleteSupervisorUnderClient = async (req, res) => {

//     const client = await Clients.findById(req.params.id);

//     if (client) {
//     const supexist = client.supervisors.find(
//         (r) => r._id === req.body.supId
//     );
//         if (supexist) {
//             await supexist.remove()
//             await client.save()
//             console.log("Deleted ..");
//             res.status(201).json({ message: "Super deleted" });
//         }
//         else{
//             console.log("Superviseur not Found");
//             res.status(404);
//             throw new Error("Superviseur not Found");
//         }
//     } 
//     else {
//         console.log("Client not Found");
//         res.status(404);
//         throw new Error("Client not Found");
//     }
// }

exports.deleteSupervisorUnderClient = async (req, res) => {

    const client = await Clients.findById(req.params.id);
  
    if (client) {
    const supexist = client.supervisors.find(
      (r) => r.toString() === req.body.supId.toString()   );
        if (supexist) {
            await supexist.remove();
            await client.save();
            console.log(supexist);
            res.status(201).json(supexist);
            console.log("Deleted ..");
            res.status(201).json({ message: "Super deleted" });
        }
        else{
            console.log("Superviseur not Found");
            res.status(404);
            throw new Error("Superviseur not Found");
        }
    } 
    else {
        console.log("Client not Found");
        res.status(404);
        throw new Error("Client not Found");
    }
  }
  
  