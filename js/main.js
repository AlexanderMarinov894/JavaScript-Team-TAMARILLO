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
var bullet = new Image();
bullet.src = 'img/bullet.png';
function drawEnemy() {
	ctx.drawImage(enemy, enemyX, enemyY);
    var move1 = 0;
    while (move1 < 2) {
        setTimeout(function enemyAttack() {
            drawEnemy();
            enemyY += 0.1;
            enemyX += 0.1;
            console.log(enemyY);
        }, 1000);
        move1++;
    }
}
//var bulletX = shipX;
var bulletY = shipY - 40;
function drawBullet() {
	ctx.drawImage(bullet, shipX+45, bulletY);
}
setTimeout()
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
	drawBullet();
    //drawEnemy();
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
		shipX += 25;
		 //console.log("obj");
	}
	if(keycode == 37) {   //left
		shipX -= 25;
	}
	if(keycode == 17) {  //ctrl  fire
		var temp = bulletY;
		while(temp > 0) {
			setInterval(function(){
				ctx.save();
				clear();
				drawBullet();
				bulletY -= 0.1;
				//bulletX += 0.1;
			},100);
			temp--;
			//console.log(temp);
		}

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