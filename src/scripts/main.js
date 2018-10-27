$(function(){
	console.log("start !")
} )
// $("ul li p").hide();
// $("ul li h2").on("click",function(){
// 	var $arr = $(this).parent();
//     var $this = $(this).parent().find('p');
//     $("li p").not($this).hide();
//     $("li").not($arr).removeClass("arrow-down")
//     // here is what I want to do
//     $this.toggle();
//     $arr.toggleClass("arrow-down");
// });


/*

$("item").each


*/

$("ul li p").hide();
$("ul li h2").on("click",function(){
	var $this = $(this).parent().find("p");
	var $arr = $(this).parent();
	$("ul li").not($arr).removeClass("arrow-down");
	$("li p").not($this).hide();
	$this.toggle(5000);
	$arr.toggleClass("arrow-down");

})

setTimeout(function(){
	console.log(1);
})
setInterval(function(){
	console.log(2);
})
