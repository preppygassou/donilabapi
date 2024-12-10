const passwordResetTokenModel = (sequelize, DataTypes) => {
  const PasswordResetToken = sequelize.define(
    'PasswordResetToken',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['email', 'token']
        }
      ],
      tableName: 'password_reset_tokens'
    }
  );

  return PasswordResetToken;
};

module.exports = passwordResetTokenModel;