const Project = require('../models/Project');

// Create a new project entry
exports.create = async (req, res) => {
  try {
    const { projectName, projectDescription } = req.body;
    const newProject = new Project({
      projectName,
      projectDescription,
    });

    await newProject.save();
    res.status(201).json({ message: 'Project entry created', data: newProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all project entries
exports.getAll = async (req, res) => {
  try {
    const projectEntries = await Project.find();
    res.status(200).json(projectEntries);  // Send all project entries
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching project data' });
  }
};
