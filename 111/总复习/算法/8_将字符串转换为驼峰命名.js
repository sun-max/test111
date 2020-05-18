var foo="get-element-by-id";
//根据某个字符进行切割

//获取每个元素中的第一个字符，并转换成大写
// console.log(arr[1].charAt(0).toUpperCase()+arr[1].substr(1,arr[1].length-1));
function reverseStr(str){
    var arr=str.split('-');
for(var i=1;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)

}
  return arr.join('');
}
//根据某个字符将数组转换为字符串
console.log(reverseStr(foo));