const express = require('express');
const router = express.Router();
const editionController = require('../controllers/editionController');

router.get('/', editionController.getAllEditions);
router.post('/', editionController.createEdition);
router.get('/:id', editionController.getEditionById);
router.put('/:id', editionController.updateEdition);
router.delete('/:id', editionController.deleteEdition);

module.exports = router;