$(function(){
	if($(".slideBox").length > 0){
		jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:800,effect:"fold"});
	}
	
	if($(".classify_menu").length > 0){
		jQuery(".classify_menu").slide({ 
			type:"menu", //效果类型
			titCell:".mainCate", // 鼠标触发对象
			targetCell:".subCate", // 效果对象，必须被titCell包含
			delayTime:0, // 效果时间
			triggerTime:0, //鼠标延迟触发时间
			defaultPlay:false,//默认执行
			returnDefault:true,//返回默认
			startFun:function(i){
				$(".classify_menu>li.mainCate").eq(i).find(".subCate").css("top",-(36*i+10)+"px");
			}
		});

		jQuery(".nav_box").slide({ 
			type:"menu", //效果类型
			titCell:".classify_cz", // 鼠标触发对象
			targetCell:".classify_menu", // 效果对象，必须被titCell包含
			delayTime:0, // 效果时间
			triggerTime:0, //鼠标延迟触发时间
			defaultPlay:false,//默认执行
			returnDefault:true//返回默认
		});
	}

	$(".picture_menu>li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		$(".picture_switch>ul").eq(index).show().siblings().hide();
	});

	$(".ic_collect").click(function(){
		if($(this).attr("class") == "ic_collect"){
			$(this).addClass("on");
			$(this).html("已收藏");
		}else{
			$(this).removeClass("on");
			$(this).html("收藏");
		}
	});

	$(".attention_btn").click(function(){
		if($(this).attr("class") == "attention_btn"){
			$(this).addClass("on");
			$(this).html("已关注");
		}else{
			$(this).removeClass("on");
			$(this).html("关注");
		}
	});

	$(".attention_btn_1").click(function(){
		if($(this).attr("class") == "attention_btn_1"){
			$(this).addClass("on");
			$(this).html("取消关注");
		}else{
			$(this).removeClass("on");
			$(this).html("关注");
		}
	});

	$(".comment_ul>li").each(function(i){
		if(i < 4){
			$(".comment_ul>li").eq(i).css("display","table");
		}
	});

	$(".unfold_btn").click(function(){
		if($(this).attr("class") == "unfold_btn"){
			$(this).addClass("on");
			$(this).html("收起");
			$(".comment_ul>li").css("display","table");
		}else{
			$(this).removeClass("on");
			$(this).html("展开");
			$(".comment_ul>li").each(function(i){

				if(i < 4){
					$(".comment_ul>li").eq(i).css("display","table");
				}else{
					$(".comment_ul>li").eq(i).css("display","none");
				}

			});
		}
	});

	// person
	$(document).click(function(){
		$(".person_menu").hide();
		$(".tx_con").removeClass("on");
	});

	$(".tx_con").click(function(event){
		if($(this).attr("class") == "tx_con"){
			$(this).addClass("on");
			$(".person_menu").show();
		}else{
			$(this).removeClass("on");
			$(".person_menu").hide();
		}
		event.stopPropagation();
	});


	$(".order_menu>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".order_box>div").eq(index).show().siblings().hide();
        $(".compile_btn").show();
        $(".order_cz").hide();
        $(".order_box input.input_1").hide();
        $(':checkbox[name=inputName]').prop('checked', false);
    });
    
    // 编辑
    $(".compile_btn").click(function(){
        var index = $(".order_menu>li.on").index();
        $(this).hide();
        $(".order_cz").show();
        $(".order_box>div").eq(index).find("input.input_1").show();
    });

    // 完成
    $(".complete_btn").click(function(){
        $(".compile_btn").show();
        $(".order_cz").hide();
        $(".order_box input.input_1").hide();
        $(':checkbox[name=inputName]').prop('checked', false);
    });

    // 删除
    $(".delete_btn").click(function(){
        var allcheck = $(':checkbox[name=inputName]');
        var number = 0;
        for(var i = 0;i < allcheck.length;i++){
            if(allcheck[i].checked){
                number++;
            }
        }
        if(number == 0){
            alert("请选择要删除的内容！");
        }else {
            $("#deletePopId").show();
            $(".confirm_btn").unbind("click");
            $(".confirm_btn").click(function(){
                var flag = true;
                if(flag == true){
                    // 批量删除成功
                    $(':checked').parents("li").remove();
                    closePopFunc(this);
                }
            });
        }
    });
});

// 弹出框
function popRemind(id){
    $("#" + id).css("display","block");
}

// 关闭弹出框
function closePopFunc(obj){
    $(obj).parents(".wrapper_box").css("display","none");
}