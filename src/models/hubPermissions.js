const hubPermissionsModel = (sequelize, DataTypes) => {
  const HubPermissions = sequelize.define(
    'HubPermissions',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hubId: {
        type: DataTypes.STRING(36),
        allowNull: false
      },
      access: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'hub_permissions'
    }
  );

  return HubPermissions;
};

module.exports = hubPermissionsModel;