var canvasControls = document.getElementById('controlPanel');
var ctxControls = canvasControls.getContext('2d');
var W = canvasControls.width;
var H = canvasControls.height;
ctxControls.font = "20px Tahoma";
ctxControls.fillStyle = 'white';

var left = new Image();
var right = new Image();
var ctrl = new Image();
left.src = 'img/left-arrow.png';
right.src = 'img/right-arrow.png';
ctrl.src = 'img/control.png';

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

function changeScore () {
    ctxControls.clearRect(0,0, 160, 20);
    ctxControls.fillText('Score: ' + score, 20, 20);
}

function lostLife () {
    ctxControls.clearRect(140,0, 160, 20);
    ctxControls.fillText('Lives: ' + lives, 180, 20);
    if (enemyY > 400 && enemyY < 401) {
        lives--;
        if(lives == 0) {
            if(!alert("Game over bro, you've been eaten by aliens!!")){window.location.reload();}
        }
    }
}