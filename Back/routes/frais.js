const express = require('express');
const router = express.Router();

const fraisController = require('../controllers/fraisController');

router.post('/',fraisController.createFrais);
router.get('/',fraisController.findAllFrais);
router.put('/:id',fraisController.updateFrais);
router.get('/:id',fraisController.findFraisById);
router.delete('/:id',fraisController.deleteFrais);

module.exports = router ; 