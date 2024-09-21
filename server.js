// server.js
const express = require('express');
const { Op } = require('sequelize');
const sequelize = require('./config');
const SensorReading = require('./models/SensorReading');

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para obtener datos entre dos fechas
app.get('/sensor-data', async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'Las fechas de inicio y fin son requeridas.' });
    }

    try {
        const readings = await SensorReading.findAll({
            where: {
                timestamp: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
        });
        res.json(readings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida.');
        console.log(`Servidor corriendo en http://localhost:${port}`);
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
});
