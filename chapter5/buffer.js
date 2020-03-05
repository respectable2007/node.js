// Buffer类是全局类
// 创建Buffer类实例对象

// buf=new Buffer(size)，只需要将缓冲区大小（字节）指定为构造函数的参数

// buf.length，缓存大小

// buf.fill(value,[offset],[end])，用来初始化缓存区中的所有内容
// 第一个参数：必填，需要被写入的数值，
// 第二个参数：可选，从第几个字节处开始写入被指定的数值，默认值为0，
// 第三个参数：可选，将数值一直写入到第几字节处，默认值为Buffer对象的大小，即书写到缓存区底部
// buf.fill(1,10,20)，从第10个字节填入到第20个字节（不包含第20个字节）

// buf=new Buffer([0,1,2])，使用一个数组来初始化缓存区

// buf=new Buffer(str,[encoding])，使用一个字符串来初始化缓存区
// 第一个参数：必填，参数值为初始化缓存区的字符串，
// 第二个参数：用于指定文字编码格式的字符串，默认值为utf8
// 编码：
// ascii：ASCII字符串；utf8:UTF-8字符串；utf16le：UTF-16LE字符串；
// ucs2:UCS2字符串；base64:经过BASE64编码后的字符串；
// binary：二进制数据（不推荐）；hex：使用十六进制数值表示的字符串；
