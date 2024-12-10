const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sitePartnerController = require('../controllers/sitePartnerController');
const validate = require('../middleware/validate');

const sitePartnerValidation = [
  body('siteId').notEmpty().withMessage('Site ID is required'),
  body('partnerId').notEmpty().withMessage('Partner ID is required'),
  validate
];

router.post('/', sitePartnerValidation, sitePartnerController.createSitePartner);
router.get('/', sitePartnerController.getAllSitePartners);
router.get('/:siteId/:partnerId', sitePartnerController.getSitePartnerById);
router.delete('/:siteId/:partnerId', sitePartnerController.deleteSitePartner);

module.exports = router;