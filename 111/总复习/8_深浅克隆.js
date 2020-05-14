// 浅克隆
let obj={
    a:100,
    b:[10,20,30],
    c:{
        x:10
    },
    d:/^\d+$/

};
let obj2={...obj};
// let obj2={}
// for(let key in obj){
//     if(!obj.hasOwnProperty(key)) break;
//     obj2[key]=obj[key];
// }
// console.log(obj,obj2);

// 深克隆
// let obj3=JSON.parse(JSON.stringify(obj)); 弊端=>正则和日期深克隆不了
let obj={
    a:100,
    b:[10,20,30],
    c:{
        x:10
    },
    d:/^\d+$/

};
function deepClone(obj){
    //过滤特殊情况
    if(typeof obj!='object') return obj;
    if(obj===null) return null;
    if(obj instanceof RegExp){
       return new RegExp(obj);
    }
    if(obj instanceof Date){
        return new Date(obj);
    }
  let newObj={};//=new Object(),new Obj.constructor;
  for(let key in obj){
      if(obj.hasOwnProperty(key)){
          newObj[key]=deepClone(obj[key]);
      }
  }
  return newObj;
}
let obj3=deepClone(obj);
console.log(obj3,obj);
console.log(obj3==obj);
console.log(obj3===obj);