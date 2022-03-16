const { homePage } = require('./handllePages');
const { handleSignup , getUserName , handleLogin , handleLogout } = require('./userControllers');
const { postPosts , getPosts , deletePosts , updatePosts , postVotes , getVotes} = require('./postsControllers');
const { pageNotPage, serverError } = require('./errors');

module.exports = {
  homePage,
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
  postVotes,
  getVotes,
};
