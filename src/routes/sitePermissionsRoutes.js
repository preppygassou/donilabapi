const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sitePermissionsController = require('../controllers/sitePermissionsController');
const validate = require('../middleware/validate');

const permissionValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  body('access').isBoolean().withMessage('Access must be a boolean'),
  validate
];

router.post('/', permissionValidation, sitePermissionsController.createSitePermission);
router.get('/', sitePermissionsController.getAllSitePermissions);
router.get('/:id', sitePermissionsController.getSitePermissionById);
router.put('/:id', permissionValidation, sitePermissionsController.updateSitePermission);
router.delete('/:id', sitePermissionsController.deleteSitePermission);

module.exports = router;