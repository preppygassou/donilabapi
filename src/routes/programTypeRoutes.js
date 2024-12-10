const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const programTypeController = require('../controllers/programTypeController');
const validate = require('../middleware/validate');

const programTypeValidation = [
  body('name').isObject().withMessage('Name must be an object'),
  body('name.en').notEmpty().withMessage('English name is required'),
  body('name.fr').notEmpty().withMessage('French name is required'),
  body('description').isObject().withMessage('Description must be an object'),
  body('description.en').notEmpty().withMessage('English description is required'),
  body('description.fr').notEmpty().withMessage('French description is required'),
  validate
];

router.post('/', /* programTypeValidation, */ programTypeController.createProgramType);
router.get('/', programTypeController.getAllProgramTypes);
router.get('/:id', programTypeController.getProgramTypeById);
router.put('/:id',/*  programTypeValidation, */ programTypeController.updateProgramType);
router.delete('/:id', programTypeController.deleteProgramType);

module.exports = router;