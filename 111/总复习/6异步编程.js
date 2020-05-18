// 异步编程的几种方式：

// 1.回调函数
function f1(f2){
    setTimeout(function(){
        console.log('先执行 f1')
    },1000)
    f2()
}
function f2() {
    console.log('再执行 f2')
}
f1(f2);
// 2.事件监听
$(document).ready(function(){
    console.log('DOM 已经 ready')
});

// 3.发布订阅模式：发布/订阅模式是利用一个消息中心，发布者发布一个消息给消息中心，订阅者从消息中心订阅该消息，。类似于 vue 的父子组件之间的传值。
//订阅done事件
$('#app').on('done',function(data){
    console.log(data)
})
//发布事件
// $('#app').trigger('done,'haha');

//4.promise

/*
5.Generator(es6)
    Generator 函数是一个状态机，封装了多个内部状态。
    执行 Generator 函数会返回一个遍历器对象，使用该对象的 next() 方法，
    可以遍历 Generator 函数内部的每一个状态，直到 return 语句。

*/

function  *generatorDemo() {
    yield 'hello';
    yield  1 + 2;
    return 'ok';
  }
  
  var demo = generatorDemo()
  
  demo.next()   // { value: 'hello', done: false } 
  demo.next()   // { value: 3, done: false } 
  demo.next()   // { value: 'ok', done: ture } 
  demo.next()   // { value: undefined, done: ture } 

  //6.async

  async function demo() {
    try {
      await new Promise(function (resolve, reject) {
        // something
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  demo().then(data => {
      console.log(data)  // 
  })