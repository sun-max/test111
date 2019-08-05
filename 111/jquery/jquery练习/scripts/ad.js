$(function(){
	
	var $imgroll=$('#jnImageroll div a');
	$imgroll.css('opacity','0.7');
	var $imgWrap = $('#JS_imgWrap img');
	$imgroll.mouseover(function(){
		idx = $(this).index();
      show(idx);
	}).eq(0).mouseover();
})

function show(index){
	var $imgroll=$('#jnImageroll div a');
	var $imgWrap = $('#JS_imgWrap img');
	$imgroll.eq(index).addClass('chos').css('opacity','1').siblings().removeClass('chos').css('opacity','0.7');
	$imgWrap.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
}