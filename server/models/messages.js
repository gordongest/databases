var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.query('SELECT * FROM messages', function (err, result, fields) {
      if (err) {
        throw (err);
      } else {
        console.log(result);
      }
    });
  }, // a function which produces all the messages
  create: function () { } // a function which can be used to insert a message into the database
};
