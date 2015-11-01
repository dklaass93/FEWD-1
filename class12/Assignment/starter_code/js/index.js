$(document).ready(function(){

	$('#submit-btn').click(setNewBackground);

	function setNewBackground(event){
		event.preventDefault();

		var city = $('#city-type').val();
				console.log(city);	

		if (city === 'Austin' || city === 'ATX'){
			$('body').attr('class', 'austin');
		}else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area'){
			$('body').attr('class', 'sf');
		}else if (city === 'Sydney' || city === 'SYD'){
			$('body').attr('class', 'sydney');
		}else if (city === 'New York City' || city === 'NYC' || city === 'New York'){
			$('body').attr('class', 'nyc');
		}else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX'){
			$('body').attr('class', 'la');
		}


	}

});