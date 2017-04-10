// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user

$('#fahrenheit_to_celsius').on('click', convertToCelsius); 

function convertToCelsius(){		

	var fahrenheit = $('#temperature').val();

	if (isNaN(fahrenheit) || fahrenheit === '') {	
		$('.error-message').html('Please enter a temperature to convert.').show();
		$('#temperature').addClass('error');
		$('#result').hide();

	} else {
		$('.error-message').hide();
		$('#temperature').removeClass('error');
		$('#result').show() 
		fahrenheit = parseFloat(fahrenheit);

		var celsius = (fahrenheit - 32) / 1.8;
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
		celsius = celsius.toFixed(2);

		// Hint: http://dev.w3.org/html5/html-author/charref
		$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
		$('#temperature').val('');

		//Change the background color depending on the temperature	
		if(celsius > 18) {
			$('body').removeClass('cold').addClass('hot');
		} else {
			$('body').removeClass('hot').addClass('cold');
		}
	}
}


$('#celsius_to_fahrenheit').on('click', convertToFahrenheit);

function convertToFahrenheit(){

	var celsius = $('#temperature').val();

	if (isNaN(celsius) || celsius === '') {	
		$('.error-message').html('Please enter a temperature to convert.').show();
		$('#temperature').addClass('error');
		$('#result').hide();

	} else {
		$('.error-message').hide();
		$('#temperature').removeClass('error');
		$('#result').show()
		celsius = parseFloat(celsius);

		var fahrenheit = 1.8 * celsius + 32;
		fahrenheit = fahrenheit.toFixed(2);

		$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
		$('#temperature').val('');

		//Change the background color depending on the temperature	
		if(fahrenheit > 65) {
			$('body').removeClass('cold').addClass('hot');
		} else {
			$('body').removeClass('hot').addClass('cold');
		}
	}
}
