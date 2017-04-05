// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function(){
	$('header').slideUp('slow');
});

// 2.	Remove the purplebox class from everything.
$('#box14').removeClass('purplebox');

// 3.	Hide all of the div’s in #row4
$('#row4').hide('div')

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('#box1').append('I have been added');
$('#box6').append('I have been added');
$('#box10').append('I have been added');

// 5.	Add a class in your css and add it to all items with the class .box
$('#box1').find('p').addClass('new');
$('#box2').find('p').addClass('new');
$('#box3').find('p').addClass('new');
$('#box4').find('p').addClass('new');
$('#box5').find('p').addClass('new');
$('#box6').find('p').addClass('new');
$('#box7').find('p').addClass('new');
$('#box8').find('p').addClass('new');
$('#box9').find('p').addClass('new');
$('#box10').find('p').addClass('new');
$('#box11').find('p').addClass('new');
$('#box12').find('p').addClass('new');

// 6.	Show the footer when the anchor in #box2 is clicked
$('a').on('click', function(){
	$('footer').show('slow');
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3').find('span').addClass('span');

// 8.	Add a unique class to your CSS and add it to the articles in #row1
$('#box2').addClass('unique');

// 9.	Change the background color of all the articles
$('#selectors').find('article').css('background-color', 'yellow');

// 10.	Change the font color of all the articles in row 2
$('#row2').find('article').css('color', 'red');

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
$('h4').siblings('span').hide('medium');

// 12.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function(){
	$('#box7').find('span').hide('slow');
});

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$('#box12').prepend('Hello there!');

// 14.	SlideUp all the h1s on the page
$('h1').slideUp('slow');

// 15. Add the selected class [already in the CSS] to the divs in #row4
$('#row4').find('div').addClass('selected');

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$('#reset').on('click', function(){
	$('#reset').removeClass('selected');
	$('header').fadeIn('slow');
	$('footer').fadeIn('slow');
	$('#box1').fadeIn('slow');
	$('#box2').fadeIn('slow');
	$('#box3').fadeIn('slow');
	$('#box4').fadeIn('slow');
	$('#box5').fadeIn('slow');
	$('#box6').fadeIn('slow');
	$('#box7').fadeIn('slow');
	$('#box8').fadeIn('slow');
	$('#box9').fadeIn('slow');
	$('#box10').fadeIn('slow');
	$('#box11').fadeIn('slow');
	$('#box12').fadeIn('slow');
});
