
module.exports = (sequelize, DataTypes) => {
  const Edition = sequelize.define('Edition', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  return Edition;
};