const express = require('express');

const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

const { validateBody, schemas, hashPassword } = require('../middlewares');

const UsersController = require('../controllers/users');


router.route('/signup')
  .post(validateBody(schemas.authSchema), hashPassword, UsersController.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

router.route('/verify')
  .get(passportJWT, UsersController.verify);
module.exports = router;

