
const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');
const protect = require('../middleware/authMiddleware');
const colab = require('../middleware/colab');

router.post('/add',protect,colab,timesheetController.addTimesheet);
router.get('/',protect,timesheetController.findTimesheet);
router.delete('/:id',protect,timesheetController.deleteTimesheet);
router.put('/:id',protect,timesheetController.updateTimesheet);
router.put('updatetime/:id',protect,timesheetController.updateTimesheetTime);


module.exports = router ; 