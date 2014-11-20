var canvasControls = document.getElementById('controlPanel');
var ctxControls = canvasControls.getContext('2d');
var W = canvasControls.width;
var H = canvasControls.height;
ctxControls.font = "20px Tahoma";
ctxControls.fillStyle = 'white';

var life = new Image();
var pause = new Image();
var left = new Image();
var right = new Image();
var ctrl = new Image();
life.src = 'img/life.png';
pause.src = 'img/pause.png';
left.src = 'img/left-arrow.png';
right.src = 'img/right-arrow.png';
ctrl.src = 'img/control.png';

pause.onload = function() {
    ctxControls.drawImage(pause, 120, 200);
    ctxControls.fillText("Pause", 125, 285);
};

left.onload = function() {
    ctxControls.drawImage(left, 60, 320);
    ctxControls.fillText("Left", 70, 405);
};

right.onload = function() {
    ctxControls.drawImage(right, 180, 320);
    ctxControls.fillText("Right", 187, 405);
};

ctrl.onload = function() {
    ctxControls.drawImage(ctrl, 120, 440);
    ctxControls.fillText("Shoot", 125, 525);
};

function displayChangeScore () {
    ctxControls.clearRect(0,0, 160, 20);
    ctxControls.fillText('Score: ' + score, 20, 20);
}

function displayLevel () {
    ctxControls.clearRect(0,50,200,35); //X, Y, W, H
    ctxControls.fillText('LEVEL: ' + level, 110, 80); //X, Y
}

function displayLostLife() {
    if (lives == 3) {
        ctxControls.clearRect(165,0, 200, 30);
        ctxControls.fillText('Lives: ', 165, 20);
        ctxControls.drawImage(life, 225, 6);
        ctxControls.drawImage(life, 245, 6);
        ctxControls.drawImage(life, 265, 6);
    } else if (lives == 2) {
        ctxControls.clearRect(165,0, 200, 30);
        ctxControls.fillText('Lives: ', 165, 20);
        ctxControls.drawImage(life, 225, 6);
        ctxControls.drawImage(life, 245, 6);
    } else if (lives == 1) {
        ctxControls.clearRect(165,0, 200, 30);
        ctxControls.fillText('Lives: ', 165, 20);
        ctxControls.drawImage(life, 225, 6);
    }
}

function lostLife () {
    lives--;
    console.log(enemyY);
    if(lives == 0) {
        if(!alert('Sorry bro, the aliens ate you! Please, try again!')) {
            location.reload();
        }
    }
}