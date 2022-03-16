const connections = require('../config/connections');

const getVotesQuery = ({isvote , id}) =>connections.query('SELECT * FROM user_post WHERE isvote = $1 AND post_id = $2', [isvote , id ]);

module.exports = { getVotesQuery };