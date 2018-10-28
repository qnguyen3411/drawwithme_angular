const express = require('express');
const fs = require('fs')
const es = require('event-stream');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const passportJWT = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../middlewares');
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

router.route('/:id/log').get((req, res) => {
  const id = req.params.id;
  let s = fs.createReadStream(__dirname + `/../../strokeLogs/${id}.txt`)
    .pipe(es.split()) 
    .pipe(res)
    .on('error', function (err) {
      console.log('Error while reading file.', err);
    })
    .on('end', function () {
      console.log('Read entire file.')
    });
})
module.exports = router;

