var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },

  post: function (req, res) {
    let user = req.body;
    models.users.create((err, results) => {
      if (err) {
        throw err;
      } else {
        res.json(results);
      }
    });
  }
};
