// for of for in 区别及其优缺点
/**
 *  区别：
 * 1.推荐在循环对象属性的时候，使用for ...in,在遍历数组的时候使用for...of
 * 2.for...in循环出的是属性key，for...of循环出的是value.
 * 3.for...of不能循环普通的对象，需要通过和object.keys()搭配使用
 * 4.for...of是es6新引入的特性，修复了es5引入的for...in的不足。
 * 
 */

//  遍历一个数组的value,for...of循环的是数组的索引，for...in循环的数组的value
let aArray=['a',123,{a:'1',b:'2'}];
aArray.name='demo';
for(let index in aArray){
    console.log(index);
//  console.log(aArray[index]);
}
for(let val of aArray){
    console.log(val);
}

//for...of循环内部调用的是数据结构的Symbol.iterator方法
// 可以循环的范围：数组，Set和Map结构，某些类似数组的对象(比如arguments对象,DOM的nodelist对象)，后文的Generator对象，
// 以及字符串
//for...of可以代替数组实例的forEach方法。
// 通过for...of循环，获取数组的索引，要借助数组实例中的entries方法和keys方法
var arr1=["a","b","c","d"];
// for(let val of arr1){
//     console.log(val);
// }
for(let index of arr1.entries()){
    console.log(index);
}
for(let index of arr1.keys()){
    console.log(index);
}
// arr1.forEach((val,index)=>{
//  console.log(val);
//  console.log(index);
// })
// for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟for...in循环也不一样

// for...of循环类似数组的对象
// 1、字符串
let str="hello";
for(let s of str){
    console.log(s);//h e l l o
}
// 2.Dom NodeList对象
let paras=document.querySelectorAll("p");
for (let p of paras) {
    p.classList.add("test");
  }
   
  // arguments对象
  function printArgs() {
    for (let x of arguments) {
      console.log(x);
    }
  }
  printArgs('a', 'b');
  // 'a' 'b'

// 并不是所有类似数组的对象都具有Iterator接口，一个简便的解决方法，就是使用Array.from方法将其转化为数组。
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
 
//  // 报错
//  for (let x of arrayLike) {
//    console.log(x);
//  }
  
 // 正确
 for (let x of Array.from(arrayLike)) {
   console.log(x);
 }




//  对象
/**
 * 对于普通的对象，for...of不能直接使用，会报错，必须部署了iterator接口才能使用。
 * 可以用for...in来遍历健名
 */
let es6={
    edition:6,
    committee:"TC39",
    standard:"ECMA-262"
}
for(let key in es6){
    console.log(key);//edition committee standard
}
// 用for...of，可以使用Object.keys()方法将对象的健名生成一个数组，然后遍历这个数组。
console.log(Object.keys(es6));
for(let key of Object.keys(es6)){
    console.log(key);
    console.log(es6[key]);
}

// 用Generator函数将对象包装下
function* entries(obj){
    for(let key of Object.keys(obj)){
        yield [key, obj[key]];

    }
}
for (let [key, value] of entries(obj)) {
    console.log(key, '->', value);
  }
  // a -> 1
  // b -> 2
  // c -> 3



/**
 * 与其他遍历语法的比较
 * 以数组为例，js提供多种遍历方法，最原始的写法就是for循环,但此写法很麻烦，因此数组提供内置的forEach 方法
 * forEach写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效
 * 
 * 
 * for...of没有for...in的那些缺点
 * 不同于forEach，可以与break，continue，return配合使用
 * 提供了遍历所有数据结构的统一操作接口。
 */
