
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const passportJWT = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../middlewares/middlewares');
const roomController = require('../controllers/rooms');

router.route('/create')
  .post(
    validateBody(schemas.roomSchema), passportJWT, roomController.create)

module.exports = router;
