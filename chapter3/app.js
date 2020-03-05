//引入其他模块
// var test1 = require('./console.js')
// var test2 = require('./console.js')
// console.dir(test)

//判断当前模块是否为程序主模块
if(module === require.main){
  console.log('this is a main module')
}

//模块绝对路径
// console.log(require.resolve('./console.js'))

//加载缓存区模块对象，键值对，键对应模块的完整路径+文件名（require.resolve）
// console.log(require.cache[require.resolve('./console.js')])

//eventemiter类

//on/addListener绑定事件名及事件处理函数
var http = require('http')
var server = http.createServer()
server.on('request', function(req, res) {
  if (req.url !== '/favicon.ico') {
    console.log(req.url, 1)
  }
})

//setMaxListeners,设置对象可绑定最多的事件处理函数数量

//object.listeners(o)，获取当前对象绑定的事件处理函数数量
// console.log(server.listeners('request'))

//once,事件处理函数执行一次就被解绑

/* server.once('request', function(req, res) {
  console.log('响应结束')
  res.end()
}) */

// 解绑事件处理函数
/* var testFunction = function(req, res) {
  console.log('响应结束')
}
server.on('request', testFunction)
server.removeListener('request', testFunction)

server.on('request', function(req, res) {
  res.end()
}) */

//解绑某个事件类型或所有事件类型的事件处理函数，removeAllListeners('事件类型')或不填(解绑所有)

server.removeAllListeners('request')
server.on('request', function(req, res) {
  if(req.url !== '/favicon.ico') {
    console.log('hello world')
  }
  res.end()
})



server.listen(8080, 'localhost')
