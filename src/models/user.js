const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      },
      emailVerified: {
        type: DataTypes.DATE,
        allowNull: true
      },
      image: {
        type: DataTypes.JSON,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      role: {
        type: DataTypes.ENUM(
          'SUPER_ADMIN',
          'ADMIN',
          'EDITOR',
          'USER',
          'SITE_ADMIN',
          'SITE_MANAGER',
          'SITE_MODERATOR',
          'SITE_EDITOR',
          'HUB_USER',
          'HUB_GUEST',
          'HUB_MANAGER',
          'HUB_MODERATOR',
          'HUB_EDITOR'
        ),
        defaultValue: 'USER'
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        defaultValue: 'ACTIVE'
      },
      isTwoFactorEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'users'
    }
  );

  return User;
};

module.exports = userModel;