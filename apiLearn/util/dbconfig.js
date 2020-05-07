// 链接数据库
const mysql = require('mysql')

module.exports = {
  // 数据库配置
  config:{
    host:'localhost',
    port:'3306',
    user:'exapp',
    password:'123456',
    database:'testapp'
  },
  // 开始链接数据库，使mysql的连接池连接方式
  // 连接池的对象
  sqlConnect:function(sql,sqlArr,callBack){
    var pool = mysql.createPool(this.config)
    pool.getConnection((err,conn)=>{
      console.log(122);
      if(err){
        console.log('链接失败'+err);
        return
      }
      // 事件驱动回调
      conn.query(sql,sqlArr,callBack)
      // 释放连接
      conn.release()
    })
  }
  
}