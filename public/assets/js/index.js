$(document).ready(function () {
  var articleContainer = $('.articles');
  $(document).on('click', '.scrape-btn', scrapeArticles);
  $(document).on('click', '.clear-btn', clearArticles);
  $(document).on('click', '.save-btn', saveArticle);

  function initPage() {
    $.get('/api/articles?saved=false').then(function (data) {
      articleContainer.empty();
      if (data && data.length) {
        renderArticles(data);
      } else {
        renderEmpty();
      }
    });
  }

  function renderArticles(articles) {
    var articleCards = [];

    for (let i = 0; i < articles.length; i++) {
      articleCards.push(createCard(articles[i]));
    }

    articleContainer.append(articleCards);
  }

  function createCard(article) {
    var card = $('<div class="mdl-card mdl-shadow--2dp">');
    var cardHeader = $('<div class="mdl-card__title">')
      .append(
        $('<h3>').attr('class', 'mdl-card__title-text').append(
          $('<a class="article-link" target="_blank">')
            .attr('href', article.url)
            .text(article.headline)
      ));
    
    var cardBody = $('<div class="mdl-card__supporting-text">').text(article.summary);

    var metadata = $('<div class="mdl-card__actions mdl-card--border">')
      .text(article.author);
    
    var cardMenu = $('<div class="mdl-card__menu">').append(
      $('<button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect save-btn">').append(
        $('<i class="material-icons">save</i>')
      ));
    
    card.append(cardHeader, cardBody, metadata, cardMenu);

    card.data('_id', article._id);

    return card;
  }

  function renderEmpty() {
    var empty = $(
      [
        '<div class="no-news">',
        '<h6>It seems like there are no new articles, try clicking the scrape button!</h6>',
        '</div>'
      ].join('')
    );

    articleContainer.append(empty);
  }

  function saveArticle() {
    var articleToSave = $(this)
      .parents('.mdl-card')
      .data();
    
    $(this)
      .parent('.mdl-card')
      .remove();
    
    articleToSave.saved = true;

    $.ajax({
      method: 'PUT',
      url: '/api/articles/' + articleToSave._id,
      data: articleToSave
    }).then(function (data) { 
      if (data.saved) {
        initPage();
      }
    });
  }

  function scrapeArticles() {
    $.get('/api/fetch').then(function (data) {
      initPage();
    });
  }

  function clearArticles() {
    $.get('/api/delete').then(function () {
      articleContainer.empty();
      initPage();
    });
  }
});