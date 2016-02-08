$(document).ready(function(){

$("#contact").click(function() {
	$("#outer-connect-form-wrapper").slideToggle();
	$("#connect-form-wrapper").slideToggle();
	$(".CTA").hide();
	$(".CTA-buttons").hide();
});

$("#connect-form-close").click(function(){
	$("#outer-connect-form-wrapper").fadeOut(800);
	$('#connect-form-wrapper').fadeOut(800);
	$(".CTA").show();
	$(".CTA-buttons").show();
});

// $("#outer-connect-form-wrapper").click(function(){
// 	$("#outer-connect-form-wrapper").fadeOut(800);
// 	$('#connect-form-wrapper').fadeOut(800);
// 	$(".CTA").show();
// 	$(".CTA-buttons").show();
// });

})

