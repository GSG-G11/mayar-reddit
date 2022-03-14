const { checkPost , updatePostsQuery} = require('../../database/queries');

const updatePosts = (req , res , next)=>{
    const { id , votes } = req.body;
    checkPost(id)
    .then((data) => data.rows[0]['?column?'])
    .then((result) => {
        if (result) {
            updatePostsQuery({id , votes}) 
        } else {
            next(customizedError('The post is not available', 400));
        }
    })
    .then(() => res.status(200).json({ msg: 'Post has been updated' }))
    .catch((err)=> next(err))

}
module.exports = { updatePosts };