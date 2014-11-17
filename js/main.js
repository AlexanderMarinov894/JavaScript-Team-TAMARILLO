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
    
}
function enemyReborn() {
	clear();
	drawEnemy();
	enemyY = -33;
	enemyX = Math.floor(Math.random() * 750);
	bulletX = 1000;
}
var moveEnemy = enemyY;
var isHitted = bulletX>= enemyX-30 && 
			   bulletX <= enemyX + 128;
while (moveEnemy < 480) {
    setInterval(function enemyAttack() {
        enemyY += 0.02;
        if(enemyY >= 450 || (bulletX>= enemyX-30 && bulletX <= enemyX + 128 &&
        					bulletY >= enemyY && bulletY <= enemyY+68)) {
        	console.log('HIT!!!');
        	enemyReborn();
        	return;
        }
       // console.log(enemyY);
        console.log("enemy - >" +enemyY);
        
    }, 3);
    moveEnemy-=enemyY;
}
//var bulletX = shipX;
var bulletX = shipX+45;
var bulletY = shipY - 40;
function drawBullet() {
	ctx.drawImage(bullet, bulletX, bulletY);

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
	drawBullet();
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
var isFired = false;		//check whether a fire ball was fired
var staticBullet = bulletY;
document.addEventListener('keydown', function(e) {
	var keycode = e.keyCode;
	if(keycode == 39) {   //right
		shipX += 25;
	}
	if(keycode == 37) {   //left
		shipX -= 25;
	}
	if(keycode == 17) {  //ctrl  fire

		if (!isFired) {
			var temp = bulletY;
			bulletX = shipX + 45;
			bulletY = staticBullet;

			while(temp > 0) {
				setInterval(function(){
					if (bulletY <= -40) {		
						isFired = false;		
						return;
					}
					bulletY -= 5.01;
					console.log(" bullet - > " +bulletY);
				},15);
				temp-= bulletY;
			}
			
		};
		isFired = true;
	}

	//console.log("last" + bulletY);
});

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