// routes for supervisor
const express = require('express');
const router = express.Router();

const supervisorController = require('../controllers/supervisorController');

router.post('/',supervisorController.createSupervior);
router.get('/',supervisorController.findAllSupervisors);
router.get('/:id',supervisorController.updateSupervisor);
router.get('/:id',supervisorController.findSupervisorById);
router.delete('/:id',supervisorController.deleteSupervisor);

module.exports = router ; 