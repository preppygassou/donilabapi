const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const programController = require('../controllers/programController');
const validate = require('../middleware/validate');

const programValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('logo').notEmpty().withMessage('Logo is required'),
  body('programTypeId').notEmpty().withMessage('Type is required'),
  body('description').notEmpty().withMessage('Description is required'),
  validate
];

router.post('/', programValidation, programController.createProgram);
router.get('/', programController.getAllPrograms);
router.get('/:id', programController.getProgramById);
router.get('/slug/:slug/:lang', programController.filterProgramsBySlugLang);
router.put('/:id', /* programValidation, */ programController.updateProgram);
router.put('/beneficiary/beneficiaries/:id', /* programValidation, */ programController.updateProgramBeneficiary);
router.delete('/:id', programController.deleteProgram);

module.exports = router;