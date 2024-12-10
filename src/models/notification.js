const notificationModel = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'Notification',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      notification: {
        type: DataTypes.STRING,
        allowNull: false
      },
      siteId: {
        type: DataTypes.STRING(36),
        allowNull: false
      },
      hubId: {
        type: DataTypes.STRING(36),
        allowNull: true
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      /* indexes: [
        { fields: ['siteId'] },
        { fields: ['hubId'] },
        { fields: ['userId'] }
      ], */
      tableName: 'notifications'
    }
  );

  return Notification;
};

module.exports = notificationModel;