const { verifyPromise } = require('../utils');
require('env2')('.env');
const checkAuth = (req, res, next) => {
  const { access_token } = req.cookies;
  verifyPromise(access_token, process.env.SECRET)
  .then((payload) =>{
    req.user_id = payload.id
    next();
  } )
  .catch(()=> res.redirect('/login'))
};
module.exports = { checkAuth };
