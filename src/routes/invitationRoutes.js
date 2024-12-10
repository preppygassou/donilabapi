const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const invitationController = require('../controllers/invitationController');
const validate = require('../middleware/validate');

const invitationValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  body('status').isIn(['ACCEPTED', 'REVOKED', 'PENDING']).withMessage('Invalid status'),
  body('role').isIn([
    'SUPER_ADMIN', 'ADMIN', 'EDITOR', 'USER',
    'SITE_ADMIN', 'SITE_MANAGER', 'SITE_MODERATOR', 'SITE_EDITOR',
    'HUB_USER', 'HUB_GUEST', 'HUB_MANAGER', 'HUB_MODERATOR', 'HUB_EDITOR'
  ]).withMessage('Invalid role'),
  validate
];

router.post('/', invitationValidation, invitationController.createInvitation);
router.get('/', invitationController.getAllInvitations);
router.get('/:id', invitationController.getInvitationById);
router.put('/:id', invitationValidation, invitationController.updateInvitation);
router.delete('/:id', invitationController.deleteInvitation);

module.exports = router;