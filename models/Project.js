const mongoose = require('mongoose');

// Define the Project schema
const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  }
});

// Create the Project model
module.exports = mongoose.model('Project', ProjectSchema);
