var router = require('express').Router();
var fetch = require('../../controllers/fetch');

router.get('/', fetch.scrapeArticles);

module.exports = router;