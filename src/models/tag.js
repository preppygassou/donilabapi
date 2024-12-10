const tagModel = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
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
      slug: {
        type: DataTypes.JSON,
        unique: true,
        allowNull: true,
        defaultValue: { en: '', fr: '' }
      },
      description: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: { en: '', fr: '' }
      },
      parent: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'tags'
    }
  );

  return Tag;
};

module.exports = tagModel;