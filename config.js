// config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sensor_data', 'dbadmin', 'dbadmin2024', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
