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

// $('#fahrenheit_to_celsius').on('click', function () {

// 	var fahrenheit = $('#temperature').val();
// 	fahrenheit = parseFloat(fahrenheit);


// 	var celsius = (fahrenheit - 32) / 1.8;
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// 	celsius = celsius.toFixed(2);

// 	// Hint: http://dev.w3.org/html5/html-author/charref
// 	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
// 	$('#temperature').val('');
// });



//Variables//

var fc = $("#fahrenheit_to_celsius");
var cf = $("#celsius_to_fahrenheit");
var res = $("#result");
var err = $("#error-message");


//To Fahrenheit//

function toFahrenheit() {
	var celsius = $('#temperature').val();
	celsius = parseFloat(celsius);
	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);
	$('#result').html(fahrenheit);
}


$('#celsius_to_fahrenheit').on('click', function () {
	toFahrenheit();

	// $("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
	$('#temperature').val('');
});


//To Celsius//

function toCelsius() {
	var fahrenheit = $('#temperature').val();
	fahrenheit = parseFloat(fahrenheit);
	var celsius = (fahrenheit - 32) / 1.8;
	celsius = celsius.toFixed(2);
	$('#result').html(celsius);
}

$('#fahrenheit_to_celsius').on('click', function () {
	toCelsius();

	// $("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
	$('#temperature').val('');
});












