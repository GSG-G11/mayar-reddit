const connections = require('../config/connections');

const getUserNameQuery  = (user_id) => connections.query('SELECT name FROM posts join users on(posts.user_id = users.id) WHERE posts.user_id = $1;', [user_id]);

module.exports = { getUserNameQuery };