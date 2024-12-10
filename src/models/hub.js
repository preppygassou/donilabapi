const hubModel = (sequelize, DataTypes) => {
  const Hub = sequelize.define(
    'Hub',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      logo: {
        type: DataTypes.JSON,
        allowNull: false
      },
      featured_media: {
        type: DataTypes.JSON,
        allowNull: true
      },
      galerie: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
      },
      summary: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
      },
      specificities: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
      },
      services: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
      },
      data: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {}
      },
      slug: {
        type: DataTypes.JSON,
        unique: true,
        allowNull: true,
        defaultValue: { en: '', fr: '' }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      additionalPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
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
      tableName: 'hubs'
    }
  );

  return Hub;
};

module.exports = hubModel;