const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const partnerController = require('../controllers/partnerController');
const validate = require('../middleware/validate');

const partnerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('logo').notEmpty().withMessage('Logo is required'),
  validate
];

router.post('/', partnerValidation, partnerController.createPartner);
router.get('/', partnerController.getAllPartners);
router.get('/:id', partnerController.getPartnerById);
router.put('/:id', partnerValidation, partnerController.updatePartner);
router.delete('/:id', partnerController.deletePartner);

module.exports = router;