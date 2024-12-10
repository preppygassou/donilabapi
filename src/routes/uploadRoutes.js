const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Media } = require('../models');
const fs = require('fs');

// Configurar o armazenamento do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Rota para fazer upload de um novo Media
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { hubId, siteId } = req.body;
    const { originalname: name, mimetype } = req.file;
    const type = mimetype.split('/')[1];
    const link = `${process.env.API_DOMAINE}/uploads/${req.file.filename}`;
    const size = req.file.size;
    const media = await Media.create({ type, name, link, hubId, siteId, extension: path.extname(name), size });
    res.status(201).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para fazer upload de múltiplos arquivos
router.post('/multiple', upload.array('files', 10), async (req, res) => {
  try {
    const {  hubId, siteId } = req.body;
    const files = req.files;
    const mediaArray = [];

    for (const file of files) {
      const { originalname: name, mimetype } = file;
      const type = mimetype.split('/')[1];
      const link = `${process.env.API_DOMAINE}/uploads/${file.filename}`;
      const size = file.size;
      const media = await Media.create({ type, name, link, hubId, siteId, extension: path.extname(name), size });
      mediaArray.push(media);
    }

    res.status(201).json(mediaArray);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



module.exports = router;