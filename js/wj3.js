document.getElementById("clicks").addEventListener("click",function(){
	var val = $("#vall").val()
	
		if(val=="") {
					$(".btnyz").css("display", "black")
					$("#texts").html("不能为空!")
					return
				} else{
					$(".btnyz").css("display", "none")
					$("#texts").html("密码重置成功!")
				}
	})
