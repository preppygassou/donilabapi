
const programEditionModel = (sequelize, DataTypes) => {
  const ProgramEdition = sequelize.define('ProgramEdition', {
    programId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    editionId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return ProgramEdition;
};

module.exports = programEditionModel;