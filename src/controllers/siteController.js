const { Site } = require('../models');

exports.createSite = async (req, res) => {
  try {
    const site = await Site.create(req.body);
    res.status(201).json(site);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSites = async (req, res) => {
  try {
    const sites = await Site.findAll({
      include: ['Hubs']
    });
    res.json(sites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSiteById = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.id, {
      include: ['Hubs']
    });
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json(site);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSite = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.id);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    await site.update(req.body);
    res.json(site);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSite = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.id);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    await site.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};