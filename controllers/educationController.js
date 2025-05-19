const Education = require('../models/Education');

// Create a new education entry
exports.create = async (req, res) => {
  try {
    const { school, degree, year } = req.body;
    const newEducation = new Education({
      school,
      degree,
      year,
    });

    await newEducation.save();
    res.status(201).json({ message: 'Education entry created', data: newEducation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all education entries
exports.getAll = async (req, res) => {
  try {
    const educationEntries = await Education.find();
    res.status(200).json(educationEntries);  // Send all education entries
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching education data' });
  }
};
