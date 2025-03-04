const AsteriskAMI = require('asterisk-ami');

const connectAsterisk = () => {
    const ami = new AsteriskAMI({
        host: process.env.ASTERISK_HOST || "echolink-asterisk",
        port: process.env.ASTERISK_PORT || 5038,
        username: process.env.ASTERISK_USER || "admin",
        secret: process.env.ASTERISK_PASSWORD || "secret"
    });

    ami.on('connect', () => console.log('🔗 Connected to Asterisk'));
    ami.on('error', err => console.error('❌ Asterisk Error:', err));
    ami.on('event', event => console.log('📞 Asterisk Event:', event));
};

module.exports = { connectAsterisk };
