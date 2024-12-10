const express = require('express');
const router = express.Router();
const siteDataController = require('../controllers/siteDataController');
const validate = require('../middleware/validate');
const { body } = require('express-validator');

// Validation middleware for contact page
const contactPageValidation = [
  body('title').isObject().withMessage('Title must be an object'),
  body('title.fr').isString().notEmpty().withMessage('French title is required'),
  body('title.en').isString().notEmpty().withMessage('English title is required'),
  body('description').isObject().withMessage('Description must be an object'),
  body('description.fr').isString().notEmpty().withMessage('French description is required'),
  body('description.en').isString().notEmpty().withMessage('English description is required'),
  body('contact').isArray().withMessage('Contact must be an array'),
  body('social').isArray().withMessage('Social must be an array'),
  validate
];

// Validation middleware for about page
const aboutPageValidation = [
  body('title').isObject().withMessage('Title must be an object'),
  body('description').isObject().withMessage('Description must be an object'),
  body('excerpt').isObject().withMessage('Excerpt must be an object'),
  body('about').isArray().withMessage('About must be an array'),
  validate
];

// Validation middleware for header
const headerValidation = [
  body('logo').isObject().withMessage('Logo must be an object'),
  body('logo.url').isString().notEmpty().withMessage('Logo URL is required'),
  body('title').isObject().withMessage('Title must be an object'),
  body('menu').isArray().withMessage('Menu must be an array'),
  validate
];

// Validation middleware for footer
const footerValidation = [
  body('logo').isObject().withMessage('Logo must be an object'),
  body('title').isObject().withMessage('Title must be an object'),
  body('about').isObject().withMessage('About must be an object'),
  body('menu').isArray().withMessage('Menu must be an array'),
  body('information').isArray().withMessage('Information must be an array'),
  validate
];

// Routes for different sections of site data
router.put('/:siteId/contact-page', contactPageValidation, siteDataController.updateContactPage);
router.put('/:siteId/about-page', aboutPageValidation, siteDataController.updateAboutPage);
router.put('/:siteId/header', headerValidation, siteDataController.updateHeader);
router.put('/:siteId/footer', footerValidation, siteDataController.updateFooter);

// Get routes
router.get('/:siteId/contact-page', siteDataController.getContactPage);
router.get('/:siteId/about-page', siteDataController.getAboutPage);
router.get('/:siteId/header', siteDataController.getHeader);
router.get('/:siteId/footer', siteDataController.getFooter);

// Impact routes
router.put('/:siteId/impact', siteDataController.updateImpact);
router.get('/:siteId/impact', siteDataController.getImpact);

// Impact routes
router.put('/:siteId/expertise', siteDataController.updateExpertise);
router.get('/:siteId/expertise', siteDataController.getExpertise);

// Impact routes
router.put('/:siteId/services', siteDataController.updateServices);
router.get('/:siteId/services', siteDataController.getServices);

module.exports = router;