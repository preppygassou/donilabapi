const mediaModel = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    'Media',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hubId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      siteId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'media',
    }
  );

  Media.associate = (models) => {
    Media.belongsTo(models.Hub, {
      foreignKey: 'hubId',
      /* onDelete: 'CASCADE', */
    });
    Media.belongsTo(models.Site, {
      foreignKey: 'siteId',
     /*  onDelete: 'CASCADE', */
    });
  };

  return Media;
};

module.exports = mediaModel;