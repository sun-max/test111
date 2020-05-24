var name="zhangsan";
var obj={
    name:"lisi"
}
Function.prototype._call=function(){
     ctx=arguments[0]||window;
     ctx.fn=this;
     argv=[];
     for(let i=1;i<arguments.length;i++){
         argv.push(arguments[i]);
     }
     return ctx.fn(...argv);
}
function fun(){
    console.log(this.name);
    console.log(arguments);
}
fun._call(obj,1,2,3)