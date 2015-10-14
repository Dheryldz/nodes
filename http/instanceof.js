/**
 * [instanceof 判断是哪种类型的对象]
 */
function C() {} // 定义一个构造函数
function D() {} // 定义另一个构造函数

var o = new C();
console.log(o instanceof C); // true,因为:Object.getPrototypeOf(o) === C.prototype
console.log(o instanceof D); // false,因为D.prototype不在o的原型链上
console.log(o instanceof Object); // true,因为Object.prototype.isPrototypeOf(o)返回true
console.log(C.prototype instanceof Object); // true,同上

C.prototype = {};
var o2 = new C();
console.log(o2 instanceof C); // true
console.log(o instanceof C); // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C();
var o3 = new D();
console.log(o3 instanceof D); // true
console.log(o3 instanceof C); // true
