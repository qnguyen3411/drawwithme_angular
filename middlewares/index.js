const Joi = require('joi');
const bcrypt = require('bcryptjs');


module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }

      // validated info will be req.value.body
      if (!req.value ) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    authSchema: Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().min(8).required()
    }),

    roomSchema: Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      description: Joi.string().max(1000),
      tags: Joi.array().items(Joi.string().alphanum())
    })
  },


  hashPassword: async (req, res, next) => {
    const password = req.body.password;
    if (!password) { next() };
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt)
      req.body.password = passwordHash;
      next();
    } catch (error) {
      next(error);
    }
  }
}