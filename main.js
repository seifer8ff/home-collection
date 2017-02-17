

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

// function addLinkHovers()	{
// 	var links = document.querySelectorAll(".pic-container a");
// 	console.log(links);
// 	for (var i = 0; i < links.length; i++)	{
// 		links[i].addEventListener("hover", )
// 	}
// }