
const programBeneficiaryModel = (sequelize, DataTypes) => {
  const ProgramBeneficiary = sequelize.define('ProgramBeneficiary', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    programId: {
      type: DataTypes.INTEGER,
    },
    editions: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    companyId: {
      type: DataTypes.INTEGER,
    }
    }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
    });

  return ProgramBeneficiary;
};

module.exports = programBeneficiaryModel;