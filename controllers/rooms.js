const JWT =  require('jsonwebtoken');
const { JWT_SECRET } = require('../configurations')

const roomModel = require('../models/room');

signRoomToken = (roomId, userId) => {
  return JWT.sign({
    iss: 'dingleberry', // issuer
    sub: {roomId, userId}, // subject
    iat: new Date().getTime(), // issued at
    exp: new Date().setDate(new Date().getDate() + 1) // expiration
  }, JWT_SECRET );
}

module.exports = {
  create: async (req, res, next) => {
    if (!req.user) { res.json({status: 'error', error: err}); }
    const { name, tags } = req.body;
    const { id: creatorId } = req.user;
    let roomId;
    roomModel.insert({ name, creatorId })
      .then(result => {
        roomId = result.insertId;
        return Promise.all(tags.map(roomModel.addTag));
      }).then(() => {
        return Promise.all(
          tags.map(tag => roomModel.addTagToRoom(roomId, tag)))
      }).then(() => {
        return roomModel.addJoiner(roomId, creatorId);
      }).then(() => {
        const token = signRoomToken(roomId, creatorId);
        res.json({status: 'success', token: token});
      }).catch(err => {
        res.json({status: 'error', error: err});
      });
  },

  join: async (req, res, next) => {
    const joinerId = (req.user) ? req.user.id : 0;
    const {roomId} = req.body;
    roomModel.addJoiner(roomId, joinerId)
      .then(() => {
        const token = signRoomToken(roomId, joinerId);
        res.json({status: 'success', token: token});
      }).catch(err => {
        res.json({status: 'error', error: err});
      });
  }
}
