var images = [
	"airport.jpg",	
	"architecture.jpg",	
	"bananas.jpg",	
	"bank-note.jpg",	
	"cow.jpg",	
	"cycle.jpg",	
	"dandelion.jpg",	
	"dog.jpg",	
	"frog.jpg",	
	"girl.jpg",	
	"lizard.jpg",	
	"milky-way.jpg",
	"monument.jpg",	
	"new-york.jpg",	
	"pomegranate.jpg",
	"ship.jpg",
	"sky.jpg",
	"vw-camper.jpg"
];
var imagenum = 0;
var videos = [
	"tv-static-1.mp4",	
	"tv-static-2.mp4",	
	"tv-static-3.mp4",
	"tv-static-4.mp4"
];
var videonum = 0;

function flipimages() {

	if (imagenum >= images.length-1) {
		imagenum = 0;
	} else {
		imagenum++;
	}

	var imagename = images[imagenum];

	document.getElementById("quote-main-1").style.backgroundImage = "url('" + imagename + "')";

	setTimeout( function() { flipimages(); }, 300);
}

function flipvideos() {

	if (videonum >= videos.length-1) {
		videonum = 0;
	} else {
		videonum++;
	}

	var videoElement = document.getElementById("tv-video");
	videoElement.src = videos[videonum];
	videoElement.load();

	setTimeout( function() { flipvideos(); }, 6000);
}

function startimages() {
	setTimeout( function() { flipimages(); }, 300);
	setTimeout( function() { flipvideos(); }, 6000);
}