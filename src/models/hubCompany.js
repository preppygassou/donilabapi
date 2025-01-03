const hubCompanyModel = (sequelize, DataTypes) => {
  const HubCompany = sequelize.define(
    'HubCompany',
    {
      hubId: {
        type: DataTypes.STRING(36),
        primaryKey: true
      },
      companyId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'hub_companies'
    }
  );

  return HubCompany;
};

module.exports = hubCompanyModel;