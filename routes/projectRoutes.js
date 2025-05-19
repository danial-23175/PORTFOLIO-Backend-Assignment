const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Define the routes
router.get('/', projectController.getAll); // GET route to fetch all projects
router.post('/', projectController.create); // POST route to create a new project

module.exports = router;
