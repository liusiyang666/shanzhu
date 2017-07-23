$(function(){
			var t = 60;
			function jian(){
				t--
				$(".times").html(t+"s")
				if(t<1){
				$(".times").html("重新发送")
				}
			}
			setInterval(jian,1000)
			
		})

document.getElementById("clicks").addEventListener("click",function(){
	var val = $("#vall").val()
	if(!isNaN(val)){
		if(val == "") {
					$(".btnyz").css("display", "black")
					$("#texts").html("请输入验证码!")
					return
				} else{
					$(".btnyz").css("display", "none")
					$("#texts").html("验证码为"+val)
				}
	}else{
		$(".btnyz").css("display", "black")
		$("#texts").html("验证码为数字！")
	}
	
})