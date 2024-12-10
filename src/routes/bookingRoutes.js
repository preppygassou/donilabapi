const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const validate = require('../middleware/validate');

const bookingValidation = [
  body('eventId').notEmpty().withMessage('Event ID is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('totalAmount').notEmpty().withMessage('Total amount is required'),
  validate
];

router.post('/', bookingValidation, bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingValidation, bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;