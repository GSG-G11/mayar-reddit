const connections = require('../config/connections');

const daletePostQuery  = (id) => connections.query('DELETE FROM posts WHERE id = ($1) ; ', [id]);

module.exports = { daletePostQuery };