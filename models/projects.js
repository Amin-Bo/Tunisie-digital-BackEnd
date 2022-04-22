const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema=mongoose.Schema;
// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: schema.Types.ObjectId, required: true ,ref:'User'},
  details: { type: String, required: true },
  status: { type: String, default: "in progress" },
  createdAt: { type: Date, default: Date.now },
  members: [{ type: schema.Types.ObjectId, ref:'User'}],
  tasks: [{ type: schema.Types.ObjectId, ref:'Task'}
],
});



const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
