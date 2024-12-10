const { Site } = require('../models');

// Helper function to update site data section
const updateSiteDataSection = async (siteId, section, data) => {
  const site = await Site.findByPk(siteId);
  if (!site) {
    throw new Error('Site not found');
  }
  
  const currentData = site.data || {};
  const updatedData = {
    ...currentData,
    [section]: data
  };
  
  await site.update({ data: updatedData });
  return site;
};

exports.updateContactPage = async (req, res) => {
  try {
    const site = await updateSiteDataSection(req.params.siteId, 'contact_page', req.body);
    res.json({ contact_page: site.data.contact_page });
  } catch (error) {
    res.status(error.message === 'Site not found' ? 404 : 400).json({ error: error.message });
  }
};

exports.updateAboutPage = async (req, res) => {
  try {
    const site = await updateSiteDataSection(req.params.siteId, 'about_page', req.body);
    res.json({ about_page: site.data.about_page });
  } catch (error) {
    res.status(error.message === 'Site not found' ? 404 : 400).json({ error: error.message });
  }
};

exports.updateHeader = async (req, res) => {
  try {
    const site = await updateSiteDataSection(req.params.siteId, 'header', req.body);
    res.json({ header: site.data.header });
  } catch (error) {
    res.status(error.message === 'Site not found' ? 404 : 400).json({ error: error.message });
  }
};

exports.updateFooter = async (req, res) => {
  try {
    const site = await updateSiteDataSection(req.params.siteId, 'footer', req.body);
    res.json({ footer: site.data.footer });
  } catch (error) {
    res.status(error.message === 'Site not found' ? 404 : 400).json({ error: error.message });
  }
};

exports.getContactPage = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ contact_page: site.data.contact_page });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAboutPage = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ about_page: site.data.about_page });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHeader = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ header: site.data.header });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFooter = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ footer: site.data.footer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add these new methods for Expertise management
exports.getExpertise = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ expertise: site.expertise });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExpertise = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    await site.update({ expertise: req.body });
    res.json({ expertise: site.expertise });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Add these new methods for impact management
exports.updateImpact = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    await site.update({ impact: req.body });
    res.json({ impact: site.impact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getImpact = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ impact: site.impact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Add these new methods for services management
exports.updateServices = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    await site.update({ services: req.body });
    res.json({ services: site.services });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.siteId);
    if (!site) {
      return res.status(404).json({ error: 'Site not found' });
    }
    res.json({ services: site.services });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};