const createMultiLangField = (value) => {
  if (!value) return null;
  
  if (typeof value === 'string') {
    return { en: value, fr: value };
  }
  
  if (typeof value === 'object') {
    return {
      en: value.en || '',
      fr: value.fr || value.en || ''
    };
  }
  
  return null;
};

const createMultiLangMedia = (files) => {
  if (!files) return null;

  if (Array.isArray(files)) {
    return {
      en: files.find(f => f.fieldname === 'featured_media_en')?.filename || null,
      fr: files.find(f => f.fieldname === 'featured_media_fr')?.filename || null
    };
  }

  if (files.featured_media_en || files.featured_media_fr) {
    return {
      en: files.featured_media_en?.[0]?.filename || null,
      fr: files.featured_media_fr?.[0]?.filename || null
    };
  }

  // Fallback for single file
  if (files.featured_media) {
    const filename = files.featured_media[0]?.filename;
    return filename ? { en: filename, fr: filename } : null;
  }

  return null;
};

const validateMultiLangField = (value) => {
  if (!value || typeof value !== 'object') return false;
  return value.en && value.fr;
};

module.exports = {
  createMultiLangField,
  createMultiLangMedia,
  validateMultiLangField
};