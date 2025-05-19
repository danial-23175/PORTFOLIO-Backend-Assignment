const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Define the routes
router.get('/', experienceController.getAll); // GET route to fetch all experiences
router.post('/', experienceController.create); // POST route to create a new experience

module.exports = router;
