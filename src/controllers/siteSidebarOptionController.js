const { SiteSidebarOption, Site } = require('../models');

exports.createSiteSidebarOption = async (req, res) => {
  try {
    const option = await SiteSidebarOption.create(req.body);
    res.status(201).json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSiteSidebarOptions = async (req, res) => {
  try {
    const options = await SiteSidebarOption.findAll({
      include: [{ model: Site }]
    });
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSiteSidebarOptionById = async (req, res) => {
  try {
    const option = await SiteSidebarOption.findByPk(req.params.id, {
      include: [{ model: Site }]
    });
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    res.json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSiteSidebarOption = async (req, res) => {
  try {
    const option = await SiteSidebarOption.findByPk(req.params.id);
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    await option.update(req.body);
    res.json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSiteSidebarOption = async (req, res) => {
  try {
    const option = await SiteSidebarOption.findByPk(req.params.id);
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    await option.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};