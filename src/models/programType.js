
const programTypeModel = (sequelize, DataTypes) => {
  const ProgramType = sequelize.define('ProgramType', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    description: {
      type: DataTypes.JSON,
      allowNull: true,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
  });

  return ProgramType;
};

module.exports = programTypeModel;