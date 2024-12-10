const { Event, Category, Hub, Booking } = require('../models');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    if (req.body.categories) {
      await event.setCategories(req.body.categories);
    }
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        { model: Category },
        { model: Hub, as: 'organizer' },
        { model: Booking }
      ]
    });
    res.json(events.map(event => ({
      ...event.toJSON(),
      categories: event.Categories,
    })));
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Hub, as: 'organizer' },
        { model: Booking }
      ]
    });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.update(req.body);
    if (req.body.categories) {
      await event.setCategories(req.body.categories);
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};