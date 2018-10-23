const db = require('../db/wrapper');

module.exports = {
  insert: function(data) {
    const { name, creatorId } = data;
    const sql = 
      "INSERT INTO rooms"
      + " (name, creator_id, created_at, updated_at)"
      + " VALUES (?, ?, NOW(), NOW())";
    return db.query(sql, [name, creatorId]);
  },

  getById: function(id) {
    const sql = 
      "SELECT * FROM rooms"
      + " WHERE id = ?";
    return db.query(sql, [id]);
  },

  addJoiner(roomId, joinerId) {
    const sql = 
      "INSERT INTO users_rooms"
      + " (room_id, user_id, created_at, updated_at)"
      + " VALUES (?, ?, NOW(), NOW())";
    return db.query(sql, [roomId, joinerId]);
  },

  addTag: function(tag) {
    console.log("INSERTING THIS TAG: ", tag)
    const sql = 
      "INSERT INTO tags"
      + " (text, created_at, updated_at)"
      + " VALUES (?, NOW(), NOW())"
      + " ON DUPLICATE KEY UPDATE text = text"
    return db.query(sql, [tag]);
  },

  addTagToRoom: function(roomId, tagText) {
    const sql  =
      "INSERT INTO rooms_tags"
      + " (room_id, tag_id, created_at, updated_at)"
      + " SELECT ?, tags.id, NOW(), NOW()"
      + " FROM tags"
      + " WHERE tags.text = ?"
      + " ON DUPLICATE KEY UPDATE updated_at = NOW()"
    return db.query(sql, [roomId, tagText]);
  }
}

