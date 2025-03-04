const WebSocket = require('ws');

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', ws => {
        console.log('🔗 WebSocket connected');
        ws.send(JSON.stringify({ message: "Welcome to EchoLink WebSocket!" }));

        ws.on('message', data => {
            console.log('📩 Received:', data.toString());
        });

        ws.on('close', () => {
            console.log('❌ WebSocket disconnected');
        });
    });
};

module.exports = { setupWebSocket };
