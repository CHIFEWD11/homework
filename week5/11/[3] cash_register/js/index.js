/*
--Create a global variable for the total
--Create a function you can run when you submit the field Hint: .submit() in jQuery
--In your enter function, remember we can use .append() in jQuery to add things to HTML elements
---Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing 
with displaying a "currency friendly" format (HINT: create an additional function to format your number into a 
"currency friendly" format)
*/
console.log("please work")
// total will store the running total, starting at 0
var total = 0;

// When the user submits the form, run the `enter` function
$('#entry').submit(enter);

function convertToCurrency(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}

// `enter()` reads the user's input, and updates the receipt
function enter(addItem) {
  var newItem;
  var currency;
  newItem = $('#newEntry').val();
  newItem = parseFloat(newItem);
  currency = convertToCurrency(newItem);
  $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
  total = total + newItem;
  $('#total').html(convertToCurrency(total));

    // Prevent form submission
  addItem.preventDefault();
}

// Use this to convert a number to U.S. currency format
function convertToCurrency(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}