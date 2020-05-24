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

B.prototype.getY=function(){
    console.log(this.y);

}
let b1=new B(100);
b1.y;
b1.getY();
b1.getX();//
/**
 * call继承的特点
 * child方法中将parent当做普通函数执行，让parent的this指向child的实例，相当于
 * 给child的实例设置了很多私有的属性或方法。
 * 1.只能继承父类私有的属性和方法。（把parent当普通函数执行，和其原型上的属性和方法没有关系）
 * 2.父类私有的变为子类私有的。
 */