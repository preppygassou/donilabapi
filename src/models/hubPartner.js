const hubPartnerModel = (sequelize, DataTypes) => {
  const HubPartner = sequelize.define(
    'HubPartner',
    {
      hubId: {
        type: DataTypes.STRING(36),
        primaryKey: true
      },
      partnerId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'hub_partners'
    }
  );

  return HubPartner;
};

module.exports = hubPartnerModel;