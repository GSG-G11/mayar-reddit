const connections = require('../config/connections');

const signupQuery = ({email, name,  password }) => connections.query('INSERT INTO users (email, name ,   password) VALUES ($1,$2,$3) RETURNING *', [email,name,  password]);
module.exports = { signupQuery };
