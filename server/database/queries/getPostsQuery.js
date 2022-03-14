const connections = require('../config/connections');

const getPostsQuery = () => connections.query('SELECT * FROM posts');

module.exports = { getPostsQuery };