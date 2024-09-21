// models/SensorReading.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const SensorReading = sequelize.define('SensorReading', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    temperature: {  // Cambia esto al nombre correcto de tu columna
        type: DataTypes.FLOAT,
    },
    timestamp: {
        type: DataTypes.DATE,
        field: 'timestamp',  // Asegúrate de usar el nombre correcto de la columna
    },
}, {
    timestamps: false, // Esto debería desactivar los timestamps
    tableName: 'sensor_data', // Asegúrate de que el nombre de la tabla sea correcto
});

module.exports = SensorReading;
