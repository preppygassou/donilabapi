const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const teamController = require('../controllers/teamController');
const validate = require('../middleware/validate');

const teamValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('profile').notEmpty().withMessage('Profile is required'),
  body('poste').notEmpty().withMessage('Poste is required'),
  body('siteId').notEmpty().withMessage('Site ID is required'),
  validate
];

router.post('/', teamValidation, teamController.createTeam);
router.get('/', teamController.getAllTeams);
router.get('/:id', teamController.getTeamById);
router.put('/:id', teamValidation, teamController.updateTeam);
router.delete('/:id', teamController.deleteTeam);

module.exports = router;