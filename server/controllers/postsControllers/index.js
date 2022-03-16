const { postPosts } = require('./postPosts');
const { getPosts } = require('./getPosts');
const { deletePosts } = require('./dalatePosts');
const { updatePosts } = require('./updatePosts');
const { postVotes } = require('./postVotes');
const { getVotes } = require('./getVotes');
module.exports = { postPosts, getPosts, deletePosts , updatePosts , postVotes, getVotes };
