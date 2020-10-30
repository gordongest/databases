var db = require('../db');

module.exports = {

  getAll: function (callback) {

    db.query('SELECT messages.id, messages.message, messages.room_id, messages.user_id FROM messages', (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },

  // a function which produces all the messages
  create: function (params, callback) {

    db.query('INSERT INTO messages(message, room_id, user_id) \
              VALUES (?, ?, ?)', message, function(err, res) {
      if (err) {
        throw (err);
      } else {
        callback(result);
      }
    });
  } // a function which can be used to insert a message into the database
};
