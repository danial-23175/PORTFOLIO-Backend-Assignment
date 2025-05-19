const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Define the routes
router.get('/', skillController.getAll); // GET route to fetch all skills
router.post('/', skillController.create); // POST route to create a new skill

module.exports = router;
