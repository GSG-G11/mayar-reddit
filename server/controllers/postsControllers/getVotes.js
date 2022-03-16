const { getVotesQuery } =require('../../database/queries');
const getVotes = (req,res,next)=>{
    const isvote = true ;
    const { id } = req.body;
    getVotesQuery({isvote , id})
    .then((data)=>{
        res.json({numOfvotes : data.rowCount})
    })
}
module.exports = { getVotes };