const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Define the routes
router.get('/', educationController.getAll);
router.post('/', educationController.create);

module.exports = router;
