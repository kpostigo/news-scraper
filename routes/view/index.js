var router = require('express').Router();
var db = require('../../models');

// index page
router.get('/', function (req,res) {
  db.Article
    .find({ saved: false })
    .sort({ date: -1 })
    .then(function (articles) {
      res.render('index', { articles: articles });
    });
});

// saved articles page
router.get('/saved', function (req, res) {
  db.Article
    .find({ saved: true })
    .sort({ date: -1 })
    .then(function (articles) {
      res.render('saved', { articles: articles });
    });
});

module.exports = router;