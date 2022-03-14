const { signupQuery } = require('./signupQuery');
const { checkEmail } = require('./checkEmail');
const { getPassword } = require('./getPassword'); 
const {getId} = require('./getId')
module.exports = {
  signupQuery,
  checkEmail,
  getPassword,
  getId,
};
