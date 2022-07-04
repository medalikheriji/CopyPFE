const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const asyncHandler = require('express-async-handler');
const admin = require('../middleware/admin');
const protect = require('../middleware/authMiddleware');



router.post('/login',userController.loginUser);
router.post('/register',userController.registerUser);
router.post('/password/forgot',userController.forgetPasswordUser);
router.put('/password/reset/:token',userController.resetPassword);
router.get('/profile'/*,protect*/,userController.getProfile);
router.put('/profile'/*,protect*/,userController.updateProfile);
router.get('/',userController.findAllUsers);
router.post('/ajouter'/*,protect*/,userController.addUser);
router.delete('/:id'/*,protect,admin*/,userController.deleteUser);


module.exports = router ; 