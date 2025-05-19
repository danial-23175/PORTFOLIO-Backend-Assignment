const Skill = require('../models/Skill');

// Create a new skill entry
exports.create = async (req, res) => {
  try {
    const { name, level } = req.body;
    const newSkill = new Skill({
      name,
      level,
    });

    await newSkill.save();
    res.status(201).json({ message: 'Skill entry created', data: newSkill });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all skill entries
exports.getAll = async (req, res) => {
  try {
    const skillsEntries = await Skill.find();
    res.status(200).json(skillsEntries);  // Send all skill entries
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching skills data' });
  }
};
