const express = require('express');
const router = express.Router();
const hubDataController = require('../controllers/hubDataController');
const validate = require('../middleware/validate');
const { body } = require('express-validator');

// Validation middleware
const galerieValidation = [
  body().isArray().withMessage('Galerie must be an array'),
  body('*.url').isString().notEmpty().withMessage('URL is required'),
  validate
];

const summaryValidation = [
  body('title').isObject().withMessage('Title must be an object'),
  body('title.en').isString().notEmpty().withMessage('English title is required'),
  body('title.fr').isString().notEmpty().withMessage('French title is required'),
  body('description').isObject().withMessage('Description must be an object'),
  body('description.en').isString().notEmpty().withMessage('English description is required'),
  body('description.fr').isString().notEmpty().withMessage('French description is required'),
  validate
];

const specificitiesValidation = [
  body().isArray().withMessage('Specificities must be an array'),
  body('*.title').isObject().withMessage('Title must be an object'),
  body('*.title.en').isString().notEmpty().withMessage('English title is required'),
  body('*.title.fr').isString().notEmpty().withMessage('French title is required'),
  body('*.description').isObject().withMessage('Description must be an object'),
  body('*.description.en').isString().notEmpty().withMessage('English description is required'),
  body('*.description.fr').isString().notEmpty().withMessage('French description is required'),
  body('*.image').isObject().withMessage('Image must be an object'),
  body('*.image.en').isString().notEmpty().withMessage('English image URL is required'),
  body('*.image.fr').isString().notEmpty().withMessage('French image URL is required'),
  validate
];

const servicesValidation = [
  body().isArray().withMessage('Services must be an array'),
  body('*.icon').isObject().withMessage('Icon must be an object'),
  body('*.icon.url').isString().notEmpty().withMessage('Icon URL is required'),
  body('*.iconHover').isObject().withMessage('Icon hover must be an object'),
  body('*.iconHover.url').isString().notEmpty().withMessage('Icon hover URL is required'),
  body('*.title').isObject().withMessage('Title must be an object'),
  body('*.title.en').isString().notEmpty().withMessage('English title is required'),
  body('*.title.fr').isString().notEmpty().withMessage('French title is required'),
  body('*.description').isObject().withMessage('Description must be an object'),
  body('*.description.en').isString().notEmpty().withMessage('English description is required'),
  body('*.description.fr').isString().notEmpty().withMessage('French description is required'),
  validate
];

const dataValidation = [
  body('data').isObject().withMessage('Data must be an object'),
  validate
];

// Create routes
router.post('/:hubId/galerie/create', galerieValidation, hubDataController.createGalerie);
router.post('/:hubId/summary/create', summaryValidation, hubDataController.createSummary);
router.post('/:hubId/specificities/create', specificitiesValidation, hubDataController.createSpecificities);
router.post('/:hubId/services/create', servicesValidation, hubDataController.createServices);
router.post('/:hubId/data/create', dataValidation, hubDataController.createData);

// Update routes
router.put('/:hubId/galerie', galerieValidation, hubDataController.updateGalerie);
router.put('/:hubId/summary', summaryValidation, hubDataController.updateSummary);
router.put('/:hubId/specificities', specificitiesValidation, hubDataController.updateSpecificities);
router.put('/:hubId/services', servicesValidation, hubDataController.updateServices);
router.put('/:hubId/description_team', hubDataController.updateDescriptionTeam);
router.put('/:hubId/description_program_hub', hubDataController.updateDescriptionProgramHub);
router.put('/:hubId/description_program_partner', hubDataController.updateDescriptionProgramPartner);
router.put('/:hubId/data', dataValidation, hubDataController.updateData);

// Get routes
router.get('/:hubId/galerie', hubDataController.getGalerie);
router.get('/:hubId/summary', hubDataController.getSummary);
router.get('/:hubId/specificities', hubDataController.getSpecificities);
router.get('/:hubId/services', hubDataController.getServices);
router.get('/:hubId/data', hubDataController.getData);

module.exports = router;