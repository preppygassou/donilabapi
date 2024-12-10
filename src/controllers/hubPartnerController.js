const { HubPartner, Hub, Partner } = require('../models');

exports.createHubPartner = async (req, res) => {
  try {
    const hubPartner = await HubPartner.create(req.body);
    res.status(201).json(hubPartner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHubPartners = async (req, res) => {
  try {
    const hubPartners = await HubPartner.findAll({
      include: [
        { model: Hub },
        { model: Partner }
      ]
    });
    res.json(hubPartners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHubPartnerById = async (req, res) => {
  try {
    const hubPartner = await HubPartner.findOne({
      where: {
        hubId: req.params.hubId,
        partnerId: req.params.partnerId
      },
      include: [
        { model: Hub },
        { model: Partner }
      ]
    });
    if (!hubPartner) {
      return res.status(404).json({ error: 'Hub Partner not found' });
    }
    res.json(hubPartner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHubPartner = async (req, res) => {
  try {
    const hubPartner = await HubPartner.findOne({
      where: {
        hubId: req.params.hubId,
        partnerId: req.params.partnerId
      }
    });
    if (!hubPartner) {
      return res.status(404).json({ error: 'Hub Partner not found' });
    }
    await hubPartner.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};