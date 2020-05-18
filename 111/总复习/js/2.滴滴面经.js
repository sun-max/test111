1.// typeof undefined , array , function 返回值

console.log(typeof undefined);//undefined
console.log(typeof Array);//Function
console.log(typeof Function);//Function
// String Number Boolean Array Object Function Date RegWxp Error 等返回值是 function，因为这些都是 js 的内部函数对象

var a=[1,2,3];
console.log(typeof a);//Object
var b={a:1,b:2};
console.log(typeof b);//Object
var c=null;
console.log(typeof c);//Object
// 对象，数组，null返回的都是“object”


var a=new Number;// 或 new String、new Array、new Function、new Object
console.log(typeof(a));// 返回都是 "object"，因为这些新声明的 js 变量都是对象；


//类数组转换为数组的方式
Array.from();
Array.prototype.slice.call();
[...arr];
JS原生方法
var length = arrayLike.length;
var arr = [];
for (var i = 0; i < length; i++) {
  arr.push(arrayLike[i]);
  return arr;
}

//JavaScript如何判断一个对象是否为数组
typeof无法判断object和array
arr.instanceof Array;
arr.constructor == Array;
Array.isArray(arr);
Object.prototype.toString.call(arr) == "[Object Array]"



//虚拟dom 的作用

//http2.0特性

  function P(){}
  P.prototype.a = 'a';
  function C(){}
  C.prototype = new P();
  var obj1 = new C();
  //通过obj1来进行修改a
  obj1.constructor.prototype.a="xxx";
  console.log(P.prototype);