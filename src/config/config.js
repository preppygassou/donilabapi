require('dotenv').config();

const config = {
  dialect: 'mariadb',
  username: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT,
  /* dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timezone: '+00:00'
  }, */
  define: {
   /*  charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci', */
    timestamps: true,
    underscored: true,
  }
}

module.exports = {
	development: config,
	test: config,
	production: config
};