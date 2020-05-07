var express = require('express');
var router = express.Router();

var dbConfig = require('../util/dbconfig')
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = 'select * from cate'
  var sqlArr = []
  var callBack = (err,data)=>{
    if(err){
      console.log('链接失败');
      return
    }else {
      res.send(
        {
          'list':data
        }
      )
    }
  }

  dbConfig.sqlConnect(sql,sqlArr,callBack)
  // res.render('index', { title: 'Express' });
});

module.exports = router;