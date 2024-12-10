const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const eventController = require('../controllers/eventController');
const validate = require('../middleware/validate');

const eventValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('isFree').isBoolean().withMessage('isFree must be a boolean'),
  body('price').if(body('isFree').equals('false')).notEmpty().withMessage('Price is required when the event is not free'),
  body('url').notEmpty().withMessage('URL is required'),
  validate
];

router.post('/', eventValidation, eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventValidation, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;