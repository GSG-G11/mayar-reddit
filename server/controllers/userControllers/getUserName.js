const { getUserNameQuery } = require('../../database/queries');
const getUserName = (req , res , next)=>{
    const { user_id } = req ;
    getUserNameQuery(user_id)
    .then((data) => res.json({username : data.rows[0].name}))
    .catch((err)=>
    {
        next(err)
    })
}
module.exports = { getUserName };