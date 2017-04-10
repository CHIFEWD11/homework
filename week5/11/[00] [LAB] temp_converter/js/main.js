
var temp;


function getCelsius() {
	temp = (temp- 32) / 1.8;
	$("#result").html(temp);
}

function getFahrenheit() {
	temp = 1.8 * temp + 32;
	$("#result").html(temp);
}

function getNumber() {
	$("#fahrenheit_to_celsius, #celsius_to_fahrenheit").on("click", function() {
	temp = $("#temperature").val();
	if (temp !== "") {
		$(".error-message").hide();
		temp = parseFloat(temp);
		if  ($("button").is("#fahrenheit_to_celsius")) {
			getCelsius();
		} 
		else {
			getFahrenheit();
		}
		console.log("please work");
	} 
	else {
		$(".error-message").html("Wrong!").show();
	}
})};

getNumber();
