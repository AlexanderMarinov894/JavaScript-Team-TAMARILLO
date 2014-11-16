var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;

var shipX = 430;	//default cords for ship
var shipY = 450;	//default cords for ship
var enemyX = Math.floor(Math.random() * 750);
var enemyY = -33;
var ship = new Image();
ship.src = 'img/spaceship.png';
var enemy = new Image();
enemy.src = 'img/enemy.png';

function drawEnemy() {
	ctx.drawImage(enemy, enemyX, enemyY);
}
var c = 0;
while(c < 100) {
	setTimeout(function enemyAttack() {
		drawEnemy();
		enemyY += 2;
		console.log(enemyY);
	}, 2000);
	c++;
}
function drawShip() {
	ctx.drawImage(ship, shipX, shipY);
}

function Drawable() {
	
}
function animate() {
	//renderGame();	//render background
	ctx.save();
	clear();
	drawShip();
    drawEnemy();
    window.requestAnimationFrame(animate);
}

function clear() {
	ctx.clearRect(0,0, W, H);
}
function init() {
	animate();
}

//move the ship

document.addEventListener('keydown', function(e) {
	var keycode = e.keyCode;
	if(keycode == 39) {   //right
		shipX += 10;
		 //console.log("obj");
	}
	if(keycode == 37) {   //left
		shipX -= 10;
	}

});
//console.log(shipX);

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