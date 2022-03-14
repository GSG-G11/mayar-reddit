const { signupQuery } = require('./signupQuery');
const { checkEmail } = require('./checkEmail');
const { getPassword } = require('./getPassword'); 
const {getId} = require('./getId');
const { postPostsQuery } = require('./postPostsQuery');
const { getPostsQuery } = require('./getPostsQuery');
const { checkPost, checkPostWithId} = require('./checkPost');
const { daletePostQuery } = require('./daletePostQuery');

module.exports = {
  signupQuery,
  checkEmail,
  getPassword,
  getId,
  postPostsQuery,
  getPostsQuery,
  checkPost,
  checkPostWithId,
  daletePostQuery,
};
