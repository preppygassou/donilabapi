const { SitePartner, Site, Partner } = require('../models');

exports.createSitePartner = async (req, res) => {
  try {
    const sitePartner = await SitePartner.create(req.body);
    res.status(201).json(sitePartner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSitePartners = async (req, res) => {
  try {
    const sitePartners = await SitePartner.findAll({
      include: [
        { model: Site },
        { model: Partner }
      ]
    });
    res.json(sitePartners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSitePartnerById = async (req, res) => {
  try {
    const sitePartner = await SitePartner.findOne({
      where: {
        siteId: req.params.siteId,
        partnerId: req.params.partnerId
      },
      include: [
        { model: Site },
        { model: Partner }
      ]
    });
    if (!sitePartner) {
      return res.status(404).json({ error: 'Site Partner not found' });
    }
    res.json(sitePartner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSitePartner = async (req, res) => {
  try {
    const sitePartner = await SitePartner.findOne({
      where: {
        siteId: req.params.siteId,
        partnerId: req.params.partnerId
      }
    });
    if (!sitePartner) {
      return res.status(404).json({ error: 'Site Partner not found' });
    }
    await sitePartner.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};