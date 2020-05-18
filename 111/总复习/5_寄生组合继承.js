
/**
 * 寄生组合继承;call继承+类似原型继承
 * 特点：父类私有和公有的分别是子类实例的私有和公有属性方法（推荐）
 */
function A(x){
    this.x=x
}
A.prototype.getx=function(){
    console.log(this.x);
}

function B(y){
    // this->b1
 A.call(this,200);//b1.x=200;
 this.y=y;
}
// Object.create(OBJ):创建一个空对象，让空对象__proto__指向OBJ
B.prototype=Object.create(A.prototype);
B.prototype.constructor=B;
B.prototype.getY=function(){
    console.log(this.y);

}
let b1=new B(100);

Object.create=function(obj){
   
   function Fn(){};
   Fn.prototype=obj;
   return new Fn();
};

