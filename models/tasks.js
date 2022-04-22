const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema=mongoose.Schema;
// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const TaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  status: { type: String, default: "todo" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});



const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
