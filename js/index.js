$(".header-search").mouseover(function(){
	$(".sear-text").css('border','1px solid #999');
	$(".sear-click").css('border','1px solid #999');
	
});
$(".header-search").mouseleave(function(){
	$(".sear-text").css('border','1px solid #e0e0e0');
	$(".sear-click").css('border','1px solid #e0e0e0');
	
});
$(".null").mouseover(function(){
	$(".sear-click").css('background','#ff6700');
	$(".sear-pic").css('background','url(img/search1.png) no-repeat');
	
});
$(".null").mouseleave(function(){
	$(".sear-click").css('background','#FFF');
	$(".sear-pic").css('background','url(img/search.png) no-repeat');
	
});
var index=null;
var nowtime=0,timer;
time();
$('.h_h_c_bannerlist ul li').click(function(){
	index=$(this).index();
	$(this).addClass('act').siblings().removeClass('act');
	$('.h_h_c_banner ul li').eq(index).fadeIn().siblings().fadeOut();
	clearInterval(timer);
	time();
});
$('.h_h_c_leftbtn').click(function(){
	if(new Date()-nowtime>1000){
		nowtime=new Date();
		index--;
		if(index<0)index=5;
		$('.h_h_c_banner ul li').eq(index).fadeIn().siblings().fadeOut();
		$('.h_h_c_bannerlist ul li').eq(index).addClass('act').siblings().removeClass('act');
		clearInterval(timer);
		time();
	}
});
$('.h_h_c_rightbtn').click(function(){
	if(new Date()-nowtime>1000){
		nowtime=new Date();
		index++;
		if(index>5)index=0;
		$('.h_h_c_banner ul li').eq(index).fadeIn().siblings().fadeOut();
		$('.h_h_c_bannerlist ul li').eq(index).addClass('act').siblings().removeClass('act');
		clearInterval(timer);
		time();
	}
});
function time(){
	timer=setInterval(function(){
		index++;
		if(index>5)index=0;
		$('.h_h_c_banner ul li').eq(index).fadeIn().siblings().fadeOut();
		$('.h_h_c_bannerlist ul li').eq(index).addClass('act').siblings().removeClass('act');
	},3000);
}
var star_product_box =document.querySelector('.star-product-main-box');
$('.icon-normal-right').click(function(){
	$(this).removeClass('icon-act').siblings().addClass('icon-act');
	var box_left=star_product_box.offsetLeft;
	if(box_left>=0){
		star_product_box.style.left=star_product_box.offsetLeft-1240+'px';
	}
});
$('.icon-normal-left').click(function(){
	$(this).removeClass('icon-act').siblings().addClass('icon-act');
	var box_left=document.querySelector('.star-product-main-box').offsetLeft;
	if(box_left<0){
		star_product_box.style.left=star_product_box.offsetLeft+1240+'px';
	}
});
$('.household-top-right a').hover(function(){
	var i = $(this).index();
	$(this).addClass('household-top-right-act').siblings().removeClass('household-top-right-act');
	$('.household-right ul').eq(i).addClass('household-right-block').siblings().removeClass('household-right-block');
});

