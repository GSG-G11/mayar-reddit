const { postsSchema , customizedError} = require('../../utils')
const { postPostsQuery } = require('../../database/queries')
const postPosts = (req, res , next) => {
    const { user_id } = req
    const { votes , content , img} = req.body
    postsSchema.validateAsync(req.body)
    .then((data) => {
    postPostsQuery({votes , content, img , user_id})
    })
    .then(()=> res.status(200).json({msg : 'post posts done'}))
    .catch((err)=>{
        if(err.name === 'ValidationError'){
            next(customizedError('Validation Error' , 400))
        }else{
            next(err);
        }
    })
};
module.exports = { postPosts };
