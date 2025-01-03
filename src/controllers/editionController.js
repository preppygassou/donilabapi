const { Edition } = require('../models');

// Listar todas as edições
exports.getAllEditions = async (req, res) => {
  try {
    const editions = await Edition.findAll();
    res.status(200).json(editions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar uma nova edição
exports.createEdition = async (req, res) => {
  try {
    const edition = await Edition.create(req.body);
    res.status(201).json(edition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter uma edição por ID
exports.getEditionById = async (req, res) => {
  try {
    const edition = await Edition.findByPk(req.params.id);
    if (edition) {
      res.status(200).json(edition);
    } else {
      res.status(404).json({ error: 'Edition not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar uma edição por ID
exports.updateEdition = async (req, res) => {
  try {
    const [updated] = await Edition.update(req.body, {
      where: { id: req.params.id }
    });  
    if (updated) {
      const updatedEdition = await Edition.findByPk(req.params.id);
      res.status(200).json(updatedEdition);
    } else {
      res.status(404).json({ error: 'Edition not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar uma edição por ID
exports.deleteEdition = async (req, res) => {
  try {
    const deleted = await Edition.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Edition not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};