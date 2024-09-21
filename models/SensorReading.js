// models/SensorReading.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const SensorReading = sequelize.define('sensor_data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    temperature: {
        type: DataTypes.FLOAT,
    },
    humidity: {
        type: DataTypes.FLOAT,
    },
    motion_detected: {
        type: DataTypes.FLOAT,
    },
    timestamp: {
        type: DataTypes.DATE,
    },
});

module.exports = SensorReading;
