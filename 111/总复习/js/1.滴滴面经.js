// 1.字符串转数组的方式
arr=eval(str);
arr=Json.parse(str);

var str="1,2,3,4,5";
// var arr=str.split(",");//逗号是分隔符
// var arr = str.replace(/\"/g, "");
var arr=str.join(",");
console.log(arr);

// 把一个URL中携带的参数以数组的形式显示出来
function geturlArr(){
    var arr=[];
    var url="http://www.baidu.com/index.html?a=1&b=2&c=3&d=4";
    var str=url.split("?")[1];
    var arr1=str.split("&");
    for(var i=0;i<arr1.length;i++){
        var value=arr1[i].split('=')[1];
        arr.push(value);
    }
    return arr;
}
console.log(geturlArr());

//正则表达式，匹配数字和字母，具体说出匹配手机号的正则表达式
var  myreg=/^[1][3,4,5,7,8][0-9]{9}$/;


//1)defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行
// 2)async是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关

//页面的性能优化都做过哪些
/**
 * 1.资源压缩与合并
 * HTML压缩 css代码压缩  js压缩与混乱  文件合并
 * 2.非核心代码异步加载
 * （1）async方式
 * async属性规定一旦脚本可用，则会异步执行
 * async属性仅适用于外部脚本
 * 如果是多个脚本，该方法不能保证脚本按顺序进行。        
 * (2)defer方式
 * 兼容所有浏览器
 * 规定是否对脚本执行进行延迟，直到页面加载为止
 * 如果是多个脚本，可以确保所有设置了defer属性的脚本按顺序进行
 * 如果脚本不会改变文档的内容，可将defer属性加入到script标签中，以便于加快处理文档的速度；
 * (3).动态创建script标签
 * 在还没定义defer与async之前，异步加载的方式是动态创建script，通过window.onload方法确保页面加载完毕再将script
 * 标签插入dom中
 * 3.利用浏览器缓存
 * 4.使用CDN
 * 5.预解析DNS
 * 
 */


/*
遇到的常见的浏览器兼容问题

1.不同浏览器的标签默认的外补丁和内补丁不同
    *{
        margin:0;
        padding:0;
    }
2.ie6双边距问题：块属性float后，又有横向的margin情况下，在IE6显示margin比设置的大
ie6中后面一块被顶到下一行
解决方案：在块标签中设置 display:inline;

3.边距重叠问题：当相邻的两个元素都设置了margin边距时，margin取最大值，舍弃最小值
解决方案：为了不让边重叠，可以给子元素增加一个父级元素，并设置父级元素overflow:hiddden;

4.cursor:hand 显示手型在safari 上不支持
解决方案：统一使用 cursor:pointer

5.两个块级元素，父元素设置了overflow:auto；子元素设置了position:relative ;且高度大于父元素，在IE6、IE7会被隐藏而不是溢出；
解决方案：父级元素设置position:relative

6.图片默认有间距
解决方案：使用float 为img 布局

7.当标签的高度设置小于10px，在IE6、IE7中会超出自己设置的高度
解决方案：超出高度的标签设置overflow:hidden,或者设置line-height的值小于你的设置高度
*/





Vue实现一个页面，提供了接口，输入框，一个表单，表单里面有个人信息，通过在输入框中输入姓名或者id可以在页面中显示出想要查找的数据