const { HubSidebarOption, Hub } = require('../models');

exports.createHubSidebarOption = async (req, res) => {
  try {
    const option = await HubSidebarOption.create(req.body);
    res.status(201).json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHubSidebarOptions = async (req, res) => {
  try {
    const options = await HubSidebarOption.findAll({
      include: [{ model: Hub }]
    });
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHubSidebarOptionById = async (req, res) => {
  try {
    const option = await HubSidebarOption.findByPk(req.params.id, {
      include: [{ model: Hub }]
    });
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    res.json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHubSidebarOption = async (req, res) => {
  try {
    const option = await HubSidebarOption.findByPk(req.params.id);
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    await option.update(req.body);
    res.json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHubSidebarOption = async (req, res) => {
  try {
    const option = await HubSidebarOption.findByPk(req.params.id);
    if (!option) {
      return res.status(404).json({ error: 'Sidebar option not found' });
    }
    await option.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};