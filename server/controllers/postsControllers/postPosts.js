const { postsSchema , customizedError} = require('../../utils')
const { postPostsQuery } = require('../../database/queries')
const postPosts = (req, res , next) => {
    postsSchema.validateAsync(req.body)
    .then((data) => postPostsQuery(data))
    .catch((err)=>{
        if(err.name === 'ValidationError'){
            next(customizedError('Validation Error' , 400))
        }else{
            next(err);
        }
    })
};
module.exports = { postPosts };
