function promiseAll(arr){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            return new TypeError("arr must be an array");
        }
        let result=[];//存放结果
        let count=0;//记录有几个resolved
        arr.forEach((val,index)=>{
            val.then((res)=>{
               
              result[index]=res;
              count++;
              if(count==arr.length){
                  resolve(result);
              }
            },(err)=>{
                reject(err)
                
            });
        })
    })
}
let p1=Promise.resolve(1);
p2 = Promise.resolve(2),
    p3 = Promise.reject(3);

promiseAll([p1, p2, p3]).then((res)=>{
    console.log(res, 'res')
}, (err)=>{
    console.log(err, 'err')
})