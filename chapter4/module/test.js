var test='This is a variable from test.js'

// console.log(test)

// 每次引用模块都执行一次模块内的某些代码，可将代码指定在某个方法内
var output=function(name) {
	console.log('this is a call from '+name+'.')
}
// __filename，用来获取当前模块文件的带有完整绝对路径的文件名
// console.log(__filename)
// __dirname，用来获取当前模块文件所在目录的完整绝对路径
// console.log(__dirname)

exports.test=test
exports.output=output

// test.js不为应用程序的主模块
// if(module===require.main){
// 	console.log('this is the main module of application')
// }