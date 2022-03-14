const { getPostsQuery } = require('../../database/queries');
const getPosts = (req, res , next) => {
    getPostsQuery()
    .then((data)=> res.status(200).json({ posts : data.rows }))
    .catch(next);
};
module.exports = { getPosts };
