
const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Create a new company
router.post('/companies', companyController.createCompany);

// Update an existing company
router.put('/companies/:id', companyController.updateCompany);

// Delete a company
router.delete('/companies/:id', companyController.deleteCompany);

module.exports = router;