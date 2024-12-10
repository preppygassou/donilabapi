const siteSidebarOptionModel = (sequelize, DataTypes) => {
  const Status = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE'
  };

  const SiteSidebarOption = sequelize.define(
    'SiteSidebarOption',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: 'Menu'
      },
      link: {
        type: DataTypes.STRING,
        defaultValue: '#'
      },
      icon: {
        type: DataTypes.STRING,
        defaultValue: 'INFO'
      },
      status: {
        type: DataTypes.ENUM(...Object.values(Status)),
        defaultValue: 'ACTIVE'
      },
      siteId: {
        type: DataTypes.STRING(36),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      /* indexes: [
        { fields: ['siteId'] }
      ] */
    }
  );

  return SiteSidebarOption;
};

module.exports = siteSidebarOptionModel;