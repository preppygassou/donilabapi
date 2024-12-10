const accountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false
      },
      providerAccountId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      access_token: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      expires_at: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      token_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: true
      },
      id_token: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      session_state: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'accounts'
    }
  );
  return Account;
};

module.exports = accountModel;