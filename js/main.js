var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;

var shipX = 430;	//default cords for ship
var shipY = 450;	//default cords for ship
var enemyX = Math.floor(Math.random() * 750);
var enemyY = -33;
var ship = new Image();
var enemy = new Image();
var bullet = new Image();
var score = 0; //Initial score
var lives = 3;
var level = 0;		//Initial level 
var enemySpeed = 0.02;	//Initial enemy speed
var enemySpeedX = 0.02;	//Initial enemy speed
var bulletSpeed = 5.01;	//Initial bullet speed
var shipSpeed = 25;		//Initial ship speed

ship.src = 'img/spaceship.png';
enemy.src = 'img/enemy.png';
bullet.src = 'img/bullet.png';

function enemyReborn() {
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

        enemyY += enemySpeed;
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
    //change background
    enemySpeed += enemySpeed;
    bulletSpeed += 3;
    shipSpeed += 10;
    alert("Cgratulations you are now on level " + level + "!!\n Press Enter to continue");
}

function animate() {
    ctx.save();
    clear();
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
    if (keycode == 39) {		//right
        if (shipX >= W - 118) {
            shipX += 0;
        } else {
            shipX += shipSpeed;
        }
    }
    if (keycode == 37) {		//left
        if (shipX <= 0) {
            shipX -= 0;
        } else {
            shipX -= shipSpeed;
        }
    }
    if (keycode == 17) {  //ctrl  fire

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

    if (keycode == 80) {							   //P - pause
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