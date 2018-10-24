const db = require('../db/wrapper');

module.exports = {

  getAll: function () {
    const columns = [
      'rooms.id', 
      'users.username', 
      'rooms.creator_id',
      'rooms.created_at',
      'rooms.is_active'
    ]
    const sql =
      "SELECT ??" 
      + " FROM rooms"
      + " LEFT JOIN users"
      + " ON rooms.creator_id = users.id" ;
    return db.query(sql, [columns]);
  },

  getById: function (id) {
    const columns = [
      'rooms.id', 
      'users.username', 
      'rooms.creator_id',
      'rooms.created_at',
      'rooms.is_active'
    ]
    const sql =
      "SELECT ?? FROM rooms"
      + " LEFT JOIN users"
      + " ON rooms.creator_id = users.id"
      + " WHERE id = ?";
    return db.query(sql, [columns, id]);
  },

  getRoomTags: function (roomId) {
    const sql =
      "SELECT tags.text FROM rooms_tags"
      + " LEFT JOIN tags"
      + " ON tags.id = rooms_tags.tag_id"
      + " WHERE rooms_tags.room_id = ?";
    return db.query(sql, [roomId])
  },


  insert: function (data) {
    const { name, creatorId } = data;
    const sql =
      "INSERT INTO rooms"
      + " (name, creator_id, created_at, updated_at)"
      + " VALUES (?, ?, NOW(), NOW())";
    return db.query(sql, [name, creatorId]);
  },

  addJoiner(roomId, joinerId) {
    const sql =
      "INSERT INTO users_rooms"
      + " (room_id, user_id, created_at, updated_at)"
      + " VALUES (?, ?, NOW(), NOW())";
    return db.query(sql, [roomId, joinerId]);
  },

  addTag: function (tag) {
    console.log("INSERTING THIS TAG: ", tag)
    const sql =
      "INSERT INTO tags"
      + " (text, created_at, updated_at)"
      + " VALUES (?, NOW(), NOW())"
      + " ON DUPLICATE KEY UPDATE text = text"
    return db.query(sql, [tag]);
  },

  addTagToRoom: function (roomId, tagText) {
    const sql =
      "INSERT INTO rooms_tags"
      + " (room_id, tag_id, created_at, updated_at)"
      + " SELECT ?, tags.id, NOW(), NOW()"
      + " FROM tags"
      + " WHERE tags.text = ?"
      + " ON DUPLICATE KEY UPDATE updated_at = NOW()"
    return db.query(sql, [roomId, tagText]);
  }
}

