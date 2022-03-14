const connections = require('../config/connections');

const getId = (email) => connections.query('SELECT id FROM users WHERE email = $1', [email]);

module.exports = { getId};