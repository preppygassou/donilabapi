const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mariadb',
  dialectOptions: {
    timezone: '+00:00',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;