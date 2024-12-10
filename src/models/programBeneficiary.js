
const programBeneficiaryModel = (sequelize, DataTypes) => {
  const ProgramBeneficiary = sequelize.define('ProgramBeneficiary', {
    programId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    editionId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return ProgramBeneficiary;
};

module.exports = programBeneficiaryModel;