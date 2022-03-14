const connections = require('../config/connections');

const updatePostsQuery= ({id , votes}) => connections.query('UPDATE posts SET votes = $1 WHERE id = $2' , [votes , id])
module.exports = { updatePostsQuery };