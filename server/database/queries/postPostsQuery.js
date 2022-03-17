const  connections = require('../config/connections');

const postPostsQuery = ({votes , content, img , user_id}) => connections.query('INSERT INTO posts (votes , content, img , user_id) VALUES ($1 , $2 ,$3, $4 ) RETURNING *' , [votes , content , img, user_id])

module.exports = {postPostsQuery};