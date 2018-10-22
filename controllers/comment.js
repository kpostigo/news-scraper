var db = require('../models');

module.exports = {
  // find comment
  find: function (req, res) {
    db.Comment
      .find({ _articleId: req.params.id })  // find
      .then(function (comment) {
        res.json(comment);
      });
  },
  // create comment
  create: function (req, res) {
    db.Comment
      .create(req.body) // create
      .then(function (comment) {
        res.json(comment);
      });
  },
  // delete comment given the id
  delete: function (req, res) {
    db.Comment
      .remove({ _id: req.params.id }) // remove
      .then(function (comment) {
        res.json(comment);
      });
  }
};