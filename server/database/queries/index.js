const { signupQuery } = require('./signupQuery');
const { checkEmail } = require('./checkEmail');
const { getPassword } = require('./getPassword'); 
const {getId} = require('./getId');
const { postPostsQuery } = require('./postPostsQuery');
const { getPostsQuery } = require('./getPostsQuery');
const { checkPost, checkPostWithId} = require('./checkPost');
const { daletePostQuery } = require('./daletePostQuery');
const { updatePostsQuery } = require('./updatePostsQuery');
const { getUserNameQuery } = require('./getUserNameQuery');
const { getVotesQuery } = require('./getVotesQuery');
const { addVotesQuery , removeVotesQuery , checkvote} = require('./addVotesQuery');
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
  updatePostsQuery,
  getUserNameQuery,
  addVotesQuery,
  removeVotesQuery,
  checkvote,
  getVotesQuery,
};
