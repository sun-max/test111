/* 品牌活动模块横向滚动 */
//文档就绪函数
$(function(){
    $("#jnBrandTab li").click(function(){ 
		$(this).addClass("chos").siblings().removeClass("chos");
		//获取当前点击按钮的索引
		var idx = $(this).index();
		showBrandList(idx);
		return false;
   }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
	var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth(true);
	rollWidth = rollWidth * 4; //一个版面的宽度
	$rollobj.animate({ left : -rollWidth*index},1000);
}
