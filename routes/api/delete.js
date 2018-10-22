var router = require('express').Router();
var empty = require('../../controllers/delete');

router.get('/', empty.empty);

module.exports = router;