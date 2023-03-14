const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EmailCode = sequelize.define('emailCode', {
    code: {
        type: DataTypes.TEXT,
        allowNull: false
    } /*,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }*/
    // Relación con users
});

module.exports = EmailCode;