const Project = require("../models/projects");
const moment = require('moment');
const Task = require("../models/tasks");

exports.CreateProject = (req, res) => {
    let newTasks = new Task({
        title: req.body.titleT,
        details: req.body.detailsT,
    })
    let newProject = new Project({
        title: req.body.title,
        description: req.body.description,
        owner: req.user._id,
        details: req.body.details,
        status: req.body.status,
    });
    newProject.save((err, project) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.status(200).send({
                message: "Project created successfully",
                project: project
            });
        }
    })
}