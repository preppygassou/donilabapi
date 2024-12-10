
const companyModel = (sequelize, DataTypes) => {
const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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