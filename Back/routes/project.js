// routes for projects
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


// api/projects
router.post('/',projectController.createProject);
router.get('/',projectController.findAllProjects);
router.put('/:id',projectController.updateProject);
router.get('/:id',projectController.findProjectById);
router.delete('/:id',projectController.deleteProject);
router.put('/updateState/:id',projectController.updateProjectByState);

module.exports = router ; 