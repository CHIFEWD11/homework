/*pseudo code	
f to c= (number - 32)/1.8
c to f= 1.8*number + 32

Declare a variable for temperature called temp
var #temperature = 'temp';

var floatNumber = parseFloat('temp');

When you click F to C, then grab the value out of the input that has an id of temperature using .val
$('#fahrenheit_to_celsius').on('click', function(){
	$('#fahrenheit_to_celsius').val('temp').html((temp - 32)/1.8).parseFloat('temp');
	$('#result').select('p').html('temp');
});

Put result on page by grabbing the empty p with the ID of "result" and change the HTML to the result of the formula
input will need to be converted into a float (parseFloat)


When you click C to F, then grab the value out of the input that has an id of temperature using .val
$('#fahrenheit_to_celsius').on('click', function(){
	$('#celsius_to_fahrenheit').val('temp').html((1.8*'temp' + 32).parseFloat('temp')

});

Put result on page by grabbing the empty p with the ID of "result" and change the HTML to the result of the formula
input will need to be converted into a float (parseFloat)
*/

function convertStringToFloat(){
	temp = $('#temperature').val();
	temp = parseFloat(temp);
}

function farenheitToCelsius(){
	temp = (temp - 32)/1.8;
}

function celsiusToFarenheit(){
	temp = 1.8 * temp + 32;
}

$('#fahrenheit_to_celsius').on('click', function(){
	convertStringToFloat();
	farenheitToCelsius();
	$('#result').html(temp);
});

$('#celsius_to_fahrenheit').on('click', function(){
	convertStringToFloat();
	celsiusToFarenheit();
	$('#result').html(temp);
});