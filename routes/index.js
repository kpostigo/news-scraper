var router = require('express').Router();
var api = require('./api');
var view = require('./view');

router.use('./api', api);
router.use('/', view);

module.exports = router;