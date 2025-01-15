'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config);
}

// Import models
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    //const model = new (require(path.join(__dirname, file)))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Define relationships
const setupAssociations = () => {
  // User relationships
  db.User.hasMany(db.Post, { foreignKey: 'authorId' });
  db.Post.belongsTo(db.User, { as: 'author', foreignKey: 'authorId' });

  db.User.hasMany(db.Account);
  db.Account.belongsTo(db.User);

  db.User.hasOne(db.TwoFactorConfirmation);
  db.TwoFactorConfirmation.belongsTo(db.User);

  db.User.hasOne(db.Team);
  db.Team.belongsTo(db.User);

  db.User.hasMany(db.Booking);
  db.Booking.belongsTo(db.User);

  db.User.hasMany(db.Notification);
  db.Notification.belongsTo(db.User);

  // Site relationships
  db.Site.hasMany(db.Hub);
  db.Hub.belongsTo(db.Site);

  db.Site.hasMany(db.Post);
  db.Post.belongsTo(db.Site);

  db.Site.hasMany(db.Program);
  db.Program.belongsTo(db.Site);

  db.Site.hasMany(db.Report);
  db.Report.belongsTo(db.Site);

  db.Site.hasMany(db.Team);
  db.Team.belongsTo(db.Site);

  db.Site.hasMany(db.Event, { foreignKey: 'siteId' });
  db.Event.belongsTo(db.Site, { foreignKey: 'siteId' });

  db.Site.hasMany(db.SiteSidebarOption);
  db.SiteSidebarOption.belongsTo(db.Site);

  db.Site.hasMany(db.Invitation, { as: 'SiteInvitations' });
  db.Invitation.belongsTo(db.Site);

  db.Site.hasMany(db.Notification);
  db.Notification.belongsTo(db.Site);

  db.Site.hasMany(db.SitePermissions);
  db.SitePermissions.belongsTo(db.Site);

  // Hub relationships
  db.Hub.hasMany(db.Program);
  db.Program.belongsTo(db.Hub);

  db.Hub.hasMany(db.Team);
  db.Team.belongsTo(db.Hub);

  db.Hub.hasMany(db.Event, { foreignKey: 'hubId' });
  db.Event.belongsTo(db.Hub, { as: 'organizer', foreignKey: 'hubId' });

  db.Hub.hasMany(db.HubSidebarOption);
  db.HubSidebarOption.belongsTo(db.Hub);

  db.Hub.hasMany(db.Notification);
  db.Notification.belongsTo(db.Hub);

  db.Hub.hasMany(db.HubPermissions);
  db.HubPermissions.belongsTo(db.Hub);

  // Post relationships
  db.Post.belongsToMany(db.Category, { through: 'PostCategory' });
  db.Category.belongsToMany(db.Post, { through: 'PostCategory' });

  db.Post.belongsToMany(db.Tag, { through: 'PostTag' });
  db.Tag.belongsToMany(db.Post, { through: 'PostTag' });

  db.Post.hasMany(db.Comment);
  db.Comment.belongsTo(db.Post);

  // Event relationships
  db.Event.hasMany(db.Booking);
  db.Booking.belongsTo(db.Event);

  db.Event.belongsToMany(db.Category, { through: 'EventCategory' });
  db.Category.belongsToMany(db.Event, { through: 'EventCategory' });

  // Partner relationships
  db.Site.belongsToMany(db.Partner, { through: 'SitePartner' });
  db.Partner.belongsToMany(db.Site, { through: 'SitePartner' });

 

/* 
  // Partner relationships
  db.Site.belongsToMany(db.Partner, { through: 'SitePartner' });
  db.Partner.belongsToMany(db.Site, { through: 'SitePartner' });
 */
  db.Hub.belongsToMany(db.Partner, { through: 'HubPartner' });
  db.Partner.belongsToMany(db.Hub, { through: 'HubPartner' });

 /*  db.Hub.belongsToMany(db.Program, { through: 'HubProgram' });
  db.Program.belongsToMany(db.Hub, { through: 'HubProgram' });
 */
  db.Program.belongsToMany(db.Partner, { through: 'ProgramPartner' });
  db.Partner.belongsToMany(db.Program, { through: 'ProgramPartner' });

  // Add relationship between Program and ProgramType
  db.Program.belongsTo(db.ProgramType);
  db.ProgramType.hasMany(db.Program);

  // Add Program-Zone many-to-many relationship
  db.Program.belongsToMany(db.Zone, { through: "ProgramZone" });
  db.Zone.belongsToMany(db.Program, { through: "ProgramZone" });

   // Site/Company relationships
   db.Company.belongsTo(db.Site);
   db.Site.hasMany(db.Company);
 
   // Hub/Company relationships
   db.Company.belongsTo(db.Hub);
   db.Hub.hasMany(db.Company);

  // Define the many-to-many relationship between Program and Company with Edition
db.Program.belongsToMany(db.Company, { 
  through: "ProgramBeneficiary",  // Join table
});

db.Company.belongsToMany(db.Program, { 
  through: "ProgramBeneficiary", 
});

db.Program.belongsToMany(db.Edition, { 
  through: "ProgramEdition",  // Join table
});

db.Edition.belongsToMany(db.Program, { 
  through: "ProgramEdition",     // Foreign key for Program
});

  // Define the relationship between ProgramCompany and Edition
  /* db.ProgramCompany.belongsTo(db.Edition, { 
    foreignKey: 'editionId',     // Foreign key for Edition in ProgramCompany
  });
  db.Edition.hasMany(db.ProgramCompany, { 
    foreignKey: 'editionId',     // Corresponding reference in Edition
  }); */

  // Permission relationships
  db.User.hasMany(db.SitePermissions, { foreignKey: 'email', sourceKey: 'email' });
  db.SitePermissions.belongsTo(db.User, { foreignKey: 'email', targetKey: 'email' });

  db.User.hasMany(db.HubPermissions, { foreignKey: 'email', sourceKey: 'email' });
  db.HubPermissions.belongsTo(db.User, { foreignKey: 'email', targetKey: 'email' });
};

// Initialize associations after all models are loaded
setupAssociations();

db.sequelize = sequelize;

module.exports = db;