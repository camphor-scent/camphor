'use strict';

var express = require('express');
var router = express.Router();


var HomeRouter =  require('./home');

router.use('/',HomeRouter);

module.exports = router;