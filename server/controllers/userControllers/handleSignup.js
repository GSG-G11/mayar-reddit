require('env2')('.env');
const { hash } = require('bcryptjs');
const { signupQuery, checkEmail } = require('../../database/queries');
const { signupSchema, customizedError, signPromise } = require('../../utils');

const handleSignup = (req, res, next) => {
  const { email, name, password } = req.body;
  signupSchema
    .validateAsync(req.body)
    .then((data) => checkEmail(data.email))
    .then((data) => {
      if (data.rows.length == 0) {
        return hash(password, 10);
      } else {
        throw customizedError('The email is already exist', 400);
      }
    })
    .then((password) => signupQuery({ email, name, password }))
    .then((data) => {
      return signPromise(data.rows[0].id);
    })
    .then((token) => {
      res.cookie('access_token', token, {
            httpOnly: true,
          })
          .json({ msg: 'done' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(customizedError('Validation failed', 400));
      } else {
        next(err);
      }
    });
};
module.exports = { handleSignup };
