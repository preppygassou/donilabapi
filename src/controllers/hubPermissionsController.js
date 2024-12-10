const { HubPermissions, User, Hub } = require('../models');

exports.createHubPermission = async (req, res) => {
  try {
    const permission = await HubPermissions.create(req.body);
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHubPermissions = async (req, res) => {
  try {
    const permissions = await HubPermissions.findAll({
      include: [
        { model: User },
        { model: Hub }
      ]
    });
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHubPermissionById = async (req, res) => {
  try {
    const permission = await HubPermissions.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Hub }
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

exports.updateHubPermission = async (req, res) => {
  try {
    const permission = await HubPermissions.findByPk(req.params.id);
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    await permission.update(req.body);
    res.json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHubPermission = async (req, res) => {
  try {
    const permission = await HubPermissions.findByPk(req.params.id);
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    await permission.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};