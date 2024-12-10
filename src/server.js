const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const multiLangMiddleware = require('./middleware/multilang');
const routes = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(multiLangMiddleware);
    
    // Add security headers
    this.app.use((req, res, next) => {
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      next();
    });
  }

  routes() {
    this.app.use('/api', routes);

    // Error handling
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something went wrong!' });
    });

    // 404 handler
    this.app.use((req, res) => {
      res.status(404).json({ error: 'Not found' });
    });
  }

  async connectDB() {
    try {
      await sequelize.authenticate();
      console.log('Database connection established successfully');
      await sequelize.sync();
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1);
    }
  }

  async start() {
    try {
      await this.connectDB();
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (error) {
      console.error('Unable to start server:', error);
      process.exit(1);
    }
  }
}

module.exports = Server;