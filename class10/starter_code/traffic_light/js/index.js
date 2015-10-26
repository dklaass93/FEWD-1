//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

	// Code goes here!
	$('#stopButton').click(illuminateStopLightRed);


	function illuminateStopLightRed(){
		clearLights();
		$('#stopLight').css('backgroundColor', 'red');
	}

	function clearLights() {
		$('.bulb').css('backgroundColor', 'black')
	}




});
