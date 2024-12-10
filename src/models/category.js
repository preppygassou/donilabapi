const categoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
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
      tableName: 'categories'
    }
  );

  return Category;
};

module.exports = categoryModel;