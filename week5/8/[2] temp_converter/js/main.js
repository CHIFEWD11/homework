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

	/*
 In groups of 3-4 test out the functional temperature converter and write pseudo code to convert a temperature from Fahrenheit to Celsius


 1. Start with the functional temp converter 
 2. Create getCelsius() and getFahrenheit() functions 
 3. Bonus #1: Change the background-color depending on what temperature the user enters (example) 
 4. Bonus #2: Add error styles if the user doesn't enter a value in the form (example
*/

var temp;

function convertValue(){
	temp = $("#temperature").val();
    temp = parseFloat(temp);
}

function getCelsius(){
	temp = (temp - 32) / 1.8;
    $("#result").html(temp);
}

function getFahrenheit(){
	temp = 1.8 * temp + 32;
    $("#result").html(temp);
}

$("#fahrenheit_to_celsius").on("click", function(){
    convertValue();
    getCelsius();

});

$("#celsius_to_fahrenheit").on("click", function(){
	convertValue();
	getFahrenheit();
});

