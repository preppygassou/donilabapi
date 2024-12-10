const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const zoneController = require('../controllers/zoneController');
const validate = require('../middleware/validate');

const zoneValidation = [
  body('name').isObject().withMessage('Name must be an object'),
  body('name.en').notEmpty().withMessage('English name is required'),
  body('name.fr').notEmpty().withMessage('French name is required'),
  validate
];

router.post('/', /* zoneValidation, */ zoneController.createZone);
router.get('/', zoneController.getAllZones);
router.get('/:id', zoneController.getZoneById);
router.put('/:id', /* zoneValidation, */ zoneController.updateZone);
router.delete('/:id', zoneController.deleteZone);

module.exports = router;