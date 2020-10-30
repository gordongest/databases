var models = require('../models');

module.exports = {

  // a function which handles a get request for all messages
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        throw err;
      } else {
        res.json(results);
      }
    });
  },

  // a function which handles posting a message to the database
  post: function (req, res) {
    let message = req.body;
    models.messages.post(message, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.json(results);
      }
    });
  }
};
