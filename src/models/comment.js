const commentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'approved'
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      parent: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      author_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author_url: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'comments'
    }
  );

  return Comment;
};

module.exports = commentModel;