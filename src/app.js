require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const errorHandler = require('./middleware/error');
const multiLangMiddleware = require('./middleware/multilang');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(multiLangMiddleware);

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/', routes);

// Error handling
app.use(errorHandler);

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

