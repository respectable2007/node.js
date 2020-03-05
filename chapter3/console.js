// console.log('This is a test string')
// console.error('This is an error')

// var user = new Object()
// user.name = 'test'
// user.getName = function () {
//   return this.name
// }
// user.setName = function (value) {
//   this.name = value
// }

// console.dir(user)
// console.trace('2')

// console.time('1')
// var a = 0
// for(var i = 0; i < 100000; i++) {
//   a += i
// }
// console.timeEnd('1')

// console.assert(1 == 2, 'ren')

// console.log(globalThis)

var testVar = 'This is a test string'
console.log(testVar)
console.log(__filename, __dirname)
exports.testVar = testVar

// require.main是使用node命令执行的模块
// if(module === require.main) {
//   console.log('this is a main module')
// }