var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(data => res.json(data));
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let message = req.body;
    models.messages.post(message, () => res );
  } // a function which handles posting a message to the database
};
