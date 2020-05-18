var arr=[1,2,3,4,5,6,7,8];
//交换次数是arr.length/2.
// 第一个与最后一个交换，第二个与倒数第二个交换，第三个与倒数第三个交换
// 0 与 arr.length-1-0      1&arr.length-1-1   2&arr.length-1-2
for(var i=0;i<arr.length/2;i++){
    //arr[0] 与 arr[arr.length-1-0]
    //借助第三方变量，交换两个变量的值
    var temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr);