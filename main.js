

init();



function init()	{
	// begin executing after page load
	window.setTimeout(function(){
		fadeInHidden();
	}, 2000);
}

function fadeInHidden()	{
	var hiddenElements = document.querySelectorAll(".hiddenOnLoad");
	for (var i = 0; i < hiddenElements.length; i++)	{
		hiddenElements[i].classList.toggle("hiddenOnLoad");
		hiddenElements[i].classList.toggle("fadeInShort");
	}
}