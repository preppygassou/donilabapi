const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const validate = require('../middleware/validate');

const notificationValidation = [
  body('notification').notEmpty().withMessage('Notification content is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  validate
];

router.post('/', notificationValidation, notificationController.createNotification);
router.get('/', notificationController.getAllNotifications);
router.get('/:id', notificationController.getNotificationById);
router.put('/:id', notificationValidation, notificationController.updateNotification);
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;