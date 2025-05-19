const mongoose = require('mongoose');

// Define the Education schema
const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true, // Makes this field mandatory
  },
  degree: {
    type: String,
    required: true, // Makes this field mandatory
  },
  year: {
    type: Number,
    required: true, // Makes this field mandatory
  },
});

// Create the Education model using the schema
module.exports = mongoose.model('Education', EducationSchema);
