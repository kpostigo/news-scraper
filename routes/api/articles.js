var router = require('express').Router();
var article = require('../../controllers/article');

router.get('/', article.findAll);
router.delete('/:id', article.remove);
router.put('/:id', article.update);

module.exports = router;