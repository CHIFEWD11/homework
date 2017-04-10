//when user clicks #fahrenheit_to_celsius
$("#fahrenheit_to_celsius").on("click", function() {
//text in input is assigned a variable f
	var f = parseInt($("#temperature").val(),10);
//the calculated celcius result is assigned a variable toC
	var toC; 
//variable toC is given a value equal to the value of (f-32)/1.8
	var toC = (f -  32)  *  5/9;
//variable with rounded toC
	var cFromF = Math.round(toC)
//If f is less than -40 
	if ( f < -40 ) {
		$("#result").html("<p>Um...that's "+ cFromF + "&deg; celsius...</p>" + "<p> Either you're in space and we should be measuring in Kelvin, or that's a typo.</p>");
		$("body").removeClass("perfect hot burning brisk hygge").addClass("space");
		$("section").removeClass("redBkg","whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If f is less than 33 - Freezing stay indoors
	else if (f > -41 && f < 33) {
		$("#result").html("<p>That's "+ cFromF + "&deg; celsius.</p>" + "<p> It's freezing out. Better stay indoors and take pictures of your hygge lifestyle...or whatever.</p>");
		$("body").removeClass("space perfect burning hot").addClass("hygge");
		$("section").removeClass("redBkg").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}	
//If 32 < f < 60
	else if (f > 32 && f < 60) {
		$("#result").html("<p>That's "+ cFromF + "&deg; celsius.</p>" + "<p> It's cool and crisp out. Better wear a jacket while you walk around staring at your phone.</p>");
		$("body").removeClass("space perfect hot burning hygge").addClass("brisk");
		$("section").removeClass("redBkg").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 59 < f < 85 
	else if (f > 59 && f < 85) {
		$("#result").html("<p>That's "+ cFromF + "&deg; celsius.</p>" + "<p> It's beautiful weather for enjoying the companionship of good friends...and Angry Birds.</p>");
		$("body").removeClass("space brisk hot burning hygge").addClass("perfect");
		$("section").removeClass("redBkg").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 84 < f < 100
	else if (f > 84 && f < 110) {
		$("#result").html("<p>That's "+ cFromF + "&deg; celsius.</p>" + "<p> It's a perfect day to go to the beach and  obsessively take selfie after selfie.</p>");
		$("body").removeClass("space brisk perfect burning hygge").addClass("hot");
		$("section").removeClass("redBkg").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 99 < f  indoors hot
	else if (f > 109) {
		$("#result").html("<p>Um...that's "+ cFromF + "&deg; celsius.</p>" + "<p> Either the end is nigh and you should keep an eye out for horsemen, or that's a typo.</p>");
		$("body").removeClass("space brisk hot perfect hygge").addClass("burning");
		$("section").removeClass("whiteBkg").addClass("redBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}	
//If input value is blank on click, show error
	else if (isNaN(f))	{	
		$("#temperature").addClass("error");
		$(".error-message").show(1000);
	}
});

//when user clicks #celsius_to_fahrenheit
$("#celsius_to_fahrenheit").on("click", function() {
//text in input is assigned a variable f
	var c = parseInt($("#temperature").val(),10);
//the calculated celcius result is assigned a variable toC
	var toC; 
//variable toC is given a value equal to the value of (f-32)/1.8
	var toC = (c +  32)  /  (5/9);
//variable with rounded toC
	var fFromC = Math.round(toC)
//If f is less than -40 
	if ( c < -40 ) {
		$("#result").html("<p>Um...that's "+ fFromC + "&deg; fahrenheit...</p>" + "<p> Either you're in space and we should be measuring in Kelvin, or that's a typo.</p>");
		$("body").removeClass("perfect hot burning brisk hygge");
		$("body").addClass("space");
		$("section").removeClass("redBkg","whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If f is less than 33 - Freezing stay indoors
	else if (c > -41 && c < 1) {
		$("#result").html("<p>That's "+ fFromC + "&deg; fahrenheit.</p>" + "<p> It's freezing out. Better stay indoors and take pictures of your hygge lifestyle...or whatever.</p>");
		$("body").removeClass("space perfect hot burning");
		$("body").addClass("hygge");
		$("section").removeClass("redBkg");
		$("section").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}	
//If 32 < f < 60
	else if (c > 0 && c < 16) {
		$("#result").html("<p>That's "+ fFromC + "&deg; fahrenheit.</p>" + "<p> It's cool and crisp out. Better wear a jacket while you walk around staring at your phone.</p>");
		$("body").removeClass("space perfect hot burning hygge");
		$("body").addClass("brisk");
		$("section").removeClass("redBkg");
		$("section").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 59 < f < 85 
	else if (c > 15 && c < 30) {
		$("#result").html("<p>That's "+ fFromC + "&deg; fahrenheit.</p>" + "<p> It's beautiful weather for enjoying the companionship of good friends...and Angry Birds.</p>");
		$("body").removeClass("space brisk hot burning hygge");
		$("body").addClass("perfect");
		$("section").removeClass("redBkg");
		$("section").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 84 < f < 100
	else if (c > 29 && c < 43) {
		$("#result").html("<p>That's "+ fFromC + "&deg; fahrenheit.</p>" + "<p> It's a perfect day to go to the beach and  obsessively take selfie after selfie.</p>");
		$("body").removeClass("space brisk perfect burning hygge");
		$("body").addClass("hot");
		$("section").removeClass("redBkg");
		$("section").addClass("whiteBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}
//If 99 < f  indoors hot
	else if (c > 42) {
		$("#result").html("<p>Um...that's "+ fFromC + "&deg; fahrenheit.</p>" + "<p> Either the end is nigh and you should keep an eye out for horsemen, or that's a typo.</p>");
		$("body").removeClass("space brisk hot perfect hygge");
		$("body").addClass("burning");
		$("section").removeClass("whiteBkg").addClass("redBkg");
		$("#temperature").removeClass("error");
		$(".error-message").hide();
	}	
//If input value is blank on click, show error
	else if (isNaN(c))	{	
		$("#temperature").addClass("error");
		$(".error-message").show(1000);
	}
});






