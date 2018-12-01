const path = require('path');
const router = require('express').Router();
const tests = require(path.join(__dirname, 'tests'));

router.get('/tests/ping', tests.ping);

module.exports = router;
