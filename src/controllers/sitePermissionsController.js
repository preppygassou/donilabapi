const { SitePermissions, User, Site } = require('../models');

exports.createSitePermission = async (req, res) => {
  try {
    const permission = await SitePermissions.create(req.body);
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSitePermissions = async (req, res) => {
  try {
    const permissions = await SitePermissions.findAll({
      include: [
        { model: User },
        { model: Site }
      ]
    });
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSitePermissionById = async (req, res) => {
  try {
    const permission = await SitePermissions.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Site }
      ]
    });
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    res.json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSitePermission = async (req, res) => {
  try {
    const permission = await SitePermissions.findByPk(req.params.id);
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    await permission.update(req.body);
    res.json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSitePermission = async (req, res) => {
  try {
    const permission = await SitePermissions.findByPk(req.params.id);
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    await permission.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};