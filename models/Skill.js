const mongoose = require('mongoose');

// Define the Skill schema
const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

// Create the Skill model
module.exports = mongoose.model('Skill', SkillSchema);
