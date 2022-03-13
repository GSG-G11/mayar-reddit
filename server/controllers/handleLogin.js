const { hash, compare } = require('bcryptjs');
const { loginSchema, customizedError , signPromise} = require('../utils');
const { checkEmail, getPassword } = require('../database/queries');

const handleLogin = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then((data) => checkEmail(data.email))
    .then((data) => {
      if (data.rowCount === 1) {
        return getPassword(data.rows[0].email);
      } else {
        throw customizedError("Email and password don't  match ");
      }
    })
    .then((data) => {
      return compare(password, data.rows[0].password);
    })
    .then((isMatch) => {
      if (isMatch) {
        return signPromise(email)
      } else {
        throw customizedError("Email and password don't  match ");
      }
    })
    .then((token)=>{
        res.cookie('access_token', token, {
            httpOnly: true,
          })
          .json({ message: 'done' });
    })
    .catch((err)=>{
        if(err.name === 'ValidationError'){
            next(customizedError('Validation failed', 400));
        }else{
            next(err)
        }
    });
};
module.exports = { handleLogin };
