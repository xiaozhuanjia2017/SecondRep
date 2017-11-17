var $index=0;//记录 滑动位置 0 1 2 3
$(document).ready(function(){
	$(".box").swipe({
		//监听滑动 参2 滑动的方向 up down left right
		swipe:function(event,direct){
			console.log("方向:"+direct);
			if(direct=="up"){
				//往上滑
				//$index++;
				$index=$index+1;
				upAndDown();
			}else if(direct=="down"){
				//往下滑
				//$index--;
				$index=$index-1;
				upAndDown();
			}
		}
	});
	
	//第一个页面加载完以后就执行这个 淡入效果 参2:动画执行完以后 会执行这个函数
	$(".page1 .page1-building").fadeIn(2000,function(){
		$(".page1 .page1-flight").animate({width:"70%"},2000);
	});
	
	//给灯设置点击监听器
	$(".page4 .page4-light-off").on("click",function(){
		$(".page4 .page4-light-off").attr("src","img/lightOn.png");
		$(".page4 .page4-bg").fadeOut(500);
		$(".page4 .page4-title").fadeOut(500,function(){
			$(".page4 .page4-on-bg").fadeIn(2000);
		});
	});
	
	//设置音乐
	var audio=document.getElementById("audio");
	audio.play();//先播放
	$(".music-btn").on("click",function(){
		//判断播放状态
		if(audio.paused){
			//播放暂停状态
			audio.play();//播放
			$(".music-btn").attr("src","img/musicBtn.png");
		}else{
			//播放状态
			audio.pause();//暂停
			$(".music-btn").attr("src","img/musicBtnOff.png");
		}
	});
	
});
function upAndDown(){
	if($index<0){
		$index=0;
	}else if($index>3){
		$index=3;
	}else{// 大于等于0  小于等于3
		$(".scene").animate({top:-100*$index+"%"},1000,change);
	}
}

/*页面切换 完成后 会执行这个函数*/
function change(){
	if($index==0){
		//当前切换到了场景一
	}else if($index==1){
		//当前切换到了场景二
		$(".page2 .page2-bg").fadeIn(1000,function(){
			//文本一 进入
			$(".page2 .page2-text1").animate({right:"1%"},1000,function(){
				$(".page2 .page2-text2").animate({right:"1%"},1000);
			});
		});
	}else if($index==2){
		//当前切换到了场景三
		$(".page3 .page3-title1").fadeIn(1000,function(){
			$(".page3 .page3-title1").fadeOut(1000);
			$(".page3 .page3-title2").fadeIn(1000,function(){
				$(".page3 .page3-title2").fadeOut(1000);
				$(".page3 .page3-bus").animate({left:"-70%"},2000);
				$(".page3 .page3-avatar").animate({right:"20%"},2000,function(){
					//第二个小场景
					//隐藏第一个小场景
					$(".page3 .page3-station").fadeOut(1000);
					$(".page3 .page3-bus").fadeOut(1000);
					$(".page3 .page3-avatar").fadeOut(1000);
					
					//显示小场景二
					$(".page3 .page3-wall").fadeIn(1000);
					$(".page3 .page3-avatar1").fadeIn(1000,function(){
						$(".page3 .page3-space").fadeIn(2000,function(){
							$(".page3 .page3-where").fadeIn(1000);
						});
					});
					
				});
				
				
				
			});
		});
			
	}else if($index==3){
		//当前切换到了场景四   
		
	}
}

