require('dotenv').config();
const express = require('express');
const { connectAsterisk } = require('./asterisk');
const { setupWebSocket } = require('./websocket');

const app = express();
const PORT = process.env.PORT || 3000;

// API-Endpunkt
app.get('/', (req, res) => {
    res.send({ message: 'EchoLink Backend is running!' });
});

// Starte Asterisk-Verbindung
connectAsterisk();

// Starte WebSockets
const server = app.listen(PORT, () => {
    console.log(`✅ Backend is running on http://localhost:${PORT}`);
});
setupWebSocket(server);
