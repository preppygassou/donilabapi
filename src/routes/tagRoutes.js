const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const tagController = require('../controllers/tagController');
const validate = require('../middleware/validate');

const tagValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  validate
];

router.post('/', tagValidation, tagController.createTag);
router.get('/', tagController.getAllTags);
router.get('/:id', tagController.getTagById);
router.put('/:id', tagValidation, tagController.updateTag);
router.delete('/:id', tagController.deleteTag);

module.exports = router;