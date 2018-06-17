const router = require('express').Router();
const path = require('path');

const tests = require('./tests');

router.get('/test', tests);

module.exports = router;
