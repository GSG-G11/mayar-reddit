const customizedError = (msg, status) => {
  const error = new Error(msg);
  error.msg = msg;
  error.status = status;
  return error ;
};
module.exports = { customizedError };
