var express = require('express');
var router = express.Router();

var User = require('../controllers/userController')
router.post('/sendCode', User.sendCode)


module.exports = router;
