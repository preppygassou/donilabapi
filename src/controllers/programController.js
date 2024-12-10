const { Program, Site,Zone, Hub ,Partner,ProgramType} = require('../models');

exports.createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    if (req.body.partners) {
      await program.setPartners(req.body.partners);
    }
    if (req.body.zones) {
      await program.addZones(req.body.zones);
    }
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.findAll({
      include: [
        { model: Site },
        { model: Partner },
        { model: Hub },
        { model: Zone },
        { model: ProgramType }
      ]
    });
    res.json(programs.map(program => ({
      ...program.toJSON(),
      partners: program.Partners,
      zones: program.Zones,
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id, {
      include: [
        { model: Site },
        { model: Hub },
        { model: Zone },
        { model: Partner },
        { model: ProgramType },
      ]
    });
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.json({
      ...program.toJSON(),
      partners: program.Partners,
      zones: program.Zones,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    await program.update(req.body);
    if (req.body.partners) {
      await program.setPartners(req.body.partners);
    }
    if (req.body.zones) {
      await program.addZones(req.body.zones);
    }
    res.json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    await program.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};