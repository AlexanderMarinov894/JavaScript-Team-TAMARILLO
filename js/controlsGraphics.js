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
