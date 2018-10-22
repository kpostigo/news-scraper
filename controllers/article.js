var db = require('../models');

module.exports = {
  // find + sort articles
  findAll: function (req, res) {
    db.Article
      .find(req.query) // find
      .sort({ date: -1 }) // sort
      .then(function (article) {
        res.json(article);
      });
  },
  // remove article
  remove: function (req, res) {
    db.Article
      .remove({ _id: req.params.id }) // remove
      .then(function (article) {
        res.json(article);
      });
  },
  // update article
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })  // update
      .then(function (article) {
        res.json(article);
      });
  }
};