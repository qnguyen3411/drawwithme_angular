const JWT = require('jsonwebtoken');
// const { JWT_SECRET } = require('../configurations')
const userModel = require('../models/user')

require('dotenv').config

signToken = user => {

  return JWT.sign({
    iss: 'dingleberry', // issuer
    sub: { id: user.id, username: user.username }, // subject
    iat: new Date().getTime(), // issued at
    exp: new Date().setDate(new Date().getDate() + 1) // expiration
  }, process.env.JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { insertId } = await userModel.insert(req.body);
      const user = await userModel.getById(insertId);
      const token = signToken(user[0]);
      res.json({ status: "success", token: token });
    } catch (e) {
      res.json({ status: "error", error: e });
    }
  },

  signIn: async (req, res, next) => {
    const token = signToken(req.user)
    res.json({ status: "success", token: token });
  },

  verify: async (req, res, next) => {
    const { id, username } = req.user;
    res.json({ status: "success", data: { id, username } });
  }


}