
	function getCelsius(){
		var fahrenheit = $('#temperature').val();
	
	if(fahrenheit === ''){
        $(".error-message").show();
        $("#result").hide();
    }else{
        $(".error-message").hide();
        $("#result").show();
    }

	fahrenheit = parseFloat(fahrenheit);
	var celsius = (fahrenheit - 32) / 1.8;
	celsius = celsius.toFixed(2);
	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");	
	}

	function getFahrenheit(){
		var celsius = $('#temperature').val();
	if(celsius === ''){
	    $(".error-message").show();
	    $("#result").hide();
    } else {
	    $(".error-message").hide();
	    $("#result").show();
	}
	
	celsius = parseFloat(celsius);
	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);
		$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
	}

	function tempColor(){
		var celsius = $("#temperature").val();
		var fahrenheit = $("#temperature").val();
		if (fahrenheit === "" || celsius === ""){
			$("body").addClass("clear");
		}
		else if (fahrenheit < 50 || celsius < 10){
			$("body").addClass("cold");
		}
		else if (fahrenheit < 65 || celsius < 18.33){
			$("body").addClass("warm");
		}
		else if (fahrenheit < 90 || celsius < 32.22){
			$("body").addClass("hot");
			$("#result").append(" <strong>Dare to go higher?</strong>");
		}
		else if (fahrenheit < 212 || celsius < 100){
			$("body").addClass("death");
		}
		else {
			$("body").addClass("clear");
		}	
	}

	//the script

$("#fahrenheit_to_celsius").click(function() {
	$("body").removeClass();
	getCelsius();
	tempColor();
});
$("#celsius_to_fahrenheit").click(function() {
	$("body").removeClass();
	getFahrenheit();
	tempColor();
});

//this works, except any entry gives a blue background for celsius