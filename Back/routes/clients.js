const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');

router.post('/',clientsController.createClient);
router.post('/addSup/:id',clientsController.createSupervisorUnderClient);
router.get('/',clientsController.findAllClients);
router.put('/:id',clientsController.updateClient);
router.get('/:id',clientsController.findClientById);
router.delete('/:id',clientsController.deleteClient);
router.delete('/removeSup/:id',clientsController.deleteSupervisorUnderClient);
module.exports = router ; 