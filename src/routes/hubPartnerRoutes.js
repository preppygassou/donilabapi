const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const hubPartnerController = require('../controllers/hubPartnerController');
const validate = require('../middleware/validate');

const hubPartnerValidation = [
  body('hubId').notEmpty().withMessage('Hub ID is required'),
  body('partnerId').notEmpty().withMessage('Partner ID is required'),
  validate
];

router.post('/', hubPartnerValidation, hubPartnerController.createHubPartner);
router.get('/', hubPartnerController.getAllHubPartners);
router.get('/:hubId/:partnerId', hubPartnerController.getHubPartnerById);
router.delete('/:hubId/:partnerId', hubPartnerController.deleteHubPartner);

module.exports = router;