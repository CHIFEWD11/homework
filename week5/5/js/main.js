/* Declare a variable for temp called "temp".

When you click "F to C" then
    Grab the value out of the input that has an id of temperature
    HINT: .val()
    parseFloat the value that we received from the input
    Store the formula: (value - 32) / 1.8 ~ In the variable we created called "temp"
    Put the result on the page
        Select the p with the ID of "result" and change the html to be the variable temp

When you click "F to C" then
    Grab the value out of the input that has an id of temperature
    HINT: .val()
    parseFloat the value that we received from the input
    Store the formula: 1.8 * value + 32 ~ In the variable we created called "temp"
    Put the result on the page
        Select the p with the ID of "result" and change the html to be the variable temp


Formula to convert fahrenheit to celsius: (fahrenheit - 32) / 1.8

Formula to convert celsius to fahrenheit: 1.8 * celsius + 32

console.log($('#temperature').val());
if (temp === ''){
	$('.error-message').html('wrong');
}else{

}

function sayHi () {
    console.log('hello');
}
*/





//var temp;

//function getValue() {
 //temp = $('#temperature').val();
    //temp = parseFloat(temp);
//}

// $('#fahrenheit_to_celsius').on('click', function(){
  
//    temp = (temp - 32) / 1.8;
//    $('#result').html(temp);
// });



// $('#celsius_to_fahrenheit').on('click', function(){
   
//     temp = 1.8 * temp + 32;
//     $('#result').html(temp);
// });

var temp;

function getValue() {
    temp = $('#temperature').val();
    temp = parseFloat(temp);

}

$('#fahrenheit_to_celsius').on('click', function(){
    getValue();
    temp = (temp - 32) / 1.8;
    $('#result').html(temp);
});


$('#celsius_to_fahrenheit').on('click', function(){
    getValue();   
    temp = 1.8 * temp + 32;
    $('#result').html(temp);
    });


function getNumber() {
    $('button').on('click', function() {
    temp = $("#temperature").val();
        if (temp !== '') {
            $('#result').show(); 
            $('.error-message').hide();
        } 
        else {
         $('.error-message').html('HELP ERIC and BEN!').show();
         $('#result').hide(); 
        }
    })
};

getNumber();


//var temp;

//$('#fahrenheit_to_celsius').on('click', function(){
   // temp = $('#temperature').val();
    //temp = parseFloat(temp);
   // temp = (temp - 32) / 1.8;
   // $('#result').html(temp);
//});



//$('#celsius_to_fahrenheit').on('click', function(){
   // temp = $('#temperature').val();
    //temp = parseFloat(temp);
    //temp = 1.8 * temp + 32;
    //$('#result').html(temp);
//});



//var temp;


//function getCelsius() {
   // temp = (temp- 32) / 1.8;
    //$("#result").html(temp);
//}

//function getFahrenheit() {
   // temp = (temp- 32) / 1.8;
   // $("#result").html(temp);
//}

//function getNumber() {
  //  $("button").on("click", function() {
   // temp = $("#temperature").val();
   // if (temp !== "") {
      //  $(".error-message").hide();
    //    temp = parseFloat(temp);
      //  if  ($("button").is("#fahrenheit_to_celsius")) {
     //       getCelsius();
      //  } 
      //  else {
          //  getFahrenheit();
        //}
        //console.log("please work");
   // } 
   // else {
      //  $(".error-message").html("Wrong!").show();
  //  }
//})};

//getNumber();
















