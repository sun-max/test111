function promiseAll(arr){
    new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            return new TypeError("arr is not an array");
        }
        let count=0;
        let newArr=[]
        arr.forEach((val,index)=>{
            val.then((res)=>{
                newArr[index]=res;
                count++;
                if(count==newArr.length){
                    resolve(newArr);
                }

            },(err)=>{
                reject(err)
            }
            )
        })
    })
}