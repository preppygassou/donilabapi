const zoneModel = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.JSON,
      allowNull: false,
      /* validate: {
        isValidName(value) {
          if (!value.fr || !value.en) {
            throw new Error('Name must have both French and English translations');
          }
        }
      } */
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
    /* hooks: {
      beforeValidate: (zone) => {
        if (typeof zone.name === 'string') {
          try {
            zone.name = JSON.parse(zone.name);
          } catch (error) {
            throw new Error('Invalid JSON for name');
          }
        }
      }
    } */
  });

  return Zone;
};

module.exports = zoneModel;