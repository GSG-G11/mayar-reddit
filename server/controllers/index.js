const {
  homePage, loginPage, signupPage, profilePage,
} = require('./handllePages');
const {
  handleSignup,
} = require('./handleSignup');
const {
  pageNotPage,serverError,
} = require('./errors');

module.exports = {
  homePage, loginPage, signupPage, profilePage, handleSignup,pageNotPage,serverError,
};
