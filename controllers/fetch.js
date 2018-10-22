var db = require('../models');

var scraper = require('../scripts/scraper');

module.exports = {
  scrapeArticles: function (req, res) {
    // scrape website
    return scraper()
      .then(function (articles) {
        // insert articles[] into db
        return db.Article.create(articles);
      })
      .then(function (articles) {
        if (articles.length === 0) {
          res.json({ message: 'No new articles' });
        } else {
          res.json({ message: 'Added ' + articles.length + ' articles' });
        }
      })
      .catch(function (err) {
        res.json({ message: 'Finished scraping' });
      });
  }
};