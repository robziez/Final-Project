$("#hamburger").on("click", function(){
    $(".dropDown").slideToggle();
});
function customAlert(){
	//getElementById.styledAlert.style.display= "block";
	$("form").css("opacity","0.5");
	$("#styledAlert").css("display","block").css("opacity","1");
}
$('input[type="submit"]').click(customAlert);

    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528
      });
    });
