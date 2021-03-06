
const { checkPost, checkPostWithId, daletePostQuery } = require('../../database/queries');
const { customizedError } = require('../../utils');

const deletePosts = (req, res, next) => {
  const { user_id } = req
  const { id } = req.body;
    checkPost(id)
    .then((data) => data.rows[0]['?column?'])
    .then((result) => {
      if (result) {
        return checkPostWithId(id);
      } else {
        next(customizedError('The post is not available', 400));
      }
    })
    .then((data) => {
      if (data.rows[0].user_id === parseInt(user_id)) {
        daletePostQuery(id);
      } else {
        throw customizedError('This post is not for this user', 400);
      }
    })
    .then(() => res.status(200).json({ msg: 'Post has been deleted' }))
    .catch((err) => next(err));
  };


module.exports = { deletePosts };
