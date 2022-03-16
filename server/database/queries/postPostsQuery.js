const  connections = require('../config/connections');

const postPostsQuery = ({votes , content , user_id}) => connections.query('INSERT INTO posts (votes , content , user_id) VALUES ($1 , $2 ,$3 ) RETURNING *' , [votes , content , user_id])

module.exports = {postPostsQuery};