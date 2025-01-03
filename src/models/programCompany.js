const programCompanyModel = (sequelize, DataTypes) => {
  const ProgramCompany = sequelize.define(
    'ProgramCompany',
    {
      programId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, // Ensure the field is not null
      },
      companyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      editionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true, // Adds createdAt and updatedAt
    }
  );


  return ProgramCompany;
};

module.exports = programCompanyModel;
