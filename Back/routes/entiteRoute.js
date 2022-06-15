// routes for projects
const express = require('express');
const router = express.Router();
const entiteController = require('../controllers/entiteController');
const protect = require('../middleware/authMiddleware');


// api/projects
router.post('/',protect,entiteController.createEntite);
router.get('/',protect,entiteController.findAllEntites);
router.delete('/:id',entiteController.deleteEntite);


module.exports = router ; 
