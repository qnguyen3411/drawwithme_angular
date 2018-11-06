var mysql = require('mysql');


module.exports = {
  connection: null,

  initializeConnection: function (config) {
    function addDisconnectHandler(connection) {
      connection.on("error", function (error) {
        if (error instanceof Error) {
          if (error.code === "PROTOCOL_CONNECTION_LOST") {
            console.error(error.stack);
            console.log("Lost connection. Reconnecting...");
            initializeConnection(connection.config);
          } else if (error.fatal) {
            throw error;
          }
        }
      });
    }
    this.connection = mysql.createConnection(config);
    addDisconnectHandler(this.connection);
    this.connection.connect();
    return this.connection;
  },

  query: function (query, inserts) {
    return new Promise( (resolve, reject) => {
      this.connection.query(query, inserts, function (error, results, fields) {
        if (error) { reject(error) };
        resolve(results);
      });
    })
  },

}