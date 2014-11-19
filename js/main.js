var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;

var shipX = 430;	//default cords for ship
var shipY = 450;	//default cords for ship
var enemyX = Math.floor(Math.random() * 750);
var enemyY = -33;
	/*Adding images*/
var background = new Image();
var ship = new Image();
var enemy = new Image();
var bullet = new Image();
ship.src = 'img/spaceship.png';
enemy.src = 'img/enemy.png';
bullet.src = 'img/bullet.png';
background.src = 'img/level1.jpg';
/*================*/
var score = 0; //Initial score
var lives = 3;
var level = 0;		//Initial level 
var enemySpeedY = 0.02;	//Initial enemy speed
var enemySpeedX = 0.02;	//Initial enemy speed
var bulletSpeed = 5.01;	//Initial bullet speed
var shipSpeed = 25;		//Initial ship speed



function enemyReborn() {		//Respawns enemy ship
    clear();
    drawEnemy();
    enemyY = -33;
    enemyX = Math.floor(Math.random() * 750);
    bulletX = 1000;
    enemySpeedX = enemySpeedX * -1;
}

var moveEnemy = enemyY;
var currentLevel = 0;
while (moveEnemy < 480) {
    setInterval(function enemyAttack() {
        if ((bulletX >= enemyX - 30 && bulletX <= enemyX + 128 &&
            bulletY >= enemyY && bulletY <= enemyY + 68)) {
            score += 1000; //Adding point to the score
            if (score == 10000 || score == 20000 || score == 30000) {
                level++;
            }
        }
        if (currentLevel < level) {
            changeLevel();
            currentLevel = level;
        }

        /**Diagonal movement of the ship**/
        enemyX += enemySpeedX;
        if (enemyX > 765) {
            enemySpeedX = enemySpeedX * (-1);
        }
        if (enemyX < 0) {
            enemySpeedX = enemySpeedX * (-1);
        }
        /**================================*/

        enemyY += enemySpeedY;
        if ((bulletX >= enemyX - 30 && bulletX <= enemyX + 128 &&
            bulletY >= enemyY && bulletY <= enemyY + 68)) {
            enemyReborn();
            return;
        } else if (enemyY >= 450) {
            lostLife();
            enemyReborn();
            return;
        }
    }, 3);
    moveEnemy -= enemyY;
}

var bulletX = shipX + 45;
var bulletY = shipY - 40;

function changeLevel() {
	if(level == 1) {
		background.src = 'img/level2.jpg';		//change background on level 1
	}
	if(level == 2) {
		background.src = 'img/level3.jpg';		//change background on level 2
	}
	if(level == 3) {
		background.src = 'img/level4.jpg';		//change background on level 3
	}  
    enemySpeedY += enemySpeedY;
    bulletSpeed += 3;
    shipSpeed += 10;
    alert("Congratulations you are now on level " + level + "!!\n Press Enter to continue");
}

function animate() {
    ctx.save();
    clear();
    drawBackground();
    drawShip();
    if (isFired == true) {
        drawBullet();
    }
    drawEnemy();
    displayChangeScore();
    displayLostLife();
    displayLevel();
    window.requestAnimationFrame(animate);
}

function clear() {
    ctx.clearRect(0, 0, W, H);
}
function init() {
    animate();
}

//move the ship
var isFired = false;		//check whether a fire ball was fired
var staticBullet = bulletY;
document.addEventListener('keydown', function (e) {
    var keycode = e.keyCode;
    /**right arrow - move right**/
    if (keycode == 39) {
        if (shipX >= W - 118) {
            shipX += 0;
        } else {
            shipX += shipSpeed;
        }
    }
    /**left arrow - move left**/
    if (keycode == 37) {
        if (shipX <= 0) {
            shipX -= 0;
        } else {
            shipX -= shipSpeed;
        }
    }
    /**ctrl - fire**/
    if (keycode == 17) {

        if (!isFired) {
            var temp = bulletY;
            bulletX = shipX + 45;
            bulletY = staticBullet;

            while (temp > 0) {
                setInterval(function () {
                    if (bulletY <= -40) {
                        isFired = false;
                        return;
                    }
                    bulletY -= bulletSpeed;
                    //console.log(" bullet - > " +bulletY);
                }, 15);
                temp -= bulletY;
            }

        }
        isFired = true;
    }
    /**p - pause**/
    if (keycode == 80) {
        alert('Now you are free to visit the WC :)');
    }
});

window.addEventListener('load', init);

window.requestAnimationFrame = function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (f) {
            window.setTimeout(f, 1e3 / 60);
        }
}();