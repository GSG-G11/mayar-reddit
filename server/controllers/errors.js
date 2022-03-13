const { join } = require('path');

const pageNotPage = (req,res,next)=>{
    res.status(404).sendFile(join(__dirname , '..',  '..', 'public' ,'html','404.html'))
};
const serverError = (err,req,res,next)=>{
    console.log(err)
    if(err.status){
        res.status(err.status).json({msg : err.msg});
    }else{
        res.status(500).sendFile(join(__dirname , '..',  '..', 'public' ,'html','500.html'))
    }
};
module.exports = {pageNotPage , serverError};