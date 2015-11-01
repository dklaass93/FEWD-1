
$(document).ready(function(){
	//Setting up a variable to store whether the lights are on or off.
	var lightsOn = true;

	//Listener waiting for user to click the light switch button
	$('#light_switch').click(toggleLights);

	function toggleLights(){
		//Test to see if the lights are on
		if(lightsOn){
			//If yes, change background color to black
			$('body').css('background-color', 'black');

			//Update the current state to the lights 
			lightsOn = false;

		//Test to see if the lights are off	
		}else if(lights === 'off'){
			
			//if they are, change the background to white
			$('body').css('background-color', 'white');

			//Update the current state to the lights are on
			lightsOn = true;
		}
	}

});

