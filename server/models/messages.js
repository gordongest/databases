var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.query('SELECT * FROM messages', function (err, result, fields) {
      if (err) {
        throw (err);
      } else {
        callback(result);
      }
    });
  }, // a function which produces all the messages
  create: function (message, cb) {

    db.query('insert into chat values', message, function(err, res) {
      if (err) {
        throw (err);
      } else {
        callback(result);
      }
    });
  } // a function which can be used to insert a message into the database
};
