
module.exports = (sequelize, DataTypes) => {
  const Edition = sequelize.define('Edition', {
    name: {
      type: DataTypes.JSON,
      allowNull: false
    },
  });

  return Edition;
};