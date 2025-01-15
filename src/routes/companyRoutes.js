
const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Create a new company
router.post('/', companyController.createCompany);
router.get('/', companyController.getAllCompanies);

// Update an existing company
router.put('/:id', companyController.updateCompany);

// Delete a company
router.delete('/:id', companyController.deleteCompany);

module.exports = router;