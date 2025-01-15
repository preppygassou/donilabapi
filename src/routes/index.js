const express = require('express');
const router = express.Router();
const path = require('path');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const siteRoutes = require('./siteRoutes');
const hubRoutes = require('./hubRoutes');
const postRoutes = require('./postRoutes');
const categoryRoutes = require('./categoryRoutes');
const tagRoutes = require('./tagRoutes');
const partnerRoutes = require('./partnerRoutes');
const eventRoutes = require('./eventRoutes');
const bookingRoutes = require('./bookingRoutes');
const commentRoutes = require('./commentRoutes');
const programRoutes = require('./programRoutes');
const reportRoutes = require('./reportRoutes');
const teamRoutes = require('./teamRoutes');
const sitePermissionsRoutes = require('./sitePermissionsRoutes');
const hubPermissionsRoutes = require('./hubPermissionsRoutes');
const siteSidebarOptionRoutes = require('./siteSidebarOptionRoutes');
const hubSidebarOptionRoutes = require('./hubSidebarOptionRoutes');
const invitationRoutes = require('./invitationRoutes');
const notificationRoutes = require('./notificationRoutes');
const sitePartnerRoutes = require('./sitePartnerRoutes');
const hubPartnerRoutes = require('./hubPartnerRoutes');
const siteDataRoutes = require('./siteDataRoutes');
const hubDataRoutes = require('./hubDataRoutes');
const programTypeRoutes = require('./programTypeRoutes');
const zoneRoutes = require('./zoneRoutes');
const mediaRoutes = require('./mediaRoutes');
const uploadRoutes = require('./uploadRoutes');
// Importar as novas rotas
const editionRoutes = require('./editionRoutes');
const companyRoutes = require('./companyRoutes');


// Auth routes
router.use('/auth', authRoutes);

// Protected routes
const auth = require('../middleware/auth');
router.use('/users', auth, userRoutes);
router.use('/sites', /* auth,  */siteRoutes);
router.use('/hubs', /* auth,  */hubRoutes);
router.use('/posts', /* auth, */ postRoutes);
router.use('/categories', auth, categoryRoutes);
router.use('/tags', auth, tagRoutes);
router.use('/partners', auth, partnerRoutes);
router.use('/events', auth, eventRoutes);
router.use('/bookings', auth, bookingRoutes);
router.use('/comments', auth, commentRoutes);
router.use('/programs', /* auth, */ programRoutes);
router.use('/program-types', programTypeRoutes);
router.use('/zones', zoneRoutes);
router.use('/reports', auth, reportRoutes);
router.use('/teams', auth, teamRoutes);
router.use('/site-permissions', auth, sitePermissionsRoutes);
router.use('/hub-permissions', auth, hubPermissionsRoutes);
router.use('/site-sidebar-options', auth, siteSidebarOptionRoutes);
router.use('/hub-sidebar-options', auth, hubSidebarOptionRoutes);
router.use('/invitations', auth, invitationRoutes);
router.use('/notifications', auth, notificationRoutes);
router.use('/site-partners', auth, sitePartnerRoutes);
router.use('/hub-partners', auth, hubPartnerRoutes);
router.use('/site-data', siteDataRoutes);
router.use('/hub-data', hubDataRoutes);
router.use('/upload', uploadRoutes);
router.use('/media', mediaRoutes);
// Usar as novas rotas
router.use('/editions', editionRoutes);
router.use('/companies', companyRoutes);
// Static files
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));
//router.use('/uploads', express.static(path.join(__dirname, '../uploads')));



module.exports = router;