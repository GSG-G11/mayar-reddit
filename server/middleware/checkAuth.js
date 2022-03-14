const { verifyPromise } = require('../utils');
const checkAuth = (req, res, next) => {
  const { access_token } = req.cookies;
  verifyPromise(access_token)
  .then(()=>next())
  .catch(()=> res.redirect('/login'))
};
module.exports = { checkAuth };
