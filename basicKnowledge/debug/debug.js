// node debug<需要被执行的脚本文件名>

console.log('Hello World!')
function foo(){
	console.log('Hello Foo')
	return 100
}
var bar='This is a pen'
var http=require('http')
var i=foo()
console.log(i)

// 若要继续执行当前被暂停执行的脚本-cont／c
// 若不需要执行完剩余所有脚本代码-next／n，不会进入函数内部
// 若要进入函数内部-step／s
// 立即执行完函数内剩余的所有代码-out／o

// watch，用来观察某个变量的值或某个表达式的执行结果
// watch('观察时使用的表达式')

// unwatch，用来解除观察方法
// unwatch('观察时使用的表达式')

// setBreakpoint/sb，用来设置断点
// setBreakpoint(filename,line)
// sb(filename,line)
// 若省略第一个参数，代表在当前正在运行的脚本文件中设置断点，
// 若两个参数都省略，将把断电设置在调试器中下一句执行的脚本代码处
// 设置断点的行号前显示一个“*”记号

// clearBreakpoint/cb，用来取消断点
// clearBreakpoint(filename,line)
// cb(filename,line)

// 其他实用命令
// backtrace／bt，查看函数及其外层各函数的返回位置，包含返回代码的行号及起始字符所在位置

// var i=0;
// var func1=function(){
// 	var func2=function(){
// 		var func3=function(){
// 			var fun4=function(){
// 				var fun5=function(){
// 					i=i+1;
// 				}
// 				fun5();
// 			}
// 			fun4();
// 		}
// 		fun3();
// 	}
// 	fun2();
// }
// func1();
// console.log(i);

// list，用来查看当前所要执行代码之前及之后的几行代码
// list(n)

// repl，用来进入REPL运行环境

// restart，用来重新开始脚本的调试

// kill，用来终止脚本文件的调试

// run，用来重新开始脚本文件的调试

// scripts，用来查看当前正在运行的文件及所有被加载的模块文件名称（不包括nodejs中的内置模块）

// version，用来显示nodejs所用V8 JavaScript引擎的版本号
