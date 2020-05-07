var express = require('express');
var router = express.Router();
var cate = require('../controllers/cateController')

router.get('/', cate.getCate)
router.get('/getPostCate', cate.getPostCate)
module.exports = router;
