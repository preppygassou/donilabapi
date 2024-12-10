
const sitePermissionsModel = (sequelize, DataTypes) => {
  const SitePermissions = sequelize.define('SitePermissions', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    siteId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    access: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
    /* indexes: [
      { fields: ['siteId'] },
      { fields: ['email'] }
    ] */
  });

  return SitePermissions;
};

module.exports = sitePermissionsModel;