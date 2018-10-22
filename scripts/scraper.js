var axios = require('axios');
var cheerio = require('cheerio');

module.exports.scraper = () => {
  return axios
    .get('https://duckduckgo.com/?q=news&ia=news&iar=news')
    .then(function (res) {
      var $ = cheerio.load(res.data);

      var articles = [];

      $('div.result--news').each(function (i, elem) {
        // article headline
        var headline = $(this).find('h2').text().trim();
        // article url
        var url = $(this).find('a').attr('href');
        // article summary
        var summary = $(this).find('div.result__snippet').text().trim();
        // article source
        var source = $(this).find('a.result__url').text().trim();
        // article source icon
        var sourceImg = $(this).find('img').attr('src');

        if (headline && url && summary) {
          var article = {
            headline: headline,
            summary: summary,
            url: url,
            source: source,
            sourceImage: sourceImg
          };

          articles.push(article);
        }
      });

      return articles;
    });
};