const connections = require('../config/connections');

const getPostsQuery = () => connections.query('SELECT posts.votes , posts.content , posts.id ,posts.created_at  , users.name , posts.img FROM posts join users on(posts.user_id = users.id) ORDER BY votes DESC ; ');

module.exports = { getPostsQuery };