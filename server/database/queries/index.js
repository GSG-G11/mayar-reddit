const { signupQuery } = require('./signupQuery');
const { checkEmail } = require('./checkEmail');
const { getPassword } = require('./getPassword'); 
const {getId} = require('./getId')
const { postPostsQuery } = require('./postPostsQuery')
module.exports = {
  signupQuery,
  checkEmail,
  getPassword,
  getId,
  postPostsQuery,
};
