 /*
Declare a variable for temp

 Formula to convert fahrenheit to celsius:

When you click "F to C" then...

	Grab the value out of the input has an id of temperature
	var temp = $("#temperature").val();
	HINT: .val()

	parseFloat the value that we received from the imput
	temperature = parseFloat(temperature)

	var temp = $("#temperature").val();Store the formula: (value - 32) / 1.8 ~ In the variable we called "temp"
	temperature = ("temp" - 32) / 1.8;

	Put the result on the page
	$("#fahrenheit to celcius").oc(click", function(){})
	Select the p with ID of "result" and change the html to the result of the formula



 Formula to convert celsius to fahrenheit:

 When you click "C to F" then...

	Grab the value out of the input has an id of temperature

	HINT: .val()

	parseFloat the value that we received from the imput

	Store the formula: (1.8 * value + 32 ~ In the variable we called "temp"

	Put the result on the page
	
	Select the p with ID of "result" and change the html to the result of the formula

(fahrenheit - 32) / 1.8;

1.8 * celsius + 32;*/

var temp;

$("#fahrenheit_to_celsius").on("click", function() {
getNumber();
getCelsius();

});

$("#celsius_to_fahrenheit").on("click", function() {
getNumber();
getFahrenheit();
});


function getNumber(){
	temp = $("#temperature").val();
	if(isNaN(temp)){
	$(".error-message").html("Please Enter a Number").show();
}else{
	temp = parseFloat(temp);
	$(".error-message").hide();

}
}

function getCelsius(){
	temp = (temp - 32) / 1.8;
	$("#result").html(temp);
}

function getFahrenheit(){
	temp = 1.8 * temp + 32;
	$("#result").html(temp);
}

/*function errorMessage(){
	if (temp!== #) {
	$(".error-message").html("Please Enter a Number");
}*/

