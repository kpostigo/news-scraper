var router = require('express').Router();
var comment = require('../../controllers/comment');

router.get('/:id', comment.find);
router.post('/', comment.create);
router.delete('/:id', comment.delete);

module.exports = router;