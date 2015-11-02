$(document).ready(function(){

	//When user clicks the submit button, invoke this function to set the new background image
	$('#submit-btn').click(setNewBackground);

	//Run it as an event to prevent the submit to link you to another page
	function setNewBackground(event){
		event.preventDefault();

		//Store each city image as a value for the function to recognize
		var city = $('#city-type').val();
				console.log(city);	

		//Run test to see if city matches certain string value being typed as a new entry
		if (city === 'Austin' || city === 'ATX'){
		//If test is true, select the class Austin in the CSS and use that to switch the background
			$('body').attr('class', 'austin');
		}else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area'){
			$('body').attr('class', 'sf');

		//Have test recognize multiple string values for one specific result
		}else if (city === 'Sydney' || city === 'SYD'){
			$('body').attr('class', 'sydney');
		}else if (city === 'New York City' || city === 'NYC' || city === 'New York'){
			$('body').attr('class', 'nyc');
		}else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX'){
			$('body').attr('class', 'la');
		}


	}

});