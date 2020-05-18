var arr=[44,23,2,1,4];
function swap(arr,i,j){
        var temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    
}
function bubble(arr){
    for(var i=0;i<arr.length-1;i++){
        //比较次数
        for(var j=0;j<arr.length-1-i;i++){
            //如果前一个数大于后一个数就进行交换
            if(arr[j]>arr[j+1])
            swap(arr,j,j+1);
        }
    }
    return arr;
}
console.log(bubble(arr));