//es6中基于Class创造出来的类不能当做普通函数执行
class A{
    constructor(x){
        this.x=x;
    }
    getX(){
        console.log(this.x);
    }
}
// 如果不写constructor,浏览器会自己默认创建 contructor(...args){ super(...args);}
class B extends A{
    constructor(y){
        //子类继承父类，可以不写constructor,一旦写了，进来第一个必写super
        super(200);//=>A.call(this,200)把父类当成普通方法执行，给方法A传参数，使方法中this指向子类的实例。
        this.y=y;
    }
    getY(){
        console.log(this.y);
    }
}
// B.prototype=Object.create(A.prototype);不允许重定向原型的指向；
let b1=new B(100);
console.log(b1);


//es6中继承用extends   
// class Child extends Parent   实现父类公有在子类公有 =>B.prototype.__proto__=A.prototype

/*在实战项目中的应用：
1、react：
class Login extends React.Component{
    constuctor(props){
        super(props)
    }
    componentWillMount(){
        //=> React.Component.prototype.setState();
        this.setState();
    }
    render(){
  }
}
*/
class Utils{
  query();
}
class Dialog extends Utils{
  constructor(){
      super();
      this.query();
  }
}