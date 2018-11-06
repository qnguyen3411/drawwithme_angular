const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configurations');

const bcrypt = require('bcryptjs');

const userModel = require('./models/user');


passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
  try {
    const id = payload.sub.id;
    const result = await userModel.getById(id);
    const user = Array.isArray(result) ? result[0] : result;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));



passport.use(new LocalStrategy({
  usernameField: 'username'
}, async (username, password, done) => {
  // Check if email exist
  try {
    const matches = await userModel.getByUsername(username);
    // if not, handle it
    if (!matches) {
      return done(null, false);
    }
    const user = matches[0];
    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false);
    }
    return done(null, user)

  } catch (error) {
    return done(error, false)
  }

}))
