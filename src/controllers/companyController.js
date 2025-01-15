
const {Company,Site,Hub} = require('../models');

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an existing company
exports.updateCompany = async (req, res) => {
    try {
        const [updated] = await Company.update(req.body, {
            where: { id: req.params.id },
            /* returning: true,
            individualHooks: true */
        });
        if (!updated) {
            return res.status(404).json({ error: 'Company not found' });
        }
        const updatedCompany = await Company.findOne({ where: { id: req.params.id } });
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
    try {
        const deleted = await Company.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCompanies = async (req, res) => {
    try {
      const Companies = await Company.findAll({
        /* include: [
          { model: Site },
          { model: Hub }
        ] */
      });
      res.json(Companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };