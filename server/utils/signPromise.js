require('env2')('.env');
const { sign } = require('jsonwebtoken');

const signPromise = (email)=>{
   return  new Promise((resolve, reject)=>{
        sign({ email }, process.env.SECRET, { expiresIn: '30d' }, (err, token) => {
            if(err){
                reject(err);
            }else{
                resolve(token)
            }
   })
   
})};

module.exports = {signPromise};