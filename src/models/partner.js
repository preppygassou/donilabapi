const partnerModel = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    'Partner',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      logo: {
        type: DataTypes.JSON,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'partners'
    }
  );

  return Partner;
};

module.exports = partnerModel;