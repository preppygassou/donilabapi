const hubSidebarOptionModel = (sequelize, DataTypes) => {
  const HubSidebarOption = sequelize.define(
    'HubSidebarOption',
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
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        defaultValue: 'ACTIVE'
      },
      hubId: {
        type: DataTypes.STRING(36),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      /* indexes: [
        { fields: ['hubId'] }
      ], */
      tableName: 'hub_sidebar_options'
    }
  );

  return HubSidebarOption;
};

module.exports = hubSidebarOptionModel;