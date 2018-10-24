
const roomModel = require('../models/room');


module.exports = {
  create: async (req, res, next) => {
    if (!req.user) { res.json({ status: 'error', error: err }); }
    const { name, tags } = req.body;
    const { id: creatorId } = req.user;
    let roomId;
    roomModel.insert({ name, creatorId })
      .then(result => {
        roomId = result.insertId;
        return Promise.all(tags.map(roomModel.addTag));
      }).then(() => Promise.all(
        tags.map(tag => roomModel.addTagToRoom(roomId, tag)))
      ).then(() => {
        roomModel.addJoiner(roomId, creatorId);
        res.json({ status: 'success', data: {} });
      }).catch(err => {
        res.json({ status: 'error', error: err });
      });
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
      const rooms = await roomModel.getAll();
      let roomList = []
      for (let i = 0; i < rooms.length; i++) {
        let tags = await roomModel.getRoomTags(rooms[i].id);
        rooms[i].tags = tags.map(tag => tag.text);
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
