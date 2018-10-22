var axios = require('axios');
var cheerio = require('cheerio');

var scraper = () => {
  return axios
    .get('https://www.vox.com/')
    .then(function (res) {
      var $ = cheerio.load(res.data);
      var articles = [];

      $('.c-entry-box--compact__body').each(function (i, elem) {
        // article headline
        var headline = $(this).find('.c-entry-box--compact__title').text().trim();
        // article url
        var url = $(this).find('a').attr('href');
        // article summary
        var summary = $(this).find('.c-entry-box--compact__dek').text().trim();
        // article author
        var author = $(this).find('.c-byline__item').text().trim();

        if (headline && url && summary) {
          var article = {
            headline: headline,
            summary: summary,
            url: url,
            author: author
          };
          console.log(article);
          articles.push(article);
        }
      });

      return articles;
    });
};

module.exports = scraper;