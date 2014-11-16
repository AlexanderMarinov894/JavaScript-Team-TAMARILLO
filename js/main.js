var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;

var shipX = 400;	//default cords for ship
var shipY = 450;	//default cords for ship
var ship = new Image();
ship.src = 'img/spaceship.png';
var enemy = new Image();
enemy.src = 'img/enemy.png';

function drawEnemy() {
	ctx.drawImage(enemy, 10, 10);
}
function drawShip() {
	ctx.drawImage(ship, shipX, shipY);
}

function Drawable() {
	
}
function animate() {
	//renderGame();	//render background

}


function init() {
	animate();
	drawShip();
	drawEnemy();
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