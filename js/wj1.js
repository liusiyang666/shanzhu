document.getElementById("clicks").addEventListener("click", function() {
			var val = $('#vall').val()
			if(!isNaN(val)) {
				if(val == "") {
					$(".btnyz").css("display", "black")
					$("#texts").html("请输入完整手机号!")
					return
				} 
				if(val.length ==11) {
					$(".btnyz").css("display", "none")
					$("#texts").html("我们将验证码发送到：" + val)
				} else {
					$(".btnyz").css("display", "block")
					$("#texts").html("你家手机号是"+val.length+"位的？")
				}

			} else {
				$(".btnyz").css("display", "block")
				$("#texts").html("手机号是数字，懂了吗？")
			}

		})