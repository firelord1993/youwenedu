$("#chuz").mouseover(function(){
	$(".kemu2").css({"display":"block"});
	$(".kemu1,.kemu3,.kemu4").css({"display":"none"});
})
$("#cc").mouseover(function(){
	$(".kemu4").css({"display":"block"});
	$(".kemu1,.kemu3,.kemu2").css({"display":"none"});
})
$("#xx").mouseover(function(){
	$(".kemu1").css({"display":"block"});
	$(".kemu2,.kemu3,.kemu4").css({"display":"none"});
})
$("#gz").mouseover(function(){
	$(".kemu3").css({"display":"block"});
	$(".kemu1,.kemu2,.kemu4").css({"display":"none"});
})
$(".gofh").click(function(){
	$("body,html").animate({scrollTop:0},1000);
})
var fixbo=function(){
//	if($(".fsubmit").bottom==0)
console.log($("#fp-nav ul li a").attr("class"))
}
