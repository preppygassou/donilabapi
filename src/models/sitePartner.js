
const sitePartnerModel = (sequelize, DataTypes) => {
  const SitePartner = sequelize.define('SitePartner', {
    siteId: {
      type: DataTypes.STRING(36),
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

  return SitePartner;
};

module.exports = sitePartnerModel;