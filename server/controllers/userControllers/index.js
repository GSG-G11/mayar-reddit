const { handleSignup } = require('./handleSignup');
const { handleLogin } = require('./handleLogin');
const {handleLogout} = require('./handleLogout');
const { getUserName  } = require('./getUserName')
module.exports = {
    handleSignup,
    handleLogin,
    handleLogout,
    getUserName,
  };