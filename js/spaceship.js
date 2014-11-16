var imageRepo = new function() {
	//define image
	this.spaceship = new Image();
	this.bullet = new Image();
	// make sure all imags are loaded before running the game
	var numImages = 2;
	var imgLoaded = 0;
	function imageLoad() {
		imgLoaded++;
		if(numImages == imgLoaded)
	}
}