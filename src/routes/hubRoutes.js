const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const hubController = require('../controllers/hubController');
const validate = require('../middleware/validate');
const upload = require('../middleware/upload');

const hubValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  validate
];

router.post('/'/* , upload.single('logo') */, hubValidation, hubController.createHub);
router.get('/', hubController.getAllHubs);
router.get('/:id', hubController.getHubById);
router.put('/:id'/* , upload.single('logo') */, hubValidation, hubController.updateHub);
router.delete('/:id', hubController.deleteHub);

module.exports = router;