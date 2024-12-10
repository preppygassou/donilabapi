const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const commentController = require('../controllers/commentController');
const validate = require('../middleware/validate');

const commentValidation = [
  body('content').notEmpty().withMessage('Content is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('author_email').isEmail().withMessage('Valid author email is required'),
  body('author_name').notEmpty().withMessage('Author name is required'),
  body('postId').notEmpty().withMessage('Post ID is required'),
  validate
];

router.post('/', commentValidation, commentController.createComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.put('/:id', commentValidation, commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;