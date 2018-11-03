const db = require('../db/wrapper');

module.exports = {


  getAll: function () {
    const columns = [
      'rooms.id',
      'rooms.name',
      'rooms.description',
      'rooms.expires_at',
      'users.username',
      'rooms.creator_id',
      'rooms.created_at',
    ]
    const sql =
      "SELECT ??"
      + " FROM rooms"
      + " LEFT JOIN users"
      + " ON rooms.creator_id = users.id";
    return db.query(sql, [columns]);
  },

  getById: function (id) {
    const columns = [
      'rooms.id',
      'rooms.name',
      'rooms.description',
      'rooms.expires_at',
      'users.username',
      'rooms.creator_id',
      'rooms.created_at',
    ]
    const sql =
      "SELECT ?? FROM rooms"
      + " LEFT JOIN users"
      + " ON rooms.creator_id = users.id"
      + " WHERE rooms.id = ?";
    return db.query(sql, [columns, id]);
  },

  getByTag: function (tagText) {
    const columns = [
      'rooms.id',
      'rooms.name',
      'rooms.description',
      'rooms.expires_at',
      'users.username',
      'rooms.creator_id',
      'rooms.created_at',
    ]
    const sql =
      'SELECT ?? '
      + ' FROM rooms_tags'
      + ' LEFT JOIN rooms'
      + ' ON room_id = rooms.id'
      + ' LEFT JOIN tags'
      + ' ON tag_id = tags.id'
      + ' LEFT JOIN users'
      + ' ON rooms.creator_id = users.id'
      + ' WHERE tags.text = ?';

    return db.query(sql, [columns, tagText]);
  },

  getByJoinedUser: function (userId) {
    const columns = [
      'rooms.id',
      'rooms.name',
      'rooms.description',
      'rooms.expires_at',
      'users.username',
      'rooms.creator_id',
      'rooms.created_at',
    ]
    const sql =
      "SELECT ?? "
      + " FROM users_rooms"
      + " LEFT JOIN rooms ON rooms.id = room_id"
      + " LEFT JOIN users ON users.id = user_id"
      + " WHERE users.id = ?"
    return db.query(sql, [columns, userId]);
  },

  getRoomTags: function (roomId) {
    const sql =
      "SELECT tags.text FROM rooms_tags"
      + " LEFT JOIN tags"
      + " ON tags.id = rooms_tags.tag_id"
      + " WHERE rooms_tags.room_id = ?";
    return db.query(sql, [roomId])
  },

  getRoomJoiners: function (roomId) {
    const sql =
      "SELECT users.id, users.username"
      + " FROM users_rooms"
      + " LEFT JOIN users ON users.id = user_id"
      + " WHERE room_id = ?"
    return db.query(sql, [roomId]);
  },


  insert: function (data) {
    const { name, description, creatorId } = data;
    const sql =
      "INSERT INTO rooms"
      + " (name, description, creator_id, expires_at)"
      + " VALUES (?, ?, ?, DATE_ADD(NOW(), INTERVAL 4 HOUR))";
    return db.query(sql, [name, description, creatorId]);
  },

  extendExpireDate: function (data) {
    const { roomId, timeInMs } = data;
    const timeInSecs = timeInMs / 1000;
    
    const sql = "UPDATE rooms" 
    + " SET expires_at = DATE_ADD(expires_at, INTERVAL ? SECOND)"
    + " WHERE id = ?"

    return db.query(sql, [timeInSecs, roomId]);
  },

  addJoiner(roomId, joinerId) {
    const sql =
      "INSERT INTO users_rooms"
      + " (room_id, user_id, created_at, updated_at)"
      + " SELECT ?, ?, NOW(), NOW()"
      + " FROM users_rooms"
      + " LEFT JOIN rooms ON rooms.id = room_id"
      + " WHERE rooms.id  = ? AND expires_at > NOW()"
      + " ON DUPLICATE KEY UPDATE users_rooms.updated_at = NOW()"
      ;
    return db.query(sql, [roomId, joinerId, roomId]);
  },

  addTag: function (tag) {
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

