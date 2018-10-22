const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configurations');

const bcrypt = require('bcryptjs');

const userModel = require('./models/user');

// JSON WEB TOKEN
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  // try {
    // Find the user specified in token
  //   const id = payload.sub;
  //   const user = await User.getById(id);
  //   // If user dont exist, handle it
  //   if (!user) {
  //     return done(null, false);
  //   }
  //   // Otherwise, return the user
  //   done(null, user);
  // } catch (error) {
  //   done(error, false);
  // }
}));



// LOCAL
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
