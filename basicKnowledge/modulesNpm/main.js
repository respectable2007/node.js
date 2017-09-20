// var foo=require('./class.js')
// var myFoo=new foo('zhanghui',29)
// // 私有变量
// console.log('修改前')
// console.log(myFoo.GetName())
// console.log(myFoo.GetAge())
// myFoo.SetName('huajuan')
// myFoo.SetAge(0)
// console.log('修改后')
// console.log(myFoo.GetName())
// console.log(myFoo.GetAge())
// // 公有变量
// console.log('修改前')
// console.log(myFoo.name)
// console.log(myFoo.age)
// myFoo.name='Bob'
// myFoo.age=12
// console.log('修改后')
// console.log(myFoo.name)
// console.log(myFoo.age)
// // 调用类变量或类函数，实例对象不能调用
// foo.staticName='huajuan'
// foo.staticFunction()

// 使用目录来管理模块：
// 目录名指定为模块名，即在应用程序的根目录下创建一个node_modules子目录，
// 然后在其中为你的模块创建一个目录，且在其中放入一个index.js文件。
// 当使用require('foo')代码时，nodejs将自动加载该目录下的index.js模块
// var foo=require('foo')

// 另一种方式是在node_modules目录第fuu子目录中创建package.json文件，且在其中
// 写入如下代码来创建模块名与主文件
// {
// 	"name":"fuu",
// 	"main":"./lib/fuu.js"
// }
// 当使用require('fuu')代码时，将加载fuu子目录下的lib目录下的fuu.js模块
// var fuu=require('fuu')

// 模块对象的属性
// var foo=require('foo')
// var fii=require('./class.js')
// module.children：属性值为一个数组，存放了当前模块的所有子模块对象，
// 即当前模块中已加载的所有模块对象
// console.log(module.children)

// 包
// nodejs中，一个包事实上是一个目录，通常包含如下内容：
// 包的根目录中放package.json文件，
// bin子目录中存放二进制文件，
// lib子目录中存放js文件，
// doc子目录中存放包或包的使用方法的说明文档文件，
// test子目录中存放一些对包进行单元测试用的文件

// package.json文件，通常应该包含如下字段：
// name,包名。包名是唯一的，由小写字母、数字和下划线组成，不能含空格，
// preferglobal，是否支持全局安装。字段值为true时支持全局安装，字段值为false时不支持全局安装，
// description，包说明。对包进行简要描述，
// version，版本号，
// author，作者信息数组。每个数组元素中可包含name（作者名）、email（作者电子邮件）、web（作者网址），
// maintainers，包维护者信息数组。每个数组元素中可包含name（包维护者名）、email（包维护者电子邮件）、web（包维护者网址），
// bugs，bug的提交地址，可以是网址或电邮地址，
// licenses，许可证数组。每个元素要包含type（许可证名称）、url（链接到许可证文本的地址），
// repository，仓库托管地址数组。每个元素要包含type（仓库类型，如git）、url（仓库地址）、path（相对于仓库的路径，可选），
// keywords，关键字数组，通常用于搜索，
// dependencies，本包所依赖的包。是一个关联数组，由包名和版本号组成。

// npm命令
// npmsearch <包名> 搜索并查看包的信息
// npmview <包名> 查看官方包仓库中包所用package.json文件中的信息
// npm root -g 查看nodejs的全局包的安装路径
// npmconfig set prefix "d:\node" 修改nodejs的全局包的安装路径
// npmlist 当前目录下所安装的所有包
// npmlist -g 查看nodejs的全局包的安装路径下安装的所有包
// npm update <包名> 更新当前目录下安装的某个包
// npm update -g <包名> 更新nodejs全局包的安装路径下安装的某个包
// npm update 更新当前目录下安装的所有包
// npm update -g 更新nodejs全局包的安装路径下安装的所有包