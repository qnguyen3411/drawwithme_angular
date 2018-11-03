const express = require('express');
const fs = require('fs')
const es = require('event-stream');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const passportJWT = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../middlewares');
const roomController = require('../controllers/rooms');


// TODO: move this into its own config file config/ env

router.route('/config')
  .get(async (req, res) => {
    const MS_PER_HOUR = 1000 * 60 * 60;
    res.json({
      tokenCap: 5,
      tokenInterval: MS_PER_HOUR * 2,
      tokenTimeValue: MS_PER_HOUR * 4
    })
  })


router.route('/create')
  .post(
    validateBody(schemas.roomSchema), passportJWT, roomController.create)

router.route('/join/:id')
  .get(passportJWT, roomController.join)

router.route('/')
  .get(roomController.fetchToQuery, roomController.index);

router.route('/token/:id')
  .get(roomController.consumeToken)
router.route('/:id')
  .get(roomController.getOne);



module.exports = router;

