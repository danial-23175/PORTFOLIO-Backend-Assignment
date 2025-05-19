const express = require('express');
const connectDB = require('./config/db'); 
const dotenv = require('dotenv');
const morgan = require('morgan'); 

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();  

// Middleware to parse JSON request bodies
app.use(express.json());

// Logging middleware (optional, but useful during development)
app.use(morgan('dev'));

// Serve static files (frontend)
app.use(express.static('public'));  // Serve files from the 'public' folder

// Define your API routes
app.use('/api/education', require('./routes/educationRoutes'));
app.use('/api/experience', require('./routes/experienceRoutes'));
app.use('/api/project', require('./routes/projectRoutes'));
app.use('/api/skill', require('./routes/skillRoutes'));

// Error handling middleware (optional, but helpful for catching errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;  // Use the PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
