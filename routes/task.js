
const express = require('express');
const router = express.Router();

///Controllers 
const taskController = require('../controllers/taskController');
const Auth = require('../middlwares/Auth');


//create project
router.post('/task/:id',Auth,taskController.addTask);



module.exports = router;

