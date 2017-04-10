// Create a global variable for the total
var total;

// Create a function you can run when you submit the field Hint: .submit() in jQuery

document.getElementById("getMoney").submit();



// In your enter function, remember we can use .append() in jQuery to add things to HTML elements


function getMoney() {
	$('entries').apend('<tr><th></th><thd>') + total + '</td></tr>'();
}

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

getMoney = parseFloat(total);