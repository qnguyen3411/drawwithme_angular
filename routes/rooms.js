const express = require('express');

const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const passportJWT = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../middlewares/middlewares');
const roomController = require('../controllers/rooms');

router.route('/create')
  .post(
    validateBody(schemas.roomSchema), passportJWT, roomController.create)

router.route('/join/:id')
  .post(roomController.join)

router.route('/')
  .get(roomController.index);

router.route('/:id')
  .get(roomController.getOne);
module.exports = router;
