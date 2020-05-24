/**
   async/await错误处理方面主要使用try/catch,如果有多个异步操作，需要对每个异步返回的error进行不同的处理
 */
const fetchDataA = () => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve('fetch data is A')
     }, 1000)
    })
   }
    
   const fetchDataB = () => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve('fetch data is B')
     }, 1000)
    })
   }
    
   (async () => {
    try {
     const dataA = await fetchDataA()
     console.log('dataA is ->', dataA)
    } catch(err) {
     console.log('err is ->', err)
    }
    
    try {
     const dataB = await fetchDataB()
     console.log('dataB is ->', dataB)
    } catch(err) {
     console.log('err is ->', err)
    }
   })()
//    async/await本质是一个promise语法糖，那么是promise可以用then函数
(async ()=>{
    const fetchData=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('fetch data is me');
            },1000)
        })
    }
    const data=await fetchData().then(data=>data).catch(err=>err);
    console.log(data);
})()
// 上面写法中，如果fetchData返回resolve正确结果时，data是我们想要的结果，如果是reject，发生错误，data就是错误结果，显然是行不通的，完善如下
(async ()=>{
    const fetchData=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('fetch data is me');
            },1000)
        })
    }
    const [err,data]=await fetchData().then(data=>[null,data]).catch(err=>[err,null]);
    console.log('err',err);
    console.log('data',data);
})()