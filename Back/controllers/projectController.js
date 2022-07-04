const Project = require("../models/project");

exports.createProject = async (req,res) => {
    // console.log('-- From project creation -- ')
    try {
        let project;
        let essai;
        // // project = new Project(req.body);
        // // await project.save();
        // // res.send(project);

        // project = new Project({
        //     _id: req.body._id,
        //     nameProject: req.body.nameProject,
        //     descProject: req.body.descProject,
        //     createdAtProject: req.body.createdAtProject,
        //     stateOfProject: req.body.stateOfProject,
        //     priorityOfProject: req.body.priorityOfProject,
        //     activatedProject : req.body.activatedProject, 
        //     typeOfProject : req.body.typeOfProject,
        //     departmentProject : req.body.departmentProject,
        //     serviceLine : req.body.serviceLine,
        //     managerOfProject : req.body.managerOfProject,
        //     partnerOfProject : req.body.partnerOfProject,
        //     clientOfProject : req.body.clientOfProject
        // });
        project = new Project(req.body);
        await project.save();
        res.send(project);
    console.log('|__  Project have been created successfully __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findAllProjects = async (req,res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    console.log('|__  All projects have been successfully recovered __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.updateProject = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);
        const {  nameProject, descProject,stateOfProject, priorityOfProject , activatedProject , typeOfProject ,departmentProject, serviceLine , managerOfProject , partnerOfProject , clientOfProject } = req.body;
        let project = await Project.findById(req.params.id);
        if (!project){
            res.statu(500).json({msg : 'Project does not exist'});
        }

        project.nameProject = nameProject;
        project.descProject = descProject ;
        project.stateOfProject = stateOfProject;
        project.priorityOfProject = priorityOfProject;
        project.activatedProject = activatedProject;
        project.typeOfProject = typeOfProject;
        project.departmentProject = departmentProject,
        project.serviceLine = serviceLine,
        project.managerOfProject = managerOfProject,
        project.partnerOfProject = partnerOfProject,
        project.clientOfProject = clientOfProject
        
        project = await Project.findByIdAndUpdate({ _id: req.params.id},project, {new : true})
        res.json(project);

    console.log('|__ Project have been successfully updated __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.findProjectById = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let project = await Project.findById(req.params.id);
        if (!project){
            res.statu(500).json({msg : 'Project does not exist'});
        }
        res.json(project);
    console.log('|__ Project have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.deleteProject = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);

        let project = await Project.findById(req.params.id);
        if (!project){
            res.statu(500).json({msg : 'Project does not exist'});
        }
        await Project.findByIdAndRemove({ _id : req.params.id})
        res.json({msg:'Project have been successfully deleted '});
    console.log('|__ Project have been successfully recovered __| ')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}

exports.updateProjectByState = async (req,res) => {
    try {
        // const projects = await Project.find();
        // res.json(projects);
        const { activatedProject } = req.body;
        let project = await Project.findById(req.params.id);
        if (!project){
            res.statu(500).json({msg : 'Project does not exist'});
        }

        // project.nameProject = nameProject;
        // project.descProject = descProject ;
        // project.createdAtProject = createdAtProject ;
        // project.expiredAtProject = expiredAtProject;
        // project.deadlineProject = deadlineProject;
        // project.stateOfProject = stateOfProject;
        // project.priorityOfProject = priorityOfProject;
        project.activatedProject = activatedProject;
        // project.typeOfProject = typeOfProject;

        project = await Project.findByIdAndUpdate({ _id: req.params.id},project, {new : true})
        res.json(project);
        
    console.log('|__ Project have been successfully updated __|')
    } catch (error) {
        console.log(error);
        res.status(500).send('Something Wrong !!');
    }
}