var router = require('express').Router();
var fetch = require('./fetch');
var comment = require('./comment');
var article = require('./article');
var empty = require('./delete');

router.use('/fetch', fetch);
router.use('/comments', comment);
router.use('/articles', article);
router.use('/delete', empty);

module.exports = router;