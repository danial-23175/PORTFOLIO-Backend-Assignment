const Experience = require('../models/Experience');

// Create a new experience entry
exports.create = async (req, res) => {
  try {
    const { company, role, duration } = req.body;
    const newExperience = new Experience({
      company,
      role,
      duration,
    });

    await newExperience.save();
    res.status(201).json({ message: 'Experience entry created', data: newExperience });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all experience entries
exports.getAll = async (req, res) => {
  try {
    const experienceEntries = await Experience.find();
    res.status(200).json(experienceEntries);  // Send all experience entries
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching experience data' });
  }
};
