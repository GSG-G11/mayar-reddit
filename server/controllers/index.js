const { homePage, loginPage, signupPage, profilePage } = require('./handllePages');
const { handleSignup } = require('./handleSignup');
const { pageNotPage, serverError } = require('./errors');
const { handleLogin } = require('./handleLogin');
const {handleLogout} = require('./handleLogout');
module.exports = {
  homePage,
  loginPage,
  signupPage,
  profilePage,
  handleSignup,
  pageNotPage,
  serverError,
  handleLogin,
  handleLogout,
};
