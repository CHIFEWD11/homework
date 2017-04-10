//get the value of the price in #newEntry
//parseFloat it and fix it to 2 decimal places
//take that value and convertToCurrency
//take the return and add it to the total, then update the total (or add up the entries and put the result in # total)


// Create a global variable for the total
var total;
// Create a function you can run when you submit the field Hint: .submit() in jQuery

function getPrice() {
	var price = $("#newEntry").val();
	price = parseFloat(price);
	price = price.toFixed(2);
	$("#entries").append("<tr><th></th><td>" + price + "</td></tr>");
}

//function updateTotal() {    
 //   total = (price + $("#total"));    
//}

/*function clearValue() {
	$("newEntry").val("");
}

function addToReceipt() {
	$("#entries").append("<tr><th></th><td>" + price + "</td></tr>");
	clearValue();
}
*/
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

function convertToCurrency (total) {
	var currency = "$" + currency;
	return currency;
}
//the script

$("#entry").submit(function(e) {
	event.preventDefault();
	getPrice();
});
	
	


