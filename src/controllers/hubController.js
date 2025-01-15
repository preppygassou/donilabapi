const { Hub, Site, Partner, Event, Program, Team, HubSidebarOption } = require('../models');
const { createMultiLangField } = require('../utils/multilang');
const fs = require('fs').promises;
const path = require('path');

exports.createHub = async (req, res) => {
  try {
    const hubData = {
      ...req.body,
      title: createMultiLangField(req.body.title),
      description: createMultiLangField(req.body.description),
      //logo: req.file ? { url: `/uploads/${req.file.filename}` } : null
    };

    const hub = await Hub.create(hubData);
    res.status(201).json(hub);
  } catch (error) {
    // Clean up uploaded file if there's an error
    if (req.file) {
      await fs.unlink(req.file.path).catch(console.error);
    }
   
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHubs = async (req, res) => {
  try {
    const hubs = await Hub.findAll({
      include: [
        { model: Site },
        { model: Partner },
        { model: Event },
        { model: Program },
        { model: Team },
        { model: HubSidebarOption }
      ]
    });
    res.json(hubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHubById = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.id, {
      include: [
        { model: Site },
        { model: Partner },
        { model: Event },
        { model: Program },
        { model: Team },
        { model: HubSidebarOption }
      ]
    });
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json(hub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getHubBySlugLang = async (req, res) => {
  try {
    const { slug, lang } = req.params;

    const hub = await Hub.findOne({
      where: {
        [`slug.${lang}`]: slug
      },
      include: [
        /* { model: Site }, */
       /*  { model: Partner }, */
        {
          association: 'HubPartner',
          attributes: ['id', 'name', 'logo', 'link', 'createdAt', 'updatedAt']
        },
        /* {
          association: 'Events',
          attributes: ['id', 'name', 'date', 'location', 'createdAt', 'updatedAt']
        },
        {
          association: 'Teams',
          attributes: ['id', 'name', 'createdAt', 'updatedAt']
        }, */
        /* { model: Event }, */
       /*  { model: Program }, */
        /* { model: Team }, */
        /* { model: HubSidebarOption } */
      ]
    });
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }
    res.json(hub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.filterHubsBySlugLang = async (req, res) => {
  try {
    const { slug, lang } = req.params;
    const hubs = await Hub.findAll({
      include: [
        { model: Site },
        { model: Partner },
        { model: Event },
        { model: Program },
        { model: Team },
        /* { model: HubSidebarOption } */
      ]
    });

    const filteredHubs = hubs.filter(hub => hub.slug[lang] === slug);
   
    res.json(filteredHubs[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateHub = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.id);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }

    const hubData = {
      ...req.body,
      title: createMultiLangField(req.body.title),
      description: createMultiLangField(req.body.description)
    };

    if (req.file) {
      // Delete old logo file if it exists
      if (hub.logo?.url) {
        const oldFilePath = path.join(__dirname, '../../', hub.logo.url);
        await fs.unlink(oldFilePath).catch(console.error);
      }
      hubData.logo = { url: `/uploads/${req.file.filename}` };
    }

    await hub.update(hubData);
    res.json(hub);
  } catch (error) {
    // Clean up uploaded file if there's an error
    if (req.file) {
      await fs.unlink(req.file.path).catch(console.error);
    }
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHub = async (req, res) => {
  try {
    const hub = await Hub.findByPk(req.params.id);
    if (!hub) {
      return res.status(404).json({ error: 'Hub not found' });
    }

    // Delete logo file if it exists
    if (hub.logo?.url) {
      const filePath = path.join(__dirname, '../../', hub.logo.url);
      await fs.unlink(filePath).catch(console.error);
    }

    await hub.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};