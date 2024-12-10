const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const siteSidebarOptionController = require('../controllers/siteSidebarOptionController');
const validate = require('../middleware/validate');

const sidebarOptionValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  validate
];

router.post('/', sidebarOptionValidation, siteSidebarOptionController.createSiteSidebarOption);
router.get('/', siteSidebarOptionController.getAllSiteSidebarOptions);
router.get('/:id', siteSidebarOptionController.getSiteSidebarOptionById);
router.put('/:id', sidebarOptionValidation, siteSidebarOptionController.updateSiteSidebarOption);
router.delete('/:id', siteSidebarOptionController.deleteSiteSidebarOption);

module.exports = router;