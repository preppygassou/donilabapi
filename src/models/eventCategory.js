
const EventCategoryModel = (sequelize, DataTypes) => {
  const EventCategory = sequelize.define('EventCategory', {
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return EventCategory;
};

module.exports = EventCategoryModel;