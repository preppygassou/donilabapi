const twoFactorConfirmationModel = (sequelize, DataTypes) => {
  const TwoFactorConfirmation = sequelize.define(
    'TwoFactorConfirmation',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        unique: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'two_factor_confirmations'
    }
  );

  return TwoFactorConfirmation;
};

module.exports = twoFactorConfirmationModel;