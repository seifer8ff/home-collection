

init();



function init()	{
	// fade in elements
	unhideSequence();
	unhideAll();
}


// unhides elements one by one
function unhideSequence()	{
	// controls how quickly each element is unhidden
	var timer = 300;
	// retrieve all hidden elements
	var hiddenElements = document.querySelectorAll(".fadeInSequence");

	// recursive, anonymous function with closure
	var unhideElement = (function()	{
		// counter for hiddenElements array
		var i = 0;

		// closure function that unhides elements and then calls itself using timeout function
		return function()	{
			hiddenElements[i].classList.toggle("fadeInSequence");
			hiddenElements[i].classList.toggle("fadeInAnim-short");

			i+=1;

			if (hiddenElements[i])	{
				setTimeout(unhideElement, timer);
			}
		}
		
	}) ();

	setTimeout(unhideElement, timer);
}

function unhideAll()	{
	var hiddenElements = document.querySelectorAll(".fadeIn");
	for (var i = 0; i < hiddenElements.length; i++)	{
		hiddenElements[i].classList.toggle("fadeIn");
		hiddenElements[i].classList.toggle("fadeInAnim-long");
	}
}