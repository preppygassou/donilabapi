const express = require('express');
const cors = require('cors');
//const sequelize = require('./config/database');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const siteRoutes = require('./routes/siteRoutes');
const hubRoutes = require('./routes/hubRoutes');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const partnerRoutes = require('./routes/partnerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const commentRoutes = require('./routes/commentRoutes');
const sitePermissionsRoutes = require('./routes/sitePermissionsRoutes');
const hubPermissionsRoutes = require('./routes/hubPermissionsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const programRoutes = require('./routes/programRoutes');
const reportRoutes = require('./routes/reportRoutes');
const teamRoutes = require('./routes/teamRoutes');
const tagRoutes = require('./routes/tagRoutes');
const siteSidebarOptionRoutes = require('./routes/siteSidebarOptionRoutes');
const hubSidebarOptionRoutes = require('./routes/hubSidebarOptionRoutes');
const invitationRoutes = require('./routes/invitationRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/sites', siteRoutes);
app.use('/api/hubs', hubRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/site-permissions', sitePermissionsRoutes);
app.use('/api/hub-permissions', hubPermissionsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/site-sidebar-options', siteSidebarOptionRoutes);
app.use('/api/hub-sidebar-options', hubSidebarOptionRoutes);
app.use('/api/invitations', invitationRoutes);

// Database sync and server start
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();