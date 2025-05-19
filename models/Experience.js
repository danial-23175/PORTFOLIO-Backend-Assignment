const mongoose = require('mongoose');

// Define the Experience schema
const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
});

// Create the Experience model
module.exports = mongoose.model('Experience', ExperienceSchema);
