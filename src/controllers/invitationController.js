const { Invitation, Site } = require('../models');

exports.createInvitation = async (req, res) => {
  try {
    const invitation = await Invitation.create(req.body);
    res.status(201).json(invitation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.findAll({
      include: [{ model: Site }]
    });
    res.json(invitations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInvitationById = async (req, res) => {
  try {
    const invitation = await Invitation.findByPk(req.params.id, {
      include: [{ model: Site }]
    });
    if (!invitation) {
      return res.status(404).json({ error: 'Invitation not found' });
    }
    res.json(invitation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateInvitation = async (req, res) => {
  try {
    const invitation = await Invitation.findByPk(req.params.id);
    if (!invitation) {
      return res.status(404).json({ error: 'Invitation not found' });
    }
    await invitation.update(req.body);
    res.json(invitation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteInvitation = async (req, res) => {
  try {
    const invitation = await Invitation.findByPk(req.params.id);
    if (!invitation) {
      return res.status(404).json({ error: 'Invitation not found' });
    }
    await invitation.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};