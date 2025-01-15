require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const errorHandler = require('../middleware/error');
const multiLangMiddleware = require('../middleware/multilang');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(multiLangMiddleware);


// Routes
app.use('/', routes);

// Error handling
app.use(errorHandler);

module.exports = app;
