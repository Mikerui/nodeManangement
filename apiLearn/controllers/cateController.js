var dbConfig = require('../util/dbconfig')
// 获取分类
getCate = (req,res)=>{
  var sql = 'select id,category from cate'
  var sqlArr = []
  var callBack = (err,data)=>{
    if(err){
      console.log('链接失败'+err);
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
}

getPostCate = (req,res) =>{
  let {id} = req.query
  var sql = `select * from post where cate_id=?`
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      console.log('链接失55败'+err);
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
}
// 获取指定分类的文章列表


module.exports = {
  getCate,
  getPostCate
}