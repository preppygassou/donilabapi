
const programPartnerModel = (sequelize, DataTypes) => {
  const ProgramPartner = sequelize.define('ProgramPartner', {
    programId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    partnerId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return ProgramPartner;
};

module.exports = programPartnerModel;