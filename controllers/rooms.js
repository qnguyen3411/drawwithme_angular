require('dotenv').config();
const roomModel = require('../models/room');


module.exports = {
  // Expects: 
  // User object
  // Form data input
  create: async (req, res, next) => {
    if (!req.user) { res.json({ status: 'error', error: err }); }
    const { name, description, tags } = req.body;
    const { id: creatorId } = req.user;

    try {
      const result = await roomModel.insert({ name, description, creatorId });
      const roomId = result.insertId;
      await Promise.all(tags.map(roomModel.addTag));
      await Promise.all(tags.map(tag => roomModel.addTagToRoom(roomId, tag)));
      await roomModel.addJoiner(roomId, creatorId);
      
      res.json({ status: 'success', data: roomId });
    } catch (err) {
      next(err);
    }
  },

  join: async (req, res, next) => {
    if (!req.user) { return; }
    const roomId = req.params.id;
    try {
      await roomModel.addJoiner(roomId, req.user.id)
      res.json({ status: 'success', data: {} });
    } catch (error) {
      next(error);
    }
  },

  index: async (req, res, next) => {
    try {
      let rooms = req.index;
      let roomList = [];
      for (let i = 0; i < rooms.length; i++) {
        let tags = await roomModel.getRoomTags(rooms[i].id);
        let joiners = await roomModel.getRoomJoiners(rooms[i].id)
        rooms[i].tags = tags.map(tag => tag.text);
        rooms[i].users = joiners
        roomList.push(rooms[i]);
      }
      res.json({ status: 'success', data: roomList });
    } catch (err) {
      next(err);
    }
  },

  fetchToQuery: async (req, res, next) => {
    let rooms;
    try {
      if (req.query.user) {
        rooms = await roomModel.getByJoinedUser(req.query.user);
      } else if (req.query.tag) {
        rooms = await roomModel.getByTag(req.query.tag)
      } else {
        rooms = await roomModel.getAll();
      }
    req.index = rooms;
    next();
    } catch (err) {
      next(err);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const found = await roomModel.getById(req.params.id);
      if (!found) {
        throw new Error('Room not found')
      }
      res.json({ status: 'success', data: found[0] });
    } catch (err) {
      next(err);
    }
  },

  consumeToken: async (req, res, next) => {
    const { tokenCap, tokenInterval, tokenTimeValue } = {
      tokenCap: process.env.ROOM_TOKEN_CAP,
      tokenInterval: process.env.ROOM_TOKEN_INTERVAL,
      tokenTimeValue: process.env.ROOM_TOKEN_TIME_VALUE
    }

    try {
      // Get room by id
      const found = await roomModel.getById(req.params.id)
      if (!found) {
        throw new Error('Room not found')
      }
      const room = found[0];
      // calculate remaining tokens
      const now = new Date().getTime();
      const { expires_at, created_at } = room;
      const expiresAt = new Date(expires_at).getTime();
      const createdAt = new Date(created_at).getTime();
      const tokenUsed = Math.round((expiresAt - createdAt) / tokenTimeValue) - 1;
      const tokensReceivedSoFar = Math.floor((now - createdAt) / tokenInterval);
      const tokenAvailable = Math.min(tokensReceivedSoFar, tokenCap) - tokenUsed;
      if (tokenAvailable <= 0) { throw new Error('No available tokens') }
      await roomModel.extendExpireDate({ roomId: room.id, timeInMs: tokenTimeValue })
      res.json({ status: 'success', data: { newExpireDate: expiresAt + tokenTimeValue } });
    } catch (error) {
      next(error);
    }
  }
}
