//$("input[type=submit]").click(function(){
//alert("Thank you for your message. We'll be in touch soon!");
//});
function customAlert(){
	//getElementById.styledAlert.style.display= "block";
	$("form").css("opacity","0.5");
	$("#styledAlert").css("display","block").css("opacity","1");
}
$('input[type="submit"]').click(customAlert);