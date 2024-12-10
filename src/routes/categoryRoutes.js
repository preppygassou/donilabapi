const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const validate = require('../middleware/validate');

const categoryValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  validate
];

router.post('/', /* categoryValidation, */ categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryValidation, categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;