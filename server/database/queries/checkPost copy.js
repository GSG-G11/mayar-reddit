const connections = require('../config/connections');

const checkPost = (id) => connections.query('SELECT 1 FROM posts WHERE id = ($1) LIMIT 1; ', [id]);
const checkPostWithId  = (id) => connections.query('SELECT user_id FROM posts WHERE id = ($1) ; ', [id]);

module.exports = { checkPost , checkPostWithId};