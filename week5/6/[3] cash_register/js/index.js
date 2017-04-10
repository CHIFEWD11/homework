// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
var total = 0;
var amount = 0;

function updateTotal() {
	amount = $('#newEntry').val();
	amount = parseInt(amount);
	total += amount;
	$('#total').html('$' + total);
	$('#newEntry').val('');

}


function addToList() {			
	$('#entries').append('<tr><td>'+'$' + amount + '</td></tr>');

}

function addToTotal() {
	updateTotal();
	addToList();

	return false; //why is this guy necessary???
}

$('#entry').submit(addToTotal);