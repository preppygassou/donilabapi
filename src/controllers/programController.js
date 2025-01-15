const { Program, Site,Zone, Hub ,Partner,ProgramType,ProgramBeneficiary,Company,Edition} = require('../models');


exports.createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    if (req.body.partners) {
      await program.setPartners(req.body.partners);
    }
    if (req.body.editions) {
      await program.setEditions(req.body.editions);
    }
    if (req.body.zones) {
      await program.setZones(req.body.zones);
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
        { model: Edition },
        { model: Company },
        { model: Hub },
        { model: Zone },
        { model: ProgramType }
      ]
    });
    res.json(programs.map(program => ({
      ...program.toJSON(),
      partners: program.Partners,
      zones: program.Zones,
      editions: program.Editions,
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.filterProgramsBySlugLang = async (req, res) => {
  try {
    const { slug, lang } = req.params;
    const hubs = await Program.findAll({
      include: [
        { model: Site },
        { model: Partner },
        { model: Company },
        { model: Edition },
        { model: Hub },
        { model: Zone },
        { model: ProgramType }
      ]
    });

    const filteredHubs = hubs.filter(hub => hub.slug[lang] === slug);
   
    /* res.json(filteredHubs[0]); */
    res.json({
      ...filteredHubs[0].toJSON(),
      partners: filteredHubs[0].Partners,
      zones: filteredHubs[0].Zones,
      editions: filteredHubs[0].Editions,
      beneficiaries: filteredHubs[0].Companies.map(company => ({
      ...company.toJSON(),
      editions: company.ProgramBeneficiary.editions
      })),
    });
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
        { model: Edition },
        { model: Zone },
        { model: Partner },
        { model: Company },
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
      editions: program.Editions,
      beneficiaries: program.Companies.map(company => ({
      ...company.toJSON(),
      editions: company.ProgramBeneficiary.editions
      })),
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
    if (req.body.editions) {
      await program.setEditions(req.body.editions);
    }
    if (req.body.zones) {
      await program.setZones(req.body.zones);
    }
    res.json(program);
  } catch (error) {
   
    res.status(400).json({ error: error.message });
  }
};
exports.updateProgramBeneficiary = async (req, res) => {
  try {
    const beneficiaries = Array.isArray(req.body) ? req.body : [req.body];
    const updatedBeneficiaries = [];
    const programId = req.params.id;

   
    if (!programId) {
      return res.status(400).json({ error: 'Program ID is required' });
    }

    const existingBeneficiaries = await ProgramBeneficiary.findAll({
      where: { programId },
    });

    if (beneficiaries.length === 0) {
      await ProgramBeneficiary.destroy({ where: { programId } });
      return res.status(200).json({ message: 'All beneficiaries deleted' });
    }

    const existingCompanyIds = existingBeneficiaries.map(b => b.companyId);
    const newCompanyIds = beneficiaries.map(b => b.companyId);

    // Delete beneficiaries not in the new list
    const beneficiariesToDelete = existingBeneficiaries.filter(b => !newCompanyIds.includes(b.companyId));
    for (const beneficiary of beneficiariesToDelete) {
      await beneficiary.destroy();
    }

    // Update or create beneficiaries
    for (const beneficiary of beneficiaries) {
      let programBeneficiary = await ProgramBeneficiary.findOne({
        where: { programId, companyId: beneficiary.companyId }
      });

      if (programBeneficiary) {
        await programBeneficiary.update(beneficiary);
      } else {
        
        programBeneficiary = await ProgramBeneficiary.create(beneficiary);
      }
      updatedBeneficiaries.push(programBeneficiary);
    }

    res.status(200).json(updatedBeneficiaries);
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