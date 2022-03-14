const Joi = require('joi');

const postsSchema = Joi.object({
  votes: Joi.number().required(),
  content: Joi.string().required(),
  img: Joi.string(),
  user_id: Joi.number().required(),
});

module.exports = {postsSchema};