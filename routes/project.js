
const express = require('express');
const router = express.Router();

///Controllers 
const projectController = require('../controllers/projectController');
const Auth = require('../middlwares/Auth');


//create project
router.post('/project',Auth,projectController.CreateProject);



module.exports = router;

