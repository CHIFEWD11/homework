/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.


// 2. Using jQuery, add the fun class to the elements with the class .box
$("#box1").addClass('fun');
$("#box2").addClass('fun');
$("#box3").addClass('fun');

// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3
$("#box2").on('click', function(){
	$("#box2").removeClass('crazy');
	$("h1").addClass('crazy');
	$("#box3").slideToggle('2000000');
});

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$("#box1").on('click', function(){
	$("h1").html('jQuery Ninja');
});
$("#box2").on('click', function(){
	$("h1").html('jQuery Ninja');
});
$("#box3").on('click', function(){
	$("h1").html('jQuery Ninja');
});
// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened. 
// $(".moto").attr("src", "images/moto.jpg");
$("#box1").on('click', function(){
	$(".moto").attr("src", "images/moto.jpg");
});
	//A picture of a turquoise motorcycle appeared underneat #box1, #box2, and #box3 and above the dropdown menu section.
/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$("#dropdownMenu").hide('ul');

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
$("#dropdownButton").on('click', function(){
	$("#dropdownMenu").slideToggle('slow');
});


/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$("#answer2").hide('li');

// 9. Show the item with the id #answer1
$("#answer1").show('li');

// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
$("#question2").on('click', function(){
	$("#answer2").slideDown('slow');
	$("#answer1").slideUp('slow');
	$("li").removeClass('active');
	$("#question2").addClass('active');
});

// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
$("#question1").on('click', function(){
	$("#answer1").slideDown('slow');
	$("#answer2").slideUp('slow');
	$("li").removeClass('active');
	$("#question1").addClass('active');
});