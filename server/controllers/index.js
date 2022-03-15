const { homePage, loginPage, signupPage, profilePage } = require('./handllePages');
const { handleSignup , getUserName , handleLogin , handleLogout } = require('./userControllers');
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
  getUserName,
};
