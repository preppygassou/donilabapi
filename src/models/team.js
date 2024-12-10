const teamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      profile: {
        type: DataTypes.JSON,
        allowNull: false
      },
      poste: {
        type: DataTypes.JSON,
        allowNull: false
      },
      siteId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hubId: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      tableName: 'teams'
    }
  );

  return Team;
};

module.exports = teamModel;
