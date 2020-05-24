var name = "Hero";
var obj = {
    "name" : "Condor",
    "fn" : 12
};
Function.prototype._bind = function(){
    ctx = arguments[0] || window;
    let fn = Symbol();
    ctx.__proto__[fn] = this;
    let argv = [];
    //第一个参数是绑定上下文的所以从第二个开始拿参数
    for(let i = 1;i < arguments.length;i++){
        argv.push(arguments[i]);
    }
    let result = function(){
        return ctx[fn](...argv);
    };
    return result;
}
function fun(){
    console.log(this.name);
    console.log(...arguments);
}
let newfun = fun._bind(obj,1,2,3);
newfun();
