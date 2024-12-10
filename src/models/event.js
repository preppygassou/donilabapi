const eventModel = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      featured_media: {
        type: DataTypes.JSON,
        allowNull: true
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      startDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      endDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isFree: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      siteId: {
        type: DataTypes.STRING(36),
        allowNull: false
      },
      /* categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }, */
      hubId: {
        type: DataTypes.STRING(36),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'events'
    }
  );

  return Event;
};

module.exports = eventModel;