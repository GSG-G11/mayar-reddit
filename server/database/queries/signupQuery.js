const connections = require('../config/connections');

const signupQuery = ({email, name,  password }) => connections.query('INSERT INTO users (email, name ,   password) VALUES ($1,$2,$3)', [email,name,  password]);
module.exports = { signupQuery };
