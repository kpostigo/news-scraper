var router = require('express').Router();
var fetch = require('./fetch');
var comment = require('./comment');
var articles = require('./articles');
var empty = require('./delete');

router.use("/fetch", fetch);
router.use('/comments', comment);
router.use('/articles', articles);
router.use('/delete', empty);

module.exports = router;