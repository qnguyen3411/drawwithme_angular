
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
      res.json({ status: 'error', error: err });
    }
  },

  join: async (req, res, next) => {
    if (!req.user) { return; }
    const roomId = req.params.id;
    try {
      await roomModel.addJoiner(roomId, req.user.id)
      res.json({ status: 'success', data: {} });
    } catch (error) {
      res.json({ status: 'error', error: err });
    }
  },

  index: async (req, res, next) => {
    try {
      let rooms;
      if (req.query.user) {
        rooms = await roomModel.getByJoinedUser(req.query.user);
      } else if (req.query.tag) {
        rooms = await roomModel.getByTag(req.query.tag)
      } else {
        rooms = await roomModel.getAll();
      }
      let roomList = []
      for (let i = 0; i < rooms.length; i++) {
        let tags = await roomModel.getRoomTags(rooms[i].id);
        let joiners = await roomModel.getRoomJoiners(rooms[i].id)
        rooms[i].tags = tags.map(tag => tag.text);
        rooms[i].users = joiners
        roomList.push(rooms[i]);
      }
      res.json({ status: 'success', data: roomList });
    } catch (err) {
      res.json({ status: 'error', error: err });
    }
  },

  getOne: async (req, res, next) => {
    res.json({ status: 'error', error: err });
  }
}
