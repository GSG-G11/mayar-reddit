const Joi = require('joi');

const postsSchema = Joi.object({
  votes: Joi.number().required(),
  content: Joi.string().required(),
  img : Joi.any(),
});

module.exports = {postsSchema};