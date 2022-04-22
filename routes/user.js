
const express = require('express');
const router = express.Router();
const passport = require('passport');

///Controllers 
const AuthController = require('../controllers/authController');


//Login
router.post('/login', AuthController.login);
//Registration
router.post('/register', AuthController.register);



module.exports = router;

