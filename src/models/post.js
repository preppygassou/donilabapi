const postModel = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
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
      content: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      excerpt: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: { en: '', fr: '' }
      },
      featured_media: {
        type: DataTypes.JSON,
        allowNull: true
      },
      slug: {
        type: DataTypes.JSON,
        unique: true,
        allowNull: true,
        defaultValue: { en: '', fr: '' }
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'draft'
      },
      siteId: {
        type: DataTypes.STRING(36),
        allowNull: false
      },
      authorId: {
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
        { fields: ['authorId'] }
      ], */
      tableName: 'posts'
    }
  );

  return Post;
};

module.exports = postModel;