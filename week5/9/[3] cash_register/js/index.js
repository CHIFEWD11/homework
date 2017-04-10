// Create a global variable for the total

var total = 0;
var newVal = $('#newEntry').val();


// Create a function you can run when you submit the field Hint: .submit() in jQuery


$('button').on('click', function() {
	newVal = $('input#newEntry').val();
	$('.purchases').append('<li>' + newVal + '</li>');
})

function toTotal() {
	var total = $(temp);
}


// function toFahrenheit() {
// 	var celsius = $('#temperature').val();
// 	celsius = parseFloat(celsius);
// 	var fahrenheit = 1.8 * celsius + 32;
// 	fahrenheit = fahrenheit.toFixed(2);
// 	$('#result').html(fahrenheit);
// }



// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
// Homework:
// Build receipt calculator. Dollar sign. total value. and cents. so it looks like --> $500.00. Use the append function to add the costs togehter at the bottom. (update the html of this thing that already has an id on it for you)
// 	Pseudo Code:
// 	Define a total
// 	Total can be 0

// 	Select the text box on the page to get the value. 

// 	When we get taht value, we way total = total, plus whatever came into the value.

// 	Now, total should be whatever was added before to the global variable which was defined at the top.
