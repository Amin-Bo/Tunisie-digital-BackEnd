const Project = require("../models/projects");
const Task = require("../models/tasks");

exports.addTask = (req, res) => {
     let newTask = new Task({
          title: req.body.title,
          details: req.body.details,
     })
     newTask.save((err, task) => {
          if (err) {
               res.status(500).send({
                    message: err.message
               });
          } else {
               Project.findOneAndUpdate({
                    _id: req.params.id
               }, {
                    $push: {
                         tasks: task
                    }
               }, (err, project) => {
                    if (err) {
                         res.status(500).send({
                              message: err.message
                         });
                    } else {

                         res.status(200).send({
                              message: "Task added successfully",
                              project: project
                         });
                    }
               })
          }
     })

}