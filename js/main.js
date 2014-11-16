var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;


function Drawable() {
	this.init = function (x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
	}
}

function animate() {
	renderGame();	//render background
}


function init() {
	animate();
}


window.addEventListener('load', init);

window.requestAnimationFrame = function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(f) {
            window.setTimeout(f,1e3/60);
        }
}();