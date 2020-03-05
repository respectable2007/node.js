// 要将模块定义为一个类时，只能使用“module.exports”

var name='',age=0;
var _name,_age;
var foo=function(name,age){
	_name=name;
	_age=age;
}
foo.prototype.GetName=function(){
	return _name;
}
foo.prototype.SetName=function(name){
	_name=name
}
foo.prototype.GetAge=function(){
	return _age;
}
foo.prototype.SetAge=function(age){
	_age=age;
}
foo.prototype.name=name;
foo.prototype.age=age;

// 模块定义类变量或类函数
foo.staticName='';
foo.staticFunction=function(){
	console.log(foo.staticName)
}

module.exports=foo;