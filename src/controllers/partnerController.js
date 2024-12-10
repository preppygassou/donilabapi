const { Partner, Site, Hub } = require('../models');

exports.createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);
    if (req.body.siteIds) {
      await partner.setSites(req.body.siteIds);
    }
    if (req.body.hubIds) {
      await partner.setHubs(req.body.hubIds);
    }
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.findAll({
      include: [
        { model: Site },
        { model: Hub }
      ]
    });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id, {
      include: [
        { model: Site },
        { model: Hub }
      ]
    });
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    await partner.update(req.body);
    if (req.body.siteIds) {
      await partner.setSites(req.body.siteIds);
    }
    if (req.body.hubIds) {
      await partner.setHubs(req.body.hubIds);
    }
    res.json(partner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    await partner.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};