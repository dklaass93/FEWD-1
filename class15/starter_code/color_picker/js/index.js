$(document).ready(function(){

$('li').click(function(){
	var buttonClassName = $(this).attr('class');
	$('body').attr('class', buttonClassName)
});

});




