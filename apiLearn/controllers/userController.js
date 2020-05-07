// @ts-nocheck
function rand(min,max){
  return Math.floor(Math.random()*(max-min)) + min
}
var dbConfig = require('../util/dbconfig')
// 模拟发送验证码接口  随机四位数
sendCode = (req,res) => {
  let phone = req.body.user_phone
  let code = rand(1000,9999)
  res.send({
    'code':200,
    'msg':'发送成功'
  })
  console.log('验证码发送成功:'+code);
}
// 获取指定分类的文章列表


module.exports = {
  sendCode
}