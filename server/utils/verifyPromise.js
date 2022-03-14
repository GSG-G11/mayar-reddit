require('env2')('.env');
const { verify } = require('jsonwebtoken');

const verifyPromise = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.SECRET, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { verifyPromise };
