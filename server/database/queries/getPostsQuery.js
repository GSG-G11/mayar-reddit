const connections = require('../config/connections');

const getPostsQuery = () => connections.query('SELECT * FROM posts ORDER BY votes DESC');

module.exports = { getPostsQuery };