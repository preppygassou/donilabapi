const express = require('express');
const router = express.Router();
const path = require('path');
const { Media } = require('../models');
const fs = require('fs');


// Rota para obter todos os Media
router.get('/', async (req, res) => {
  try {
    const media = await Media.findAll();
    res.status(200).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para deletar Media por id
/* router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByPk(id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }
    await media.destroy();
    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); */
router.delete('/:id', async (req, res) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    const filePath = path.join(__dirname, '../../uploads', path.basename(media.link));
    fs.unlink(filePath, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete file' });
      }

      await media.destroy();
      res.status(200).json({ message: 'Media deleted successfully' });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Rota para obter Media por siteId
router.get('/site/:siteId', async (req, res) => {
  try {
    const { siteId } = req.params;
    const media = await Media.findAll({ where: { siteId } });
    res.status(200).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter Media por hubId
router.get('/hub/:hubId', async (req, res) => {
  try {
    const { hubId } = req.params;
    const media = await Media.findAll({ where: { hubId } });
    res.status(200).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;