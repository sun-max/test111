/*
  首先所有对象在默认情况下都是可篡改的，可以进行相应的防篡改操作
  防篡改的对象包含三种
  1.不接添加新属性和方法，但可删除或修改原有属性，叫做不可扩展对象
  2.不可删除，添加，但可以修改，叫密封对象
  3.完全不可以操作，包含删除，添加，修改叫做冻结对象
*/

// 1.不可扩展对象 Object.preventExtensions
var obj={
    name:'123',
    age:'17',
    play:function(){
        console.log('hahaha')
    }
}
Object.preventExtensions(obj);//禁止添加新属性和方法，但可以删除或修改原属性,方法无法修改或删除
obj.name='456'
// console.log(obj);
delete(obj.name);
console.log(obj);
// 判断该对象是否支持扩展
console.log(Object.isExtensible(obj));//true


//2. 密封对象 obj.seal()
var obj={
    name:'123'
}
Object.seal(obj);
obj.age=16;
console.log(obj.age);//此时浏览器不会报错，这里返回undefined,证明了该属性并未成功添加
console.log(delete(obj.name));
console.log(obj.name);

// 3.冻结对象，Object.freeze()
var obj={
  name:'123'
}
Object.freeze(obj);
obj.age=21;
console.log(obj.age);//undefined  不可添加新属性
delete obj.name;
console.log(obj.name);//123 不可删除

obj.name="bob";
console.log(obj.name);//123 不可修改