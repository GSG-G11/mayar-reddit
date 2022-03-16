const connections = require('../config/connections');

const checkvote = ({user_id , id }) =>connections.query('SELECT isvote FROM user_post  WHERE  user_id = $1 AND  post_id = $2', [user_id , id ]);
const addVotesQuery = ({user_id , id , isvote}) => connections.query('INSERT INTO user_post ( user_id , post_id , isvote) VALUES ($1 , $2 , $3)', [user_id , id , isvote]);
const removeVotesQuery = ({user_id , id , isvote}) => connections.query('UPDATE user_post SET isvote = $3 WHERE user_id = $1 AND post_id = $2', [user_id , id , isvote]);

module.exports = { addVotesQuery , removeVotesQuery, checkvote };
