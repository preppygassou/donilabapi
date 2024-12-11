const { sequelize } = require('./src/models');

// Server
const app = require('./src/app');

// Start server
const PORT = process.env.PORT || 3334;

sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
	})
	.catch((error) => {
		console.error('Unable to sync models with the database:', error);
	});

