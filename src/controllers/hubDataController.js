const { Hub } = require('../models');

exports.createGalerie = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    if (hub.galerie) {
      return res.status(400).json({ error: 'Galerie already exists. Use update endpoint instead.' });
    }
    await hub.update({ galerie: req.body });
    res.status(201).json({ galerie: hub.galerie });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createSummary = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    if (hub.summary) {
      return res.status(400).json({ error: 'Summary already exists. Use update endpoint instead.' });
    }
    await hub.update({ summary: req.body });
    res.status(201).json({ summary: hub.summary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createSpecificities = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    if (hub.specificities) {
      return res.status(400).json({ error: 'Specificities already exists. Use update endpoint instead.' });
    }
    await hub.update({ specificities: req.body });
    res.status(201).json({ specificities: hub.specificities });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createServices = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    if (hub.services) {
      return res.status(400).json({ error: 'Services already exists. Use update endpoint instead.' });
    }
    await hub.update({ services: req.body });
    res.status(201).json({ services: hub.services });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createData = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    if (hub.data) {
      return res.status(400).json({ error: 'Data already exists. Use update endpoint instead.' });
    }
    await hub.update({ data: req.body });
    res.status(201).json({ data: hub.data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateGalerie = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ galerie: req.body });
    res.json({ galerie: hub.galerie });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSummary = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ summary: req.body });
    res.json({ summary: hub.summary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDescriptionTeam = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ description_team: req.body });
    res.json({ description_team: hub.description_team });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateDescriptionProgramHub = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ description_program_hub: req.body });
    res.json({ description_program_hub: hub.description_program_hub });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateDescriptionProgramPartner = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ description_program_partner: req.body });
    res.json({ description_program_partner: hub.description_program_partner });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSpecificities = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ specificities: req.body });
    res.json({ specificities: hub.specificities });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateServices = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ services: req.body });
    res.json({ services: hub.services });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    await hub.update({ data: req.body });
    res.json({ data: hub.data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGalerie = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json({ galerie: hub.galerie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json({ summary: hub.summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpecificities = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json({ specificities: hub.specificities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json({ services: hub.services });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.hubId);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json({ data: hub.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};