var db = require('../db');

module.exports = {

  getAll: function (callback) {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },

  create: function (params, callback) {
    db.query('INSERT INTO users(username) values (?)', params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  }
};
