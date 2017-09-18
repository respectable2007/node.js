// console.log，用来输出信息的
// console.log('this is a test string.')

// 信息将被输出到控制台中，也可将它重定向输出到文件中
// 命令行:node app.js 1>info.log

// 从第二参数开始，依序输出所有字符串
// console.log("%s","hoge","foo")

// 将对象转换为字符串后输出
// console.log("%s","hoge",{foo:"Foo"})

// 将数值转换为字符串后输出，从第二个参数开始，依序输出所有数值
// console.log("%d",10,10.5)

// 将字符串作为数值进行转换，将输出NaN
// console.log("%d","hoge")

// 输出百分号
// console.log("%%","hoge")

// 可以在console.log中使用各种运算符计算输出结果，也可使用toString方法将数值转为字符串
// console.log(1+2)
// console.log((1+2).toString())

// var a=1
// var b=2
// console.log(a.toString()+b.toString())

// console.error，用来输出错误的
// console.error('This is an error string')

// 错误信息将被输出到控制台中，也可将它重定向输出到文件中
// 命令行：node app.js 2>error.log

// console.error也可通过参数指定输出字符串的格式、各种运算符计算输出结果，也可使用toString方法，
// 也可使用console.warn方法代替

// console.dir，用于查看一个对象中的内容且将该对象的信息输出到控制台中
// var user=new Object()
// user.name='Zhanghui'
// user.getName=function(){return this.name}
// user.setName=function(name){ this.name=name}
// console.dir(user)

// console.time/console.timeEnd，可用来统计一段代码的执行时间
// console.time，用于标记开始时间
// console.timeEnd，用于标记结束时间，并将结束时间与开始时间间经过的毫秒数在控制台输出
// 两种方法使用相同的参数值，才能正确统计出执行的毫秒数
// console.time('1')
// for(var i=0;i<10000;i++){
// 	;
// }
// console.timeEnd('1')

// console.trace，用于将当前位置处的栈信息作为标准错误信息进行输出
// 参数值可为任何字符串，用于标识此处输出的标准错误信息
// var user=new Object()
// user.name='Zhanghui'
// user.getName=function(){return this.name}
// user.setName=function(name){this.name=name}
// console.trace(‘trace’)

// console.assert，用于对一个表达式的执行结果进行评估

// Node中的全局作用域
// node中存在一个全局作用域，可定义一些不需要通过任何模块的加载即可使用的变量、函数或类，
// 也预先定义了一些全局方法及全局类
// node中定义了一个global对象，代表node.js中的全局命名空间，任何全局变量、函数或对象都是该对象的一个属性值

// 全局函数
// setTimeout／clearTimeout
// setTimeout，当前时刻过去多少毫秒后执行某个回调函数
// clearTimeout，取消setTimeOut中回调函数的调用

// setInterval/clearInterval
// setInterval，在当前时刻过去后每隔多少毫秒执行某个回调函数
// clearInterval，取消setInterval中的回调函数的调用

// 定时器对象
// unref，取消setTimeout函数或setInterval函数中指定的回调函数的调用
// ref，在ref方法被调用时刻经过指定时间执行setTimeout或setInterval的回调函数
// var testFunction=function(){
// 	console.log('callback function executed.')
// }
// var timer=setInterval(testFunction,3000)
// timer.unref()
// timer.ref()

// 与模块相关的全局函数及对象
// require，用来加载模块
// require函数使用一个参数，可为带有完整路径的模块文件名和模块名
// var test=require('./module/test.js')
// console.log(test.test)

// 所有的脚本文件都是一个模块文件，在本示例中，app.js是在命令行窗口中通过‘node’命令被直接运行，
// 因此，node将该模块文件所定义的模块称为应用程序的主模块

// require.main，用于检测一个模块是否为应用程序中的主模块
// if(module===require.main){
// 	console.log('this is the main module of application')
// }

// 模块在首次加载后将缓存在内存缓存区中，即相同模块的多次引用不会引起模块内代码的多次执行
// var test1=require('./module/test.js')
// test.output('test')
// test1.output('test1')

// require.resolve，用来查询某个模块文件的带有完整绝对路径的文件名，并不会加载该模块
// console.log(require.resolve('./module/test.js'))

// require.cache，为一个对象，代表所有已被加载模块的缓存区
// require.cache对象具有一个‘键名/键值‘，键名为每个模块的完整文件名
// var test=require('./module/test.js')
// console.log(require.cache)
// console.log(require.cache[require.resolve('./module/test.js')])

// 当使用delete关键字删除缓存区中缓存的某个模块对象后，下次加载该模块时将重新运行该模块中的代码
// var test=require('./module/test.js')
// var test1=require('./module/test.js')
// delete require.cache[require.resolve('./module/test.js')]
// var test2=require('./module/test.js')

// __filename/__dirname变量
// __filename，用来获取当前模块文件的带有完整绝对路径的文件名
// __dirname，用来获取当前模块文件所在目录的完整绝对路径
var test=require('./module/test.js')