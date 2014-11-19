function drawBackground() {
	ctx.drawImage(background, 0, 0)
	
}
function drawEnemy() {
    ctx.drawImage(enemy, enemyX, enemyY);
}

function drawBullet() {
    ctx.drawImage(bullet, bulletX, bulletY);
}

function drawShip() {
    ctx.drawImage(ship, shipX, shipY);
}