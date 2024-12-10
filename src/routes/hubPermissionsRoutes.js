const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const hubPermissionsController = require('../controllers/hubPermissionsController');
const validate = require('../middleware/validate');

const permissionValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('hubId').notEmpty().withMessage('Hub ID is required'),
  body('access').isBoolean().withMessage('Access must be a boolean'),
  validate
];

router.post('/', permissionValidation, hubPermissionsController.createHubPermission);
router.get('/', hubPermissionsController.getAllHubPermissions);
router.get('/:id', hubPermissionsController.getHubPermissionById);
router.put('/:id', permissionValidation, hubPermissionsController.updateHubPermission);
router.delete('/:id', hubPermissionsController.deleteHubPermission);

module.exports = router;