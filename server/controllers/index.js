const { homePage, loginPage, signupPage, profilePage } = require('./handllePages');
const { handleSignup } = require('./userControllers');
const { handleLogin } = require('./userControllers');
const {handleLogout} = require('./userControllers');

const { postPosts , getPosts , deletePosts , updatePosts} = require('./postsControllers');
const { pageNotPage, serverError } = require('./errors');
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
  postPosts,
  getPosts,
  deletePosts,
  updatePosts,
};
