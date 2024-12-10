const ProgramStatus = {
  FINISHED: 'FINISHED',
  'IN PROGRESS': 'IN PROGRESS',
  OPEN: 'OPEN',
  'RE OPEN': 'REOPEN',
  CLOSE: 'CLOSE',
};
const programModel = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    logo: {
      type: DataTypes.JSON,
      allowNull: false
    },
    title: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: { en: '', fr: '' }
    },
    status: {
      type: DataTypes.ENUM(...Object.values(ProgramStatus)),
      defaultValue: 'IN PROGRESS'
    },
    duration: {
      type: DataTypes.JSON,
      allowNull: true,
     /*  validate: {
        isValidDuration(value) {
          if (!value.value || !value.unit) {
            throw new Error('Duration must have both value and unit');
          }
          if (!['days', 'weeks', 'months', 'years'].includes(value.unit)) {
            throw new Error('Invalid duration unit');
          }
          if (typeof value.value !== 'number' || value.value <= 0) {
            throw new Error('Duration value must be a positive number');
          }
        }
      }, */
      /* defaultValue: {
        value: 1,
        unit: 'months'
      } */
    },
    galerie: {
      type: DataTypes.JSON,
      allowNull: true,
      /* validate: {
        isValidGalerie(value) {
          if (!Array.isArray(value)) {
            throw new Error('Galerie must be an array');
          }
          value.forEach(item => {
            if (!item.url) {
              throw new Error('Each gallery item must have a URL');
            }
          });
        }
      }, */
      defaultValue: []
    },
    objectif: {
      type: DataTypes.JSON,
      allowNull: false,
      /* validate: {
        isValidObjectif(value) {
          if (!value.global || !Array.isArray(value.global)) {
            throw new Error('Global objectives must be an array');
          }
          if (!value.specifiques || !Array.isArray(value.specifiques)) {
            throw new Error('Specific objectives must be an array');
          }
          
          // Validate global objectives
          value.global.forEach(obj => {
            if (!obj.fr || !obj.en) {
              throw new Error('Each global objective must have French and English translations');
            }
          });
          
          // Validate specific objectives
          value.specifiques.forEach(obj => {
            if (!obj.fr || !obj.en) {
              throw new Error('Each specific objective must have French and English translations');
            }
          });
        }
      }, */
      defaultValue: {
        global: [],
        specifiques: []
      }
    },
    targets: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    goals: {
      type: DataTypes.JSON,
      allowNull: false,
      /* validate: {
        isValidGoals(value) {
          if (!Array.isArray(value)) {
            throw new Error('Goals must be an array');
          }
          value.forEach(goal => {
            if (!goal.fr || !goal.en) {
              throw new Error('Each goal must have French and English translations');
            }
            if (!goal.status || !['pending', 'in_progress', 'completed'].includes(goal.status)) {
              throw new Error('Each goal must have a valid status');
            }
          });
        }
      }, */
      defaultValue: []
    },
    activities: {
      type: DataTypes.JSON,
      allowNull: false,
      /* validate: {
        isValidActivities(value) {
          if (!Array.isArray(value)) {
            throw new Error('Activities must be an array');
          }
          value.forEach(activity => {
            if (!activity.fr || !activity.en) {
              throw new Error('Each activity must have French and English translations');
            }
            if (!activity.startDate || !activity.endDate) {
              throw new Error('Each activity must have start and end dates');
            }
            if (!activity.status || !['planned', 'in_progress', 'completed', 'cancelled'].includes(activity.status)) {
              throw new Error('Each activity must have a valid status');
            }
          });
        }
      }, */
      defaultValue: []
    },
    results: {
      type: DataTypes.JSON,
      allowNull: false,
      /* validate: {
        isValidResults(value) {
          if (!Array.isArray(value)) {
            throw new Error('Results must be an array');
          }
          value.forEach(result => {
            if (!result.fr || !result.en) {
              throw new Error('Each result must have French and English translations');
            }
            if (!result.indicator || !result.indicator.fr || !result.indicator.en) {
              throw new Error('Each result must have an indicator with French and English translations');
            }
            if (typeof result.achieved !== 'number' || result.achieved < 0) {
              throw new Error('Each result must have a non-negative numeric achieved value');
            }
            if (typeof result.target !== 'number' || result.target < 0) {
              throw new Error('Each result must have a non-negative numeric target value');
            }
          });
        }
      }, */
      defaultValue: []
    },
    programTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
      /* references: {
        model: 'ProgramTypes',
        key: 'id'
      } */
    },
    description: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: { en: '', fr: '' }
    },
    slug: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: { en: '', fr: '' }
    },
    siteId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hubId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  });

  return Program;
};

module.exports = programModel;