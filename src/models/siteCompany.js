
const siteCompanyModel = (sequelize, DataTypes) => {
  const SiteCompany = sequelize.define('SiteCompany', {
    siteId: {
      type: DataTypes.STRING(36),
      primaryKey: true
    },
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
    tableName: 'site_companies'
  });

  return SiteCompany;
};

module.exports = siteCompanyModel;