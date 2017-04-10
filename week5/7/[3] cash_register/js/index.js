// Create a global variable for the total

// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
// total will store the running total, starting at 0
// total will store the running total, starting at 0
var total = 0;

$('#entry').submit(enter);

function enter(event) {
var entry, currency;
  
event.preventDefault();
  
entry = $('#newEntry').val();
  
entry = parseFloat(entry);
currency = currencyFormat(entry);
  
$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
total = total + entry;
  
$('#total').html(currencyFormat(total));
  $('#newEntry').val('');
  
}

function currencyFormat(number) {
  
var currency = parseFloat(number);
currency = currency.toFixed(2);
currency = '$' + currency;
  
return currency;
  
}