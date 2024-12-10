
const programZoneModel = (sequelize, DataTypes) => {
  const ProgramZone = sequelize.define('ProgramZone', {
    programId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    zoneId: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return ProgramZone;
};

module.exports = programZoneModel;