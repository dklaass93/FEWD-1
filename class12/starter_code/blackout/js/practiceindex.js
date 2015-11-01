$(document).ready(function(){
	var lights = 'on';

	$('#light_switch').click(toggleLight);

	function toggleLight(){
		if (lights === 'on'){
			$('body').css('background-color', 'black');
		lights = 'off';
		} else if (lights === 'off') {
			$('body').css('background-color', 'white')
			lights = 'on';
		}
	}

});