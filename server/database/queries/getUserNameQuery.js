const connections = require('../config/connections');

const getUserNameQuery  = (user_id) => connections.query('SELECT name FROM  users  WHERE id = $1;', [user_id]);

module.exports = { getUserNameQuery };