require('env2')('.env');
const { sign } = require('jsonwebtoken');

const signPromise = (id)=>{
   return  new Promise((resolve, reject)=>{
        sign({ id }, process.env.SECRET, { expiresIn: '30d' }, (err, token) => {
            if(err){
                reject(err);
            }else{
                resolve(token)
            }
   })
   
})};

module.exports = {signPromise};