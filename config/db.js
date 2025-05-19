const mongoose = require('mongoose');
require('dotenv').config();  

// Define a function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGO_URI);  // Removed deprecated options
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);  // Exit process if connection fails
  }
};

module.exports = connectDB;  // Export the connectDB function
