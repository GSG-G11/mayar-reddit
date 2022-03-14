const { checkPost , checkPostWithId , daletePostQuery} = require('../../database/queries');
const { customizedError } = require('../../utils')
const deletePosts = (req,res , next) => {
    const {user_id , id} = req.body
    checkPost(id)
    .then((data)=> data.rows[0]['?column?'])
    .then((result)=> result  ? checkPostWithId(id) : false)
    .then((data) =>{
        if(data.rows[0].user_id === parseInt(user_id)){
            daletePostQuery(id)
        }else{
            throw customizedError('This post is not for this user', 400)
        }
    })
    .then(()=> res.status(200).json({msg : 'Post has been deleted' }))
    .catch((err)=> {
        if(err.status){
            next(err)
        }else{
            next(customizedError('The post is not available' , 400))
        }
    })
};
module.exports = { deletePosts };
