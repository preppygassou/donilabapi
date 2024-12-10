const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const hubSidebarOptionController = require('../controllers/hubSidebarOptionController');
const validate = require('../middleware/validate');

const sidebarOptionValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('hubId').notEmpty().withMessage('Hub ID is required'),
  validate
];

router.post('/', sidebarOptionValidation, hubSidebarOptionController.createHubSidebarOption);
router.get('/', hubSidebarOptionController.getAllHubSidebarOptions);
router.get('/:id', hubSidebarOptionController.getHubSidebarOptionById);
router.put('/:id', sidebarOptionValidation, hubSidebarOptionController.updateHubSidebarOption);
router.delete('/:id', hubSidebarOptionController.deleteHubSidebarOption);

module.exports = router;