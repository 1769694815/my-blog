# js基础


## 数据类型
最新的 ECMAScript 标准定义了8种数据类型，分为二大类基本数据类型和引用数据类型

### 基本数据类型
::: tip 基本数据类型
也称之为原始数据类型，指的是保存在栈内存中的简单数据段
:::

* 布尔值（Boolean），有2个值分别是：`true` 和 `false`
* null，一个表明 null 值的特殊关键字。JavaScript是大小写敏感的，因此 `null` 与 `Null` 、 `NULL` 或变体完全不同
    * typeof 运算符对于 null 值会返回“object”，null被认为是对象的占位符，但它仍属于原始值
* undefined，和 null 一样是一个特殊关键字，undefined 表示变量为定义时的属性
* 数字（Number），整数或浮点数
    * typeof 运算符对于 NaN 值会返回“number”， 因NaN被认为是特殊的数字类型，只能通过 `isNaN` 方法判定
* 任意精度的整数（BigInt），可以安全地存储或操作大整数，甚至可以超过数字的安全整数限制
* 字符串（String），字符串是一串表示文本值的字符序列
* 代表（Symbol）（在EMCMAScript6中新添加的类型）。一种实例是唯一且不可以改变的数据类型

### 引用数据类型
::: tip 引用数据类型
也称之为复杂数据类型，指的是那些保存在堆内存中的对象，意思是：变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象
:::

### 判断类型 - typeof
``` js
console.log(typeof a) // undefind
console.log(typeof true) // boolean
console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof NaN) // number
console.log(typeof null) // object
let obj = new String()
console.log(typeof obj) // object
let fn = function () {}
console.log(typeof fn) // function
console.log(typeof class c {}) // function
let sym = Symbol()
console.log(typeof sym) // symbol
```
`typeof` 判断引用类型是不太准确，返回的都是object。

### 判断类型 - instanceof
`instanceof` 是判断一个实例是否属于某种类型，具体使用：
``` js
console.log(1 instanceof Number) // false
console.log('1' instanceof String) // false
console.log(true instanceof Boolean) // false
console.log(function foo() {} instanceof Function) // true
console.log({} instanceof Object) // true
console.log([] instanceof Array) // true
```
从以上结果可以看出，`instanceof` 对于引用类型来说判断的非常准确，但是对于基础类型却不能准确判断。原因是 `instanceof` 运算符用来测试一个对象在其原型链上是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一个数据类型的实例。1、'1'、true并不是实例，所以为 false。
``` js
console.log(new Nubmer(1) instanceof Number) // true
console.log(new string('1') instanceof String) // true
console.log(new Boolean(true) instanceof Boolean) // true
```
但是对 `uedefind` 和 `null`, 却比较特殊：
``` js
console.log(new null() instanceof Null) // Uncaught TypeError: null is not a constructor
console.log(new undefind() instanceof Undefined) // Uncaught TypeError: undefind is not a constructor
```
原因是因为`uedefind` 和 `null`并不是构造函数。

### 类型判断 - constructor
``` js
console.log((1).constructor === Number) // true
console.log("1".constructor === String) // true
console.log(true.constructor === Boolean) // true
console.log([].constructor === Array) // true
console.log({}.constructor === Object) // true
console.log(function Foo() {}.constructor === Function) // true
```
但是当创建一个对象改变它的原型的时候，`instanceof` 运算符返回的结果就不准确了, 例如：
``` js
function Foo() {}
Foo.prototype = new Array()
let foo = new Foo()
console.log(foo.constructor === Object) // false
console.log(foo.constructor === Array) // true
```
这是因为js每个函数都有prototype属性，指向原型对象，对象.prototype.constructor 指向的是该对象的构造函数，当把该对象的原型对象更改时，该函数的构造对象也会更改。

### 类型判断 - Object.prototype.toString.call()
``` js
console.log(Object.prototype.toString.call(1)) // [object Number]
console.log(Object.prototype.toString.call('1')) // [object String]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(function Foo() {})) // [object Function]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(Symbol())) // [object Symbol]
```
这是最准确的类型判断方法，就算改变原型也不会有问题。
每个Object原型上都有一个toString方法，当调用这个方法的时候会执行三个步骤：
* 获取对象的类名（对象类型）
* 将[object 获取的对象类型]组合成字符串
* 返回字符串


## 变量
在应用程序中，使用变量来作为值的符号名。变量的名字又叫做标识符（必须以字母、下划线或者美元符号开头，后续的字符也可以是数字，区分大小写）。



## 数字与运算符

## 字符串

## 数组

## 作用域

## 函数

## js对象

## this关键字