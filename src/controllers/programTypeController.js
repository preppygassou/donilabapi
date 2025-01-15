const { ProgramType } = require('../models');

exports.createProgramType = async (req, res) => {
  try {
    const programType = await ProgramType.create(req.body);
    res.status(201).json(programType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProgramTypes = async (req, res) => {
  try {
    const programTypes = await ProgramType.findAll({ order: [['createdAt', 'ASC']] });
    res.json(programTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProgramTypeById = async (req, res) => {
  try {
    const programType = await ProgramType.findByPk(req.params.id);
    if (!programType) {
      return res.status(404).json({ error: 'Program type not found' });
    }
    res.json(programType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProgramType = async (req, res) => {
  try {
    const programType = await ProgramType.findByPk(req.params.id);
    if (!programType) {
      return res.status(404).json({ error: 'Program type not found' });
    }
    await programType.update(req.body);
    res.json(programType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProgramType = async (req, res) => {
  try {
    const programType = await ProgramType.findByPk(req.params.id);
    if (!programType) {
      return res.status(404).json({ error: 'Program type not found' });
    }
    await programType.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};