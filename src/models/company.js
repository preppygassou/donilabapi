
const companyModel = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo: {
            type: DataTypes.JSON,
            allowNull: true
          },
        hubId: {
            type: DataTypes.STRING(36),
            allowNull: true
        },
        siteId: {
            type: DataTypes.STRING(36),
            allowNull: true
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'companies'
    })

    return Company;
};

module.exports = companyModel;