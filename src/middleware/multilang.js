const { createMultiLangField, createMultiLangMedia } = require('../utils/multilang');

const multiLangFields = [
  'title',
  'description',
  'content',
  /* 'name', */
  'slug',
  'summary',
  'specificities',
  'services',
  'expertise',
  'impact',
  'poste'
];

const multiLangMiddleware = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    // Handle text fields
    for (const field of multiLangFields) {
      if (req.body[field]) {
        req.body[field] = createMultiLangField(req.body[field]);
      }
    }

    // Handle media fields
    if (req.files) {
      req.body.featured_media = createMultiLangMedia(req.files);
    }
  }
  next();
};

module.exports = multiLangMiddleware;