// 1.快排
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var index=Math.floor(arr.length/2);
    num=arr.splice(index,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<num){
            left.push(arr[i]);

        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([num],quickSort(right));
}
arr=[1,4,6,8,2,3,10];
console.log(quickSort(arr));

// 冒泡：






      //2.1 二分查找（插入排序的一种）
       function binary_search(arr,key){
           var low=0;
           var high=arr.length-1;
           while(low<=high){
               var mid=parseInt((low+high)/2);
               if(arr[mid]==key) return mid;
               else if(arr[mid]>key) high=mid-1;
               else if(arr[mid]<key) low=mid+1;
           }
           return -1;
       }