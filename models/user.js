const db = require('../db/wrapper');

module.exports = {
  insert: function(data) {
    const { username, password } = data
    const sql = 
      "INSERT INTO users"
      + " (username, password, created_at, updated_at)"
      + " VALUES (?, ?, NOW(), NOW())";
    return db.query(sql, [username, password])
  },

  getById: function(id) {
    const sql = 
      "SELECT * FROM users"
      + " WHERE id = ?";
      return db.query(sql, [id]);
  },

  getByUsername: function(username) {
    const sql = 
      "SELECT * FROM users"
      + " WHERE username = ?";
      return db.query(sql, [username]);
  }
}