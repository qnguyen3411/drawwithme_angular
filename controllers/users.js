const JWT =  require('jsonwebtoken');
const { JWT_SECRET } = require('../configurations')
const userModel = require('../models/user')



signToken = user => {
  return JWT.sign({
    iss: 'dingleberry', // issuer
    sub: { id: user.id, username: user.username }, // subject
    iat: new Date().getTime(), // issued at
    exp: new Date().setDate(new Date().getDate() + 1) // expiration
  }, JWT_SECRET );
}

module.exports =  {
  signUp: async (req, res, next) => {
    console.log("CALLED USER SIGNUP")
    console.log(req.body);      
    try {
      const {insertId} = await userModel.insert(req.body);
      const user = await userModel.getById(insertId);
      const token = signToken(user);
      res.json({status: "success", token: token});
    } catch (e) {
      res.json({status: "error", error: e});
    }
  },

  signIn: async (req, res, next) => {
    console.log("CALLED USER SIGNIN")
    const token = signToken(req.user)
    res.json({status: "success", token: token});
  },

  secret: async (req, res, next) => {
  },

  reset: async (req, res, next) => {
  },

  all: async (req, res, next) => {
  }

}