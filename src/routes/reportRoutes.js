const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const reportController = require('../controllers/reportController');
const validate = require('../middleware/validate');

const reportValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  validate
];

router.post('/', reportValidation, reportController.createReport);
router.get('/', reportController.getAllReports);
router.get('/:id', reportController.getReportById);
router.put('/:id', reportValidation, reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

module.exports = router;