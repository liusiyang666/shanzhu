$(function(){
	$("#title").tap(function () {
		$(".show").show();
		$(".show-1").animate({"top":"0"},{"duration":1000});
	});
	$(".show-2").tap(function(){
		$(".show").css("display","none");
		$(".show-1").animate({"top":"-16rem"},{"duration":1000});
	});
	$("#menu li").tap(function(){
		$(this).addClass("clo").siblings().removeClass("clo");
	})
})