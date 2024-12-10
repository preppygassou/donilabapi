const siteModel = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    'Site',
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      domaine: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      slogan: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: { en: '', fr: '' }
      },
      logo: {
        type: DataTypes.JSON,
        allowNull: false
      },
      featured_media: {
        type: DataTypes.JSON,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      additionalPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data: {
        type: DataTypes.JSON,
        allowNull: false,
        /* validate: {
          isValidData(value) {
            // Validate contact_page
            if (!value.contact_page || !value.contact_page.title || !value.contact_page.description) {
              throw new Error('Contact page data is incomplete');
            }
    
            // Validate about_page
            if (!value.about_page || !value.about_page.title || !value.about_page.description) {
              throw new Error('About page data is incomplete');
            }
    
            // Validate header
            if (!value.header || !value.header.logo || !value.header.title || !value.header.menu) {
              throw new Error('Header data is incomplete');
            }
    
            // Validate footer
            if (!value.footer || !value.footer.logo || !value.footer.title || !value.footer.menu) {
              throw new Error('Footer data is incomplete');
            }
          }
        }, */
        defaultValue: {
          contact_page: {
            title: { fr: '', en: '' },
            description: { fr: '', en: '' },
            contact: [],
            social: []
          },
          about_page: {
            title: { fr: '', en: '' },
            description: { fr: '', en: '' },
            excerpt: { fr: '', en: '' },
            about: []
          },
          header: {
            logo: { url: '' },
            title: { fr: '', en: '' },
            menu: []
          },
          footer: {
            logo: { url: '' },
            title: { fr: '', en: '' },
            about: { fr: '', en: '' },
            menu: [],
            information: []
          }
        }
      },
      expertise: {
        type: DataTypes.JSON,
        allowNull: false,
        /* validate: {
          isValidExpertise(value) {
            if (!Array.isArray(value)) {
              throw new Error('Expertise must be an array');
            }
            value.forEach(item => {
              if (!item.id || !item.icon || !item.title || !item.description) {
                throw new Error('Each expertise item must have id, icon, title, and description');
              }
            });
          }
        }, */
        defaultValue: []
      },
      services: {
        type: DataTypes.JSON,
        allowNull: false,
        /* validate: {
          isValidServices(value) {
            if (!Array.isArray(value)) {
              throw new Error('Services must be an array');
            }
            value.forEach(item => {
              if (!item.id || !item.icon || !item.title || !item.description) {
                throw new Error('Each service item must have id, icon, title, and description');
              }
            });
          }
        }, */
        defaultValue: []
      },
      impact: {
        type: DataTypes.JSON,
        allowNull: false,
        /* validate: {
          isValidImpact(value) {
            if (!Array.isArray(value)) {
              throw new Error('Impact must be an array');
            }
            value.forEach(item => {
              if (!item.id || !item.icon || !item.total || !item.description) {
                throw new Error('Each impact item must have id, icon, total, and description');
              }
            });
          }
        }, */
        defaultValue: []
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        defaultValue: 'ACTIVE'
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true,
      /* hooks: {
        beforeValidate: (site) => {
          // Ensure JSON fields are objects if they're strings
          ['name', 'description', 'slogan', 'logo', 'data', 'expertise', 'services', 'impact'].forEach(field => {
            if (typeof site[field] === 'string') {
              try {
                site[field] = JSON.parse(site[field]);
              } catch (error) {
                throw new Error(`Invalid JSON for ${field}`);
              }
            }
          });
        }
      }, */
      tableName: 'sites'
    }
  );

  return Site;
};

module.exports = siteModel;