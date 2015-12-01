
$(document).ready(function(){

	refreshScroll();

	
	$('.view-content').click(function(){

		if( $('header').hasClass('active')){
			
			slideHeaderDown(event);

		} else {
			slideHeaderUp(event);	
		}

	});


});

$(window).scroll(function(){
		refreshScroll();	
});


function slideHeaderUp(event){
	event.preventDefault();
	var activeState = $('.display-active').outerHeight();
	console.log(activeState);
	$(window).scrollTo('#container-open', 1000, {offset: - activeState -15,
		onAfter:function() {
			$('header').addClass('active');
			$('body').css('overflow','inherit');
		 } 

	});	

}


function slideHeaderDown(event){
	event.preventDefault();
	$(window).scrollTo('#container', 1000);
	$('header').removeClass('active');

}

function refreshScroll(){
	var containerPosition = $('#container-open').offset().top;
	containerPositionRefresh = containerPosition - 300; 
	if( $('header').hasClass('active') && $(window).scrollTop() <= containerPositionRefresh ){
		$('header').removeClass('active');
	}else if ($(window).scrollTop() >= containerPosition ){
		$('header').addClass('active');
		$('body').css('overflow','inherit');

	} 
}
