const router = require('express').Router();

const tests = require('./tests');

router.get('/test', tests);

module.exports = router;
